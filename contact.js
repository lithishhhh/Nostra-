const form=document.getElementById("contactForm");

const success=document.querySelector(".success");


form.addEventListener("submit",function(e){

e.preventDefault();


success.style.display="block";


form.reset();





});


let questions = document.querySelectorAll(".question");


questions.forEach(function(question){

    question.addEventListener("click", function(){


        let answer = question.nextElementSibling;


        if(answer.style.display === "block"){

            answer.style.display = "none";

        }

        else{

            answer.style.display = "block";

        }


    });

});
