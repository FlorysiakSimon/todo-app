import type { NextPage } from 'next'
import { useState,useEffect, MouseEventHandler } from 'react'
import { useTheme } from 'next-themes'
import Head from 'next/head'
//IMAGES
import Image from 'next/image'
import iconMoon from '../public/images/icon-moon.svg'
import iconSun from '../public/images/icon-sun.svg'
import iconCross from '../public/images/icon-cross.svg'
import iconCheck from '../public/images/icon-check.svg'


const Home: NextPage = () => {

  const {theme,setTheme} = useTheme()
  const [input,setInput] = useState<string>("")
  const [todoList,setTodoList] = useState<string[]>([])

  const handleSubmit = (e:any) => {

    setTodoList([
      input,
      ...todoList
    ])
    setInput('')
  }

  const handleDelete = (todo:any) => {
    const updateArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
    
    setTodoList(updateArr)
  }


  function search(e:any) {
    if(e.key === 'Enter') {
        handleSubmit(e.target.value);        
    }
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
        {/* <input type="checkbox" className="w-6 h-6 rounded-full"  /> */}
        <input value={input} onKeyDown={search} onChange={(e)=>setInput(e.target.value)} type="text" className="w-[500px] outline-none mt-12 mb-8 p-2 rounded-sm" placeholder='Create a new todo...'/>
        </div>


        <div className='bg-white rounded-sm'>
          {todoList.length >=1 ? 
            todoList.map((todo,index)=>{
              return ( <div key={index} className="flex bg-white border-b-[1px] border-gray-300 w-[500px] p-4">
                <input type="checkbox" className="w-6 h-6 rounded-full checked:bg-red-400 mx-2"></input>
                <p >{todo}</p>
                  <Image
                  onClick={(e)=>{e.preventDefault();handleDelete(todo)}}
                  src={iconCross}
                  className="cursor-pointer"
                  alt={`delete${todo}`}
                  />
                </div>
              );
            })
          : undefined}
          {todoList.length >=1 ? (
            <div className='flex justify-between m-2'>
              <div>
                <p>{todoList.length} items left</p>
              </div>
              <div className='flex '>
                <p className='mx-1'>All</p>
                <p className='mx-1'>Active</p>
                <p className='mx-1'>Completed</p>
              </div>
              <div>
                <p>Clear Completed</p>
              </div>
            </div>
            
          ) : null}
        </div>
        
      </div>
    </>
  )
}

export default Home
