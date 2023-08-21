import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Not_found from './components/Not_found';
import Adduser from './components/Adduser';
import Updateuser from './components/Updateuser';
import Userview from './components/Userview';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/contact' Component={Contact} />
          <Route exact path='/*' Component={Not_found} />
          <Route exact path='/users/add' Component={Adduser} />
          <Route exact path='/user/update/:_id' Component={Updateuser}/>
          <Route exact path='/user/view/:_id' Component={Userview}/>
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
