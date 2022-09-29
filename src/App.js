import './App.css';
import Door from './components/Door.js';
import carPic from './images/car.jpg';
import goatPic from './images/goat.jpg';
import Doors from './components/Doors.js';
import shuffle from './components/shuffle.js';
import './styles/style.scss';

const door1 = new Door(1, carPic, "winning");
const door2 = new Door(2, goatPic, "loosing");
const door3 = new Door(3, goatPic, "loosing");

const doors = shuffle([door1, door2, door3]);

function App() {
  return (
    <div className="App">
        <Doors doorsList={doors}/>
    </div>
  );
}

export default App;
