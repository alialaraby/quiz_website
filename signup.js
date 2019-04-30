$(document).ready(function () {

    //create users array 
    var usersArray = [];
    //check if the object in the local storage is already created 
    //or this is the first time creating it(local storage is empty)
    if (localStorage.getItem('user') === null){
        //case local storage is empty, leave the array empty
        //this step is for avoiding 'array is null' exception
    }else{
        //case local storage already has the object, then 
        //get all the values in it to add to it to get the previous values
        usersArray = JSON.parse(localStorage.getItem('user'))
    }


    //user class to create user instances from it
    function user(fname, lname, email, password) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
    }

    //user class to create user instances from it
    function user_signed(email, signed) {
        this.email = email;
        this.signed = signed;
    }

    signed_in = false;
    $('#btn_signup').click(function () {

        
        //email value to use for checking and comparing if user already exists
        var userEmail = $('#email').val();
        //boolean variable , is set to true if the email we are searching for
        //already exists , initially set to false
        var found = false;
        //case the local storage is empty, add the values directly 
        //no need to check if the email exists as the object is already empty
        if (localStorage.getItem('user') === null) {
            var userX = new user($('#fname').val(),$('#lname').val(),$('#email').val(), $('#pass').val());
            usersArray.push(userX);
            localStorage.setItem('user', JSON.stringify(usersArray));

            signed_in = true;
            var userSigned = new user_signed(userEmail, signed_in);
            localStorage.setItem('user_signed', JSON.stringify(userSigned));
            window.location.assign("quizes.html");
        }else{
            //case local storage already contains data
            //we loop the array contents to check if the email exists
            for (var index = 0; index < usersArray.length; index++) {
                if (usersArray[index].email == userEmail) {
                    //if we found the email already exists 
                    //set the variable to true and break the loop
                    found = true;
                    break;
                }
            }
    
            //here we check the variable 
            //if true, then user exists already, don`t add it again
            if (found) {
                alert("user already exists");
            }else{
                //if false, then user isn`t stored before
                //we add it in this case
                signed_in = true;
                var userSigned = new user_signed(userEmail, signed_in);
                var userX = new user($('#fname').val(),$('#lname').val(),$('#email').val(), $('#pass').val());
                usersArray.push(userX);
                localStorage.setItem('user', JSON.stringify(usersArray));
                localStorage.setItem('user_signed', JSON.stringify(userSigned));
                window.location.assign("quizes.html");
            }
        }
        
    })
})