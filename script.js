//your JS code here. If required.
const container = document.getElementsByClassName("container")[0] ;
        const button = document.getElementById("start-stop");
        function showElement() {
            container.innerHTML = '' ;
            const div = document.createElement("div")
            div.id = "line" ;
           // div.className = "line" ;
            container.append(div);
        }

        function startAnimation() {
            const line = document.getElementById("line");
             if(line.style.animationDuration == "1s"){
              // animating
            //     line.style.animationDuration = "100000000s"
				 line.className="";
                 button.innerText = "Start Animation" ;
             }
             else{
            //     line.style.animationDuration = "1s"
				 line.className="line";
                 button.innerText = "Stop Animation"
         }
            //getComputedStyle
            //console.log(line.style.transform)
       // }

        // function stopAnimation() {
        //     const line = document.getElementById("line");
        //     line.className = "" ; 
        // }

