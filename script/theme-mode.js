
let icon = document.getElementById("switch");
             icon.onclick = ()=>{
                 document.body.classList.toggle("changeTheme");
                if(document.body.classList.contains("changeTheme")){
                    icon.src = "./icons/darkmode.svg";
                }
                else{
                   icon.src= "./icons/lightmode.svg";
                }
         }




