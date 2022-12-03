import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [...configDefaults.include.map((path) => `./src/${path}`)],
    exclude: [...configDefaults.exclude],
  },
})
