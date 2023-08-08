import React, { Component } from 'react';
import { useState } from 'react';
import './styles/styles.css';
import image_logo from './images/contrato.png';
import cross_logo from './images/cross.png';



function Type_Input({addNewTask, setIputValue, inputValue}){
    return(
        <>
            <div className='search_div'>
                <input type='text' autoCapitalize="none" placeholder="Type your task here" autoCorrect="off" id="input_text" onChange={(e) => setIputValue(e.target.value)} value={inputValue}/>
                <button type='submit' onClick={() => addNewTask(document.getElementById('input_text').value)}><img src={image_logo} alt="search image"></img></button>
            </div>
        </>
    );
}




function Tasks({TaskList, deleteTask}) {
    // This function place each task with the TaskList, and deleteTask is the function where the user can delete the task
    
    console.log(TaskList)
    return(
        <>
            <div className='List_of_tasks'>
                {TaskList.length > 0 ?(
                       <ul>
                       {TaskList.map((task, index) => {
                           return <li key={index}> 
                            <div>                              
                                <button onClick={() => deleteTask(task[1])} className='button_task'>
                                    <img src={cross_logo} alt="search image"/>
                                </button><p>{task[0]}</p><input type='checkBox' className='checkBox_'/>
                            </div>
                           </li>
                       })}
                   </ul>) : <h3>There aren't any tasks yet!</h3> }
         
            </div>
        </>
    );
}

function WarningWindow({message, setWarningMessage}){
    if (message) {
        return(
            <>
                <div className='warring_mesage'>
                    <h3>{message} <button onClick={setWarningMessage}>X</button></h3>
                </div>
            </>
        );
    } else {
        return;
    }
}

function ClearWindow({setTasks}) {
    return(
        <>
        <div className='ClearTaskClass'>
            <button onClick={setTasks}>Clear Tasks</button>
        </div>
        </>
    );
}


export default function Main(){
    const [TaskList, setTasks] = useState([]);
    const [last_id, setID] = useState(0);
    const [inputValue, setIputValue] = useState("");
    const [warningMessage, setWarningMessage] = useState("")

    

    function addNewTask(task) {
        if (task.length < 3) {
            setWarningMessage("You have to write at least 4 characters!");

        } else if(task) {
            setTasks([...TaskList, [task, last_id]]);
            setID(last_id +1);
            setIputValue("");
        } else {

        }


    }

    function deleteTask(task_id) {
        const updatedTasks = TaskList.filter((task) => task[1] !== task_id);
        setTasks(updatedTasks);
    }
    

      return(
        <>
        
        <WarningWindow message={warningMessage} setWarningMessage={() => setWarningMessage(null)}/>
      
         <div className="out_div">
            <ClearWindow setTasks={() => setTasks([])}/>
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
