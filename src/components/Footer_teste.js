import Link from "next/link";

const Footer_teste = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link href="/" className="nav-link px-2 text-muted">
                            Início
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="services" className="nav-link px-2 text-muted">
                            Serviços
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="about" className="nav-link px-2 text-muted">
                            Sobre nós
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-muted"><strong>Natalnet</strong> © 2023 Company, Inc</p>
            </footer>
        </div>
    );
};

export default Footer_teste;