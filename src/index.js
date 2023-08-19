


let headerAppend = document.querySelector('.headerappend');
let headerSubmit = document.querySelector('.headersubmit');
let headerInputText = document.querySelector('.headerinput');


headerSubmit.addEventListener('click',(e)=>{
    if(headerInputText.value !== ""){
        e.preventDefault();
        headerCreator();
    }else{}
})


function headerCreator(){

    let headerContainer = document.createElement('div');
    let header = document.createElement('div');
    let headerText = document.createElement('p');
    let addTaskContainer = document.createElement('div');
    let addTaskBtn = document.createElement('button');

    headerContainer.className = "headercontainer";
    header.className = "header";
    addTaskContainer.className = "addtaskcontainer";
    addTaskBtn.className = "addtaskbtn"

    headerText.textContent = headerInputText.value;
    headerInputText.value = ""
    addTaskBtn.innerText = "+"

    headerAppend.append(headerContainer);
    headerContainer.append(header);
    header.append(headerText);
    headerContainer.append(addTaskContainer);
    addTaskContainer.append(addTaskBtn);

}