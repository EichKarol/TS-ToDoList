import './Item.css'

export type ItemData = {
    title: string;
    description: string;
    done: boolean;
    priority: 'low' | 'normal' | 'high';
}

type ItemProps = ItemData

export function Item({title, description, done, priority}: ItemProps){
    return(
        <div className={done ? 'item done' : 'item'}> 
            <p className='title'>{ title }</p>

            {priority === 'low' && (
                <span className="priority low"> ↓</span>
            )}

            {priority === 'high' && (
                <span className="priority high"> ↑↑</span>
            )}

            <p>{ description }</p>
            
        </div>
    )
}