function register(event){
    
    // console.log("seccess");
    // alert("success");
    event.preventDefault();
    var username=document.getElementById("userName").value;
    // console.log(username,"name here");
    var Email=document.getElementById("userEmail").value;
    // console.log(Email," email here");
    var pass=document.getElementById("userPassword").value;
    // console.log(pass," password here");
    var confirmpass=document.getElementById("userConfirmPassword").value;
    // console.log(confirmpass," password here");


    if( username && Email && pass && confirmpass){
    if(pass.length>=8 && confirmpass>=8){
       

            if(pass==confirmpass){
                var userdata={username:username,email:Email,password:pass,confirmpassword:confirmpass};
                console.log(userdata);


                 localStorage.setItem("Users" , JSON.stringify(userdata));
                // JSON.stringify(); conver-object into JSON
                // JSON.parse(); conver-json into object
                // localStorage.setItem(key,value);
                // localStorage.getItem(key);
                // localStorage.removeItem(key);

            }


            

        else{
            console.log("password not match");
           
        }
    }
        else{
            console.log("password should be 8 or more digits..");
        }

    }else{
        console.log("fill the all fields required");
       
    }




    
}


function getdata(){
   
    
    var obj= JSON.parse(localStorage.getItem("Users"))
    console.log("obj",obj)
}
