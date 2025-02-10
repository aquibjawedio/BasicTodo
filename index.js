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

    createTaskPopup.style.visibility = 'visible'
    let submitTask = document.querySelector('.submit-task');

    submitTask.addEventListener('click', createNewTask);

    taskTitle.value = '';
    taskContent.value = '';
})

// Closing task pop up

const closeTaskPopup = document.querySelector('.close-task-popup');

closeTaskPopup.addEventListener('click', () => {
    createTaskPopup.style.visibility = 'hidden'
    console.log("close clicked");
<<<<<<< HEAD

=======
    
>>>>>>> 8909f2723036dd481f1035aebbb9d63a2846a1d2
})





// Creating a new task

function createNewTask() {


    // Fetching user input
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



// Sidebar Menus

<<<<<<< HEAD
const backlog = document.querySelector('.backlog');
const completed = document.querySelector('.completed');

const todayTask = document.querySelector('.today-task');
const backlogTask = document.querySelector('.backlog-task');
const completedTask = document.querySelector('.completed-task');

const sectionHeading = document.querySelector('.section-heading');
=======
const backlog= document.querySelector('.backlog');
const completed = document.querySelector('.completed');

const todayTask = document.querySelector('.today-task');
const backlogTask= document.querySelector('.backlog-task');
const completedTask = document.querySelector('.completed-task');

>>>>>>> 8909f2723036dd481f1035aebbb9d63a2846a1d2


todayTask.addEventListener('click', () => {
    taskbar.style.zIndex = '1';
    backlog.style.zIndex = '-1';
    completed.style.zIndex = '-1';
    todayTask.style.backgroundColor = '#2a2a2a';

    backlogTask.style.backgroundColor = 'transparent';
    completedTask.style.backgroundColor = 'transparent';
    addTask.style.visibility = 'visible';

<<<<<<< HEAD
    todayTask.style.color = '#ffffff'
    completedTask.style.color = '#a1a1a1';
    backlogTask.style.color = '#a1a1a1';

    todayTask.style.borderLeft = '4px solid #007bff'
    backlogTask.style.borderLeft = 'none'
    completedTask.style.borderLeft = 'none'

    sectionHeading.textContent = "Todays Task";

=======
    todayTask.style.borderLeft = '4px solid #007bff'
    backlogTask.style.borderLeft = 'none'
    completedTask.style.borderLeft = 'none'
>>>>>>> 8909f2723036dd481f1035aebbb9d63a2846a1d2
});



backlogTask.addEventListener('click', () => {
    taskbar.style.zIndex = '-1';
    backlog.style.zIndex = '1';
    completed.style.zIndex = '-1';
    todayTask.style.backgroundColor = 'transparent';
    backlogTask.style.backgroundColor = '#2a2a2a';
    completedTask.style.backgroundColor = 'transparent';
    addTask.style.visibility = 'hidden';
    createTaskPopup.style.visibility = 'hidden';

<<<<<<< HEAD
    backlogTask.style.color = '#ffffff'
    todayTask.style.color = '#a1a1a1'
    completedTask.style.color = '#a1a1a1'

    backlogTask.style.borderLeft = '4px solid #007bff'
    todayTask.style.borderLeft = 'none'
    completedTask.style.borderLeft = 'none'

    
    sectionHeading.textContent = "Backlog Tasks";
=======
    backlogTask.style.borderLeft = '4px solid #007bff'
    todayTask.style.borderLeft = 'none'
    completedTask.style.borderLeft = 'none'
>>>>>>> 8909f2723036dd481f1035aebbb9d63a2846a1d2
});




completedTask.addEventListener('click', () => {
    taskbar.style.zIndex = '-1';
    backlog.style.zIndex = '-1';
    completed.style.zIndex = '1';
    todayTask.style.backgroundColor = 'transparent';
    backlogTask.style.backgroundColor = 'transparent';
    completedTask.style.backgroundColor = '#2a2a2a';
    addTask.style.visibility = 'hidden';
    createTaskPopup.style.visibility = 'hidden';

<<<<<<< HEAD
    completedTask.style.color = '#ffffff'
    backlogTask.style.color = '#a1a1a1'
    todayTask.style.color = '#a1a1a1'

    completedTask.style.borderLeft = '4px solid #007bff'
    backlogTask.style.borderLeft = 'none'
    todayTask.style.borderLeft = 'none'

    
    sectionHeading.textContent = "Completed Tasks";
    
});

(
    () => {

        todayTask.style.color = '#ffffff'
        completedTask.style.color = '#a1a1a1';
        backlogTask.style.color = '#a1a1a1';


        todayTask.style.borderLeft = '4px solid #007bff'
        backlogTask.style.borderLeft = 'none'
        completedTask.style.borderLeft = 'none'

    }
)();

=======
    completedTask.style.borderLeft = '4px solid #007bff'
    backlogTask.style.borderLeft = 'none'
    todayTask.style.borderLeft = 'none'
});

>>>>>>> 8909f2723036dd481f1035aebbb9d63a2846a1d2



/**********************************************************************/