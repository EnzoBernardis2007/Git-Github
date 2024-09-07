import style from './Page.module.css'
import { useState } from 'react'
import { Screen } from '../Components/Screen'

export function Page() {
    const [number, setNumber] = useState('0')
    const [numbers, setNumbers] = useState([])
    //0 = plus, 1 = minus, 2 = multiplication, 3 = division
    const [operation, setOperation] = useState(null)

    const buildNumber = (value) => {
        setNumber(number + value)
    }

    const addNumber = () => {
        setNumbers([...numbers, Number(number)])
        setNumber('0')
    }

    const clear = () => {
        //clear everything
        setNumber('0')
        setNumbers([])
        setOperation(null)
    }

    const calc = () => {
        if (numbers.length < 2 || operation === null) return console.log("no"), console.log(numbers);

        const [num1, num2] = numbers;
        let result;

        switch(operation){
            case 0:
                result = num1 + num2;
                break;
            case 1:
                result = num1 - num2;
                break;
            case 2:
                result = num1 * num2;
                break;
            case 3:
                result = num1 / num2;
                break;
        }
        console.log(result)
        setNumber(result.toString()); 
        setNumbers([]); 
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
                    <button onClick={() => {
                        addNumber()
                        setOperation(0)
                    }}>+</button>
                </div>
                <div className={style.containerNums}>
                    <button onClick={() => buildNumber('4')}>4</button>
                    <button onClick={() => buildNumber('5')}>5</button>
                    <button onClick={() => buildNumber('6')}>6</button>
                    <button onClick={() => {
                        addNumber()
                        setOperation(1)
                    }}>-</button>
                </div>
                <div className={style.containerNums}>
                    <button onClick={() => buildNumber('7')}>7</button>
                    <button onClick={() => buildNumber('8')}>8</button>
                    <button onClick={() => buildNumber('9')}>9</button>
                    <button onClick={() => {
                        addNumber()
                        setOperation(2)
                    }}>*</button>
                </div>
                <div className={style.containerNums}>
                    <button onClick={() => buildNumber('0')}>0</button>
                    <button onClick={() => clear()}>AC</button>
                    <button onClick={() => {
                        addNumber()
                        calc()
                    }}>=</button>
                    <button onClick={() => {
                        addNumber()
                        setOperation(3)
                    }}>/</button>
                </div>
            </main>
        </div>
    )
}