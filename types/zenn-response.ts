import { QiitaItemsProps } from "./qiita-response";

// Adjusting ZennItemsProps to include 'article_type' as part of 'tags'
export type ZennItemsProps = Pick<
  ZennItemResponse,
  'id' | 'title' | 'tags' | 'path' | 'created_at' | 'cite'
>;

// Zenn Api Response definition
export interface ZennItemResponse {
  cite: string;
  id: string;
  title: string;
  path: string;
  created_at: string;
  article_type: "tech" | "idea";
  tags?: string[]; // Additional field
}

export function convertZennResponseToItemsProps(response: ZennItemResponse[]): ZennItemsProps[] {
  return response.map(item => ({
    ...item,
    tags: item.tags ? [...item.tags, item.article_type] : [item.article_type]
  }));
}
