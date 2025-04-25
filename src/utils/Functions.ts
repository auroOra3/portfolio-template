import { configs } from "shared/content/Content";

export const open = (link: string) => window.open(link, "_blank");

export const onMailTo = () => {
    open("mailto:" + configs.common.email);
};
