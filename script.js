 function Clear()
        {
            document.getElementById("image").value=""
            document.getElementById("name").value=""
            document.getElementById("course").value=""
            document.getElementById("email").value=""
            document.getElementById("male").checked=false 
            document.getElementById("female").checked=false 
            document.getElementById("java").checked=false
            document.getElementById("html").checked=false
            document.getElementById("css").checked=false
        }
        function conform()
        {
            var name=document.getElementById("name").value
            var course= document.getElementById("course").value
            var email= document.getElementById("email").value
            var image=document.getElementById("image").value
            var male =document.getElementById("male").checked
            var female=document.getElementById("female").checked
            var java= document.getElementById("java").checked
            var html= document.getElementById("html").checked
            var css= document.getElementById("css").checked
            if(name!='' && course!='' && email!='' && image!='' && (male!=false || female!=false ) && (java!=false || html!=false && css!=false))
            {
                tr=document.createElement("tr")
                td=document.createElement("td")
                
                nam=document.createElement("p")
                emil=document.createElement("p")
                corse=document.createElement("p")
                gen=document.createElement("p")
                skill=document.createElement("p")
                emil.innerHTML="Email : "+email 
                corse.innerHTML="Course : "+course 
                nam.innerHTML="Name : "+name 
                td.appendChild(nam)
                td.appendChild(emil)
                td.appendChild(corse)
                if(male==true)
                {
                    gen.innerHTML="Gender : Male" 
                }
                else{
                    gen.innerHTML="Gender : Female" 
                }
                td.appendChild(gen)
                let a;
                if(java==true)
                {
                    a="java"
                }
                if(html==true)
                {
                    a=a+",html"
                }
                if(css==true)
                {
                    a=a+",css"
                }
                skill.innerHTML="Skills : "+a
                td.appendChild(skill)
                document.getElementById("table").appendChild(tr)
                tr.appendChild(td)
                td1=document.createElement("td")
                img=document.createElement("img")
                img.src=image 
                td1.appendChild(img)
                tr.appendChild(td1)
            }
            else{
                alert("Not enrolled")
            }
        }