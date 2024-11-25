import Link from "next/link";

const Footer = () => {
    return (
        // <footer className="flex justify-around bg-blue-200 py-2">
            <footer className="bg-blue-300 text-white py-4 mt-0">
  <div className="container mx-auto text-center">
    <p className="text-xl">
      &copy; {new Date().getFullYear()} Muhammad Sharjeel &nbsp; &nbsp; All rights reserved.
    </p>
    <div className="flex justify-center mt-2 gap-4">
      <Link
        href="https://github.com/Muhammad-Sharjeel-Asif"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600"
      >
        <p className="text-xl">GitHub</p>
      </Link>
      <Link
        href="/Contact"
        target="_blank"
        className="hover:text-blue-600"
      >
        <p className="text-xl">Email</p>
        </Link>
      <Link
        href="https://www.linkedin.com/in/muhammad-sharjeel-asif/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600"
      >
        <p className="text-xl">LinkedIn</p>
        </Link>
    </div>
  </div>
</footer>

        // </footer>
    )
}

export default Footer;