import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";

const getData = async ()=> {
  //const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache:"no-store"}); // re-fetching data at each render
  // default : {cache:"force-cache"}
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:2000}}); // re-fetching data after 2000 msec

  if(!res.ok) throw new Error("Something went wrong");

  return res.json()
  
}

const Blogpage = async () => {

  const posts = await getData();
  
  return (
    <div className={styles.container}>

      { posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post}/>
          </div>

        ))}
      
    </div>
  )
}

export default Blogpage
