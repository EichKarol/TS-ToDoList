import { useState } from 'react'
import './App.css'

import { Item } from './components/Item/Item'
import { List } from './components/List/List';
import { Form } from './components/Form/Form';
import type { ItemData } from './components/Item/Item';

function App() {
  const [tasks, setTasks] = useState<ItemData[]>([
    
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
  ])
  
  return (
    <>
      {/* <Item 
        title="Learn TypeScript" 
        description="Understand the basics of TypeScript for better code quality." 
        done={false} 
      />
      <Item 
        title="Build a React App" 
        description="Create a simple React application using TypeScript." 
        done={true} 
      />

      <List title="Úkolníček" items={tasks} /> */}
      <Form />
      
    </>
  )
}

export default App
