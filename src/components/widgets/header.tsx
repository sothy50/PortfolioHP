import React from 'react';
import ProfileCodeOpen from '../../app/client-side/profile-code-open';
import Link from 'next/link';
export default function Header() {
  

  return (
        <div className="flex justify-between h-16 px-6 border-b border-yellow-200 bg-background">
          <Link className = "flex items-center" href="#">
          <h1 className="text-4xl font-monoton justify-center text-primary">Portfolio</h1>
          </Link>
          <ProfileCodeOpen/>
        </div>


  );
}