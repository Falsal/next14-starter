import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

//FETCH DATA WITH AN API
// const getUser = async (id)=> {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {cache: "no-store"}); // re-fetching data after 2000 msec  
//     if(!res.ok) throw new Error("Something went wrong");
//     return res.json()
//   }

const PostUser = async ({userId}) => {
  //FETCH DATA WITH AN API
  // const user = await getUser(userId);

  //FETCH DATA WITHOUT AN API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  )
}

export default PostUser