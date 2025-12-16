import { useState } from 'react'
import './App.css'

import { Item } from './components/Item/Item'
import { List } from './components/List/List';
import { Form } from './components/Form/Form';

import type { ItemData } from './components/Item/Item';
import type { FormData } from './components/Form/Form';

const tasksData: ItemData[] = [
    
  {
     title: 'Příprava prezentace',
     description: 'Vytvořit prezentaci pro páteční meeting s klientem.',
     done: true,
      priority: 'high',
  },
  {
     title: 'Kontrola e-mailů',
     description: 'Projít doručenou poštu a odpovědět na důležité zprávy.',
     done: false,
     priority: 'normal'
  },
  {
     title: 'Plánování kampaně',
     description: 'Naplánovat marketingovou kampaň na příští měsíc.',
     done: false,
    priority: 'low'
  },
  {
     title: 'Testování aplikace',
     description: 'Otestovat nové funkce a nahlásit případné chyby.',
      done: false,
      priority: 'normal'
  }
  ]

function App() {
  const [tasks, setTasks] = useState<ItemData[]>([...tasksData])

  const handleFormSubmit = (newTask: FormData) => {
    setTasks([
      {
        ...newTask,
        done: false,
       },
      ...tasks
    ]);
  }
  
    
  return (
    <>
    <Form onFormSubmit={handleFormSubmit}/>
    
      <List title="Úkolníček" items={tasks} />
      
      
    </>
  )
}

export default App
