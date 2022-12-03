declare function plugin(options?: Partial<{ inputClass: string, buttonClass: string }>): { handler: () => void }

declare namespace plugin {
  const __isOptionsFunction: true
}

export = plugin
