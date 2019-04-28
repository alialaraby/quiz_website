
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
    function user(email, password) {
        this.email = email;
        this.password = password;
    }

    $('#login_btn').click(function () {

        //email value to use for checking and comparing if user already exists
        var userEmail = $('#exampleInputEmail1').val();
        //boolean variable , is set to true if the email we are searching for
        //already exists , initially set to false
        var found = false;
        //case the local storage is empty, add the values directly 
        //no need to check if the email exists as the object is already empty
        if (localStorage.getItem('user') === null) {
            var userX = new user($('#exampleInputEmail1').val(), $('#exampleInputPassword1').val());
            usersArray.push(userX);
            localStorage.setItem('user', JSON.stringify(usersArray));
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

            }else{
                //if false, then user isn`t stored before
                //we add it in this case
                var userX = new user($('#exampleInputEmail1').val(), $('#exampleInputPassword1').val());
                usersArray.push(userX);
                localStorage.setItem('user', JSON.stringify(usersArray));
            }
        }
        
    })
})