import 'bootstrap/dist/css/bootstrap.min.css';
import './App.js';
import Header  from './header/header.js';
import Main from './main/main.js';
import About from './about/about.js';
import Projects from './projects/projects.js';
import Open from './open/open.js';
import Contact from './contact/contact.js';
import Futer from './futer/futer.js';

function App() {
  return (
    <div>
  <Header/>
  <Main/>
  <About/>
  <Projects/>
  <Open/>
  <Contact/>
  <Futer/>
    </div>
  );
}

export default App;
