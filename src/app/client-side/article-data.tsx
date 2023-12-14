// article-data.tsx
"use client";
import fetchQiita from  "../api/fetch-qiita";
import fetchZenn from "../api/fetch-zenn";
import { useState ,useEffect} from "react/";
import { QiitaItemsProps } from "../../../types/qiita-response";
import { ZennItemsProps } from "../../../types/zenn-response";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { filterPostsBySearchTerm } from '../../lib/articles-extraction';
import {convertZennResponseToItemsProps} from '../../../types/zenn-response';

const ArticleList: React.FC<{ searchTerm: string, source: string }> = ({ searchTerm, source }) => {
  const [postsQ, setPostsQ] = useState<QiitaItemsProps[]>([]);
  const [postsZ, setPostsZ] = useState<ZennItemsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    (async function () {
      const dataQ = await fetchQiita();
      const dataZResponse = await fetchZenn(); // ZennItemResponse[] 型でデータを受け取る
      const dataZ = convertZennResponseToItemsProps(dataZResponse); // 変換処理を適用
      setPostsQ(dataQ);
      setPostsZ(dataZ);
      setIsLoading(false);
    })();
  }, [searchTerm, source]);

  // ソースに基づいてフィルタリング
  let posts = [];
  if (source === 'Qiita') {
    posts = postsQ;
  } else if (source === 'Zenn') {
    posts = postsZ;
  } else {
    posts = [...postsQ, ...postsZ];
  }

// 日付順に並べ替え（新しいものが先）
posts.sort((a, b) => {
  // QiitaItemsProps と ZennItemsProps で共通のプロパティを使用する
  return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
});

// 検索用語に基づいてフィルタリング
const filteredPosts = searchTerm 
  ? filterPostsBySearchTerm(posts, searchTerm)
  : posts;

return (
    <div className="text-primary flex-1 p-6 overflow-y-auto space-y-4">
      {isLoading && <div className="flex justify-center" aria-label="読み込み中"><div className="animate-spin h-10 w-10 border-4 border-primary rounded-full border-t-transparent"></div></div>}
      <ul>
      {filteredPosts.map((post) => {
    const imageUrl = post.cite === 'Qiita' ? '/qiita-ogp-3b6fcfdd74755a85107071ffc3155898.png' : 'zenn-960x504.jpg';
    const postUrl = 'cite' in post && post.cite === 'Qiita' && 'url' in post ? post.url : '#';

    return (
      <Card className="text-primary select-none m-2 p-1 grid grid-cols-10" key={post.id} onClick={() => window.open(postUrl, '_self')}>
              <div className="col-span-8">
              <CardHeader>
                <CardTitle className="text-primary">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center">
          <div className="flex flex-row">
            {post.tags && post.tags.map((tag) => {
              const tagName = typeof tag === 'string' ? tag : tag.name;
              return (
                <p className="bg-gray-200 dark:bg-background rounded-full p-2 mr-1">#{tagName}</p>
              );
            })}
          </div>
        </CardContent>
              </div>
              <div className="col-span-2 bg-slate-100 flex justify-center items-center">
                <img src={imageUrl} alt="Post Image"/>
              </div>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
