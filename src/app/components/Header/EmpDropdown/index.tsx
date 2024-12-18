import './styles.css';
import { motion } from 'motion/react';

interface Props {
    mobile: boolean
}

export default function EmpDropdown ({ mobile }: Props) {
    if (!mobile) {
        return (
            <motion.div
                className="emp-dropdown"
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: -25 }}
                whileInView={{ y: 0, opacity: 1 }}
            >
                <a href="">
                    <span className='hover-underline-animation'>Em construção</span>
                </a>
                <a href="">
                    <span className='hover-underline-animation'>Entregues</span>
                </a>
                <a href="">
                    <span className='hover-underline-animation'>Pré Lançamentos</span>
                </a>
            </motion.div>
        )
    } else {
        return (
            <div className="emp-dropdown mobile">
                <a href="">
                    <span className='hover-underline-animation'>Em construção</span>
                </a>
                <a href="">
                    <span className='hover-underline-animation'>Entregues</span>
                </a>
                <a href="">
                    <span className='hover-underline-animation'>Pré Lançamentos</span>
                </a>
            </div>
        )
    }




}