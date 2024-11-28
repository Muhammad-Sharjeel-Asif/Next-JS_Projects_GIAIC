import Link from "next/link"

export default function Navbar() {
  return (
        <nav className="flex gap-8">
            <Link href='/' className="hover:border-b-2 hover:border-accent hover:font-medium hover:text-accent hover:transition-all">Home</Link>
            <Link href='/services' className="hover:border-b-2 hover:border-accent hover:font-medium hover:text-accent hover:transition-all">Services</Link>
            <Link href='/resume' className="hover:border-b-2 hover:border-accent hover:font-medium hover:text-accent hover:transition-all">Resume</Link>
            <Link href='/work' className="hover:border-b-2 hover:border-accent hover:font-medium hover:text-accent hover:transition-all">Work</Link>
            <Link href='/contact' className="hover:border-b-2 hover:border-accent hover:font-medium hover:text-accent hover:transition-all">Contact</Link>
        </nav>
  )
}