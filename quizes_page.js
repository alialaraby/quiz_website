$(document).ready(function () {

    // createdCardsArray = [];
    function createdCards(cardVar, cardImgUrl) {
        this.cardVar = cardVar;
        this.cardImgUrl = cardImgUrl;
    }

    // if (localStorage.getItem('created_cards') === null){
    // }else{
    //     //case local storage already has the object, then 
    //     //get all the values in it to add to it to get the previous values
    //     createdCardsArray = JSON.parse(localStorage.getItem('created_cards'));
    //     console.log(createdCardsArray)
    //     for(var i=0; i<createdCardsArray.length; i++){
    //         var newQuizCard = document.createElement('div');
    //         $(newQuizCard).attr('class', 'col-12 col-md-6 col-lg-3');
    //         // console.log(createdCardsArray[i])
    //         newQuizCard.innerHTML = createdCardsArray[i].cardVar;
    //         $('#created_quiz_row').append(newQuizCard);
    //     }
    // }


    $('#create_quiz_div').click(function() {
        $('#exampleModal').modal('show');
    })

    var file = document.getElementById('fileItem').files[0];
    imgUrl = "images/" + file.name;
    $('#upload').click(function () {
        $('.quiz_card_img').css('background-image', 'url('+ imgUrl +')')
    })

    
    $('#create_quiz_create_btn').click(function () {
        var createdCardTitle = $('#create_quiz_title').val();
        var createdCardDesc = $('#create_quiz_desc').val();

        var newQuizCard = document.createElement('div');
        $(newQuizCard).attr('class', 'col-12 col-md-6 col-lg-3');
        newQuizCard.innerHTML = "<div class='card' style='height: 500px'> " +
        "<p class='card_img created_p' id='card1'></p>" + 
        "<div class='card-body'>" + 
            "<h5 class='card-title'>"+ createdCardTitle +"</h5>" + 
            "<p class='card-text'>"+ createdCardDesc +" , you have 5 minutes to finish the exam.</p>"+
            "<a id='c_quiz_btn_start' href='#' class='btn btn-primary start_quiz'>Start Quiz</a></div></div>";

        var nodeTxt = newQuizCard.innerHTML;
        var newCard = new createdCards(nodeTxt, imgUrl);
        createdCardsArray.push(newCard);
        localStorage.setItem('created_cards', JSON.stringify(createdCardsArray));
        $('#exampleModal').modal('hide');
        document.location.reload(); 
    })
})