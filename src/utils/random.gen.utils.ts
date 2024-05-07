export const generateRandomString = (): string => {
  const length = 11;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

export function getRandUniqueInt(length = 10): number[] {
  const uniqueIntegers: Set<number> = new Set();

  while (uniqueIntegers.size < length) {
    const randomNumber = Math.floor(Math.random() * 20);
    uniqueIntegers.add(randomNumber);
  }

  return Array.from(uniqueIntegers);
}
