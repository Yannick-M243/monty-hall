import React from 'react';
import doorPic from '../images/door.png';
import doorSelectedPic from '../images/door-selected.png';
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
        //const step = this.props.step;
        const openFirst = this.props.openFirst;
        const openSecond = this.props.openSecond;
        
        if (selected !== false) {
            return (
                <div className='door'>
                    <img src={doorSelectedPic} onClick={(e) => this.handleCardSelection(e)} doornumber={this.props.doornumber} alt='selected door' />
                </div>
            );
        }
        else if (openFirst === true) {
                return (
                    <div className='door'>
                        <img src={door.image} onClick={(e) => this.handleCardSelection(e)} doornumber={this.props.doornumber} alt='goat'/>
                    </div>
                );
        } else if (openSecond === true) {
            return (
                <div className='door'>
                    <img src={door.image} onClick={(e) => this.handleCardSelection(e)} doornumber={this.props.doornumber} alt='result' />
                </div>
            );
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