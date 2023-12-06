"use client";
import ModeToggle from '@/components/ui/modetoggle';
import Terminal from '@/components/ui/terminal';
import Latestpost from '@/components/widgets/latestpost';
import ModalWindow from '@/components/widgets/modalwindow';
import { Button } from '@/components/ui/button';
import Link from "next/link"
import { Input } from "@/components/ui/input"
import HeaderItem from '@/components/widgets/headeritem';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React, { useState } from 'react';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
    {isModalOpen && (
      <ModalWindow closeModal={() => setModalOpen(false)} />
    )}
    <div className="flex h-screen w-full bg-foreground">
      <div className="flex flex-col w-72 border-r border-yellow-200 bg-background">
        <div className="flex items-center h-16 px-6 border-b border-yellow-200 bg-background">
          <Link href="#">
          <h1 className="text-3xl font-monoton text-primary">Portfolio</h1>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto">
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
          <div className="border-t border-yellow-200 dark:border-yellow-800" />
          <div className="p-4 space-y-2">
            <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-yellow-200 dark:bg-yellow-800">
              <span className="text-sm text-primary">All</span>
              <IconChevronRight className="h-5 w-5 text-primary-light" />
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-800">
              <span className="text-sm text-primary">Qiita</span>
              <IconChevronRight className="h-5 w-5 text-primary-light" />
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-800">
              <span className="text-sm text-primary">Zenn</span>
              <IconChevronRight className="h-5 w-5 text-primary-light" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className='flex h-16 justify-between bg-background'>
          <form className="p-2">
            <div className="relative ">
              <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input className="pl-8 bg-foreground text-primary" placeholder="Search..." type="search" />
            </div>
          </form>
          <HeaderItem setModalOpen={setModalOpen} />
        </div>
          <div className="flex-1 p-6 overflow-y-auto space-y-4 ">
            <Card className="text-primary">
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <p>5 appointments scheduled for today.</p>
              </CardContent>
            </Card>
            <Card className="text-primary">
              <CardHeader>
                <CardTitle>Appointment History</CardTitle>
              </CardHeader>
              <CardContent>
                <p>100 appointments in the last month.</p>
              </CardContent>
            </Card>
            <Card className="text-primary">
              <CardHeader>
                <CardTitle>Staff Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p>All staff are available today.</p>
              </CardContent>
            </Card>
            <Card className="text-primary">
              <CardHeader>
                <CardTitle>Customer Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p>50 new customers this week.</p>
              </CardContent>
            </Card>
          </div>
      </div>
    </div>
  </>
  )
}

function IconLogo(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}

function IconSearch(props:React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

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


function IconNote(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
      <path d="M15 3v6h6" />
    </svg>
  )
}


function IconPerson(props:React.SVGProps<SVGSVGElement>) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="5"/><path d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"/></svg>
  )
}
