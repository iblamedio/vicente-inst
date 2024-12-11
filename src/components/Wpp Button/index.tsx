import whatsappIcon from '../../assets/whatsapp-icon.svg';
import './styles.css';

export default function WppButton() {
    return (
        <div className="wpp">
            <a href="https://api.whatsapp.com/send?phone=5547991284827">
                <img src={whatsappIcon} alt="Whatsapp"/>
                <div className="wpp-legend">
                    <span>Tire suas dúvidas</span>
                </div>
            </a>
        </div>
    )
}