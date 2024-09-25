
import React,{useState} from "react";
function ToDoList(){

    const [tasks, setTasks] = useState([]); 
    const [newTask, setNewTasks] = useState("");


    function handleInputChange(event){
        setNewTasks(event.target.value);

    };

    function addTask(){
       if(newTask.trim() !== ""){
        setTasks( t => [...t, newTask]);
        setNewTasks("");
       }
    };

    function deleteTask(index){
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);


    };

    function moveTaskUp(index){
       if(index > 0){
        const updateTasks = [...tasks];
        
        [updateTasks[index], updateTasks[index -1]]= 
        [updateTasks[index -1], updateTasks[index]];
        setTasks(updateTasks)
        setTasks(updateTasks)
       }

    };

    function moveTaskDown(index){
       if(index < tasks.length-1){
        const updateTasks = [...tasks];
        [updateTasks[index], updateTasks[index +1]]= 
        [updateTasks[index +1], updateTasks[index]];
        setTasks(updateTasks)

       }

    };

    return(
        <>
         
       <div className="to-do-list">
          <h1>To-Do-List</h1>
          <div>
            <input type="text" 
                   placeholder="Enter a Tasks...."
                   value={newTask}
                   onChange={handleInputChange}/>

            <button className="add-button" onClick={addTask}>Add</button>
           </div>

         

          <ol>
              {tasks.map((task, index) => 
                  <li key={index}>
                      <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}> <img src="src/assets/bx-trash.svg" alt="Delte" /> </button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}> <img src="src/assets/bx-up-arrow-alt.svg" alt="UP" /> </button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}> <img src="src/assets/bx-down-arrow-alt.svg" alt="Down" /> </button>
                  </li>
                )}
          </ol>
        </div>
        
        </>

    );

}
export default ToDoList;