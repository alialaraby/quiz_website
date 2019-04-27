$(document).ready(function () {

    var usernames = [];
    $('#save').click(function () {
        usernames.push($('#name').val());
        localStorage.setItem('name', JSON.stringify(usernames));    
    })
    $('#get').click(function () {
        $('#name').val(JSON.parse(localStorage.getItem('name')));
        // alert(localStorage.getItem('name'));    
    })
})