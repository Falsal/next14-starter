"use client"

import styles from "./loginForm.module.css";
import { login } from "@/lib/action";
import {useActionState} from "react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useActionState(login, undefined);

//   const router = useRouter();

//   useEffect(() => {
    
//     state?.success && router.push("/")

//   }, [state?.success, router])
  
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />

      <button type="submit">Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account ?"} <b>Register</b>
      </Link>
    </form>
  );
}

export default LoginForm