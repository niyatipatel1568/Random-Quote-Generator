let clickButton = document.querySelector("#btn");
let addQuote = document.querySelector("#Quote");
let addAuthor = document.querySelector("#author")


let apiUrl = "https://api.quotable.io/random"

async function getQuote(){
try {
    clickButton.innerHTML = "Loading..."
    clickButton.disabled = true;
    addQuote.innerHTML = "Updating..."
    addAuthor.innerHTML = "Updating..."
    let response = await fetch(apiUrl)
    let data = await response.json()
    addQuote.innerHTML = data.content
    addAuthor.innerHTML = "~ " + data.author
    clickButton.innerHTML = "Get a quote"
    clickButton.disabled = false;
    console.log(data)   
} catch (error) {
    addQuote.innerHTML = "An error occured."
    addAuthor.innerHTML = "An error"
    clickButton.innerHTML = "Get a quote"
    clickButton.disabled = false;
}    
}

getQuote()



clickButton.addEventListener('click',getQuote)