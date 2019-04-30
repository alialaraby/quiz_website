
$(document).ready(function () {

    var question = JSON.parse(text);
    $('#q1').text(question.questions[0].q);
    $('#l1').text(question.questions[0].a1);
    $('#l2').text(question.questions[0].a2);
    $('#l3').text(question.questions[0].a3);

    $('#check_ans').click(function () {
        if (document.getElementById('r1').checked) {
            if (document.getElementById('l1').innerText == question.questions[0].ca) {
                alert('true')
            }else{
                alert('wrong')
            }
        }else if (document.getElementById('r2').checked) {
            if (document.getElementById('l2').innerText == question.questions[0].ca) {
                alert('true')
            }else{
                alert('wrong')
            }
        }else if (document.getElementById('r3').checked) {
            if (document.getElementById('l3').innerText == question.questions[0].ca) {
                alert('true')
            }else{
                alert('wrong')
            }
        }
    })

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


text = '{ "questions" : [' +
    '{ "id":"1" , "q":"How many Bytes are stored by ‘Long’ Data type in C# .net?" ,' + 
    ' "a1":" 8", "a2":" 4", "a3":" 2", "ca":" 8" },' +

    '{ "id":"2" , "q":"Choose “.NET class” name from which data type “UInt” is derived ?" ,' +
    '"a1":"System.Int16", "a2":"System.UInt32", "a3":"System.UInt64", "ca":"System.UInt64" },' +

    '{ "id":"3" , "q":"Correct Declaration of Values to variables ‘a’ and ‘b’?" ,' +
    '"a1":"int a = 32, b = 40.6", "a2":"int a = 42; b = 40;", "a3":"int a = 32; int b = 40;", "ca":"int a = 32; int b = 40;" },' +

    '{ "id":"4" , "q":"Arrange the following data type in order of increasing" ,' +
    '"a1":"long short int sbyte", "a2":"sbyte short int long", "a3":"short sbyte int long", "ca":"short sbyte int long" },' +

    '{ "id":"5" , "q":"Which data type should be more preferred for storing a simple number like 35 to improve execution speed of a program?" ,' +
    '"a1":"sbyte", "a2":"short", "a3":"int", "ca":"int" },' +
    
    '{ "id":"3" , "q":"q three ??" , "a1":"answer 1", "a2":"answer 2", "a3":"answer 3" } ]}'; 