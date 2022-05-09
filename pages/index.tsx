import type { NextPage } from 'next'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid';
//IMAGES
import Image from 'next/image'
import iconMoon from '../public/images/icon-moon.svg'
import iconSun from '../public/images/icon-sun.svg'
import iconCross from '../public/images/icon-cross.svg'
import { checkServerIdentity } from 'tls';

interface Todos {
  id: string;
  text: string;
  done: boolean;
}

const Home: NextPage = () => {

  const {theme,setTheme} = useTheme()
  const [input,setInput] = useState<string>("")
  const [todoList,setTodoList] = useState<Todos[]>([])
  const [filterTodo,setFilterTodo] = useState<Todos[]>([])
  


  const handleSubmit = (input:string) => {
    if (input) {
      const newTasks = [...todoList, { id: uuidv4(),text:input, done: false }];
      setTodoList(newTasks);
      setInput('')
    }
  }

  const handleDelete = (todo:Todos) => {
    const updateArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
    setTodoList(updateArr)
    setFilterTodo(updateArr)
  }

  const handleDone = (id:any)  => {
    const _items = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    setTodoList(_items);
    setFilterTodo(_items)
  };

  const filterDone = () => {
   const done =  todoList.filter(todo => todo.done === true);
   setFilterTodo(done)
  }

  const filterUnDone = () => {
    const undone = todoList.filter(todo => todo.done === false);
    setFilterTodo(undone)
  }


  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
  
      
    <div className="bg-desktop-light dark:bg-desktop-dark bg-cover bg-no-repeat h-72 w-full font-Josefin"></div>
      <div className='flex flex-col mt-[-16em] items-center'>
        <div className='flex justify-between items-center m-auto w-[500px]'>
            <h1 className='text-white text-4xl tracking-[.45em] font-bold'>TODO</h1>

            {theme === 'light' ?
              <Image
              onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}
              src={iconMoon}
              alt="lightmode"
              /> 
            : <Image
              onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}
              src={iconSun}
              alt="lightmode"
              />
            }

        </div>
        <div className='flex'>
        <input 
          value={input}
          onKeyDown={(e) => {if(e.key === 'Enter'){handleSubmit(input);}}}
          onChange={(e)=>setInput(e.target.value)}
          type="text"
          className="w-[500px] outline-none mt-12 mb-8 p-4 rounded-lg"
          placeholder='Create a new todo...'/>
        </div>


        <div className='wrapper rounded-lg'>
          {filterTodo.length ?
          filterTodo.map((todo,index)=>{
            return ( 
            <div key={index} className="flex justify-between border-b-[1px] border-gray-300 w-[500px] p-4 todo">
              <label className='flex align-middle'> 
                <input checked={todo.done} type="checkbox" id={`todo${index}`}  onClick={handleDone} className="checkbox" onChange={e => {}}></input>
                <p className={todo.done ? "line-through opacity-50" : ""}>{todo.text}</p>
              </label>
              <div className='image'>
                <Image
                onClick={()=>{handleDelete(todo)}}
                src={iconCross}
                className="cursor-pointer absolute right-1"
                alt={`delete${todo}`}
                height={2}
                width={20}
                />
              </div>
            </div>
            );
          })
          : 
            todoList.map((todo,index)=>{
              return ( 
              <div key={index} className="flex justify-between border-b-[1px] border-gray-300 w-[500px] p-4 todo">
                <label className='flex align-middle'> 
                  <input type="checkbox" id={`todo${index}`}  onClick={() => handleDone(todo.id)} className="checkbox"></input>
                  <p className={todo.done ? "line-through opacity-50" : ""}>{todo.text}</p>
                </label>
                <div className='image'>
                  <Image
                  onClick={()=>{handleDelete(todo)}}
                  src={iconCross}
                  className="cursor-pointer absolute right-1"
                  alt={`delete${todo}`}
                  height={2}
                  width={20}
                  />
                </div>
              </div>
              );
            })
}
            <div className='flex justify-between p-2 w-[500px] '>
              <div>
                <p className='text-filter'>{todoList.length} items left</p>
              </div>
              <div className='flex'>
                <p className='text-filter' onClick={()=> setFilterTodo([])} >All</p>
                <p className='text-filter' onClick={()=> {filterUnDone()} }>Active</p>
                <p className='text-filter' onClick={()=> {filterDone()}}>Completed</p>
              </div>
              <div>
                <p className='text-filter'>Clear Completed</p>
              </div>
            </div>
         
        </div>
        
      </div>
    </>
  )
}

export default Home
