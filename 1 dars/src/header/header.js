import './header.js';
import './header.scss';
import Header_img1 from './images/Circuit.png';
import Header_img2 from './images/Shape.png';
import Header_img3 from './images/email.png';

function Header(){
    return (
        <div className='Header'>
            <img className='header_img1' src={Header_img1}/>
            <p className='header_ptegi1'>PROJECTS</p>
            <p className='header_ptegi2'>BLOG</p>
            <img className='header_img2' src={Header_img2}/>
            <img className='header_img3' src={Header_img3}/>

        </div>
    )
}
export default Header;