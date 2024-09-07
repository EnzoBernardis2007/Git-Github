import style from './Screen.module.css'

export function Screen({number}) {
    return(
        <div className={style.container}>
            <p>{number}</p>
        </div>
    )
}