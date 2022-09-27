import React from 'react';
import doorPic from '../images/door.png';
import Door from './Door.js';
import carPic from '../images/car.jpg';
import goatPic from '../images/goat.jpg';


const door1 = new Door(1, carPic, "winning");
const door2 = new Door(2, goatPic, "loosing");
const door3 = new Door(3, goatPic, "loosing");
const doors = [door1, door2, door3];
class DoorsInput extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = { selected: 0, door: {} };
    }

    handleClick(doorNumber, doorSelected) {
        this.setState({ selected: doorNumber, door: doorSelected })
        console.log(this.state.selected)
        console.log(this.state.door)
    }

    render() {
        const door = this.state.door;
        const selected = this.state.selected;

        if (door.doorNum !== selected) {
            return (
                <div className='door'>
                    <img src={doorPic} onClick={() => this.handleClick(selected, door)} doorList={doors} />
                </div>
            );
        } else {
            return (
                <div className='door'>
                    <img src={door.image} onClick={() => this.handleClick(selected, door)} doorList={doors} />
                </div>
            );
        }

    }
}
export default DoorsInput;