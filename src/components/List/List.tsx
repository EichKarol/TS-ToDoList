
type ListProps = {
    title: string;
    items: ItemData[];
}

export function List({title, items}: ListProps) {
    return(
        <div>
            <h2>{ title }</h2>
            
        </div>
    )
}