import styles from "../styles/page.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar_teste = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link
                        href="#"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                        <Image
                            className={styles.logo}
                            src="/images/project-logo.png"
                            alt="Logo"
                            width="170"
                            height="50"
                        />
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 link_items">
                        <li>
                            <Link href="/" className="nav-link px-2 text-white">
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="nav-link px-2 text-white">
                                Serviços
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="nav-link px-2 text-white">
                                Sobre nós
                            </Link>
                        </li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input
                            type="search"
                            className="form-control form-control-dark"
                            placeholder="Procure aqui..."
                            aria-label="Search"
                        />
                    </form>

                    <div className="text-end">
                        
                        <Link href="/" className="btn btn-outline-light me-2">
                            Login
                        </Link>
                        <Link href="register" className="btn btn-warning" >
                            Cadastro
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Navbar_teste;