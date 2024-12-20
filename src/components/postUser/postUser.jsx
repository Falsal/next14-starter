import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

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
  // const user = await getUser(userId);

  let user = null;
  try {
    // Attempt to fetch the user data
    user = await getUser(userId);
    //console.log("Fetched user:", user); // Debugging log
  } catch (error) {
    console.error(`Failed to fetch user with ID ${userId}:`, error);
  }

  // Display an error message if the user data is unavailable
  if (!user) {
    return <div className={styles.error}>Error loading user data.</div>;
  }
  return (
    <div className={styles.container}>
      <Image
          src={user?.img ? user.img : "/noavatar.png"}
          alt=""
          className={styles.avatar}
          width={50}
          height={50}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  )
}

export default PostUser