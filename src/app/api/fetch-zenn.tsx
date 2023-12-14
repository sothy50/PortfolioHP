// app/api/qiita.ts
import { ZennItemResponse } from "../../../types/zenn-response";

const fetchZenn = async (): Promise<ZennItemResponse[]> => {
  // Zenn APIからデータを取得し、ZennItemResponse[] 型で返す
  const res = await fetch("https://zenn.dev/api/articles?username=h_ymt&order=latest");
  const data: ZennItemResponse[] = await res.json();
  return data;
}

export default fetchZenn;