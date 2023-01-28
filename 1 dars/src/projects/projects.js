import './projects.js';
import './projects.scss';
import projects_img from './images/Rectangle.png';

function Projects(){
    return (
        <div className='projects'>
            <p className='projects_ptegi1'>projects.</p>
            <div className='projects_img'>
                <img src={projects_img}/>
                <p className='projects_ptegi2'>Project <br/> Name</p>
            </div>

            <div className='projects_img1'>
                <img src={projects_img}/>
                <p className='projects_ptegi3'>Project <br/> Name</p>
            </div>

            <div className='projects_img2'>
                <img src={projects_img}/>
                <p className='projects_ptegi4'>Project <br/> Name</p>
            </div>
            <p className='projects_more'>SEE MORE</p>

        </div>
    )
}
export default Projects;