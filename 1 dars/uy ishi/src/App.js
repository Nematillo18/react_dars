import 'bootstrap/dist/css/bootstrap.min.css';
import './App.js';
import Header from './Header';
import Main from './main.js';
import Selected from './select.js';

function App(){
      return (
    <div className="App"> 
<Header name="Hello word"/>
<Main name="Save1"/>
<Selected name="Save2"/>
    </div>);
  }
  export default App;
