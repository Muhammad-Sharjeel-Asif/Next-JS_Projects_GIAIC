import Link from "next/link"

export default function Country() {
    return (
      <div className="text-center text-blue-900">
          <h1 className="text-6xl font-bold my-10">Country List:</h1>
          <ul className="text-2xl font-bold">
              <Link href={'/Country/Pakistan'}><li>Pakistan</li></Link>
              <Link href={'/Country/India'}><li>India</li></Link>
              <Link href={'/Country/China'}><li>China</li></Link>
              <Link href={'/Country/Turkey'}><li>Turkey</li></Link>
              <Link href={'/Country/Bangladesh'}><li>Bangladesh</li></Link>
          </ul>
      </div>
    )
  }