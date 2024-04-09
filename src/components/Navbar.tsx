import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import LoginButton from "./LoginButton";
import UserNav from "./UserNav";
import Image from "next/image";
import logoImage from "@/public/logo.svg"; // Import the logo image
import { ThemeProvider } from "next-themes";
import { ToggleTheme } from "./ToggleTheme";

type Props = {}

const Navbar = async (props: Props) => {
    const session = await getAuthSession()
    return (
        <nav className='fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-25 py-6'>
            <div className='flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl'>
                <Link href='/' className="items-center hidden gap-2  sm:flex "> 
                <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.svg"
          alt="Geekmeo AI Logo"
          width={180}
          height={37}
          priority
        />
      </div>
                </Link>
                <div className="flex items-center">
                    <Link href="/arcade" className="mr-4 transition-transform duration-300 transform hover:scale-105">Arcade</Link>
                    {session?.user && (
                        <>
                            <Link href="/create" className="mr-4 transition-transform duration-300 transform hover:scale-105">Build Course</Link>
                            <Link href="/settings" className="mr-4 transition-transform duration-300 transform hover:scale-105">Settings</Link>
                        </>
                    )}
                    <div className="flex items-center rounded-full overflow-hidden transition-transform duration-300 transform hover:scale-105 mr-4">
                        {session?.user ? <UserNav user={session.user}/> : <LoginButton />}
                    </div>
                    <ToggleTheme className="flex items-center transition-transform duration-300 transform hover:scale-125"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
