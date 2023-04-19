function register(event) {

    // console.log("seccess");
    // alert("success");
    event.preventDefault();
    var username = document.getElementById("userName").value;
    // console.log(username,"name here");
    var Email = document.getElementById("userEmail").value;
    // console.log(Email," email here");
    var pass = document.getElementById("userPassword").value;
    // console.log(pass," password here");
    var confirmpass = document.getElementById("userConfirmPassword").value;

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
                    if (LS[i].email == Email) {
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

                    document.getElementById("userName").value = "";
                    document.getElementById("userEmail").value = "";
                    document.getElementById("userPassword").value = "";
                    document.getElementById("userConfirmPassword").value = "";
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


// function login(event){
//     event.preventDefault();
//     var userEmail = document.getElementById("userEmail").value;
    
//     var userPassword = document.getElementById("userPassword").value;
   
//     console.log(userEmail.userPassword);
//     // var userdata = { username: username, email: Email, password: pass, confirmpassword: confirmpass };
//     //     console.log(userdata);

//     var LS = JSON.parse(localStorage.getItem("Users")) || [];
//     console.log(LS,"-LS");


//     var flag = false;
//     for(var i=0;i<LS.length;i++){
//         console.log(i,LS[i]);
//         console.log(i,LS[i].userEmail,LS[i].userPassword);
//         if(LS[i].userEmail==userEmail && LS[i.userPassword==userPassword]){

//             alert("Email & password match");
//             flag = true;
//         }
//     }
//     if(flag == true){
//         alert("login succssfull");
//     }
//     else{
//         alert("not match");
//     }
// }




















