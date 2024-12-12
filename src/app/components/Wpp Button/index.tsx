import Image from 'next/image';
import whatsappIcon from '../../../../public/assets/whatsapp-icon.svg';
import './styles.css';

export default function WppButton() {
    return (
        <div className="wpp">
            <a href="https://api.whatsapp.com/send?phone=5547991284827">
            <div className="img">
                <Image fill className="wpp-icon" src={whatsappIcon.src} alt="Whatsapp"/>
            </div>
                <div className="wpp-legend">
                    <span>Tire suas dúvidas</span>
                </div>
            </a>
        </div>
    )
}