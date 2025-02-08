//  Toggling Sidebar

const toggleSidebar = document.querySelector('.toggleSidebar');
const sidebar = document.querySelector('.sidebar');
const appsetting = document.querySelector('.appsetting');
const sidebarMenus = document.querySelector('.sidebar-menus');

let sidebarHidden = true;

toggleSidebar.addEventListener('click', () => {

    if (sidebarHidden) {
        toggleSidebar.style.transform = 'rotate(180deg)';
        sidebar.style.width = '0';
        appsetting.style.display = 'none';
        sidebarMenus.style.display = 'none';
        sidebarHidden = false;

    } else {
        toggleSidebar.style.transform = 'rotate(0deg)';
        appsetting.style.display = 'flex';
        sidebarMenus.style.display = 'flex';
        sidebar.style.width = '250px';
        sidebarHidden = true;
    }
})





/**********************************************************************/


// current date 

const currentDate = document.querySelector('.currentDate');

const date = new Date();
currentDate.textContent = date.toDateString();






/**********************************************************************/

// Creating new task

const addTask = document.querySelector('.addtask');
const taskbar = document.querySelector('.taskbar');
const createTaskPopup = document.querySelector('.createTaskPopup');


addTask.addEventListener('click', () => {


    if (createTaskPopup.style.visibility == 'hidden') {

        createTaskPopup.style.visibility = 'visible'
        // Fetching user input
        let submitTask = document.querySelector('.submit-task');

        submitTask.addEventListener('click', createNewTask);

    } else {
        createTaskPopup.style.visibility = 'hidden';
    }
    
    taskTitle.value = '';
    taskContent.value = '';
})





function createNewTask() {


    let taskTitle = document.querySelector('.task-title').value;
    let taskContent = document.querySelector('.task-content').value;
    
    if (!taskTitle.trim() || !taskContent.trim()) {
        alert("Plese enter a valid input");
        createTaskPopup.style.visibility = 'hidden';
        return
    }
    
    createTaskPopup.style.visibility = 'hidden';


    // Creating the parent div 'card' with attributes
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('tabindex', '0');

    // Creating the card-details div
    const cardDetails = document.createElement('div');
    cardDetails.classList.add('card-details');

    // Creating the title paragraph field
    const title = document.createElement('p');
    title.classList.add('text-title');
    title.textContent = taskTitle;


    // Creating the task content field
    const content = document.createElement('p');
    content.classList.add('text-body');
    content.textContent = taskContent;

    cardDetails.appendChild(title);
    cardDetails.appendChild(content);
    card.appendChild(cardDetails);

    taskbar.appendChild(card);


    // Clearing the input field after submission

    document.querySelector('.task-content').value = '';
    document.querySelector('.task-title').value = '';
    return;

}



/**********************************************************************/