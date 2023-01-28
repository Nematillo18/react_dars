import './contact.js';
import './contact.scss';
import contact_img1 from './images/Rectangle.png';
import contact_img2 from './images/komp.png';
function Contact(){
    return (
        <div className='contact'>
            <p className='contact_ptegi'>contact me.</p>
            <div className='contact_img'>
                <img src={contact_img1}/>
                <p className='contact_ptegi1'>Send me a letter.</p>
            </div>
            <div className='contact_img1'>
                <img src={contact_img2}/>
                <p className='contact_ptegi2'>Send me a letter.</p>
            </div>

        </div>
    )
}
export default Contact;