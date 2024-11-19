"use client"

import styles from "./registerForm.module.css";
import { register } from "@/lib/action";
import {useActionState} from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useActionState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    
    state?.success && router.push("/login")

  }, [state?.success, router])
  
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" name="username" placeholder="username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input
        type="password"
        name="passwordRepeat"
        placeholder="password again"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account ? <b>Login</b>
      </Link>
    </form>
  );
}

export default RegisterForm