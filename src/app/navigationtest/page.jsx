"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const NavigationTestPage = () => {

    const router = useRouter();

    const handleClick= ()=>{
        console.log("clicked");
        router.replace("/")
    }
  return (
    <>
        <div>NavigationTestPage</div>
        <Link href="/" prefetch={false}>Click here </Link>
        <button onClick={handleClick} style={{width:"100px"}}>Write and redirect</button>
    </>
  )
}

export default NavigationTestPage