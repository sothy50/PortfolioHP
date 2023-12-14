// app/api/count.ts

let count = 0; // グローバル変数としてカウンターを保持
const userCounts = new Map();

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ count: number }>
) {
  const userId = req.cookies.userId; // ユーザーIDをCookieなどから取得する仮定
  if (req.method === 'POST') {
    if (!userCounts.has(userId)) {
      userCounts.set(userId, true); // このユーザーがカウントしたことを記録
      count++; // カウンターを増加
    }
    res.status(200).json({ count });
  } else if (req.method === 'GET') {
    res.status(200).json({ count }); // GETリクエストで現在のカウントを送信
  } else {
    res.status(405).end(); // その他のリクエストメソッドは許可しない
  }
}
