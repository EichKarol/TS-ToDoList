import './Item.css'

export type ItemData = {
    title: string;
    description: string;
    done: boolean;
}

export function Item({title, description, done}: ItemData){
    return(
        <div className={`box ${done ? 'done' : ''}`}>
            <p className='title'>{ title }</p>
            <p>{ description }</p>
        </div>
    )
}