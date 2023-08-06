import React, { Component } from 'react';
import { useState } from 'react';
import './styles/styles.css';
import image_logo from './images/contrato.png';
import cross_logo from './images/cross.png';



function Type_Input({addNewTask, setIputValue, inputValue}){
    return(
        <>
            <div className='search_div'>
                <input type='text' autoCapitalize="none" placeholder="Type your task here" autoCorrect="off" className='seach_place' id="input_text" onChange={(e) => setIputValue(e.target.value)} value={inputValue}/>
                <button className="search_button" type='submit' onClick={() => addNewTask(document.getElementById('input_text').value)}><img src={image_logo} alt="search image"></img></button>
            </div>
        </>
    );
}




function Tasks({TaskList, deleteTask}) {
    console.log(TaskList)
    return(
        <>
            <div className='List_of_tasks'>
                <ul>
                    {TaskList.map((task, index) => {
                        return <li key={index}>{task[0]} <button onClick={() => deleteTask(task[1])} className='button_task'>X</button></li>
                    })}
                </ul>
            </div>
        </>
    );
}


export default function Main(){
    const [TaskList, setTasks] = useState([]);
    const [last_id, setID] = useState(0);
    const [inputValue, setIputValue] = useState("");

    function addNewTask(task) {
        if (task) {
            setTasks([...TaskList, [task, last_id]]);
            setID(last_id +1);
            setIputValue("");
        }


    }

    function deleteTask(task_id) {
        const NewArray = TaskList.splice(task_id, 1)
        setTasks(NewArray);
    }
    

      return(
        <>
         <div className="out_div">
            
            <Type_Input addNewTask={addNewTask} setIputValue={setIputValue} inputValue={inputValue}/>
            
            <div className='task_outside'>
                <h2>TASKS</h2>
                <div className='list_div'>
                    <Tasks TaskList={TaskList} deleteTask={deleteTask}/>
                </div>
            </div>  
      
         </div>
        </>
      );
   
}
