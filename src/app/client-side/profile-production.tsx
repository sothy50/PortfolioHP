"use client";
import React, { useState } from "react";
import ModalWindow from '@/components/ui/modalwindow';
import { Button } from "@/components/ui/button"

export default function ProfileProduction() {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
      <>
      {isModalOpen && (
        <ModalWindow closeModal={() => setModalOpen(false)} />
      )}
        <div className="py-4 space-y-2">
            <Button className="justify-start text-primary hover:text-primary hover:bg-yellow-200 dark:hover:bg-yellow-800" variant="ghost" onClick={() => setModalOpen(true)}>
              <IconPerson className="h-5 w-5 text-primary-light" />
              <span className="ml-2">Profile</span>
            </Button>
            <Button className="justify-start text-primary hover:text-primary hover:bg-yellow-200 dark:hover:bg-yellow-800" variant="ghost">
              <IconFolder className="h-5 w-5 text-primary-light" />
              <span className="ml-2">Production</span>
            </Button>
        </div>
    </>
    )
}

function IconPerson(props:React.SVGProps<SVGSVGElement>) {
    return (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="5"/><path d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"/></svg>
    )
  }

function IconFolder(props:React.SVGProps<SVGSVGElement>) {
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
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      </svg>
    )
  }