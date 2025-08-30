import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Todolist, Input, Button, Listitem, Trash, Check, Divid } from "./style.js";
import Logo from '../src/img/todolistimg.png'
import Log from '../src/img/logoimg.png'
function App() {
  const [list, setList] = useState([]);
  const [inputtask, setinputtask] = useState('');
  const [ time, settime]= useState('')

  function inputgchange(event) {
    setinputtask(event.target.value)
  }
  function buttonclic() {
    if(inputtask){
    setList([...list, { id: uuidv4(), task: inputtask, finished: false }])
  }
  const horas = new Date().getHours()
  const minutos =new Date().getMinutes()
  const hour = `${horas}:${minutos}`
settime(hour)
}

  function finishTask(id) {
    const newlist = list.map(item =>
      item.id === id ? { ...item, finished: !item.finished } : item
    )
    setList(newlist)
  }
  function deletitem(id) {
    const newlist = list.filter(item => item.id !== id)
    setList(newlist)
  }


  return (
    <Container>
      <img src={Log} alt="" />
      <Todolist>

        <Input onChange={inputgchange} placeholder="Quais Tarifas De Hoje?" />
        
        <Button onClick={buttonclic}>adicionar</Button>
        <ul>
          {
            list.length > 0 ? (

              list.map((item) => (

                <Listitem $isfinished={item.finished} key={item.id}>
                  <div>
                    <div>
                  <Check onClick={() => finishTask(item.id)} />
                  <li>{item.task}</li>
                    </div>
                  <Trash onClick={() => deletitem(item.id)} />
                  </div>
                  <div className='time'>
                    <Divid><p>adicionado as: <span>{time}</span></p></Divid>
                  </div>
                </Listitem>
              ))
            ) : (
              <h3>nao ha itens na lista</h3>
            )}
        </ul>
      </Todolist>
    </Container>
  )
}
export default App
