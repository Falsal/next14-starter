"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const NavigationTestPage = () => {

    const router = useRouter();

    const handleClick= ()=>{
        console.log("clicked");
        router.forward(); // will redirect to previously called page in the forward direction
        //router.back(); // will redirect to previously called page in the reverse direction
        //router.refresh(); // will not redirect but will fetch any data from the server
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