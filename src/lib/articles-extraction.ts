import { QiitaItemsProps } from "../../types/qiita-response";
import { ZennItemsProps } from "../../types/zenn-response";

// searchTermを含む記事をフィルタリングする関数
export const filterPostsBySearchTerm = (
  posts: (QiitaItemsProps | ZennItemsProps)[],
  searchTerm: string
): (QiitaItemsProps | ZennItemsProps)[] => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return posts.filter(post => {
    const title = post.title.toLowerCase();
    let tags: string[] = []; // tags の初期値を空の配列に設定

    if ('tags' in post && post.tags) {
      // tags プロパティが存在し、undefined でない場合
      tags = post.tags.map(tag => typeof tag === 'string' ? tag : tag.name);
    }

    return title.includes(lowerCaseSearchTerm) || 
      tags.some(tagName => tagName.toLowerCase().includes(lowerCaseSearchTerm));
  });
};
