
var btn = document.getElementById('submit');

btn.addEventListener('click',(e)=>{

    console.log("click");

        e.preventDefault();
        var tempParams = {
            name : document.getElementById("first-name").value,
            email : document.getElementById("email").value,
            message: document.getElementById("description").value,
            subject : document.getElementById("subject").value
        }
    
        emailjs.send('service_qup666f','template_s8dkykn',tempParams).then((res)=>{ 
             console.log("email sent successfully",res.status);
             document.getElementById("first-name").value="";
             document.getElementById("email").value="";
             document.getElementById("description").value="";
             document.getElementById("subject").value="";
             alert("email sent successfully");
        }).catch((err)=>{
            throw err;
        })
    
    
})

