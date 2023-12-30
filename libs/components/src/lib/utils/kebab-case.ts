import BananaSlug from "github-slugger";

export const kebabCase = (str: string) => new BananaSlug().slug(str);
