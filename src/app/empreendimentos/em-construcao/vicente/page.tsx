import './styles.css';
import './mobile.css';
import Image from 'next/image';

import vicenteFachada from '../../../../../public/assets/vicente.webp';
import vicenteLogo from '../../../../../public/assets/vicente-logo.png';
import vicenteFrente from '../../../../../public/assets/vicente-frente.webp';
import vicenteSlogan from '../../../../../public/assets/vicente-slogan.svg';
import vicenteSala from '../../../../../public/assets/vicente-sala.webp';
import vicentePlanta from '../../../../../public/assets/vicente-planta.webp';
import vicenteAerea from '../../../../../public/assets/vicente-aerea.webp';

import bedIcon from '../../../../../public/assets/vicente-icons/material-symbols_bed-outline.svg';
import carIcon from '../../../../../public/assets/vicente-icons/mingcute_car-line.svg';
import sofaIcon from '../../../../../public/assets/vicente-icons/solar_sofa-linear.svg';
import bbqIcon from '../../../../../public/assets/vicente-icons/iconoir_bbq.svg';
import floorIcon from '../../../../../public/assets/vicente-icons/lucide-lab_floor-plan.svg';
import fingerIcon from '../../../../../public/assets/vicente-icons/hugeicons_finger-print.svg';
import ceilingIcon from '../../../../../public/assets/vicente-icons/cbi_ceiling-aurelle.svg';
import nicheIcon from '../../../../../public/assets/vicente-icons/radix-icons_section.svg';
import MapComponent from '~/app/components/MapComponent';


export default function Vicente() {
    return(
        <div className="vicente-container">
            <div className="vicente-first">
                <div className="vicente-first-content">
                    <Image src={vicenteFachada} alt="Vicente Residencial" width={424} height={547} />
                    <div className="first-text">
                        <h1><Image src={vicenteLogo} alt="Vicente Residencial" width={80} height={86} />Vicente Residencial</h1>
                        <p>
                        A localização do <b>Vicente Residencial</b> combina beleza e funcionalidade. O empreendimento de torre única, um apartamento por andar.
                        <br/><br/>
                        O resultado é um empreendimento que incorpora a tendência na <b>arquitetura moderna</b> para se integrar ao 
                        seu jeito de viver, fazendo mediação para a <b>beleza</b> e a <b>funcionalidade</b>.
                        <br/><br/>
                        E para que <b>você faça parte</b> dessa conversa todos os dias.
                        </p>
                    </div>
                </div>
                
            </div>

            <div className="vicente-second">
                <div className="vicente-second-content">
                    <Image src={vicenteSlogan} alt="Living Experience"/>
                    <div className="second-icons">
                        <div className="vicente-icon">
                            <Image src={bedIcon} alt="2 suítes" width={48} height={48}/>
                            <span className="vicente-icon-legend">
                                02 suítes
                            </span>
                        </div>
                        <div className="vicente-icon">
                            <Image src={carIcon} alt="Garagem Privativa" width={48} height={48}/>
                            <span className="vicente-icon-legend">
                                Garagem Privativa
                            </span>
                        </div>
                        <div className="vicente-icon">
                            <Image src={sofaIcon} alt="Amplo Living" width={48} height={48}/>
                            <span className="vicente-icon-legend">
                                Amplo living com 3 ambientes
                            </span>
                        </div>
                        <div className="vicente-icon">
                            <Image src={bbqIcon} alt="Churrasqueira" width={48} height={48}/>
                            <span className="vicente-icon-legend">
                                Churrasqueira
                            </span>
                        </div>
                        <div className="vicente-icon">
                            <Image src={floorIcon} alt="Piso em porcelanato" width={48} height={48}/>
                            <span className="vicente-icon-legend">
                                Piso em porcelanato
                            </span>
                        </div>
                        <div className="vicente-icon">
                            <Image src={fingerIcon} alt="Biometria" width={48} height={48}/>
                            <span className="vicente-icon-legend">
                                Portas com Biometria
                            </span>
                        </div>
                        <div className="vicente-icon">
                            <Image src={ceilingIcon} alt="Teto rebaixado em gesso" width={48} height={48}/>
                            <span className="vicente-icon-legend">
                                Teto 100% rebaixado em gesso
                            </span>
                        </div>
                        <div className="vicente-icon">
                            <Image src={nicheIcon} alt="Nichos nos banheiros" width={48} height={48}/>
                            <span className="vicente-icon-legend">
                            Nichos nos banheiros
                            </span>
                        </div>
                    </div>
                </div>
                <Image className="vicente-second-pic" src={vicenteFrente} alt="Residencial Vicente"/>
            </div>

            <div className="vicente-third">
                <Image src={vicenteSala} alt="Vicente Residencial"/>
            </div>

            <div className="vicente-fourth">
                <Image src={vicentePlanta} alt="Vicente Residencial"/>
                <div className="fourth-text">
                    <h1><span>2</span><br/> suítes</h1>
                    <p>Apartamento de 75,25m² priv.<br/>
                    Com living ampliado </p>
                </div>
            </div>

            <div className="vicente-fifth">
                <div className="map">
                    <div className="map-legend">
                        <div className="map-legend-content">
                            <h4>Localização:</h4>
                            <span>Rua 262, 282<br/>Meia Praia, Itapema - SC</span>
                        </div>
                    </div>
                    <MapComponent lat={-27.132435982333003} lng={-48.60228982565635}/>
                </div>
                <Image src={vicenteAerea} alt="Residencial Vicente"/>
            </div>
        </div>
    )
}