let products = document.querySelectorAll(".product-card");

let searchInput = document.querySelector(".search-box input");


// Get search value from Home page

let urlParams = new URLSearchParams(window.location.search);

let searchValue = urlParams.get("search");


if(searchValue){

    searchInput.value = searchValue;

    filterProducts(searchValue);

}



// Search function

function filterProducts(value){

    value = value.toLowerCase();


    products.forEach(function(product){

        let productName = product.querySelector(".product-name");


        if(productName){

            let name = productName.textContent.toLowerCase();


            if(name.indexOf(value) !== -1){

                product.style.display = "block";

            }

            else{

                product.style.display = "none";

            }

        }

    });

}



// Collection page typing search

searchInput.addEventListener("keyup", function(){

    filterProducts(searchInput.value);

});




// Checkbox Filter

let checkboxes = document.querySelectorAll(".category-section input");


checkboxes.forEach(function(checkBox){

    checkBox.addEventListener("change", function(){

        let selectedCategories = [];


        checkboxes.forEach(function(box){

            if(box.checked){
                selectedCategories.push(box.value);
            }

        });



        products.forEach(function(product){


            let productCategories = product.dataset.category.split(" ");


            if(selectedCategories.length === 0){

                product.style.display = "block";

            }


            else if(selectedCategories.some(category => productCategories.includes(category))){

                product.style.display = "block";

            }


            else{

                product.style.display = "none";

            }


        });


    });

});