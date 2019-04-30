
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


    //create users array 
    var usersLogedinArray = [];
    var userMail = '';
    //check if the object in the local storage is already created 
    //or this is the first time creating it(local storage is empty)
    if (localStorage.getItem('user_signed') === null){
        //case local storage is empty, leave the array empty
        //this step is for avoiding 'array is null' exception
    }else{
        //case local storage already has the object, then 
        //get all the values in it to add to it to get the previous values
        usersLogedinArray = JSON.parse(localStorage.getItem('user_signed'));
        userMail = usersLogedinArray.email;
    }

    if (usersLogedinArray.signed) {
        logUserIn(userMail)
    }


    $('#login_btn').click(function () {

        var userEmail = $('#exampleInputEmail1').val();
        var found = false;
        var username = '';
        for (var index = 0; index < usersArray.length; index++) {
            if (usersArray[index].email == userEmail) {
                //if we found the email already exists 
                //set the variable to true and break the loop
                found = true;
                break;
            }
        }
        if (found) {
            logUserIn(userEmail)
        }else{
            alert('this email doesn`t exist, signup')
        }
    })
})
//this function is called to do the changes if the user is loggedin
//profile is added and login/signup buttons are removed
function logUserIn(mail) {
    $('#exampleModal').modal('hide');
    $('#nav_login_btn').css('display', 'none');
    $('#nav_signup_btn').css('display', 'none');
    $('#profile_btn').css('display', 'inline');
    $('#profile_name').text(mail);
    // $('.navbar .nav-item.home').css('margin-left', '845px');
}


text = '{ "questions" : [' +
    '{ "id":"1" , "q":"How many Bytes are stored by ‘Long’ Data type in C# .net?" ,' + 
    ' "a1":"8", "a2":" 4", "a3":" 2", "ca":"8" },' +

    '{ "id":"2" , "q":"Choose “.NET class” name from which data type “UInt” is derived ?" ,' +
    '"a1":"System.Int16", "a2":"System.UInt32", "a3":"System.UInt64", "ca":"System.UInt64" },' +

    '{ "id":"3" , "q":"Correct Declaration of Values to variables ‘a’ and ‘b’?" ,' +
    '"a1":"int a = 32, b = 40.6", "a2":"int a = 42; b = 40;", "a3":"int a = 32; int b = 40;", "ca":"int a = 32; int b = 40;" },' +

    '{ "id":"4" , "q":"Arrange the following data type in order of increasing" ,' +
    '"a1":"long short int sbyte", "a2":"sbyte short int long", "a3":"short sbyte int long", "ca":"short sbyte int long" },' +

    '{ "id":"5" , "q":"Which data type should be more preferred for storing a simple number like 35 to improve execution speed of a program?" ,' +
    '"a1":"sbyte", "a2":"short", "a3":"int", "ca":"int" },' +
    
    '{ "id":"3" , "q":"q three ??" , "a1":"answer 1", "a2":"answer 2", "a3":"answer 3" } ]}'; 