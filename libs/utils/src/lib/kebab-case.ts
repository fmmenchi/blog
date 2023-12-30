import BananaSlug from "github-slugger";

export const kebabCase = (str) => new BananaSlug().slug(str);
