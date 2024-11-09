import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

export const generateMetadata = async ({params})=> {
  const {slug} = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc
  }
}

// FETCH DATA WITH AN API
const getData = async (slug) => {
  // console.log("slug ", slug)
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const Singlepost = async ({params}) => {
  const {slug} = await params;
  console.log("slug in [slug]/page.jsx :", slug)

  // FETCH DATA WITH AN API
  const post = await getData(slug);

  // console.log("post.userId now:", post.userId)
  // console.log("post now:", post)

  //FETCH DATA WITHOUT AN API
  //const post = await getPost(slug);
  
  // Format `createdAt` for display
    // const formattedDate = post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "N/A";


  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post?.img && (
          <Image
            src={post.img}
            alt=""
            fill
            className={styles.img}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && post.userId ? <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/>
          </Suspense>
          : 
            <div>User information unavailable</div>
        }
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post?.createdAt ? post.createdAt : "N/A" }</span>
            {/* <span className={styles.detailValue}>{formattedDate}</span> */}
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
}

export default Singlepost