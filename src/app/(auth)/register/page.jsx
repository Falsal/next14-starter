import { register } from "@/lib/action"
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form}  action={register}>
          <input type="text" name="username" placeholder="username" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="password" name="passwordRepeat" placeholder="password again" />
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage