
import { Item } from '../Item/Item';
import { SearchBar } from '../SearchBar/SearchBar';
import type { ItemData } from '../Item/Item';

interface ListProps {
    title: string;
    items: ItemData[];
    priorityFilter: 'all' | 'low' | 'normal' | 'high';
    onPriorityFilterChange: (priority: 'all' | 'low' | 'normal' | 'high') => void;
}

export function List({title, items, priorityFilter, onPriorityFilterChange}: ListProps) {
    return(
        <div>

        <SearchBar priorityFilter={priorityFilter} onPriorityFilterChange={onPriorityFilterChange}/>

            <h2>{ title }</h2>

            
            {items.map((item) => (
                <Item 
                    key={item.title}  
                    title={item.title}
                    description={item.description}
                    done={item.done}
                    priority={item.priority}
                />
            ))}
        </div>
    )
}