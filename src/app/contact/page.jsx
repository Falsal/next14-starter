"use client"
import Image from "next/image";
import styles from "./contact.module.css";
// import { useEffect, useState } from "react";

const Contactpage = () => {

  // const[isClient, setIsClient] = useState(false);
  let a = Math.random();
  console.log("a is : ", a)

  // useEffect(
  //   ()=>setIsClient(true)
  //   ,[]);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="/contact.png" 
          alt="" 
          fill 
          className={styles.img} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
      </div>
      <div className={styles.formContainer} >
        <div suppressHydrationWarning>
          { a }
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname"/>
          <input type="text" placeholder="Email Address"/>
          <input type="text" placeholder="Phone Number (optional)"/>
          <textarea  
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          />

          <button onClick={(event)=>{
            event.preventDefault()
            console.log("Send button clicked !")
          }}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contactpage
