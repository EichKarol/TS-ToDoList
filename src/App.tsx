import { useState } from 'react'
import './App.css'

import { Item } from './components/Item/Item'

function App() {
  
  return (
    <>
      <Item 
        title="Learn TypeScript" 
        description="Understand the basics of TypeScript for better code quality." 
        done={false} 
      />
      <Item 
        title="Build a React App" 
        description="Create a simple React application using TypeScript." 
        done={true} 
      />
    </>
  )
}

export default App
