import './futer.js';
import './futer.scss';
import futer_img from './images/Circuit.png';
function Futer(){
    return (
        <div className='futer'>
            <img className='futer_img' src={futer_img}/>
            <p className='futer_ptegi'>Blog </p>
            <p className='futer_ptegi1'>About Me</p>
            <p className='futer_ptegi2'>Contact</p>
            <p className='futer_ptegi3'>Copyright 2020 Circuit. Design by Ayane Satomi.</p>

        </div>
    )
}
export default Futer;