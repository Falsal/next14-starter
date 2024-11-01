import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

export const generateMetadata = async ({params})=> {

  const {slug} = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc
  }
}

const Singlepost = async ({params}) => {
  const {slug} = params;

  //FETCH DATA WITHOUT AN API
  const post = await getPost(slug);
    // Format `createdAt` for display
    const formattedDate = post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "N/A";


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
          {post && <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/>
          </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{formattedDate}</span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
}

export default Singlepost