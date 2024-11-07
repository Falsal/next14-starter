import { auth, signIn } from "@/lib/auth"

const LoginPage = async () => {
  
  const session = auth();
  console.log("Session:")
  console.log(session)
  const handleGithubLogin = async ()=>{
    "use server"
    await signIn("github");
  }
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  )
}

export default LoginPage