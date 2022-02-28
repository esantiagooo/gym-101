const searchInput = () => document.querySelector("#search-input")
// querySelector method returns the first element that matches the id search-input
const upperUl = () => document.querySelector("#upper-list")
//querySelector method returns an element with an id of upper-list
let upperArray = []

const handleSearch = (e) => {
    const searchInput = e.target.value
    
    // e.target.value is the value property of some DOM element.In this case the text entered in the search input.
    upperUl().innerHTML = ""
    const selectedUpper = upperArray.filter(upper => upper.muscle.toLowerCase().includes(searchInput.toLowerCase()) ||
    upper.equipment.toLowerCase().includes(searchInput.toLowerCase()))

    
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
    // creating a div and giving it an id as well as a classname.

    const title = document.createElement("h2")
    title.textContent = upper.exerciseName
    //The div is given an H2 element for the title of the exercise.

    const span = document.createElement("span")
    span.className = "upper-details"
    span.textContent = `
        muscle: ${upper.muscle} - equipment: ${upper.equipment} - mechanics: ${upper.mechanics}`
        //span contains the details of the workout such as, muscle, equipment and mechanics.
    
    div.addEventListener("mouseenter", function(event){
       
        event.target.classList.add("purple")
        setTimeout(function(){
            
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
            upperImg.replaceWith(title, span)
            
        }
    }
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

  