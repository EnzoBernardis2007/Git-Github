import style from './Screen.module.css'

//show the numbers
export function Screen({number}) {
    return(
        <div className={style.container}>
            <p>{Number(number)}</p>
        </div>
    )
}