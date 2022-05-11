import { Todos } from '../pages/index';
import Image from 'next/image'
import iconCross from '../images/icon-cross.svg'

type Props = {
    todo:Todos;
    handleDone:(id:string) => void;
    handleDelete:(todo:Todos) => void;
}

export const Task:React.FC<Props> = ({todo,handleDone,handleDelete}) => {

return (
    <>
        <div className="mdinput flex justify-between border-b-[1px] border-gray-300 w-[500px] p-4 todo">
                <label className='flex align-middle'> 
                  <input type="checkbox" checked={todo.done} onChange={() => handleDone(todo.id)} className="checkbox"></input>
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
    </>  
);
}