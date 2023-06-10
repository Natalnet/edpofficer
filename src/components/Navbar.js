import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className={styles.main}>
        <Image
          className={styles.logo}
          src="/images/project-logo.png"
          alt="Logo"
          width="300"
          height="90"
        />
        <ul className={styles.link_items}>
          <Link href="/">
            <li>Início</li>
          </Link>
          <Link href="register">
            <li>Cadastro</li>
          </Link>
          <Link href="services">
            <li>Serviços</li>
          </Link>
          <Link href="about">
            <li>Sobre nós</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
