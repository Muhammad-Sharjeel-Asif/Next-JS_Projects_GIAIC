import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
    return (
        <>
            <nav className='flex bg-[#f9f6f6e0] justify-between p:100'>
                <Image src="/favicon.ico" alt="Logo" className='rounded-[2rem] w-14 mx-2 my-2 border-2' width={20} height={20}/>
                <ul className='flex text-2xl self-center pr-16 gap-12 text-black font-extrabold'>
                    <li className=''><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/About"}>About Us</Link></li>
                    <li><Link href={"/Services"}>Services</Link></li>
                    <li><Link href={"/Contact"}>Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar