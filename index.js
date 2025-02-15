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
});

/* Toggling Sidebar ends here */
/**********************************************************************/







// Opening the pop up

let taskTitle = document.querySelector('.task-title').value;
let taskContent = document.querySelector('.task-content').value;
let addTask = document.querySelector('.addtask');
let createTaskPopup = document.querySelector('.createTaskPopup');

addTask.addEventListener('click', () => {

    createTaskPopup.style.visibility = 'visible'
    let submitTask = document.querySelector('.submit-task');

    submitTask.addEventListener('click', () => {
        // Fetching user input

        let taskTitle = document.querySelector('.task-title').value;
        let taskContent = document.querySelector('.task-content').value;

        if (!taskTitle.trim() || !taskContent.trim()) {
            console.log(taskTitle);

            console.log("Plese enter a valid input");
            createTaskPopup.style.visibility = 'hidden';
            return
        }

        createTaskPopup.style.visibility = 'hidden';

        storeNewTask(taskTitle, taskContent);

    });

    taskTitle.value = '';
    taskContent.value = '';
});

// Closing task pop up

const closeTaskPopup = document.querySelector('.close-task-popup');

closeTaskPopup.addEventListener('click', () => {
    createTaskPopup.style.visibility = 'hidden'
    console.log("close clicked");
});





// Creating a new task

let taskbar = document.querySelector('.taskbar');

function createTaskBox(newTitle, newContent) {

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
    title.textContent = newTitle;


    // Creating the task content field
    const content = document.createElement('p');
    content.classList.add('text-body');
    content.textContent = newContent;

    cardDetails.appendChild(title);
    cardDetails.appendChild(content);
    card.appendChild(cardDetails);

    taskbar.appendChild(card);


    // Clearing the input field after submission

    document.querySelector('.task-content').value = '';
    document.querySelector('.task-title').value = '';
    return;

}




// Rendering all tasks

function renderAllTask() {

    const taskList = JSON.parse(localStorage.getItem('tasklist'));

    for (let i = 0; i < taskList.length; i++) {
        createTaskBox(taskList[i].title, taskList[i].content);
    }

};



/**********************************************************************/



// Default Single Task

(
    async () => {
        // Default task
        const whoAmI = [
            "Hello, I am Ghost. I haunt your computer screen, and I'm probably stealing your snacks right now.",
            "Hello, I am Aquib Jawed. The man who can neither find his keys nor his motivation.",
            "Hello, Are You The Ghost? Because I swear I heard something spooky... or maybe it’s just my WiFi acting up.",
            "Are you Aquib Jawed? The one who makes coffee disappear faster than you can say ‘I need sleep’?",
            "Just shut up and move on. I'm not here for your lecture; I came for the memes.",
            "Why are you here? To listen to me rant about everything from socks to quantum physics? Good luck.",
            "This is not a real. Like, are we even real? Or are we just figments of some tired programmer’s imagination?",
            "Please get the hell out of here. There’s nothing to see here, just my endless procrastination and existential dread.",
            "Welcome to the world of shit facts. If you didn’t know, 97% of everything I say is absolutely made up.",
            "Please go through this line. Not because I care, but because I need to fill up this space somehow."
        ];

        const defaultTask = [
            {
                id: 1,
                title: "Who am I ?",
                content: `${whoAmI[Math.trunc(Math.random() * 10)]}`
            }
        ]
        if (localStorage.getItem('tasklist') == null) {
            localStorage.setItem('tasklist', JSON.stringify(defaultTask));
        }

        renderAllTask();

    }
)();






/**********************************************************************/


// Storing task in local storage

function storeNewTask(newTitle = "Title", newContent = "Content") {

    let taskList = JSON.parse(localStorage.getItem('tasklist'));


    const newTask = {
        id: taskList.length + 1,
        title: newTitle,
        content: newContent
    }

    taskList.push(newTask);


    localStorage.setItem(`tasklist`, JSON.stringify(taskList))

    console.log(taskList);

}



/**********************************************************************/



// current date 

const currentDate = document.querySelector('.currentDate');

const date = new Date();
currentDate.textContent = date.toDateString();


/**********************************************************************/


// Sidebar Menus
const backlog = document.querySelector('.backlog');
const completed = document.querySelector('.completed');
const todayTask = document.querySelector('.today-task');
const backlogTask = document.querySelector('.backlog-task');
const completedTask = document.querySelector('.completed-task');
const sectionHeading = document.querySelector('.section-heading');


// Helper function to set active task
function setActiveTask(activeTask, headingText) {

    taskbar.style.zIndex = (activeTask === todayTask) ? '1' : '-1';
    backlog.style.zIndex = (activeTask === backlogTask) ? '1' : '-1';
    completed.style.zIndex = (activeTask === completedTask) ? '1' : '-1';
    activeTask.style.backgroundColor = '#2a2a2a';
    activeTask.style.color = '#ffffff';
    activeTask.style.borderLeft = '4px solid #007bff';

    // Reset the others
    [todayTask, backlogTask, completedTask].forEach(task => {
        if (task !== activeTask) {
            task.style.backgroundColor = 'transparent';
            task.style.color = '#a1a1a1';
            task.style.borderLeft = 'none';
        }
    });

    // Visibility and heading updates
    addTask.style.visibility = (activeTask === todayTask) ? 'visible' : 'hidden';

    sectionHeading.textContent = headingText;
}

// Event listeners for each task
todayTask.addEventListener('click', () => setActiveTask(todayTask, "Today's Task"));
backlogTask.addEventListener('click', () => setActiveTask(backlogTask, "Backlog Tasks"));
completedTask.addEventListener('click', () => setActiveTask(completedTask, "Completed Tasks"));



// Default Selected sidebar menu

(
    () => {
        setActiveTask(todayTask, "Today's Task");
    }
)();


/**********************************************************************/