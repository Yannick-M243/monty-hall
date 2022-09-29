import React from 'react';
import DoorsInput from './DoorsInput.js';
import Result from './Result.js';

class Doors extends React.Component {

    constructor(props) {
        super(props)
        this.onCardClicked = this.onCardClicked.bind(this);
        this.state = { doorNumber: 0, step: 0, doorSelected: 0, openFirst: 0, openSecond: 0, result: "" };
    }

    onCardClicked = (doorNum, currentStep, arr) => {

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
            if (this.state.openSecond === 0) {
                //enabling selected door to be changed
                this.setState({ doorSelected: 0 });
                this.setState({ openSecond: doorNum });

                for (let i = 0; i < arr.length; i++) {
                    //the condition below select the first non-selected closed loosing door and onpen it
                    if (arr[i].doorNum === doorNum && arr[i].result === "winning") {
                        this.setState({ result: "winning" });
                    } else {
                        this.setState({ result: "loosing" });
                    }
                }

                //going to the next step
                this.setState({ step: currentStep + 1 })
            }
        }
        this.setState({ doorNumber: doorNum });

    }

    //returning the array of product renderings
    render() {
        const arr = this.props.doorsList;
        const door1 = arr[0];
        const door2 = arr[1];
        const door3 = arr[2];
        return (
            <div className='door-section'>
                <h2>Doors</h2>
                <div className='door-container'>
                    <DoorsInput
                        door={arr[0]}
                        step={this.state.step}
                        selected={this.state.doorSelected === door1.doorNum}
                        openFirst={this.state.openFirst === door1.doorNum}
                        openSecond={this.state.openSecond === door1.doorNum}
                        onCardClicked={() => this.onCardClicked(door1.doorNum, this.state.step, arr)}
                    />
                    <DoorsInput
                        door={arr[1]}
                        step={this.state.step}
                        selected={this.state.doorSelected === door2.doorNum}
                        openFirst={this.state.openFirst === door2.doorNum}
                        openSecond={this.state.openSecond === door2.doorNum}
                        onCardClicked={() => this.onCardClicked(door2.doorNum, this.state.step, arr)}
                    />
                    <DoorsInput
                        door={arr[2]}
                        step={this.state.step}
                        selected={this.state.doorSelected === door3.doorNum}
                        openFirst={this.state.openFirst === door3.doorNum}
                        openSecond={this.state.openSecond === door3.doorNum}
                        onCardClicked={() => this.onCardClicked(door3.doorNum, this.state.step, arr)}
                    />

                    <Result result={this.state.result} />
                </div>
            </div>
        );
    }
}

export default Doors;