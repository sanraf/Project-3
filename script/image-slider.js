        
         function backClick(scrollClass){
            
            let scollContainer = document.querySelector(scrollClass);
        
                scollContainer.style.scrollBehavior = "smooth";
                scollContainer.scrollLeft -=250;
           
         }

         function nextClick(scrollClass){
            
            let scollContainer = document.querySelector(scrollClass);
        
            scollContainer.style.scrollBehavior = "smooth";
            scollContainer.scrollLeft +=250;
       
     }


        function onMouseWheel(className){

            let scollContainer = document.querySelector(className);

            scollContainer.addEventListener("wheel",(evt)=>{
                    evt.preventDefault();
                    scollContainer.scrollLeft +=evt.deltaY;
                    scollContainer.style.scrollBehavior = "smooth";
                });
        }
 
        function showGallery(galleryWrapClass){

            let galleryWrapContainer = document.querySelector(galleryWrapClass);
            galleryWrapContainer.classList.toggle("gallery-wrap-flex");            

        }

        // let viewBtn = document.querySelector(".view"),
        //     galleryWrapContainer = document.querySelector(".gallery-wrap");

        //     function showGallery(){
        //         galleryWrapContainer.classList.toggle("gallery-wrap-flex");
        //     }
      
        //     viewBtn.addEventListener("click",showGallery);
     
     
