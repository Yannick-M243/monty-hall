import React from 'react';
import DoorsInput from './DoorsInput.js';
import Result from './Result.js';
import shuffle from './shuffle.js';

class Doors extends React.Component {

    constructor(props) {
        super(props)
        this.onCardClicked = this.onCardClicked.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            step: 0,
            doorSelected: 0,
            openFirst: 0,
            result: "",
            doors: this.props.doorsList
        };
    }

    //this is the function called when the user clicks on any card
    onCardClicked = (doorNum, currentStep) => {
        const arr = this.state.doors;
        //if the it is the step 0 get the door selected firs by the user
        if (this.state.step === 0) {

            //get the selected door and set it as selected
            this.setState({ doorSelected: doorNum });

            //the code below choose the first door to open
            if (this.state.openFirst === 0) {
                for (let i = 0; i < arr.length; i++) {
                    //the condition below select the first non-selected closed loosing door and onpen it
                    if (arr[i].doorNum !== doorNum && arr[i].result !== "winning") {
                        this.setState({ openFirst: arr[i].doorNum });
                        break;
                    }
                }
            }
            //going to the next step
            this.setState({ step: currentStep + 1 })
        }

        if (this.state.step === 1 && this.state.openFirst !== doorNum) {
            //enabling selected door to be clicked
            this.setState({ doorSelected: 0 });

            for (let i = 0; i < arr.length; i++) {
                //the condition below select the first non-selected closed loosing door and onpen it
                if (arr[i].doorNum === doorNum && arr[i].result === "winning") {
                    this.setState({ result: "winning" });
                    break;
                } else {
                    this.setState({ result: "loosing" });
                }
            }
            //going to the next step
            this.setState({ step: currentStep + 1 });
        }
    }

    //this is a function that resets all the states when the reset button is clicked
    reset = () => {
        this.setState({
            step: 0,
            doorSelected: 0,
            openFirst: 0,
            result: "",
            doors: shuffle(this.props.doorsList)
        })
    }
    //returning the array of product renderings
    render() {
        //getting the array of doors from props
        const arr = this.state.doors;
        const doorNumber1 = arr[0].doorNum;
        const doorNumber2 = arr[1].doorNum;
        const doorNumber3 = arr[2].doorNum;
        return (
            <div className='door-section'>
                {this.state.step === 0 ? <h2>Choose one of the three doors</h2> : ''}
                {this.state.step === 1 ? <h2>You can choose between you initialy selected door and the other closed door</h2> : ''}
                <div className='door-container'>
                    <DoorsInput
                        door={arr[0]}
                        step={this.state.step}
                        selected={this.state.doorSelected === doorNumber1}
                        openFirst={this.state.openFirst === doorNumber1}
                        onCardClicked={() => this.onCardClicked(doorNumber1, this.state.step)}
                    />
                    <DoorsInput
                        door={arr[1]}
                        step={this.state.step}
                        selected={this.state.doorSelected === doorNumber2}
                        openFirst={this.state.openFirst === doorNumber2}
                        onCardClicked={() => this.onCardClicked(doorNumber2, this.state.step)}
                    />
                    <DoorsInput
                        door={arr[2]}
                        step={this.state.step}
                        selected={this.state.doorSelected === doorNumber3}
                        openFirst={this.state.openFirst === doorNumber3}
                        onCardClicked={() => this.onCardClicked(doorNumber3, this.state.step)}
                    />
                </div>
                <Result result={this.state.result} />
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Doors;