"use client"

import styles from "./links.module.css"
import NavLink from "../navLink/navLink";
import { useState } from "react";
import Image from "next/image";

const Links = () => {

    const[open, setOpen] = useState(false);

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ] 

    // TEMPORARY CONST
    const isAdmin = true;
    const session = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}> Logout </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image src="/menu.png" alt="" width={30} height={30}
        className={styles.menuButton} 
        onClick={()=>setOpen(prev=> !prev)}/>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Links