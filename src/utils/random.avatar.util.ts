import { constant } from "../configs/constant.config";

const { maleUrl, femaleUrl } = constant;

export const randomAvatar = (isMale = true): string => {
  const idx = Math.floor(Math.random() * 5);
  return isMale ? `${maleUrl}${idx + 1}.jpg` : `${femaleUrl}${idx + 1}.jpg`;
};
