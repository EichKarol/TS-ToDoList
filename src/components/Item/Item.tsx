import './Item.css'

export type ItemData = {
    title: string;
    description: string;
    done: boolean;
}

type ItemProps = ItemData

export function Item({title, description, done}: ItemProps){
    return(
        <div className={done ? 'item done' : 'item'}> 
            <p className='title'>{ title }</p>
            <p>{ description }</p>
        </div>
    )
}