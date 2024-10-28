import Image from "next/image";
import styles from "./singlePost.module.css";

const getData = async (slug)=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`); // re-fetching data after 2000 msec

  if(!res.ok) throw new Error("Something went wrong");

  return res.json()
  
}

const getUser = async (id)=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); // re-fetching data after 2000 msec

  if(!res.ok) throw new Error("Something went wrong");

  return res.json()
  
}

const Singlepost = async ({params}) => {

  const {slug} = params;
  const post = await getData(slug);
  const user = await getUser(post.userId)
  console.log(slug)
  console.log("=======")
  console.log(user)

  post && console.log(post)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          fill
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>{user.name}</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  );
}

export default Singlepost