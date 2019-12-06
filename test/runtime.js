import fs from 'fs'
import path from 'path'

import { render } from '@vue/server-test-utils'

const tmpDirSuffix = (Math.random() * 1000).toString(36)
const tmpDir = path.resolve(__dirname, `./.tmp-${tmpDirSuffix}`)

export function setup() {
  beforeAll(async () => {
    await fs.promises.mkdir(tmpDir)
  })

  afterAll(async () => {
    await fs.promises.rmdir(tmpDir, {
      recursive: true
    })
  })
}

export async function renderComponent(
  code,
  filename,
  getComponent = mod => mod.default
) {
  const filepath = path.resolve(tmpDir, path.basename(filename))

  await fs.promises.writeFile(filepath, code)

  const mod = require(filepath)

  // Make sure the transformed code works
  await render(getComponent(mod))
}
