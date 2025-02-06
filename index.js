//  Toggling Sidebar

const toggleSidebar = document.querySelector('.toggleSidebar');
const sidebar = document.querySelector('.sidebar');
const appsetting = document.querySelector('.appsetting');
const sidebarMenus = document.querySelector('.sidebar-menus');

let sidebarHidden = true;

toggleSidebar.addEventListener('click', () => {

    if(sidebarHidden) {
        toggleSidebar.style.transform = 'rotate(180deg)';
        sidebar.style.width = '0';
        appsetting.style.display = 'none';
        sidebarMenus.style.display = 'none';
        sidebarHidden = false;
        
    }else {
        toggleSidebar.style.transform = 'rotate(0deg)';
        appsetting.style.display = 'flex';
        sidebarMenus.style.display = 'flex';
        sidebar.style.width = '250px';
        sidebarHidden = true;
    }
})




// current date 

const currentDate= document.querySelector('.currentDate');

const date = new Date();
currentDate.textContent = date.toDateString();






