import React from 'react';
import DoorsInput from './DoorsInput.js';
class Doors extends React.Component {

    constructor(props) {
        super(props)
        this.onCardClicked = this.onCardClicked.bind(this);
        this.state = { doorNumber: 0};
    }

    onCardClicked(doorNum){
        this.setState({ doorNumber: doorNum });
    }
    
    //returning the array of product renderings
    render() {
        const arr = this.props.doorsList;
        
        return (
            <div className='door-section'>
                <h3>Doors</h3>
                <div className='door-container'>
                    <DoorsInput 
                        door={arr[0]}
                        selected={this.state.doorNumber === 1}
                        doornumber={this.state.doorNumber}
                        onCardClicked={() => this.onCardClicked(arr[0].doorNum)}
                    />
                    <DoorsInput 
                        door={arr[1]}
                        selected={this.state.doorNumber === 2}
                        doornumber={this.state.doorNumber}
                        onCardClicked={() => this.onCardClicked(arr[1].doorNum)}
                    />
                    <DoorsInput 
                        door={arr[2]}
                        selected={this.state.doorNumber === 3}
                        doornumber={this.state.doorNumber}
                        onCardClicked={() => this.onCardClicked(arr[2].doorNum)}
                    />
                </div>
            </div>
        );
    }
}

export default Doors;