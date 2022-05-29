
var list=document.getElementById("list-items");

function addTask(){
    var input=document.getElementById("input");
    var li=document.createElement("li")
    var text=document.createTextNode(input.value)
    li.appendChild(text);
    input.value="";
    
    
    var div=document.createElement("div");
    div.setAttribute("class","div1");
    li.appendChild(div)
    
    /////////  delete button ////////
    var btn1=document.createElement("button")
    btn1.innerHTML='<i class="fa-solid fa-trash-can"></i>'
    btn1.setAttribute("class","btn1")
    btn1.setAttribute("onClick","delTask(this)")
    div.appendChild(btn1)
    
    
    //////// edit button /////////
    var btn2=document.createElement("button")
    btn2.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
    btn2.setAttribute("class","btn2")
    btn2.setAttribute("onClick","editTask(this)")
    div.appendChild(btn2)   
    list.appendChild(li)

    var ul = document.getElementById("list-items");
    var items = ul.getElementsByTagName("li");
    document.getElementById("pending").innerHTML = items.length;

}

function delTask(e){
    e.parentNode.parentNode.remove()
    var ul = document.getElementById("list-items");
    var items = ul.getElementsByTagName("li");
    document.getElementById("pending").innerHTML = items.length--;


}
function removeAll(e){
    list.innerHTML=""
    document.getElementById("pending").innerHTML = "0";


}
function editTask(e){
    var prompts=prompt("Enter New Task for Update",e.parentNode.parentNode.firstChild.nodeValue)
    e.parentNode.parentNode.firstChild.nodeValue=prompts;
}

var inputBox=document.getElementById("input")
var plusBtn=document.querySelector(".buttons button")

function key(){
    var userData=inputBox.value;
    if(userData.trim()!= 0){
        plusBtn.classList.add("active");
    }
    else{
        plusBtn.classList.remove("active");
    }
}

var icon=document.getElementById("icon")
if(localStorage.getItem("theme")==null){

    localStorage.setItem("theme","light");
}


var localData=localStorage.getItem("theme");
if(localData=="light"){
    // icon.innerHTML='Dark Mode<i class="fa-solid fa-moon"></i>';
    icon.src="images/moon11.png"
    document.body.classList.remove("dark-theme");
}
else if(localData=="dark"){
    // icon.innerHTML='Lite Mode<i class="fa-solid fa-sun"></i>';
    icon.src="images/sun.png";
    document.body.classList.add("dark-theme")
}
function changeTheme(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){

       
        icon.src="images/sun.png";
        
        localStorage.setItem("theme","dark");
    }
    else{
      
        icon.src="images/moon11.png";
        localStorage.setItem("theme","light");
    }
}