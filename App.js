import React, { Component } from 'react';
import { useState } from 'react';
import './styles/styles.css';
import image_logo from './images/contrato.png';
import cross_logo from './images/cross.png';



function Type_Input(){

    return(
        <>
            <div className='search_div'>
                <input type='text' autocapitalize="none" placeholder="Type your task here" autocorrect="off" className='type_task' class='seach_place'/>
                <button class="search_button"><img src={image_logo} alt="search image"></img></button>
            </div>
        </>
    );
}


export default function Main(){


      return(
        <>
         <div class="out_div">
            
            <Type_Input />
            
            <div class='task_outside'>
                <h2>TASKS</h2>
                <div class='list_div'>
                    <p>*Here will be the task list*</p>
                </div>
            </div>  
      
         </div>
        </>
      );
   
}
