import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Index.module.css";

export default function Home() {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.mainlogin}>
        <div className={styles.leftlogin}>
          <h1>
            LGPD - Lei Geral de Proteção de Dados Pessoais - Lei 13.709/2018
          </h1>
          <span>
            Nesta página você encontra as principais informações relacionadas à
            Lei Geral de Proteção de Dados no âmbito do Tribunal Regional do
            Trabalho da 21ª Região.
          </span>
        </div>
        <div className={styles.rightlogin}>
          <div className={styles.cardlogin}>
            <Image className={styles.landingimage}
              src="/images/indeximage.svg"
              width="600"
              height="600"
              alt="landingimage"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
