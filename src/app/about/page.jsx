import Image from "next/image";
import styles from "./about.module.css";

const Aboutpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We crerate digital ideas that are bigger, better , bigger, bolder and
          greater.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default Aboutpage;

// educating material
{
  /* <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/28128158/pexels-photo-28128158/free-photo-of-caminante.png?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="about" fill /> {/* use image link and add configuration in next.config file */
}

{
  /* <Image src="/about.png" alt="about" fill /> */
}
{
  /* </div> */
}
