import styles from "./postUser.module.css";

const getUser = async (id)=> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {cache: "no-store"}); // re-fetching data after 2000 msec
  
    if(!res.ok) throw new Error("Something went wrong");
  
    return res.json()
    
  }

const PostUser = async ({userId}) => {
    console.log("userId : ", userId)
    const user = await getUser(userId);
  return (
    <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.name}</span>
    </div>
  )
}

export default PostUser