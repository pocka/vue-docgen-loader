import compiler from './compiler'
import { setup, renderComponent } from './runtime'

setup()

it('Injects docgen result as __docgenInfo property', async () => {
  const stats = await compiler('./fixtures/basic-sfc.vue')
  const output = stats.toJson().modules[0].modules[0].source

  const docgenPattern = /\.__docgenInfo\s?=\s?(\{[\s\S]*})/

  expect(output).toMatch(docgenPattern)
  expect(JSON.parse(output.match(docgenPattern)[1])).toMatchSnapshot()
})

it('Injects docgen result for non-SFC', async () => {
  const fixture = './fixtures/basic.vue.js'

  const stats = await compiler(fixture)
  const output = stats.toJson().modules.find(mod => mod.name.includes(fixture))
    .source

  const Component = await renderComponent(output, fixture, mod => mod.MyButton)

  expect(Component.__docgenInfo).toMatchSnapshot()
})

it('Injects docgen result non-SFC with multiple exports', async () => {
  const fixture = './fixtures/basicMulti.vue.js'

  const stats = await compiler(fixture)
  const output = stats.toJson().modules.find(mod => mod.name.includes(fixture))
    .source

  const components = await Promise.all([
    renderComponent(output, fixture, mod => mod.MyButton1),
    renderComponent(output, fixture, mod => mod.MyButton2)
  ])

  expect(components[0].__docgenInfo).toMatchSnapshot()
  expect(components[1].__docgenInfo).toMatchSnapshot()
})

it('Injects docgen result for default-exported non-SFC', async () => {
  const fixture = './fixtures/basicDefault.vue.js'

  const stats = await compiler(fixture)
  const output = stats.toJson().modules.find(mod => mod.name.includes(fixture))
    .source

  const Component = await renderComponent(output, fixture, mod => mod.default)

  expect(Component.__docgenInfo).toMatchSnapshot()
})

it('Specify property name to inject docgen info at', async () => {
  const fixture = './fixtures/injectAt.vue.js'

  const stats = await compiler(fixture, {
    injectAt: '__DOCGEN__'
  })
  const output = stats.toJson().modules.find(mod => mod.name.includes(fixture))
    .source

  await renderComponent(output, fixture, mod => mod.MyButton, '__DOCGEN__')
})

it('Should ignore props/events with @ignore JSDoc tag', async () => {
  const stats = await compiler('./fixtures/ignore.vue')
  const output = stats.toJson().modules[0].modules[0].source

  const docgenPattern = /\.__docgenInfo\s?=\s?(\{[\s\S]*})/

  expect(output).toMatch(docgenPattern)
  expect(JSON.parse(output.match(docgenPattern)[1])).toMatchSnapshot()
})
