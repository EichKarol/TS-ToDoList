import { useState } from 'react';
import './Form.css'

type Priority = 'low' | 'normal' | 'high';

type FormData = {
    title: string;
    description: string;
    priority: Priority;
}

export function Form() {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('odesláno');
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        console.log(formData);
    }

    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        priority: 'normal',
    })


    return (
    <div>
        <h2>Formulář pro přidání úkolu</h2>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor='title'>Název úkolu</label>
            <input 
              type="text" 
              id='title'
              name="title" 
              value={formData.title}
              onChange={handleChange}
              />

            <label htmlFor='priority'>Priorita úkolu</label>
            <select 
              name="priority" 
              id="priority"
              value={formData.priority}
              onChange={handleChange}
            > 
                <option value="low">low</option>
                <option value="medium">normal</option>
                <option value="high">high</option>
            </select>
            
            <label htmlFor='description'>Popis úkolu</label>
            <textarea 
              id='description'
              name="description" 
              value={formData.description}
              onChange={handleChange}
            />
           
            <button className='FormBtn' type="submit">🖋️ Přidat úkol</button>
        </form>
    </div>
    
)}