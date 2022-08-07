export const sleep = (ms: number): Promise<null> =>
  new Promise((resolve) => setTimeout(resolve, ms))
