import { getdetails, fetchMeals, fetchMealscategoryinside,fetchareadisplayinside,fetchMealsbyletter,fetchMealsingredient,fetchareadisplay,fetchMealsingredientinside,fetchMealsbyname}
 from './main.js'
 var ingredientdis = document.getElementById('ingredientdis')
 var ingredientdisinside = document.getElementById('ingredientdisinside')
 var areainsidee = document.getElementById('areainside')
 var area = document.getElementById('area')
 var search = document.getElementById('search')
var searchpage = document.querySelector('.searchpage')
var container = document.querySelector('#container')
var contact = document.querySelector('.contact-us')
var contactbtn = document.querySelector('#contactbtn')
var ingredientlink =document.getElementById('ingredientlink')
var ingredientdis =document.getElementById('ingredientdis')
var ingredientdisinside =document.getElementById('ingredientdisinside')
var categoryinside = document.querySelector('#category-inside')
var categorieslink = document.getElementById('Categorieslink')
var categories = document.getElementById('categories')
var Arealink = document.getElementById('Arealink')



export class MealDisplay {
    constructor(meals, rowElement) {
        this.meals = meals;
        this.rowElement = rowElement;
    }

    display() {
        let box = '';

        for (let i = 0; i < this.meals.length; i++) {
            box += `<div class="col-md-3 home">
                        <div class="meal-item"id="${this.meals[i].idMeal}">

                             <img src="${this.meals[i].strMealThumb}" alt="${this.meals[i].strMeal} ">
                            <div class="layer "><h3 class="position-relative top-50">${this.meals[i].strMeal}</h3></div>
                           
                        </div>
                    </div>`;
        }

        this.rowElement.innerHTML = box;
       

        document.querySelectorAll('.meal-item').forEach((item) => {
            item.addEventListener('click', function () {
                // console.log(item.getAttribute('id'));
                const mealId = item.getAttribute('id');
                getdetails(mealId);

            });
        });

    }
}


search.addEventListener('click', function () {

    searchpage.classList.replace('d-none', 'd-flex');
    container.classList.replace('d-flex', 'd-none');
    contact.classList.add('d-none');
    area.classList.add( 'd-none')
    areainsidee.classList.replace('d-flex', 'd-none');
    ingredientdis.classList.add('d-none');
    ingredientdisinside.classList.add('d-none');
    categoryinside.classList.add('d-none');
    categories.classList.add('d-none');
});
contactbtn.addEventListener('click', function () {

    contact.classList.replace('d-none', 'd-flex');
    container.classList.replace('d-flex', 'd-none');
    searchpage.classList.add('d-none');
    categories.classList.add('d-none');
    area.classList.add('d-none');
    areainsidee.classList.replace('d-flex', 'd-none');
    ingredientdis.classList.add('d-none');
    ingredientdisinside.classList.add('d-none');

});


export class detailsDisplay {
    constructor(details, rowElement2) {
        this.details = details;
        this.rowElement2 = rowElement2;
    }

    display() {
        let box = '';

        for (let i = 0; i < this.details.length; i++) {
            box += `
                <div class="d-flex justify-content-between align-items-center py-2">
                    
                </div>
                
                    <div class="col-md-3 ms-5 home">
                        <img src="${this.details[i].strMealThumb}" alt="" class="w-100">
                        <h3 class="text-white">${this.details[i].strMeal}</h3>
                    </div>
                    <div class="col-md-8">
                        <h2 class="text-white ">Instructions</h2>
                        <p class="text-white  "> ${this.details[i].strInstructions}</p>
                        <p class="text-white  fs-2">Area : <span class=" p-1">${this.details[i].strArea}</span></p>
                        <p class="text-white  fs-2">Category : <span class=" p-1">${this.details[i].strCategory}</span></p>
                        <div class="w-100 fs-2"><span class=" text-white">Recipes :</span></div>
                        <div class="d-flex flex-wrap categories">
                          ${this.createIngredientDivs(this.details[i])}
                        </div>
                        
                        <p class="text-white fw-semibold fs-4">Tags :</p>
                          <div class="d-flex">
                         ${this.createTagDivs(this.details[i].strTags)}
                          </div>
                       
                         <div class="d-flex btns">
                         <a href="${this.details[i].strSource}" class="mx-1"> <button class="btn btn-success form-control">Source</button></a>
                         <a href="${this.details[i].strYoutube}" class="mx-1"><button class="btn btn-danger form-control">Youtube</button></a>
                         </div>

                       
                    </div>
                `;
        }

        this.rowElement2.innerHTML = box;
        const hideElement = document.querySelector('.first-sec');
        const showElement = document.querySelector('.second-sec');
        if (hideElement) {
            hideElement.classList.replace('d-flex', 'd-none');
            showElement.style.display = 'block';
        }
    }

    createIngredientDivs(detail) {
        let divs = '';

        for (let i = 1; i <= 20; i++) {
            const ingredient = detail[`strIngredient${i}`];
            const measure = detail[`strMeasure${i}`];

            if (ingredient && measure) {
                divs += `<p class="bg-info-subtle m-2 rounded-1">${measure} ${ingredient}</p>`;
            } else {

                break;
            }
        }
        return divs;
    }

    createTagDivs(tags) {
        if (!tags) return '';

        const tagList = tags.split(',').map(tag => tag.trim());
        let divs = '';
        for (let tag of tagList) {
            divs += `<div class="bg-danger-subtle rounded-1 m-2 my-3 p-2">${tag}</div>`;
        }
        return divs;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////

export class MealDisplaycat {
    constructor(mealscat, rowElement3) {
        this.mealscat = mealscat;
        this.rowElement3 = rowElement3;
    }

    display() {
        let box = '';

        for (let i = 0; i < this.mealscat.length; i++) {
            box += ` <div class="col-md-3">
                        <div class="meal-item meal-item-cat w-75 home-to-category text-center" data-strMeal="${this.mealscat[i].strCategory}"
                             id="${this.mealscat[i].idCategory}" 
                             data-strCategory="${this.mealscat[i].strCategory}">
                            <div class="meal-image position-relative">
                                <img src="${this.mealscat[i].strCategoryThumb}" 
                                     alt="${this.mealscat[i].strCategory}">
                                <div class="layer">
                                    <div class="mt-5">
                                        <h3 class="position-absolute start-50 py-5 translate-middle">${this.mealscat[i].strCategory}</h3>
                                        <p class="py-3">${truncateText(this.mealscat[i].strCategoryDescription, 15)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }

        this.rowElement3.innerHTML = box;
        document.querySelectorAll('.meal-item').forEach((item) => {
            item.addEventListener('click', function () {
                // console.log(item.getAttribute('data-strMeal'));

                const mealname = item.getAttribute('data-strMeal');
                fetchMealscategoryinside(mealname);
                categories.classList.add('d-none');
                // ingredientdis.classList.add('d-none')
                categoryinside.classList.replace('d-none','d-flex')
                // categoryinside.classList.add('d-none')
                
              
               

            });
        });
    }
}




categorieslink.addEventListener('click', function () {
    categories.classList.remove('d-none');
    container.classList.replace('d-flex', 'd-none');
    areainsidee.classList.replace('d-flex', 'd-none');
    categoryinside.classList.add('d-none');
    searchpage.classList.add('d-none');
    contact.classList.add('d-none');
    area.classList.add('d-none')
    ingredientdis.classList.add('d-none')
    ingredientdisinside.classList.add('d-none')
    mealDisplaycat.display();
})

function truncateText(text, limit) {

    const words = text.split(' ');


    return words.slice(0, limit).join(' ');
}
///////////////////////////////////////////////////////////////////////////////////////////////////
export class MealDisplaycatinside {
    constructor(mealscatinside, rowElement4) {
        this.mealscatinside = mealscatinside;
        this.rowElement4 = rowElement4;
    }

    display() {
        let box = '';

        for (let i = 0; i < this.mealscatinside.length; i++) {
            box += `<div class="col-md-3">
                        <div class="meal-item w-100 home-to-category py-3 text-center" id="${this.mealscatinside[i].idMeal}">
                            <div class="meal-image position-relative">
                                <img src="${this.mealscatinside[i].strMealThumb}" alt="${this.mealscatinside[i].strMeal}">
                                <div class="layer">
                                    <div class="mt-5">
                                        <h3 class="position-absolute start-50 py-5 translate-middle">${this.mealscatinside[i].strMeal}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }

        this.rowElement4.innerHTML = box;

        document.querySelectorAll('.meal-item').forEach((item) => {
            item.addEventListener('click', function () {
                const mealId = this.getAttribute('id');
                getdetails(mealId);

                document.querySelectorAll('.meal-item').forEach((item) => {
                    item.style.display = 'none';
                });
            });
        });
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
export class areadisplay {
    constructor(area, rowElement5) {
        this.area = area;
        this.rowElement5 = rowElement5;
    }

    display() {
        let box = '';

        for (let i = 0; i < this.area.length; i++) {
            box += ` <div class="col-md-3 ">
        <div class="meal-item w-100 home-to-area text-center" data-strarea="${this.area[i].strArea}"">
            <div class="meal-image position-relative">
            <i class="fa-solid fa-house-laptop"></i>
               <h3 class="text-white">${this.area[i].strArea}</h3>
                
            </div>
        </div>
    </div>`;
        }

        this.rowElement5.innerHTML = box;
       
        document.querySelectorAll('.meal-item').forEach((item) => {
            item.addEventListener('click', function () {
                // console.log(item.getAttribute('data-strarea'));
                const areas = item.getAttribute('data-strarea');
                fetchareadisplayinside(areas);
                areainsidee.classList.add('d-flex');
                area.classList.add('d-none');


            });
        });


       
        Arealink.addEventListener('click', function () {
            area.classList.replace('d-none', 'd-flex')
            areainsidee.classList.add('d-flex')
            categories.classList.add('d-none');
            container.classList.replace('d-flex', 'd-none');
            categoryinside.classList.add('d-none');
            searchpage.classList.add('d-none');
            contact.classList.add('d-none');
            ingredientdis.classList.add('d-none');
            ingredientdisinside.classList.add('d-none');
            

        })
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
export class areadisplayinside {
    constructor(areainside, rowElement6) {
        this.areainside = areainside;
        this.rowElement6 = rowElement6;
    }

    display() {
        let box = '';

        for (let i = 0; i < this.areainside.length; i++) {
            box += `<div class="col-md-3">
                        <div class="meal-item w-100 home-to-category text-center" id="${this.areainside[i].idMeal}">
                            <div class="meal-image position-relative">
                                <img src="${this.areainside[i].strMealThumb}" alt="">
                                <div class="layer">
                                    <div class="mt-5">
                                        <h3 class="position-absolute start-50 py-5 translate-middle">${this.areainside[i].strMeal}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }

        this.rowElement6.innerHTML = box;


        document.querySelectorAll('.meal-item').forEach((item) => {
            item.addEventListener('click', function () {
                const areaId = this.getAttribute('id');
                getdetails(areaId);


                document.querySelectorAll('.meal-item').forEach((item) => {
                    item.style.display = 'none';
                });
            });
        });
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
export class searchbyletter {
    constructor(search, rowElement7) {
        this.search = search;
        this.rowElement7 = rowElement7;
    }

    display() {
        let box = '';

        for (let i = 0; i < this.search.length; i++) {
            box += ` <div class="col-md-3 ">
        <div class="meal-item w-100 home-to-category text-center" id="${this.search[i].idMeal}" data-letter="${this.search[i].strMeal[0]}">
            <div class="meal-image position-relative">
                <img src="${this.search[i].strMealThumb}" alt="">
                <div class="layer">
               <div class="mt-5">
                <h3 class="position-absolute  start-50 py-5 translate-middle">${this.search[i].strMeal}</h3>
                   
               </div>
                    
                </div>
            </div>
        </div>
    </div>`;
        }

        this.rowElement7.innerHTML = box;

        document.querySelectorAll('.meal-item').forEach((item) => {
            item.addEventListener('click', function () {

                console.log(item.getAttribute('data-letter'));

                const firstletter = item.getAttribute('data-letter');
                fetchMealsbyletter(firstletter);

            });
        });


    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////

export class ingredientdisplay {
    constructor(ingredient, rowElement8) {
        this.ingredient = ingredient;
        this.rowElement8 = rowElement8;
    }

    display() {
        let box = '';

        for (let i = 0; i < this.ingredient.length; i++) {
            box += ` <div class="col-md-3 ">
        <div class="meal-item w-100 home-to-ingredient text-center"data-ingrd="${this.ingredient[i].strIngredient}"">
            <div class="meal-image position-relative">
            <i class="fa-solid fa-drumstick-bite"></i>
               <h3 class="text-white">${this.ingredient[i].strIngredient}</h3>
               <p class="text-white">${this.ingredient[i].strDescription}</p>
                
            </div>
        </div>
    </div>`;
        }

        this.rowElement8.innerHTML = box;
      
        document.querySelectorAll('.meal-item').forEach((item) => {
            item.addEventListener('click', function () {
                // console.log(item.getAttribute('data-ingrd'));
                const ingred = item.getAttribute('data-ingrd');
                fetchMealsingredientinside(ingred);
                ingredientdis.classList.add('d-none')
                ingredientdisinside.classList.replace('d-none','d-flex')

            });
        });

    }
}

ingredientlink.addEventListener('click',function()
{
    ingredientdis.classList.replace('d-none','d-flex')
    container.classList.replace('d-flex','d-none')
    categories.classList.add('d-none')
    categoryinside.classList.add('d-none')
   areainsidee.classList.replace('d-flex','d-none')
    area.classList.add('d-none')
   searchpage.classList.add('d-none')
    contact.classList.add('d-none')
})
////////////////////////////////////////////////////////////////////////////////////////////////////
export class ingredientdisplayinside {
    constructor(ingredientinside, rowElement9) {
        this.ingredientinside = ingredientinside;
        this.rowElement9 = rowElement9;
    }

    display() {
        let box = '';

        for (let i = 0; i < this.ingredientinside.length; i++) {
            box += `<div class="col-md-3">
                        <div class="meal-item w-100 home-to-category text-center" id="${this.ingredientinside[i].idMeal}">
                            <div class="meal-image position-relative">
                                <img src="${this.ingredientinside[i].strMealThumb}" alt="">
                                <div class="layer">
                                    <div class="mt-5">
                                        <h3 class="position-absolute start-50 py-5 translate-middle">${this.ingredientinside[i].strMeal}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }

        this.rowElement9.innerHTML = box;

        document.querySelectorAll('.meal-item').forEach((item) => {
            item.addEventListener('click', function () {
                const ingredientId = this.getAttribute('id');
                getdetails(ingredientId);

                document.querySelectorAll('.meal-item').forEach((item) => {
                    item.style.display = 'none';
                });
            });
        });
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export class searchbyName {
    constructor(search, rowElement10) {
        this.search = search;
        this.rowElement10 = rowElement10;
    }

    display() {
        let box = '';

        for (let i = 0; i < this.search.length; i++) {
            box += ` <div class="col-md-3 ">
        <div class="meal-item w-100 home-to-category text-center" id="${this.search[i].idMeal}" data-name="${this.search[i].strMeal}">
            <div class="meal-image position-relative">
                <img src="${this.search[i].strMealThumb}" alt="">
                <div class="layer">
               <div class="mt-5">
                <h3 class="position-absolute  start-50 py-5 translate-middle">${this.search[i].strMeal}</h3>
                   
               </div>
                    
                </div>
            </div>
        </div>
    </div>`;
        }

        this.rowElement10.innerHTML = box;

        document.querySelectorAll('.meal-item').forEach((item) => {
            item.addEventListener('click', function () {

                console.log(item.getAttribute('data-name'));

                const name = item.getAttribute('data-name');
                fetchMealsbyname(name);

            });
        });


    }
}