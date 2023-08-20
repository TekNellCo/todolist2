
////////USE IN COMBINATION WITH RADIO SO THEY DONT ALL HAVE THE SAME NAME
let priority = 0;
 ////////////CREATES A TASK AND INPUT INTERFACE
export function taskCreator(headerContainer,addTaskContainer){
    let inputTaskContainer = document.createElement('div');
    let taskInputText = document.createElement('input');
    let radioContainer = document.createElement('div');
    let labelLow = document.createElement('label');
    let inputLow = document.createElement('input');
    let labelMed = document.createElement('label');
    let inputMed = document.createElement('input');
    let labelHigh = document.createElement('label');
    let inputHigh = document.createElement('input');
    let confirmBtn = document.createElement('button');
    let deleteBtn = document.createElement('button')

    inputTaskContainer.className = "inputtaskcontainer";
    taskInputText.className = "task";
    radioContainer.className ="radiocontainer";
    confirmBtn.className ="confirm";
    deleteBtn.className="delete";

    labelLow.textContent ="Low";
    labelMed.textContent ="Med";
    labelHigh.textContent ="High";
    confirmBtn.textContent="O"
    deleteBtn.textContent="X"

    inputLow.setAttribute('type','radio');
    inputLow.setAttribute('name',`priority${priority}`);
    inputLow.checked = true;
    inputMed.setAttribute('type','radio');
    inputMed.setAttribute('name',`priority${priority}`);
    inputHigh.setAttribute('type','radio');
    inputHigh.setAttribute('name',`priority${priority}`);
    console.log(priority)

    priority++

    headerContainer.insertBefore(inputTaskContainer, addTaskContainer);
    inputTaskContainer.append(taskInputText);
    inputTaskContainer.append(radioContainer);
    radioContainer.append(labelLow);
    radioContainer.append(inputLow);
    radioContainer.append(labelMed);
    radioContainer.append(inputMed);
    radioContainer.append(labelHigh);
    radioContainer.append(inputHigh);
    radioContainer.append(confirmBtn);
    radioContainer.append(deleteBtn);

    /////////Deletes the task element
    deleteBtn.addEventListener('click',deleteTask);
    function deleteTask(){
        inputTaskContainer.remove();
    }

    /////////////Confirm button click and "Enter" on keyboard press run SETTASK function
    confirmBtn.addEventListener('click',setTask)
    document.addEventListener('keydown',(e)=>{
        if(taskInputText !== "" && e.key === "Enter"){
            setTask();
        }else{}
    })
           ////////CREATES TASK DIV 
    function setTask(){
        let taskItem = document.createElement('div');
        let taskInfo = document.createElement('p');
        let div = document.createElement('div');
        let taskCheckBox = document.createElement('input');
        let taskEditBtn = document.createElement('button');

        taskItem.className = "taskitem";
        taskCheckBox.className ="checkbox";
        taskEditBtn.className="edittaskbtn";

        taskCheckBox.setAttribute('type',"checkbox");

        taskInfo.textContent = taskInputText.value;
        taskEditBtn.textContent = "E";

        inputTaskContainer.replaceWith(taskItem);
        taskItem.append(taskInfo);
        taskItem.append(div);
        div.append(taskCheckBox);
        div.append(taskEditBtn);
          //////////////SWITCHES TO TASK INPUT
        taskEditBtn.addEventListener('click',()=>{
            taskItem.replaceWith(inputTaskContainer);
        })

        let color;

       if(inputMed.checked === true){
        taskItem.style.backgroundColor = "orange"
        color = "orange";
       }else if(inputHigh.checked === true){
        taskItem.style.backgroundColor = "red"
        color = "red";
       }else{
        taskItem.style.backgroundColor = "yellow"
        color = "yellow";
       }




       taskCheckBox.addEventListener('change',()=>{
        taskCheckBox.checked === true ? taskItem.style.backgroundColor = "green" : taskItem.style.backgroundColor = color
       })

    }

}
