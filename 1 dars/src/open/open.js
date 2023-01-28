import './open.js';
import './open.scss';
import open_img from './images/Rectangle.png';


function Open(){
    return (
        <div className='Open'>
            <p className='open_tegi'>open source.</p>
            <div className='open_img1'>
                <img src={open_img}/>
                <p className='open_ptegi1'>Project <br/> Name</p>
            </div>

            <div className='open_img2'>
                <img src={open_img}/>
                <p className='open_ptegi2'>Project <br/> Name</p>
            </div>

            <div className='open_img3'>
                <img src={open_img}/>
                <p className='open_ptegi3'>Project <br/> Name</p>
            </div>
            <p className='open_more'>SEE MORE</p>

        </div>
    )
}
export default Open;