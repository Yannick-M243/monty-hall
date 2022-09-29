import React from 'react';
import doorPic from '../images/door.png';
import doorSelectedPic from '../images/door-selected.png';

//This component is a template for displaying doors according to the game progress
class DoorsInput extends React.Component {

    constructor(props) {
        super(props)
        this.handleCardSelection = this.handleCardSelection.bind(this);
        this.state = { doorNumber: 0 };
    }
    
    //this function is called whenever a card is selected
    handleCardSelection = e => {
        this.props.onCardClicked(e.target.doornumber)
    }

    render() {
        //getting props' values
        const door = this.props.door;
        const selected = this.props.selected;
        const step = this.props.step;
        const openFirst = this.props.openFirst;

        //if a door is selected first, display a picture of a door with a selected tag
        if (selected !== false) {
            return (
                <div className='door'>
                    <img src={doorSelectedPic} onClick={(e) => this.handleCardSelection(e)} doornumber={this.props.doornumber} alt='selected door' />
                </div>
            );
        }
        //if in the second step a door is opened, display the picture behind the door
        else if (openFirst === true ) {
            return (
                <div className='door'>
                    <img src={door.image} onClick={(e) => this.handleCardSelection(e)} doornumber={this.props.doornumber} alt='goat' className='result'/>
                </div>
            );
        //Reveal all the doors after step 2
        } else if (step > 1) {
            return (
                <div className='door'>
                    <img src={door.image} onClick={(e) => this.handleCardSelection(e)} doornumber={this.props.doornumber} alt='result' className='result' />
                </div>
            );
    
        //Display a closed door if the condition is not met
        } else {
            return (
                <div className='door'>
                    <img src={doorPic} onClick={(e) => this.handleCardSelection(e)} doornumber={this.props.doornumber} alt='door'/>
                </div>
            );
        }
    }
}
export default DoorsInput;