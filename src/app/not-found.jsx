import Link from "next/link"

const notFound = () => {
  return (
    <div>
        <h2>Page not found !</h2>
        <Link href="/"> Go to Home page </Link>
    </div>
  )
}

export default notFound