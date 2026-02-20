

export function SearchBar({priorityFilter, onPriorityFilterChange}) {

    const priorities = ['Low', 'Normal', 'High']

    const handleFilterClick = (priority: string) => {
        const priorityLower = priority.toLowerCase() as 'low' | 'normal' | 'high';
        onPriorityFilterChange(priorityFilter === priorityLower ? 'all' : priorityLower);
    }

    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
            
            <button 
                className={`btn ${priorityFilter === 'all' ? 'active' : ''}`}
                onClick={() => onPriorityFilterChange('all')}
            >
                Vše
            </button>

            {priorities.map(priority => (
                <button 
                    key={priority} 
                    className={`btn ${priorityFilter === priority.toLowerCase() ? 'active' : ''}`}
                    onClick={() => handleFilterClick(priority)}
                >
                    {priority}
                </button>
            ))}

        </div>
    )
}