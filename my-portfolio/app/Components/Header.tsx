import Link from "next/link"
import Navbar from "./Navbar"

export default function Header() {
    return (
        <header className="py-8 xl:py-8 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href='/'>
                    <h1 className="text-4xl font-semibold">
                        Muhammad<span> Sharjeel</span>
                    </h1>
                </Link>
                {/* desktop nav */}
                <div className="hidden xl:flex">
                    <Navbar />
                    <Link href='/contact'>
                        <button>Hire Me</button>
                    </Link>
                </div>

                <div className="xl:hidden">
                    mobile Nav
                </div>
            </div>
        </header>
    )
}
