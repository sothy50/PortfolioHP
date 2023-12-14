"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Goodcounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [hasClicked, setHasClicked] = useState<boolean>(false); // 追加: ユーザーがクリックしたかどうかの状態

  useEffect(() => {
    // サーバーからカウンターの現在値を取得
    fetch('/api/count')
      .then(response => response.json())
      .then(data => setCount(data.count));
  }, []);

  const handleClick = async () => {
    if (!hasClicked) {
      await fetch('/api/count', { method: 'POST' });
      setCount(prevCount => prevCount + 1);
      setHasClicked(true); // ユーザーがクリックしたことを記録
    }
  };

  return (
    <div className="flex space-x-2 pl-1 pr-3">
      <Button
        className="text-primary rounded-full hover:bg-background hover:text-primary-dark"
        size="icon"
        variant="ghost"
        onClick={handleClick}
        disabled={hasClicked} // 追加: ユーザーがクリックしたらボタンを無効化
      >
        <a className="text-primary rounded-full hover:bg-background hover:text-primary-dark">{count}</a>
        <IconGood className="h-6 w-6 stroke-1" />
        <span className="sr-only">Create a comment</span>
      </Button>
    </div>
  );
};

export default Goodcounter;

// IconGood コンポーネントの定義はそのままでOKです
function IconGood(props:React.SVGProps<SVGSVGElement>) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M11.605 5.782l.23-2.369c.091-.952.98-1.598 1.878-1.366 1.351.35 2.3 1.605 2.3 3.044v3.035c0 .675 0 1.013.146 1.26.083.141.197.26.333.345.24.151.567.151 1.22.151h.396c1.703 0 2.554 0 3.078.39.393.293.67.722.78 1.208.146.65-.181 1.463-.836 3.087l-.326.81a3.261 3.261 0 0 0-.226 1.48c.232 2.874-2.047 5.295-4.833 5.136l-10.424-.599c-1.139-.065-1.708-.098-2.222-.553-.515-.455-.612-.924-.805-1.861a14.324 14.324 0 0 1 .055-6.037c.283-1.248 1.475-1.92 2.706-1.76 3.264.42 6.223-2.019 6.55-5.4z"/><path d="M7 11.5l-.137.457A14.983 14.983 0 0 0 7 21"/></svg>
  )
}
