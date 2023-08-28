import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="p-3 bg-white text-white">
        <div className="container d-flex justify-content-between">
          <div className="d-flex">
            <Link
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <Image
                className={styles.logo}
                src="/images/newlogoNavbar.svg"
                alt="Logo"
                width={170}
                height={50}
              />
            </Link>
          </div>
          <div className="d-flex align-items-center"> 
            
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 link_items">
              <li>
                <Link href="/" className="nav-link px-2 text-dark">
                  Início
                </Link>
              </li>
              <li>
                <Link href="about" className="nav-link px-2 text-dark">
                  Sobre
                </Link>
              </li> 
              <li>
                <Link href="about" className="nav-link px-2 text-dark">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="services" className="nav-link px-2 text-dark">
                  Serviços
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Procure aqui..."
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
