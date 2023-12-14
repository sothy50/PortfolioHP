import ModeToggle from '@/components/ui/modetoggle';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';
import Goodcounter from '@/app/client-side/goodcounter';
import { Button } from "@/components/ui/button"

  interface HeaderItemProps {
    setModalOpen: (value: boolean) => void;
  }
  
  export default function HeaderItem({ setModalOpen }: HeaderItemProps) {
  return (
    <div className="flex p-2">
      <div className="flex items-center justify-between rounded-full bg-foreground p-2 max-w-max">
        <div 
        className="flex space-x-2 border-r border-primary px-3"
        onClick={() => setModalOpen(true)}
        >
            <img
                alt="Avatar 1"
                className="rounded-full border-2 border-primary"
                height="32"
                src="/myprofile.svg"
                style={{
                aspectRatio: "32/32",
                objectFit: "cover",
                }}
                width="32"
            />
        </div>
        <Goodcounter/>
        <div className="flex space-x-2 border-r border-foreground pr-1">
            <Button
                className="text-primary rounded-full hover:bg-background hover:text-primary-dark"
                size="icon"
                variant="ghost"
                onClick={() => window.open('https://github.com/sothy50', '_self')}
                >
                <Github className="h-6 w-6 stroke-1" />
                <span className="sr-only">github</span>
            </Button>
            <Button
                className="text-primary rounded-full hover:bg-background hover:text-primary-dark"
                size="icon"
                variant="ghost"
                onClick={() => window.open('https://twitter.com/Mon50stea', '_self')}
                >
                <Twitter className="h-6 w-6 stroke-1" />
                <span className="sr-only">x:twitter</span>
            </Button>
            <Button
                className="text-primary rounded-full hover:bg-background hover:text-primary-dark"
                size="icon"
                variant="ghost"
                onClick={() => window.open('https://example.com', '_self')}
                >
                <LinkedIn className="h-6 w-6 stroke-1" />
                <span className="sr-only">Linkedin</span>
            </Button>
        </div>

        <div className="flex items-center justify-center space-x-2 pl-1">
        <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
              className="text-primary rounded-full hover:bg-background hover:text-primary-dark"
              size="icon"
              variant="ghost"
              >
              <IconShare className="h-6 w-6 stroke-1" />
              <span className="sr-only">Open share UI</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-foreground">
            <DropdownMenuLabel className="text-primary">Share</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem className="text-primary hover:bg-background" onClick={() => window.open('https://twitter.com/intent/tweet?text=ツイートしたいテキスト', '_self')}>X:Twitter</DropdownMenuItem>
            <DropdownMenuItem className="text-primary hover:bg-background" onClick={() => window.open('https://social-plugins.line.me/lineit/share?url=https://twitter.com/Mon50stea', '_self')}>LINE</DropdownMenuItem>
            <DropdownMenuItem className="text-primary hover:bg-background" onClick={() => window.open('http://www.facebook.com/share.php?u=', '_self')}>Facebook</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button
                className="text-primary rounded-full hover:bg-background hover:text-primary-dark"
                size="icon"
                variant="ghost"
                >
                <IconMenu className="h-6 w-6 stroke-1" />
                <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-foreground">
            <DropdownMenuLabel className="text-primary">Menu</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem className="text-primary hover:bg-background" onClick={() => setModalOpen(true)}>Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-primary hover:bg-background">Production</DropdownMenuItem>
            <DropdownMenuItem className="text-primary hover:bg-background">Donation</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>


        </div>
        <div className="flex items-center justify-center space-x-2 pl-1">
            <ModeToggle/>
        </div>
      </div>
    </div>
  )
}

function IconInbox(props:React.SVGProps<SVGSVGElement>) {
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
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}


function IconLayers(props:React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}


function IconMenu(props:React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function IconShare(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}

function X(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 1800 1800" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect height="100%" width="100%" rx="10%" ry="10%" fill="currentColor" />
        <path d="m1014.2 805.8 446.7-519.3h-105.9l-387.9 450.9-309.8-450.9h-357.3l468.5 681.8-468.5 544.6h105.9l409.6-476.2 327.2 476.2h357.3zm-145 168.5-47.5-67.9-377.7-540.2h162.6l304.8 436 47.5 67.9 396.2 566.7h-162.6z" fill="var(--primaryColor)" />
      </svg>
    );
  }
  

function Github(props:React.SVGProps<SVGSVGElement>) {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>

    )
}

function LinkedIn(props:React.SVGProps<SVGSVGElement>) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    )
}

function Twitter(props:React.SVGProps<SVGSVGElement>) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>
    )
    }

