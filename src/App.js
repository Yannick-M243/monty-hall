import './App.css';
import Door from './components/Door.js';
import tresorPic from './images/tresor.png';
import goatPic from './images/goat.png';
import Doors from './components/Doors.js';
import shuffle from './components/shuffle.js';
import './styles/style.scss';
import { ExternalLink } from 'react-external-link';


//creating three door objects
const door1 = new Door(1, tresorPic, "winning");
const door2 = new Door(2, goatPic, "loosing");
const door3 = new Door(3, goatPic, "loosing");

//storing the three shuffled door objects 
const doors = shuffle([door1, door2, door3]);

function App() {
  return (
    <div className="App">
      <h1>Monty Hall Problem</h1>
      <Doors doorsList={doors} />
      <div className='footer'>
        <span >Created by <ExternalLink href="https://github.com/Yannick-M243" target='blank'>Yannick Makwenge</ExternalLink></span>
      </div>
    </div>
  );
}

export default App;
