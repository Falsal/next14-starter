import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image alt="" 
                    src="https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
                    className={styles.img} fill
                />
            </div>
            <span className={styles.date}> 01.01.2024 </span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellat tempora doloremque cumque! Ipsam molestiae hic iure modi perspiciatis? Libero sunt odio harum? Nostrum officiis eum architecto commodi animi nemo.</p>
            <Link className={styles.link} href="/blog/post">READ MORE</Link>
        </div>
        
    </div>
  )
}

export default PostCard