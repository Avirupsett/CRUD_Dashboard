import  Search  from './components/search'
import React from 'react'

export default function SearchBox(props) {
  return (
        <Search align={"right"} title={props.title} 
        data={[
  { id: 1, name: 'Andy', age: 32 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Tom Hulk', age: 40 },
  { id: 4, name: 'Tom Hank', age: 50 },
  { id: 5, name: 'Audra', age: 30 },
  { id: 6, name: 'Anna', age: 68 },
  { id: 7, name: 'Tom', age: 34 },
  { id: 8, name: 'Tom Riddle', age: 28 },
  { id: 9, name: 'Bolo', age: 23 },
  { id: 10, name: 'Tom', age: 34 },
  { id: 11, name: 'Tom Riddle', age: 28 },
  { id: 12, name: 'Bolo', age: 23 },
  { id: 13, name: 'Tom', age: 34 },
  { id: 14, name: 'Tom Riddle', age: 28 },
  { id: 15, name: 'Bolo', age: 23 },
]}
getvalue={props.getvalue}
setvalue={props.setvalue}
/>

  )
}
