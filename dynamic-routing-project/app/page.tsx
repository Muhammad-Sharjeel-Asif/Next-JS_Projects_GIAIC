import Link from "next/link"

export default function Home(){
  return(
    <>
    <title>Dynamic Routing</title>
    <h1 className='text-center text-blue-600 text-5xl font-bold pt-28'>Click below to see Countries:</h1>
    <div className="text-center mt-12 text-2xl bg-green-900 mx-[600px] py-2 rounded-3xl">
    <Link href="/Country">Click Here</Link>
    </div>
    </>
  )
}