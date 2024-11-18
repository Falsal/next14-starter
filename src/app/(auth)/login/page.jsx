import { handleGithubLogin, login } from "@/lib/action";


const LoginPage = async () => {
  
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>

      <form action={login}>
        <input type="text" placeholder="User Name" name="username"/>
        <input type="text" placeholder="password" name="password"/>
        <button>Login with credentials</button>
      </form>
    </div>
  )
}

export default LoginPage