import compiler from './compiler'

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
})
