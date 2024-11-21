"use client"

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import {useActionState} from"react";

const AdminUserForm = () => {
  const [state, formAction] = useActionState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>

      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="Image" />
      <select name="isAdmin" id="">
        <option value="false"> Is Admin ?</option>
        <option value="false"> No</option>
        <option value="true"> Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  )
}

export default AdminUserForm