export const titleCase = (str: string): string => {
  return str
    .trim()
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
};
