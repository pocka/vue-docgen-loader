import compiler from './compiler'

it('Injects docgen result as component.options.__docgenInfo', async () => {
  const stats = await compiler('./fixtures/basic-sfc.vue')
  const output = stats.toJson().modules[0].modules[0].source

  const docgenPattern = /component\.options\.__docgenInfo\s?=\s?(\{[\s\S]*})/

  expect(output).toMatch(docgenPattern)
  expect(JSON.parse(output.match(docgenPattern)[1])).toMatchSnapshot()
})
