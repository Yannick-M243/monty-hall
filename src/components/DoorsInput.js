import React from 'react';
import doorPic from '../images/door.png';
class DoorsInput extends React.Component {

    constructor(props) {
        super(props)
        this.handleCardSelection = this.handleCardSelection.bind(this);
        this.state = { doorNumber: 0 };
    }
    
    handleCardSelection = e => {
        this.props.onCardClicked(e.target.doornumber)
    }

    render() {
        const door = this.props.door;
        const selected = this.props.selected;
        
        if (selected === false) {
            return (
                <div className='door'>
                    <img src={doorPic} onClick={(e) => this.handleCardSelection(e)} doornumber={this.props.doornumber} />
                </div>
            );
        } else {
            return (
                <div className='door'>
                    <img src={door.image} onClick={(e) => this.handleCardSelection(e)} doornumber={this.props.doornumber} />
                </div>
            );
        }
        
    }
}
export default DoorsInput;