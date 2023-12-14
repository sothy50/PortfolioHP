//articles.tsx
"use client";
import React, { useState } from 'react';
import ArticleList from '@/app/client-side/article-data';
import ProfileProduction from '@/app/client-side/profile-production';
import SearchInput from '@/app/client-side/search';


const Articles = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sourceFilter, setSourceFilter] = useState<'All' | 'Qiita' | 'Zenn'>('All');

    
    const handleSourceChange = (source: 'All' | 'Qiita' | 'Zenn') => {
        setSourceFilter(source);
    };

  return (
    <>
    <div className="flex h-screen w-full bg-foreground">
      <div className="flex flex-col w-72 border-r border-yellow-200 bg-background">
        <div className="flex-1 overflow-y-auto">
            <ProfileProduction/>
          <div className="border-t border-yellow-200 dark:border-yellow-800" />


          <div className="p-4 space-y-2">
                <div className={`flex items-center justify-between px-2 py-1 rounded-lg ${sourceFilter === 'All' ? 'bg-yellow-200' : 'hover:bg-yellow-200'} dark:hover:bg-yellow-800`} onClick={() => handleSourceChange('All')}>
                    <span className="text-sm text-primary">All</span>
                    <IconChevronRight className="h-5 w-5 text-primary-light" />
                </div>
                <div className={`flex items-center justify-between px-2 py-1 rounded-lg ${sourceFilter === 'Qiita' ? 'bg-yellow-200' : 'hover:bg-yellow-200'} dark:hover:bg-yellow-800`} onClick={() => handleSourceChange('Qiita')}>
                    <span className="text-sm text-primary">Qiita</span>
                    <IconChevronRight className="h-5 w-5 text-primary-light" />
                </div>
                <div className={`flex items-center justify-between px-2 py-1 rounded-lg ${sourceFilter === 'Zenn' ? 'bg-yellow-200' : 'hover:bg-yellow-200'} dark:hover:bg-yellow-800`} onClick={() => handleSourceChange('Zenn')}>
                    <span className="text-sm text-primary">Zenn</span>
                    <IconChevronRight className="h-5 w-5 text-primary-light" />
                </div>
            </div>

        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className='flex h-16 justify-between bg-background'>
          <div className="p-2">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>
        <ArticleList searchTerm={searchTerm} source={sourceFilter}/>
      </div>
    </div>
  </>
  );
};

export default Articles;

function IconChevronRight(props:React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

