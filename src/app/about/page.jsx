import Image from "next/image";
import styles from "./about.module.css"

const Aboutpage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/28128158/pexels-photo-28128158/free-photo-of-caminante.png?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="about" fill /> {/* use image link and add configuration in next.config file */}


        {/* <Image src="/about.png" alt="about" fill /> */}
      </div>
    </div>
  )
}

export default Aboutpage
