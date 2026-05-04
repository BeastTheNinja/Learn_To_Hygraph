import type { RichTextContent } from "@graphcms/rich-text-types";

export interface BlogPost {
    headLine: string;
    author: string;
    paragraph: {
        raw: RichTextContent;
    };
    published: string;
}

export interface BlogResponse {
    blogs: BlogPost[];
}
