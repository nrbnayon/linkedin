let profileMenu = document.getElementById("profileMenu");
function toggleMenu(){
    profileMenu.classList.toggle("open-menu");  
}

let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity(){
    sideActivity.classList.toggle("open-activity");

    if(sideActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show less <b>-</b>"
    }else {
        moreLink.innerHTML = "Show more <b>+</b>"
}
}

// darkBtn.onclick = function() {
//     darkBtn.classList.toggle("dark-btn-on");
//     document.body.classList.toggle("dark-theme");

//     if(localStorage.getItem("theme") == "light") {
//         localStorage.setItem("theme", "dark");
//     }
//     else {
//         localStorage.setItem("theme", "light");
//     }

// }

// if(localStorage.getItem("theme") == "light") {
//     darkBtn.classList.remove("dark-btn-on");
//     document.body.classList.remove("dark-theme");
// }
// else if(localStorage.getItem("theme") == "dark") {
//     darkBtn.classList.add("dark-btn-on");
//     document.body.classList.add("dark-theme");
// }
// else {
//     localStorage.setItem("theme", "light");
// }