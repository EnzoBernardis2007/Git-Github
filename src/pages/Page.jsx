import style from './Page.module.css'
import { useState } from 'react'
import { Screen } from '../Components/Screen'

export function Page() {
    const [number, setNumber] = useState('')

    const buildNumber = (value) => {
        setNumber(number + value)
    }
    return(
        <div className={style.backgroundConfig}>
            <main>
                <Screen number={number} />
                <div className={style.containerNums}>
                    <button onClick={() => buildNumber('1')}>1</button>
                    <button onClick={() => buildNumber('2')}>2</button>
                    <button onClick={() => buildNumber('3')}>3</button>
                </div>
                <div className={style.containerNums}>
                    <button onClick={() => buildNumber('4')}>4</button>
                    <button onClick={() => buildNumber('5')}>5</button>
                    <button onClick={() => buildNumber('6')}>6</button>
                </div>
                <div className={style.containerNums}>
                    <button onClick={() => buildNumber('7')}>7</button>
                    <button onClick={() => buildNumber('8')}>8</button>
                    <button onClick={() => buildNumber('9')}>9</button>
                </div>
            </main>
        </div>
    )
}