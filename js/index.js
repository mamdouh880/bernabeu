let category = [];

async function getHttpCategory() {
    let myHttpRequiest = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    let response = await myHttpRequiest.json();
    category = await response.categories;
}
async function callsCategory() {
    await getHttpCategory();
    // console.log(category);
    displayData(category);
}



function displayData(arr) {
    let temp = '';
    for (let i = 0; i < arr.length; i++) {
        temp += `<div class="col-md-3 Categorie  px-0 position-relative ">
        <img class="w-100" src=${category[i].strCategoryThumb} alt="">
    <div class="item py-3">
        <h3 class="">${category[i].strCategory}</h3>
        <p>${category[i].strCategoryDescription}</p>
    </div>
</div>`
    }

    document.getElementById('test').innerHTML = temp;
}


// $('#category-demo').click(function(){
//     $('.Categories').hide(0);
// $('.categories-items').show(0);


// })

let category_link = document.getElementById('category-link');
category_link.addEventListener('click', function() {
    callsCategory();
    // displayData(category);
    // document.getElementById('test').innerHTML = displayData(category);
})

// **************************************************************
let area = [];

async function getHttpArea() {
    let myHttpRequiest = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    let response = await myHttpRequiest.json();
    area = await response.meals;
    // console.log(area);

}
async function callsArea() {
    await getHttpArea();
    // console.log(area);
    displayArea();

}
getHttpArea();



function displayArea() {
    let temp = '';
    for (let i = 0; i < area.length; i++) {
        temp += `   <div class=" mb-3 col-md-3 d-flex flex-column justify-content-center align-items-center">
        <i class="fa-solid fa-city fa-3x "></i>
        <h3 class="">${area[i].strArea}</h3>
    </div>`
    }

    document.getElementById('test').innerHTML = temp;
}

let area_link = document.getElementById('area-link');
area_link.addEventListener('click', function() {
    callsArea();

})

// **************************************************************
let ingredient = [];

async function getHttpIngredient() {
    let myHttpRequiest = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    let response = await myHttpRequiest.json();
    ingredient = await response.meals;
    // console.log(ingredient);
}

async function callsIngredient() {
    await getHttpIngredient();
    // console.log(area);
    displayIngredient();

}
getHttpIngredient();



function displayIngredient() {
    let temp = '';
    for (let i = 0; i < ingredient.length; i++) {
        temp += `<div class=" mb-3 col-md-3 d-flex flex-column justify-content-center align-items-center">
        <i class="fa-solid fa-utensils fa-3x "></i>
        <h3 class="">${ingredient[i].strIngredient}</h3>
        <p class="edit text-center">${ingredient[i].strDescription}</p>
    </div>`
    }

    document.getElementById('test').innerHTML = temp;
}

let ingredient_link = document.getElementById('ingredient-link');
ingredient_link.addEventListener('click', function() {

    callsIngredient();


})

// document.getElementById('test').innerHTML = temp;

let contact_link= document.getElementById('contact-link');
contact_link.addEventListener('click', function() {

    ContactDisplay();
})



function ContactDisplay(){
    let temp=`<section class="container myM w-75 mx-auto mb-5 ">
    <div class="p-2">
        <h2 class="text-light mb-5">ContacUs...</h2>
        <div  class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input class="form-control shadow " onkeyup="validation()" id="name" placeholder="Enter Your Name">

                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <input class="form-control" id="email" placeholder="Enter Email">

                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <input class="form-control" placeholder="Enter phone">
                    <div class="alert mt-1 alert-danger  d-none" id="phonealert">
                        Enter valid Phone Number
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <input class="form-control" id="age" placeholder="Enter Age">
                    <div class="alert mt-1 alert-danger  d-none">
                        Enter valid Age
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <input class="form-control" type="password" placeholder="Enter Password">
                    <div class="alert mt-1 alert-danger  d-none">
                        Enter valid password *Minimum eight characters, at least one letter and one number:*
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <input class="form-control" type="password" placeholder="Enter RePassword">
                    <div class="alert mt-1 alert-danger  d-none">
                        Enter valid Repassword
                    </div>
                </div>
            </div>


        </div>

        <button type="submit" class="btn btn-outline-danger text-center mt-3 position-relative ">Submit</button>
    </div>

</section>`
document.getElementById('test').innerHTML = temp;

}
$('.fa-times').click(function() {
  let currentWidth= $('.slider').outerWidth();
  console.log(currentWidth);
  

  if($('.slider').css('left')=='0px'){
    $('.slider').animate({'left':-currentWidth+55},1000);

  }
  else{
    $('.slider').animate({'left':0},1000);
  }
})
$('document').ready(function(){
    $('#loading').fadeOut(2000);
})