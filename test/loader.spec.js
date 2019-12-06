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

  const docgenPattern = /\.__docgenInfo\s?=\s?(\{[\s\S]*})/

  expect(output).toMatch(docgenPattern)
  expect(JSON.parse(output.match(docgenPattern)[1])).toMatchSnapshot()

  await renderComponent(output, fixture, mod => mod.MyButton)
})

it('Injects docgen result non-SFC with multiple exports', async () => {
  const fixture = './fixtures/basicMulti.vue.js'

  const stats = await compiler(fixture)
  const output = stats.toJson().modules.find(mod => mod.name.includes(fixture))
    .source

  const buttonExports = ['MyButton1', 'MyButton2']

  const createDocgenPattern = exportName =>
    `^.*${exportName}.*\\.__docgenInfo\\s?=\\s?(\\{[\\s\\S]*?})$`
  const match1 = new RegExp(createDocgenPattern(buttonExports[0]), 'm')
  const match2 = new RegExp(createDocgenPattern(buttonExports[1]), 'm')

  expect(output).toMatch(match1)
  expect(output).toMatch(match2)
  expect(JSON.parse(output.match(match1)[1])).toMatchSnapshot()
  expect(JSON.parse(output.match(match2)[1])).toMatchSnapshot()

  await Promise.all([
    renderComponent(output, fixture, mod => mod.MyButton1),
    renderComponent(output, fixture, mod => mod.MyButton2)
  ])
})
