export const formatErrMsg = (inputString: string) => {
  const substrings = inputString.split("\n");
  const lastSubstring = substrings[substrings.length - 1];
  return substrings.length === 0 ? undefined : lastSubstring;
};
