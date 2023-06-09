import Link from "next/link";
import styles from "../styles/Nav.module.css"

export default function Navbar() {
  return (
    <>
      <div className={styles.logo}>
        <img src="/images/project-logo.png" alt="" />
      </div>
      <ul className={styles.Navbar}>
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
    </>
  );
}