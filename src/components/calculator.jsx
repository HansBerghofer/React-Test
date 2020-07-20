import React, { useState } from 'react';

const Calc = () => {
    const [taskString, setTaskString] = useState('');

    const sleep = time => {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    const btnClickEqual = () => {
        try {
            setTaskString(eval(taskString).toString());
        }
        catch {
            setTaskString("ERROR");
            sleep(1000).then(() => {
                setTaskString("");
            });
        }
    }

    const onKeyPressed = e => {
        let input;
        let validInput;
        switch (e.keyCode) {
            case 8:
                setTaskString(taskString.substring(0, taskString.length - 1));
                break;
            case 13:
                btnClickEqual();
                break;
            case 46:
                setTaskString('');
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
            setTaskString(taskString.concat(input));
    }

    return (
        <div ref={input => input && input.focus()} tabIndex={0} onKeyDown={onKeyPressed} className="wrapper">
            <div className="calculator">
                <div className="bar rightMargin">
                    <div className="calculation">{taskString}</div>
                </div>
                <button className="btn element leftMargin lightOrange" onClick={() => setTaskString(taskString.concat('+'))}>+</button>
                
                <br></br>

                <button className="btn element rightMargin lightGrey" onClick={() => setTaskString(taskString.concat('7'))}>7</button>
                <button className="btn element leftMargin rightMargin lightGrey" onClick={() => setTaskString(taskString.concat('8'))}>8</button>
                <button className="btn element leftMargin rightMargin lightGrey" onClick={() => setTaskString(taskString.concat('9'))}>9</button>
                <button className="btn element leftMargin lightOrange" onClick={() => setTaskString(taskString.concat('-'))}>-</button>

                <br></br>

                <button className="btn element rightMargin lightGrey" onClick={() => setTaskString(taskString.concat('4'))}>4</button>
                <button className="btn element leftMargin rightMargin lightGrey" onClick={() => setTaskString(taskString.concat('5'))}>5</button>
                <button className="btn element leftMargin rightMargin lightGrey" onClick={() => setTaskString(taskString.concat('6'))}>6</button>
                <button className="btn element leftMargin lightOrange" onClick={() => setTaskString(taskString.concat('*'))}>*</button>

                <br></br>

                <button className="btn element rightMargin lightGrey" onClick={() => setTaskString(taskString.concat('1'))}>1</button>
                <button className="btn element leftMargin rightMargin lightGrey" onClick={() => setTaskString(taskString.concat('2'))}>2</button>
                <button className="btn element leftMargin rightMargin lightGrey" onClick={() => setTaskString(taskString.concat('3'))}>3</button>
                <button className="btn element leftMargin lightOrange" onClick={() => setTaskString(taskString.concat('/'))}>/</button>

                <br></br>

                <button className="btn element rightMargin lightGrey" onClick={() => setTaskString(taskString.concat('.'))}>.</button>
                <button className="btn element leftMargin rightMargin lightGrey" onClick={() => setTaskString(taskString.concat('0'))}>0</button>
                <button className="btn element darkOrange leftMargin rightMargin" onClick={() => setTaskString(taskString.concat(''))}>C</button>
                <button className="btn element leftMargin darkOrange" onClick={() => btnClickEqual()}>=</button>
            </div>
        </div>
    );
}
 
export default Calc;