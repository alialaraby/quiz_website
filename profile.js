$(document).ready(function () {
    
    //create users array 
    var takenQuizesArray = [];
    //check if the object in the local storage is already created 
    //or this is the first time creating it(local storage is empty)
    if (localStorage.getItem('taken_quizes') === null){
        //case local storage is empty, leave the array empty
        //this step is for avoiding 'array is null' exception
    }else{
        //case local storage already has the object, then 
        //get all the values in it to add to it to get the previous values
        takenQuizesArray = JSON.parse(localStorage.getItem('taken_quizes'))
    }
    for(var i=0; i<takenQuizesArray.length; i++){
        //find the current user to get the courses he took
        if (takenQuizesArray[i].loggedUserMail == userMail) {
            createQuizItem(takenQuizesArray[i].quizName, 50);
        }
    }
    
})

function createQuizItem(quizName, quizGrade) {
    var newQuizCard = document.createElement('li');
    newQuizCard.innerHTML = "<li class='list-group-item'><i class='fas fa-file-alt'></i> "+ quizName +" : " + quizGrade + "</li>"
    $(newQuizCard).css("list-style", 'none');
    $('#grade_list_group').append(newQuizCard);
}