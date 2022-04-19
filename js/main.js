// The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){

    let drink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
.then(res => res.json())
.then(data => {
    console.table(data.drinks[0])
    document.querySelector('h2').innerText= data.drinks[0].strDrink
    document.querySelector('h3').innerText= data.drinks[0].strInstructions
    document.querySelector('img').src= data.drinks[0].strDrinkThumb
    document.querySelector('p').innerText= `Here's what you need for your drink:  ${data.drinks[0].strMeasure1}, ${data.drinks[0].strMeasure2}, ${data.drinks[0].strMeasure3} `
})
.catch(err => {
    console.log(`error ${err}`)
});
}


// search for cocktail in api list of coctails and retrieve just the one user enters

// post name, image and recipe on the page