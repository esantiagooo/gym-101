const searchInput = () => document.querySelector("#search-input")
const upperUl = () => document.querySelector("#upper-list")
let upperArray = []
//once we fetch all the excerises we store them in the array

// const handleErrorDisplay = (error) => {
//     console.log(error)
// }

const handleSearch = (e) => {
    const searchInput = e.target.value
    upperUl().innerHTML = ""
    const selectedUpper = upperArray.filter(upper => upper.muscle.toLowerCase().includes(searchInput.toLowerCase()))
    
    if (searchInput === "") {
        upperArray.forEach(makeUpperTile)
    } else if (selectedUpper.length === 0) {
       returnNone()
    } else{
        selectedUpper.forEach(makeUpperTile)
    }
    
}

const returnNone = () => {

}

const makeUpperTile = (upper) => {
    const div = document.createElement("div")
    div.id = `upper-card-${upper.id}`
    div.className = 'upper-card'

    const title = document.createElement("h2")
    title.textContent = upper.exerciseName

    const span = document.createElement("span")
    span.className = "upper-details"
    span.textContent = `
        muscle: ${upper.muscle} - equipment: ${upper.equipment} - mechanicsType: ${upper.mechanicsType}`
    
    div.addEventListener("mouseenter", function(event){
        //event.target.style.backgroundColor = "purple";
        event.target.classList.add("purple")
        setTimeout(function(){
            //event.target.style.backgroundColor = "black";
            event.target.classList.remove("purple")
        },500)
    }, false);
    div.addEventListener("click", flipCard);
    function flipCard(){
        div.classList.toggle("flipCard")
        const upperImg = document.querySelector(`#pic-${upper.id}`)
        if (!upperImg){
            div.innerHTML = `<img  id = "pic-${upper.id}" src= "${upper.url}"/>`   
        } else{ 
            upperImg.replaceWith(span)
            
        }
    }


    //let upperUl = document.getElementById("upperUl")
    //upperUl.addEventListener("mouseenter", function(){
     //   event.target.style.color = "purple";
     //   setTimeout(function(){
     //       event.target.style.color = " ";
     //   }, 500);
    //}, false);
        div.append(title, span)
    upperUl().appendChild(div)    
}

const displayUpper = (upper) => {
    upperArray = upper
    if (upper.length > 0) {
        upper.forEach(upper => makeUpperTile(upper))  
    } else {
        returnNone()
    }
}

const fetchUpper = () => {
    fetch("http://localhost:3000/upper")
    .then(resp => resp.json())
    .then(upper => displayUpper(upper))
    .catch(error => handleErrorDisplay(error))
}

const handlePageLoaded = () => {
    fetchUpper()
    searchInput().addEventListener("change", handleSearch)
}

document.addEventListener("DOMContentLoaded", handlePageLoaded)
// DOMContentLoaded is the first event triggering as soon as the page loaded
 