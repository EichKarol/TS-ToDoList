import './Item.css'

type ItemProps = {
    title: string;
    description: string;
    done: boolean;
}

export type ItemData = ItemProps

export function Item({title, description, done}: ItemProps){
    return(
        <div className={done ? 'item done' : 'item'}> 
            <p className='title'>{ title }</p>
            <p>{ description }</p>
        </div>
    )
}