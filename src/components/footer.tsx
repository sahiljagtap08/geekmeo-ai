
import Link from "next/link"

import { InstagramIcon, Linkedin, YoutubeIcon } from "lucide-react"
import { GithubIcon } from "lucide-react"
import { TwitterIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex items-center gap-4">
        <Link className="flex gap-2 font-mono items-center" href="#">
          <YoutubeIcon className="w-8 h-8 text-gray-600 " />
          YouTube
        </Link>
        <Link className="flex gap-2 font-mono items-center" href="#">
          <Linkedin className="w-8 h-8 text-gray-600" />
          Linkedin
        </Link>
        <Link className="flex gap-2 font-mono items-center" href="#">
          <InstagramIcon className="w-8 h-8 text-gray-600" />
          Instagram
        </Link>
      </div>
      <div>
      <Link className="text-sm flex gap-2 font-mono items-center" href="#">
      © Geekmeo.AI 2024 — All rights reserved </Link>
      </div>
    </footer>
  )
}


