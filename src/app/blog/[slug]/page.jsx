import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

//FETCH DATA WITH AN API
// const getData = async (slug)=> {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`); // fetching single post from api

//   if(!res.ok) throw new Error("Something went wrong");

//   return res.json()
//}


const Singlepost = async ({params}) => {
  const {slug} = params;

  //FETCH DATA WITH AN API
  // const post = await getData(slug);

  //FETCH DATA WITHOUT AN API
  const post = await getPost(slug);

  console.log("slug :")
  console.log("post :")
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
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {post && <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/>
          </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post?.body}
        </div>
      </div>
    </div>
  );
}

export default Singlepost