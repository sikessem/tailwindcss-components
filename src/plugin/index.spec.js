const path = require('path')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')
const resolveConfig = require('tailwindcss/resolveConfig')
const preset = require('../config')
const plugin = require('.')
const fs = require('fs')

import { describe, it, expect } from 'vitest'

function run(config, tailwind = tailwindcss) {
  let { currentTestName } = expect.getState()
  config = resolveConfig({
    presets: [preset],
    plugins: [plugin],
    corePlugins: { preflight: false },
    ...config,
  })

  return postcss(tailwind(config)).process('@tailwind components', {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}

const data = fs.readFileSync(path.resolve(__dirname, '../../res/page.html'), 'utf8');

describe.concurrent('suite', () => {
    const config = {
        content: [{ raw: String.raw`${data}` }],
    }
    it('should have the `input` class', () => {
        return run(config).then((result) => {
            expect(result.css)
            .toMatch(/[\s\S]*\.input\s*\{[\s\S]*padding\-left:\s*1rem\;?[\s\S]*\}[\s\S]*/)
        })
    })
    it('should have the `button` class', () => {
        return run(config).then((result) => {
            expect(result.css)
            .toMatch(/[\s\S]*\.button\s*\{[\s\S]*padding\-right:\s*1rem\;?[\s\S]*\}[\s\S]*/)
        })
    })
})
