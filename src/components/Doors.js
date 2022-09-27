import React from 'react';
import Door from './Door.js';
import carPic from '../images/car.jpg';
import goatPic from '../images/goat.jpg';
import DoorsInput from './DoorsInput.js';


const door1 = new Door(1, carPic, "winning");
const door2 = new Door(2, goatPic, "loosing");
const door3 = new Door(3, goatPic, "loosing");

const doors = [door1, door2, door3];

class Doors extends React.Component {

    constructor(props) {
        super(props)
        //this.handleClick = this.handleClick.bind(this);
        this.state = { selected: 0, door: [] };
    }

    //returning the array of product renderings
    render() {
        const arr = this.props.doorList;
        return (
            <div className='door-section'>
                <h3>Doors</h3>
                <div className='door-container'>
                    <DoorsInput doorList={arr[0]}
                        selected={this.state.selected === 1}
                    />
                    <DoorsInput doorList={arr[1]}
                        selected={this.state.selected === 2}
                    />
                    <DoorsInput doorList={arr[2]}
                        selected={this.state.selected === 3}
                    />
                </div>
            </div>
        );
    }
}

export default Doors;