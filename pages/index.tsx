import type { NextPage } from 'next'
import { useState,useEffect } from 'react'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid';
//COMPONENTS
import { Task } from '../components/Task';
//IMAGES
import Image from 'next/image'
import iconMoon from '../public/images/icon-moon.svg'
import iconSun from '../public/images/icon-sun.svg'


export interface Todos {
  id: string;
  text: string;
  done: boolean;
}

const Home: NextPage = () => {

  const {theme,setTheme} = useTheme()
  const [input,setInput] = useState<string>("")
  const [todoList,setTodoList] = useState<Todos[]>([])
  const [filterTodo,setFilterTodo] = useState<Todos[]>([])
  const [selected,setSelected] = useState<string>("all")

  useEffect(() => {
    setFilterTodo(todoList)
  }, [todoList]);
  
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
  }

  const handleDone = (id:string)  => {
    let updatedTodos = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodoList(updatedTodos);
  };

  const filterDone = () => {
    const done =  todoList.filter(todo => todo.done === true);
    console.log(done);
    if(!done.length){
      alert('There is no completed tasks')
    }
    setFilterTodo(done)
  }

  const filterUnDone = () => {
    const undone = todoList.filter(todo => todo.done === false);
    if(!undone.length){
      alert('There is no active tasks')
    }
    setFilterTodo(undone)
  }

  const removeDone = () =>{
    const remove = todoList.filter(todo => todo.done === false);
    setTodoList(remove)
    
  }

  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
  
      
    <div className="background bg-cover bg-no-repeat h-72 w-full font-Josefin"></div>
      <div className='flex flex-col mt-[-16em] items-center'>
        <div className='md flex justify-between items-center m-auto w-[500px]'>
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
        <div className='md flex'>
        <input 
          value={input}
          onKeyDown={(e) => {if(e.key === 'Enter'){handleSubmit(input);}}}
          onChange={(e)=>setInput(e.target.value)}
          type="text"
          className="w-[500px]  outline-none mt-12 mb-8 p-4 rounded-lg"
          placeholder='Create a new todo...'/>
        </div>


        <div className='md wrapper rounded-lg'>
          {filterTodo.length ?
            filterTodo.map((todo,index)=>{
              return ( 
                <Task key={index} todo={todo} handleDelete={handleDelete} handleDone={handleDone} />
              );
            })
          : todoList.map((todo,index)=>{
              return ( 
                <Task key={index} todo={todo} handleDelete={handleDelete} handleDone={handleDone} />
              );
            })
          }
          <div className='mdinput flex justify-between p-2 w-[500px] '>
              <div>
                <p className='text-filter'>{todoList.length} items left</p>
              </div>
              <div className='flex filterdata'>
                <p 
                  className={selected === "all" ? "text-filter text-[#3F7EFD]" : "text-filter"} 
                  onClick={()=> {setFilterTodo(todoList);setSelected('all')}} >
                  All
                </p>
                <p 
                className={selected === "active" ? "text-filter text-[#3F7EFD]" : "text-filter"} 
                onClick={()=> {filterUnDone();setSelected('active')}}>
                  Active
                </p>
                <p 
                className={selected === "completed" ? "text-filter text-[#3F7EFD]" : "text-filter"} 
                onClick={()=> {filterDone();setSelected('completed')}}>
                  Completed
                </p>
              </div>
              <div>
                <p className='text-filter' onClick={()=> removeDone()}>Clear Completed</p>
              </div>
          </div>
        </div>

        </div>
        <div className='wrapper displayfilterdata hidden md m-auto p-2 mt-4 w-[500px] rounded-lg'>
          <div className='flex m-auto '>
            <p 
              className={selected === "all" ? "text-filter text-[#3F7EFD]" : "text-filter"} 
              onClick={()=> {setFilterTodo(todoList);setSelected('all')}} >
              All
            </p>
            <p 
            className={selected === "active" ? "text-filter text-[#3F7EFD]" : "text-filter"} 
            onClick={()=> {filterUnDone();setSelected('active')}}>
              Active
            </p>
            <p 
            className={selected === "completed" ? "text-filter text-[#3F7EFD]" : "text-filter"} 
            onClick={()=> {filterDone();setSelected('completed')}}>
              Completed
            </p>
          </div>     
        </div>
    </>
  )
}

export default Home
