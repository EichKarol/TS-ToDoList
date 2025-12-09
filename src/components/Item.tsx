import './Item.css'

type ItemProps = {
    title: string;
    description: string;
    done: boolean;
}

export function Item({title, description, done}: ItemProps){
    return(
        <div className={`box ${done ? 'done' : ''}`}>
            <p className='title'>{ title }</p>
            <p>{ description }</p>
        </div>
    )
}