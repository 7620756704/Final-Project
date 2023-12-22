import React, { useState } from 'react'
import '../App.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

  
  
  
    
  
    const handleAddTask = () => {
      if (newTask.trim() !== "") {
        setTasks([...tasks,{text: newTask.trim(),checked: false }]);
        setNewTask("");
        
      }
      else{
        alert("Add The Task ........")
      }
    };
    const handleComplete = (index) => {
        const newTasks = [...tasks];
        newTasks[index].checked = !newTasks[index].checked;
        setTasks(newTasks);
      };


  return (
    <div>
      <h1 className='app-heading'>Task - List</h1>
      
      
     <div className='input-container'> 
     <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className='input-box-todo'
        placeholder='add task here'
      />
      <button className='add-btn' onClick={handleAddTask}>+</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className = 'list-item'
            style={{backgroundColor: task.checked ? "rgb(37 211 102)" : 'white'}}
          >
            <div>
              {task.text}
              <span className='icons'> 
              <i class="fa-solid fa-check-double" checked={task.checked}  onClick={() => handleComplete(index)} ></i>  
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
    )
}

export default TaskList