function register(event) {

    // console.log("seccess");
    // alert("success");
    event.preventDefault();
    var username = document.getElementById("username").value;
    // console.log(username,"name here");
    var Email = document.getElementById("useremail").value;
    // console.log(Email," email here");
    var pass = document.getElementById("userpassword").value;
    // console.log(pass," password here");
    var confirmpass = document.getElementById("userconfirmpassword").value;

    // console.log(confirmpass," password here");

    // var userdata = { username: username, email: Email, password: pass, confirmpassword: confirmpass };
    //        console.log(userdata);

    // var LS = JSON.parse(localStorage.getItem("Users")) || [];
    // LS.push(userdata);
    // localStorage.setItem("Users", JSON.stringify(LS));


    //     if (pass == confirmpass) {
    //         var flag = false; 
    //         var LS = JSON.parse(localStorage.getItem("Users")) || [];
    //         console.log(LS);
    //         for (var i = 0; i < LS.length; i++) {
    //             if (LS[i].userEmail == Email) {
    //                 // console.log("match");
    //                 flag = true;
    //             }

    //         }
    //         if(!flag){
    //             alert("loggin");
    //          document.getElementById("userName").value = "";
    //          document.getElementById("userName").value ="";
    //          document.getElementById("userName").value= "";
    //          document.getElementById("userName").value ="";
    //         }
    //     else{
    //        alert("match");

    //      }
    // }







    if (username && Email && pass && confirmpass) {
        if (pass.length >= 8 && confirmpass.length >= 8) {
            if (pass == confirmpass) {
                var flag = false;
                var LS = JSON.parse(localStorage.getItem("Users")) || [];
                console.log(LS);
                for (var i = 0; i < LS.length; i++) {
                    if (LS[i].useremail== Email) {
                        // console.log("match");
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = { username: username, email: Email, password: pass, confirmpassword: confirmpass };
                    console.log(userdata);

                    // var LS = JSON.parse(localStorage.getItem("Users")) || [];
                    LS.push(userdata);
                    localStorage.setItem("Users", JSON.stringify(LS));

                    alert("Registration succefully");

                    document.getElementById("username").value = "";
                    document.getElementById("useremail").value = "";
                    document.getElementById("userpassword").value = "";
                    document.getElementById("userconfirmpassword").value = "";
                }
                else {
                    alert("Email already Present");
                }
            } else {
                console.log("Password not match");
            }
        }
        else {
            console.log("password should be 8 or more digits..");
        }

    }
    else {
        console.log("fill the all fields required");

    }
}


// Step 1  : Get user typed data from html to JS = Completed
// Step 2 : Get all users data into JS from LS = Completed
// Step 3 : Iterate all users (LS) with user typed data 
// Step 4 : If email & password both match at same time then


function login(event) {
    event.preventDefault();
    alert("Login function called.")
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    // console.log(userEmail,userPassword,"check here");

    var LS = JSON.parse(localStorage.getItem("Users"));
    // console.log(LS, " - LS here");

    var flag = false;
    for (var i = 0; i < LS.length; i++) {
        console.log(i, LS[i])
         p
        // console.log(i, LS[i].userEmail, LS[i].userPassword )
        if (LS[i].userEmail == userEmail && LS[i].userPassword == userPassword) {
            // alert("Email and Pass matchecd");
            flag = true;
        }
    }
    if (flag == true) {
        alert("Login successfull.")
    } else 
    {
        alert("Credential not matched.")
        
    }
}



















