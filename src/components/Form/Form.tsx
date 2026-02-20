import { useState } from 'react';
import './Form.css'

type Priority = 'low' | 'normal' | 'high';

export type FormData = {
    title: string;
    description: string;
    priority: Priority;
}

export type FormProps = {
    onFormSubmit: (newTask: FormData) => void;
}

export function Form({onFormSubmit}: FormProps) {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('odesláno');
        console.log(formData);
        onFormSubmit(formData);
        clearForm();
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

    const clearForm = () => {
        setFormData({
            title: '',
            description: '',
            priority: 'normal',
        })
    }


    return (
    <div>
        <h2 className='form-title'>Nový úkol</h2>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor='title'>Název</label>
            <input 
              type="text" 
              id='title'
              name="title" 
              value={formData.title}
              onChange={handleChange}
              />

            <label htmlFor='priority'>Priorita</label>
            <select 
              name="priority" 
              id="priority"
              value={formData.priority}
              onChange={handleChange}
            > 
                <option value="medium">normal</option>
                <option value="low">low</option>
                <option value="high">high</option>
            </select>

            <label htmlFor='description'>Popis</label>
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