import React, { Component } from 'react';

class Calc extends Component {
    state = {
        taskString: ''
    }
    render() {
        return (
            <div ref={input => input && input.focus()} tabIndex={0} onKeyDown={this.onKeyPressed} className="wrapper">
                <div style={{
                    margin: 'auto',
                    marginTop: '5vh',
                    marginBottom: '3vh',
                    paddingTop: '2vh',
                    paddingBottom: '5vh',
                    maxWidth: '930px',
                    backgroundColor: '#E0E0E0',
                    borderRadius: 25
                }}>

                    <div className="bar rightMargin">
                        <div className="calculation">{this.state.taskString}</div>
                    </div>
                    <button className="btn element leftMargin lightOrange" onClick={() => this.btnClick('+')}>+</button>
                    

                    <br></br>

                    <button className="btn element rightMargin lightGrey" onClick={() => this.btnClick('7')}>7</button>
                    <button className="btn element leftMargin rightMargin lightGrey" onClick={() => this.btnClick('8')}>8</button>
                    <button className="btn element leftMargin rightMargin lightGrey" onClick={() => this.btnClick('9')}>9</button>
                    <button className="btn element leftMargin lightOrange" onClick={() => this.btnClick('-')}>-</button>

                    <br></br>

                    <button className="btn element rightMargin lightGrey" onClick={() => this.btnClick('4')}>4</button>
                    <button className="btn element leftMargin rightMargin lightGrey" onClick={() => this.btnClick('5')}>5</button>
                    <button className="btn element leftMargin rightMargin lightGrey" onClick={() => this.btnClick('6')}>6</button>
                    <button className="btn element leftMargin lightOrange" onClick={() => this.btnClick('*')}>*</button>

                    <br></br>

                    <button className="btn element rightMargin lightGrey" onClick={() => this.btnClick('1')}>1</button>
                    <button className="btn element leftMargin rightMargin lightGrey" onClick={() => this.btnClick('2')}>2</button>
                    <button className="btn element leftMargin rightMargin lightGrey" onClick={() => this.btnClick('3')}>3</button>
                    <button className="btn element leftMargin lightOrange" onClick={() => this.btnClick('/')}>/</button>

                    <br></br>

                    <button className="btn element rightMargin lightGrey" onClick={() => this.btnClick('.')}>.</button>
                    <button className="btn element leftMargin rightMargin lightGrey" onClick={() => this.btnClick('0')}>0</button>
                    <button className="btn element darkOrange leftMargin rightMargin" onClick={() => this.setState({taskString: ''})}>C</button>
                    <button className="btn element leftMargin darkOrange" onClick={() => this.btnClickEqual()}>=</button>

                </div>
            </div>
        );
    }

    btnClickEqual = () => {
        try {
            this.setState({taskString: eval(this.state.taskString).toString()});
        }
        catch {
            this.setState({taskString: "ERROR"});
            this.sleep(1000).then(() => {
                this.setState({taskString: ""});
            });
        }
    }

    btnClick = value => {
        this.setState({taskString: this.state.taskString.concat(value)});
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    onKeyPressed = e => {
        let input;
        let validInput;
        switch (e.keyCode) {
            case 8:
                this.setState({taskString: this.state.taskString.substring(0, this.state.taskString.length - 1)});
                break;
            case 13:
                this.btnClickEqual();
                break;
            case 46:
                this.setState({taskString: ''});
                break;
            case 96:
                input = '0';
                validInput = true;
                break;
            case 97:
                input = '1';
                validInput = true;
                break;
            case 98:
                input = '2';
                validInput = true;
                break;
            case 99:
                input = '3';
                validInput = true;
                break;
            case 100:
                input = '4';
                validInput = true;
                break;
            case 101:
                input = '5';
                validInput = true;
                break;
            case 102:
                input = '6';
                validInput = true;
                break;
            case 103:
                input = '7';
                validInput = true;
                break;
            case 104:
                input = '8';
                validInput = true;
                break;
            case 105:
                input = '9';
                validInput = true;
                break;
            case 106:
                input = '*';
                validInput = true;
                break;
            case 107:
                input = '+';
                validInput = true;
                break;
            case 109:
                input = '-';
                validInput = true;
                break;
            case 110:
                input = '.';
                validInput = true;
                break;
            case 111:
                input = '/';
                validInput = true;
                break;
            case 190:
                input = '.';
                validInput = true;
                break;
            default:
                validInput = false;
                
        }
        if (validInput)
            this.setState({taskString: this.state.taskString.concat(input)});
      }
}
 
export default Calc;