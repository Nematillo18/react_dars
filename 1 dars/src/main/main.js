import './main.js';
import './main.scss';
import main_img from './images/Object.png'

function Main(){
    return (
        <div className='Main'>
<img className='main_img' src={main_img}/>
<p className='main_ptegi'>I'm Circuit.</p>
<p className='main_ptegi1'>Come up with a 500-character summary of what you do here.
I'm sure you're grammatically proficient to do this ya wanker.</p>
        </div>
    )
}
export default Main;