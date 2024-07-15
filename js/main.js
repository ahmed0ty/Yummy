import { MealDisplay,detailsDisplay,MealDisplaycat,MealDisplaycatinside,areadisplay,areadisplayinside,searchbyletter,ingredientdisplay,ingredientdisplayinside,searchbyName } from './content.js';


var rowelement = document.getElementById('row');
var rowelement3 = document.getElementById('row-3');
var rowElement4 = document.getElementById('row-4');
var rowElement5 = document.getElementById('row-5');
var rowElement6 = document.getElementById('row-6');
var rowElement7 = document.getElementById('row-7');
var rowElement8 = document.getElementById('row-8');
var rowElement9 = document.getElementById('row-9');
var rowElement10 = document.getElementById('row-10');
var mealsData;
var mealsData2;
var mealsData3;
var mealsData4;
var mealsData5;
var mealsData6;
var mealsData7;
var mealsData8;
var mealsData9;
const overlay = document.getElementById('overlay');
const spinner = document.querySelector('.spinner');
const rowElement2 = document.getElementById('row2');
export async function fetchMeals() {
    overlay.style.display = 'block';
    spinner.style.display = 'block';

    try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        const response = await api.json();

        mealsData = response.meals;

        const mealDisplay = new MealDisplay(mealsData, rowelement);
        mealDisplay.display();
    } catch (error) {
        console.error('Error fetching or displaying meals:', error);
    } finally {
        spinner.style.display = 'none';
        overlay.style.display = 'none';
    }
}

fetchMeals();

export async function getdetails(mealId) {
    
    overlay.style.display = 'block';
    spinner.style.display = 'block';

    try {
        const apidetail = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const responsedetail = await apidetail.json();

        const detailsDisplayInstance = new detailsDisplay([responsedetail.meals[0]], rowElement2);
        detailsDisplayInstance.display();
    } catch (error) {
        console.error('Error fetching or displaying details:', error);
    } finally {
        spinner.style.display = 'none';
        overlay.style.display = 'none';
    }
}

export async function fetchMealscategory() {
    overlay.style.display = 'block';
    spinner.style.display = 'block';

    try {
        const api2 = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const response2 = await api2.json();

        mealsData2 = response2.categories;

        const mealDisplay2 = new MealDisplaycat(mealsData2, rowelement3);
        mealDisplay2.display();
    } catch (error) {
        console.error('Error fetching or displaying categories:', error);
    } finally {
        spinner.style.display = 'none';
        overlay.style.display = 'none';
    }
}

fetchMealscategory();

export async function fetchMealscategoryinside(mealname) {
    overlay.style.display = 'block';
    spinner.style.display = 'block';

    try {
        const api3 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealname}`);
        const response3 = await api3.json();

        mealsData3 = response3.meals;

        const mealDisplay3 = new MealDisplaycatinside(mealsData3, rowElement4);
        mealDisplay3.display();
    } catch (error) {
        console.error('Error fetching or displaying categories inside:', error);
    } finally {
        spinner.style.display = 'none';
        overlay.style.display = 'none';
    }
}

export async function fetchareadisplay() {
    overlay.style.display = 'block';
    spinner.style.display = 'block';

    try {
        const api4 = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        const response4 = await api4.json();

        mealsData4 = response4.meals;

        const mealDisplay4 = new areadisplay(mealsData4, rowElement5);
        mealDisplay4.display();
    } catch (error) {
        console.error('Error fetching or displaying areas:', error);
    } finally {
        spinner.style.display = 'none';
        overlay.style.display = 'none';
    }
}

fetchareadisplay();

export async function fetchareadisplayinside(areas) {
    overlay.style.display = 'block';
    spinner.style.display = 'block';

    try {
        const api5 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areas}`);
        const response5 = await api5.json();

        mealsData5 = response5.meals;

        const mealDisplay5 = new areadisplayinside(mealsData5, rowElement6);
        mealDisplay5.display();
    } catch (error) {
        console.error('Error fetching or displaying areas inside:', error);
    } finally {
        spinner.style.display = 'none';
        overlay.style.display = 'none';
    }
}

export async function fetchMealsbyletter(firstletter) {
    overlay.style.display = 'block';
    spinner.style.display = 'block';

    try {
        const api6 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstletter}`);
        const response6 = await api6.json();

        mealsData6 = response6.meals;
        console.log(mealsData6)

        const mealDisplay6 = new searchbyletter(mealsData6, rowElement7);
        mealDisplay6.display();
    } catch (error) {
        console.error('Error fetching or displaying meals by letter:', error);
    } finally {
        spinner.style.display = 'none';
        overlay.style.display = 'none';
    }
}

export async function fetchMealsingredient() {
    overlay.style.display = 'block';
    spinner.style.display = 'block';

    try {
        const api7 = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        const response7 = await api7.json();

        mealsData7 = response7.meals.slice(0, 20);

        const mealDisplay7 = new ingredientdisplay(mealsData7, rowElement8);
        mealDisplay7.display();
    } catch (error) {
        console.error('Error fetching or displaying ingredients:', error);
    } finally {
        spinner.style.display = 'none';
        overlay.style.display = 'none';
    }
}

fetchMealsingredient();

export async function fetchMealsingredientinside(ingred) {
    overlay.style.display = 'block';
    spinner.style.display = 'block';

    try {
        const api8 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`);
        const response8 = await api8.json();

        mealsData8 = response8.meals;

        const mealDisplay8 = new ingredientdisplayinside(mealsData8, rowElement9);
        mealDisplay8.display();
    } catch (error) {
        console.error('Error fetching or displaying ingredients inside:', error);
    } finally {
        spinner.style.display = 'none';
        overlay.style.display = 'none';
    }
}



export async function fetchMealsbyname(name) {
    overlay.style.display = 'block';
    spinner.style.display = 'block';

    try {
        const api9 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        const response9 = await api9.json();

        mealsData9 = response9.meals;
        console.log(mealsData9)

        const mealDisplay9 = new searchbyName(mealsData9, rowElement10);
        mealDisplay9.display();
    } catch (error) {
        console.error('Error fetching or displaying meals by letter:', error);
    } finally {
        spinner.style.display = 'none';
        overlay.style.display = 'none';
    }
}







function hideMeals() {
    rowElement7.innerHTML = ''; 

}
function hideMeals2() {
    rowElement10.innerHTML = '';
}

document.getElementById('searchByFirstLetter').addEventListener('input', function() {
    const firstLetter = this.value.trim().charAt(0).toLowerCase(); 

    if (firstLetter) {
        fetchMealsbyletter(firstLetter);
        
    } else {
        hideMeals();
    }
});

document.getElementById('searchByName').addEventListener('input', function() {
    const name = this.value.trim().toLowerCase();

    if (name) {
        fetchMealsbyname(name);
    }
     else {
        hideMeals2();
    }
});


