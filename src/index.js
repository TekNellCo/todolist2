import '../dist/style.css';
import { taskCreator} from './js/taskCreator';


let headerAppend = document.querySelector('.headerappend');
let headerSubmit = document.querySelector('.headersubmit');
let headerInputText = document.querySelector('.headerinput');

////////////GIVES 'SUBMIT' BTN FUNCTIONALITY,AND RUNS HEADER CREATOR
headerSubmit.addEventListener('click',(e)=>{
    if(headerInputText.value !== ""){
        e.preventDefault();
        headerCreator();
    }else{}
})

//////////CREATES HEADER DIV AND BTNS WITH FUNCTIONALITY
function headerCreator(){

    let headerContainer = document.createElement('div');
    let header = document.createElement('div');
    let headerText = document.createElement('p');
    let headerDeleteBtn = document.createElement('button');
    let headerEditBtn = document.createElement('button');
    let addTaskContainer = document.createElement('div');
    let addTaskBtn = document.createElement('button');

    headerEditBtn.className = "headereditbtn";
    headerContainer.className = "headercontainer";
    header.className = "header";
    headerDeleteBtn.className = "headerdeletebtn";
    addTaskContainer.className = "addtaskcontainer";
    addTaskBtn.className = "addtaskbtn";

    headerText.textContent = headerInputText.value;
    headerDeleteBtn.textContent = "X";
    headerDeleteBtn.style.display = "none"
    headerEditBtn.textContent = "E";
    headerInputText.value = "";
    addTaskBtn.innerText = "+";


    headerAppend.append(headerContainer);
    headerContainer.append(header);
    header.append(headerText);
    header.append(headerEditBtn);
    header.append(headerDeleteBtn);
    headerContainer.append(addTaskContainer);
    addTaskContainer.append(addTaskBtn);

         ////////UNHIDES OR HIDES HEADER DELETE BTN
    headerEditBtn.addEventListener('click',()=>{
        if(headerDeleteBtn.style.display === "none"){
            headerDeleteBtn.style.display = "block"
        }else{
            headerDeleteBtn.style.display = "none"
        }
    })
        ////////REMOVES THE HEADER CONTAINER
    headerDeleteBtn.addEventListener('click',()=>{
        headerContainer.remove();
    })
        ////////RUNS TASKCREATOR FUNCTION WITH INFO OF PARENT CONTAINER TO APPEND TO AND CHILDCONTAINER TO APPEND BEFORE
    addTaskBtn.addEventListener('click',()=>{

        taskCreator(headerContainer,addTaskContainer)
        
    })


}


