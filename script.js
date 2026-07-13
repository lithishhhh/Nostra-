
//Navbar scripting
function toggleNavSearch(){

    let searchBox = document.getElementById("searchOverlay");

    searchBox.classList.toggle("active");

}

var hamburger=document.getElementById("hamburger");

var mobileMenu=document.getElementById("mobileMenu");
var closeBtn=document.getElementById("closeBtn")

hamburger.addEventListener("click",function(){

mobileMenu.classList.toggle("show");

});
closeBtn.addEventListener("click", function(){
    mobileMenu.classList.remove("show");
});

function subscribe(){

var email=document.querySelector(".subscribe-box input").value;

if(email==""){

alert("Please enter your email");

}

else{

alert("🎉 Welcome to Nostra Club!");

document.querySelector(".subscribe-box input").value="";

}

}


let searchInputs = document.querySelectorAll(".nav-search-inner input");


searchInputs.forEach(function(searchInput){

    searchInput.addEventListener("keyup", function(event){

        let enteredValue = searchInput.value.trim();


        if(event.key === "Enter" && enteredValue !== ""){

            window.location.href =
            "collectionpage.html?search=" + enteredValue;

        }

    });

});
