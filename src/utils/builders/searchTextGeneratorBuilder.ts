export const searchTextGeneratorBuilder = (
  misspelling: string,
  text: string
): (() => Generator<[string | null, number]>) => {
  return function* () {
    let current = ''
    for (let i = 0; i < misspelling.length; i++) {
      current += misspelling[i]
      yield [current, 34]
    }
    yield [null, 900]
    for (let i = 0; i < misspelling.length; i++) {
      current = current.slice(0, -1)
      yield [current, 20]
    }
    yield [null, 300]
    for (let i = 0; i < text.length; i++) {
      current += text[i]
      yield [current, 40]
    }
  }
}
