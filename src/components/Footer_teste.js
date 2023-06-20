import Link from "next/link";

const Footer_teste = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2 text-muted">
                            Início
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            Serviços
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            Sobre nós
                        </a>
                    </li>
                </ul>
                <p className="text-center text-muted"><strong>Natalnet</strong> © 2023 Company, Inc</p>
            </footer>
        </div>
    );
};

export default Footer_teste;