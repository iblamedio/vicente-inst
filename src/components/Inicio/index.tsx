import "./styles.css";

export default function Inicio () {
    return (
        <div className="first-container">
            <section id="inicio" className="first">
                <div className="content">
                    <div className="headline">
                        <h1 className="noselect"><span>Priorizamos a excelência em cada um de nossos empreendimentos.</span></h1>
                    </div>
                    <a href="#contato"><button>Entrar em contato</button></a>
                </div>
            </section>
            <div className="first-bg"/>
        </div>
    )
}