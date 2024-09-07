import style from './Page.module.css'
import { useState } from 'react'
import { Screen } from '../Components/Screen'

export function Page() {
    const [number, setNumber] = useState('0')
    const [firstNumber, setFirstNumber] = useState(null)
    const [secondNumber, setSecondNumber] = useState(null)
    //0 = plus, 1 = minus, 2 = multiplication, 3 = division
    const [operation, setOperation] = useState(null)

    const buildNumber = (value) => {
        setNumber(number + value)
        console.log('add')
    }

    const addNumber = () => {
        if(firstNumber === null) {
            setFirstNumber(Number(number))
        }
        else {
            setSecondNumber(Number(number))
        }
        setNumber('0')
        console.log(firstNumber)
        console.log(secondNumber)
    }
    const clear = () => {
        //clear everything
        setNumber('0')
        setFirstNumber(null)
        setSecondNumber(null)
        setOperation(null)
    }

    const handleOperation = (op) => {
        if (number !== '0') {
            addNumber()
        }
        setOperation(op)
    }

    const calc = () => {
        let result;

        switch(operation){
            case 0:
                result = firstNumber + secondNumber;
                break;
            case 1:
                result = firstNumber - secondNumber;
                break;
            case 2:
                result = firstNumber * secondNumber;
                break;
            case 3:
                result = firstNumber / secondNumber;
                break;
        }
        console.log(result)
        clear()
        setNumber(result.toString()); 
        setOperation(null); 
    }

    return(
        <div className={style.backgroundConfig}>
            <main>
                <Screen number={number} />
                <div className={style.containerNums}>
                    <button onClick={() => buildNumber('1')}>1</button>
                    <button onClick={() => buildNumber('2')}>2</button>
                    <button onClick={() => buildNumber('3')}>3</button>
                    <button onClick={() => handleOperation(0)}>+</button>
                </div>
                <div className={style.containerNums}>
                    <button onClick={() => buildNumber('4')}>4</button>
                    <button onClick={() => buildNumber('5')}>5</button>
                    <button onClick={() => buildNumber('6')}>6</button>
                    <button onClick={() => handleOperation(1)}>-</button>
                </div>
                <div className={style.containerNums}>
                    <button onClick={() => buildNumber('7')}>7</button>
                    <button onClick={() => buildNumber('8')}>8</button>
                    <button onClick={() => buildNumber('9')}>9</button>
                    <button onClick={() => handleOperation(2)}>*</button>
                </div>
                <div className={style.containerNums}>
                    <button onClick={() => buildNumber('0')}>0</button>
                    <button onClick={() => clear()}>AC</button>
                    <button onClick={() => {
                        addNumber()
                        calc()
                    }}>=</button>
                    <button onClick={() => handleOperation(3)}>/</button>
                </div>
            </main>
        </div>
    )
}