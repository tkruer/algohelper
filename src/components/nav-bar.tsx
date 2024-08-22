import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar"
import { ThemeToggle } from "~/components/theme-toggle"

export function NavBar() {
  return (
    <header className="flex items-center justify-between h-16 px-4 bg-gray-800">
      <div className="flex items-center space-x-4">
        <RocketIcon className="w-8 h-8 text-white" />
        <nav className="flex space-x-6 text-white">
          <Link href="/" className="hover:text-gray-300" prefetch={false}>
            Map
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

// eslint-disable-next-line 
function RocketIcon(props: any) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

