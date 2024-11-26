import './styles.css';
import vicenteLogo from '../../assets/vicente-logo.svg';

export default function Header() {
    return (
        <>
        <header>
            <div className="content">
                <div className="logo">
                    <img src={vicenteLogo} alt="A. Vicente" />
                    <div className="logo-text">
                        <span>A. VICENTE</span>
                        <span>EMPREENDIMENTOS</span>
                    </div>
                </div> 

                <nav>
                    <span className="active">Início</span>
                    <span>Nossa História</span>
                    <span>Empreendimentos</span>
                    <span>Contato</span>
                </nav>
            </div>
        </header>
        </>
    )
}