import {useState} from 'react'
import s from './count.module.scss'


export const Count = () => {


    const [count, setCount] = useState(0)

    const onClickInc = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div className={s.count}>
            {count}
            <button onClick={onClickInc}>inc</button>
        </div>
    );
};

