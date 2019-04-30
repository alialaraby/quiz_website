
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

function startTimer(params) {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
        
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get todays date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML =  hours + "h "
      + minutes + "m " + seconds + "s ";
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
}
$(document).ready(function () {

    startTimer();

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



    var questions={
        "status": [ [
        "The behaviour of the instances present of a class inside a method is defined by ",
        " The keyword or the property that you use to refer to an object through which they were invoked is",
        "The basic difference between JavaScript and Java is",
        "The meaning for Augmenting classes is that:",
        "The property of JSON() method is:",
        "When a class B can extend another class A, we say that:",
        "If A is the superclass and B is the subclass, then subclass inheriting the superclass can be represented as",
        "The method that can be used to create new properties and also to modify the attributes of existing properties is",
        "The Crockford’s subset does not include which function in JavaScript?",
        "What does javascript use instead of == and !=?",
        " What is being imposed on each subset to ensure that it conforms to the subset?",


        "Why was “The Good Parts” designed as a language subset in JavaScript?",
        " Which is the subset that is a secure container designed for the purpose of safely running untrusted JavaScript?",
        "Why is this keyword not preferred in JavaScript?",
        "Which are the two functions that are not allowed in any secure subset?",
        " Which is the object that defines methods that allow complete control over page content?",
        "Which was one of the first security subsets proposed?",
        "Which is the subset that transforms web content into secure modules that can be safely hosted on a web page?",
        "The four kinds of class members are",
        " Different kinds of object involved in a class definition are",
        "The object whose properties are inherited by all instances of the class, and properties whose values are functions behaving like instance methods of the class, is",


        "Which variables are used internally in object methods and are also globally visible?",
        "The class that represents the regular expressions is",
        "The different variant of Date() constructor to create date object is/are",
        "How can we make methods available on all objects?",
        "What is the procedure to add methods to HTMLElement so that they will be inherited by the objects that represent the HTML tags in the current document?",
        " You can refresh the webpage in JavaScript by using",
        " The let keyword can be used",
        "The main difference between the variables declared with var and with let is",
        "Which looping statement allows XML tags to appear in JavaScript programs and adds API for operating on XML data?",
        "Which exception does the Iterators throw from their next() method when there are no more values to iterate, that work on finite collections ?",


        "Which method of the iterable object returns an iterator object for the collection?",
        "The functions provide() and require() of Dojo toolkit and Google’s Closure library are used for",
        " The maximum number of global symbols a module can define is",
        "The scope of a function is also called as",
        "Modules that have more than one item in their API can",
        "The provides() function and the exportsobject are used to ",
        " The properties() method is a",
        "What can be done in order to avoid creation of global variables in JavaScript?",
        "What will be the reaction when a catch clause has no conditionals?",
        " When will the finally block be called?",


        " What is the return type of typeof for standard JavaScript objects?",
        "Which method to use while working with XML fragments, instead of XML()?",
        " Which of the following is the descendant operator?",
        " Which of the following is an example to perform the most common XML manipulations using the XML objects invocation?",
        "What is the code required to delete all “weight” tags?",
        "The ‘$’ present in the RegExp object is called a _",
        "The regular expression to match any one character not between the brackets is ",
        "What does /[^(]* regular expression indicate?",
        "What will be the result when non greedy repetition is used on the pattern /a+?b/?",
        "What does the subexpression /java(script)?/ result in?",


        "What is the most essential purpose of parantheses in regular expressions?",
        "The method that performs the search-and-replace operation to strings for pattern matching is __",
        " What would be the result of the following statement in JavaScript using regular expression methods?",
        "What are the events generated by the Node objects called?",
        "What is the function used to deregister event handler ‘f’?",
        "What is the function used to remove all handlers for name events?",
        "Which function is a synonym for on()?",
        " Which of the following is an event emitter?",
        "When do uncaught exceptions generate events?",
        "Which among the following POSIX signals generate events?",


        "What is the method used to pause “data” events?",
        "When the “end” event fires on EOF when no more data will arrive, which function is called?",
        "What will be the return value of the write() method when the Node cannot write the data immediately and has to buffer it internally?",
        "Which of the following is a way of embedding Client-side JavaScript code within HTML documents?",
        "When does JavaScript code appear inline within an HTML file?",
        " Which character in JavaScript code will be interpreted as XML markup?",
        " Which is the root element in a HTML document?",
        "What is the code for getting the current time?",
        "What is the code to start displaying the time when document loads?",
        "One of the main advantage of using src attribute is",


        " What will be done if more than one page requires a file of JavaScript code?",
        "What is the default value of the type attribute?",
        "The language is commonly used to",
        "Rhino is originated by _______",
        "Which of the following are global functions that are not part of core JavaScript?",
        " Which of the following reads the textual contents of a URL and returns as a string",
        " Which Rhino command quits Rhino environment?",
        "Which is a useful way to try out small and simple Rhino programs and one-liners?",
        "Which is a more formal way of importing packages and classes as JavaScript objects?",
        "What does Rhino do when the getter and setter methods exist?",


        "The JavaScript classes can be instantiated using _____ operator.",
        "The new Java arrays can be created into JavaScript programs using which of the following classes?",
        "The word “document” mainly refers to",
        "Which object is the main entry point to all client-side JavaScript features and APIs?",
        " Which identifier is used to represent a web browser window or frame?",
        "Which property in the Window object is used to refer to a Location object?",
        "Which Window object method is used to display message in a dialog box?",
        "The setTimeout() method is used to",
        "Which of the following is a global object?",
        "When will the window property come into play?",


        " Which is the property that represents the content displayed in the window?",
        "How to pick a document element based on the value of its id attribute?",
        "Which is a fast C++ based JavaScript interpreter?",
        "Why does the Node rely on event handlers?",
        "What is the command to run the node programs?",
        "What is the alternative command used in Node for load()?",
        "What is the command used for debugging output in Node?",
        "What is the code to print hello one second from now?",
        "Among the below given functions, Node supports which of the following client-side timer functions?"]]
    }

    var answers={ "ans":[ [ "one1", "one2", "one3"] ,
                          ["two1","two2","two3"] ,
                          ["three1","three2","three3"],
                          ["four1","four2","four3"],
                          ["five1","five2","five3"],
                          ["six1","six2","six3"],
                          ["seven1","seven2","seven3"],
                          ["eight1","eight2","eight3"],
                          ["nine1","nine2","nine3"],
                          ["ten1","ten2","ten3"],

                          [ "one1", "one2", "one3"] ,
                          ["two1","two2","two3"] ,
                          ["three1","three2","three3"],
                          ["four1","four2","four3"],
                          ["five1","five2","five3"],
                          ["six1","six2","six3"],
                          ["seven1","seven2","seven3"],
                          ["eight1","eight2","eight3"],
                          ["nine1","nine2","nine3"],
                          ["ten1","ten2","ten3"],

                          [ "one1", "one2", "one3"] ,
                          ["two1","two2","two3"] ,
                          ["three1","three2","three3"],
                          ["four1","four2","four3"],
                          ["five1","five2","five3"],
                          ["six1","six2","six3"],
                          ["seven1","seven2","seven3"],
                          ["eight1","eight2","eight3"],
                          ["nine1","nine2","nine3"],
                          ["ten1","ten2","ten3"],

                          [ "one1", "one2", "one3"] ,
                          ["two1","two2","two3"] ,
                          ["three1","three2","three3"],
                          ["four1","four2","four3"],
                          ["five1","five2","five3"],
                          ["six1","six2","six3"],
                          ["seven1","seven2","seven3"],
                          ["eight1","eight2","eight3"],
                          ["nine1","nine2","nine3"],
                          ["ten1","ten2","ten3"],

                          [ "one1", "one2", "one3"] ,
                          ["two1","two2","two3"] ,
                          ["three1","three2","three3"],
                          ["four1","four2","four3"],
                          ["five1","five2","five3"],
                          ["six1","six2","six3"],
                          ["seven1","seven2","seven3"],
                          ["eight1","eight2","eight3"],
                          ["nine1","nine2","nine3"],
                          ["ten1","ten2","ten3"],

                          [ "one1", "one2", "one3"] ,
                          ["two1","two2","two3"] ,
                          ["three1","three2","three3"],
                          ["four1","four2","four3"],
                          ["five1","five2","five3"],
                          ["six1","six2","six3"],
                          ["seven1","seven2","seven3"],
                          ["eight1","eight2","eight3"],
                          ["nine1","nine2","nine3"],
                          ["ten1","ten2","ten3"],

                          [ "one1", "one2", "one3"] ,
                          ["two1","two2","two3"] ,
                          ["three1","three2","three3"],
                          ["four1","four2","four3"],
                          ["five1","five2","five3"],
                          ["six1","six2","six3"],
                          ["seven1","seven2","seven3"],
                          ["eight1","eight2","eight3"],
                          ["nine1","nine2","nine3"],
                          ["ten1","ten2","ten3"],

                          [ "one1", "one2", "one3"] ,
                          ["two1","two2","two3"] ,
                          ["three1","three2","three3"],
                          ["four1","four2","four3"],
                          ["five1","five2","five3"],
                          ["six1","six2","six3"],
                          ["seven1","seven2","seven3"],
                          ["eight1","eight2","eight3"],
                          ["nine1","nine2","nine3"],
                          ["ten1","ten2","ten3"],

                          [ "one1", "one2", "one3"] ,
                          ["two1","two2","two3"] ,
                          ["three1","three2","three3"],
                          ["four1","four2","four3"],
                          ["five1","five2","five3"],
                          ["six1","six2","six3"],
                          ["seven1","seven2","seven3"],
                          ["eight1","eight2","eight3"],
                          ["nine1","nine2","nine3"],
                          ["ten1","ten2","ten3"],

                          [ "one1", "one2", "one3"] ,
                          ["two1","two2","two3"] ,
                          ["three1","three2","three3"],
                          ["four1","four2","four3"],
                          ["five1","five2","five3"],
                          ["six1","six2","six3"],
                          ["seven1","seven2","seven3"],
                          ["eight1","eight2","eight3"],
                          ["nine1","nine2","nine3"],
                          ["ten1","ten2","ten3"]
                        
                        ]}





//#region 

var ques1=document.getElementById("ques1");
var ques2=document.getElementById("ques2");
var ques3=document.getElementById("ques3");
var ques4=document.getElementById("ques4");
var ques5=document.getElementById("ques5");
var ques6=document.getElementById("ques6");
var ques7=document.getElementById("ques7");
var ques8=document.getElementById("ques8");
var ques9=document.getElementById("ques9");
var ques10=document.getElementById("ques10");
//#endregion


//#region 
var lab11=document.getElementById("ques11");
var lab12=document.getElementById("ques12");
var lab13=document.getElementById("ques13");

var lab21=document.getElementById("ques21");
var lab22=document.getElementById("ques22");
var lab23=document.getElementById("ques23");

var lab31=document.getElementById("ques31");
var lab32=document.getElementById("ques32");
var lab33=document.getElementById("ques33");

var lab41=document.getElementById("ques41");
var lab42=document.getElementById("ques42");
var lab43=document.getElementById("ques43");

var lab51=document.getElementById("ques51");
var lab52=document.getElementById("ques52");
var lab53=document.getElementById("ques53");

var lab61=document.getElementById("ques61");
var lab62=document.getElementById("ques62");
var lab63=document.getElementById("ques63");

var lab71=document.getElementById("ques71");
var lab72=document.getElementById("ques72");
var lab73=document.getElementById("ques73");

var lab81=document.getElementById("ques81");
var lab82=document.getElementById("ques82");
var lab83=document.getElementById("ques83");

var lab91=document.getElementById("ques91");
var lab92=document.getElementById("ques92");
var lab93=document.getElementById("ques93");

var lab101=document.getElementById("ques101");
var lab102=document.getElementById("ques102");
var lab103=document.getElementById("ques103");
//#endregion
//console.log(questions);

//#region 
var one=(Math.floor(Math.random() * 10));
var two=(Math.floor(Math.random() * 10)+10);
var three=(Math.floor(Math.random() * 10)+20);
var four=(Math.floor(Math.random() * 10)+30);
var five=(Math.floor(Math.random() * 10)+40);
var six=(Math.floor(Math.random() * 10)+50);
var seven=(Math.floor(Math.random() * 10)+60);
var eight=(Math.floor(Math.random() * 10)+70);
var nine=(Math.floor(Math.random() * 10)+80);
var ten=(Math.floor(Math.random() * 10)+90);
//#endregion

//#region 
ques1.innerHTML=questions.status[0][one];
ques2.innerHTML=questions.status[0][two];
ques3.innerHTML=questions.status[0][three];
ques4.innerHTML=questions.status[0][four];
ques5.innerHTML=questions.status[0][five];
ques6.innerHTML=questions.status[0][six];
ques7.innerHTML=questions.status[0][seven];
ques8.innerHTML=questions.status[0][eight];
ques9.innerHTML=questions.status[0][nine];
ques10.innerHTML=questions.status[0][ten];
//#endregion


//#region 
lab11.innerHTML=answers.ans[one][0];
lab12.innerHTML=answers.ans[one][1];
lab13.innerHTML=answers.ans[one][2];


lab21.innerHTML=answers.ans[two][0];
lab22.innerHTML=answers.ans[two][1];
lab23.innerHTML=answers.ans[two][2];


lab31.innerHTML=answers.ans[three][0];
lab32.innerHTML=answers.ans[three][1];
lab33.innerHTML=answers.ans[three][2];


lab41.innerHTML=answers.ans[four][0];
lab42.innerHTML=answers.ans[four][1];
lab43.innerHTML=answers.ans[four][2];


lab51.innerHTML=answers.ans[five][0];
lab52.innerHTML=answers.ans[five][1];
lab53.innerHTML=answers.ans[five][2];


lab61.innerHTML=answers.ans[six][0];
lab62.innerHTML=answers.ans[six][1];
lab63.innerHTML=answers.ans[six][2];


lab71.innerHTML=answers.ans[seven][0];
lab72.innerHTML=answers.ans[seven][1];
lab73.innerHTML=answers.ans[seven][2];


lab81.innerHTML=answers.ans[eight][0];
lab82.innerHTML=answers.ans[eight][1];
lab83.innerHTML=answers.ans[eight][2];


lab91.innerHTML=answers.ans[nine][0];
lab92.innerHTML=answers.ans[nine][1];
lab93.innerHTML=answers.ans[nine][2];


lab101.innerHTML=answers.ans[ten][0];
lab102.innerHTML=answers.ans[ten][1];
lab103.innerHTML=answers.ans[ten][2];

//#endregion

})