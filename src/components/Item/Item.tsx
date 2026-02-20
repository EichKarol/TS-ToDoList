import './Item.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAnglesUp, faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import type { ChangeEvent } from 'react';

export type ItemData = {
    title: string;
    description: string;
    done: boolean;
    priority: 'low' | 'normal' | 'high';
}

type ItemProps = ItemData

export function Item({title, description, done, priority}: ItemProps){
    
    const [isDone, setIsDone] = useState<boolean>(done);

    const handleToggleDone = () => {
        setIsDone(prev => !prev);
    }

    return(

        <div className={`item ${isDone ? 'done' : ''}`}> 
            <p className='title'>{ title }

            {priority === 'low' && (
                <span className="priority low">
                    <FontAwesomeIcon icon={faAngleDown} style={{color: "#27619e",}} />
                </span>
            )}

            {priority === 'high' && (
                <span className="priority high">
                    <FontAwesomeIcon icon={faAnglesUp} style={{color: "rgb(224, 49, 49)",}} />
                </span>
            )}
            </p>

            <p>{ description }</p>
            
            <div className='flex'>
                <button className='btn' onClick={handleToggleDone}>
                    <FontAwesomeIcon icon={faCircleCheck} size='lg' style={{color: "rgb(99, 230, 190)", marginRight: '5px'}} />
                    { isDone ? 'dokončeno' : 'rozpracované' }
                </button>
                {/* <button className='btn'>
                    <FontAwesomeIcon icon={faCircleXmark} size="lg" style={{color: "rgb(224, 49, 49)", marginRight: '5px'}} />smazat
                </button> */}
            </div>
        </div>
    )
}