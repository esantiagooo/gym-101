const searchInput = () => document.querySelector("#search-input")
const upperUl = () => document.querySelector("#upper-list")

const handleErrorDisplay = (error) => {
    console.log(error)
}

const handleSearch

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
        targetedMuscle: ${upper.targetedMuscle} - exceriseEquipment: ${upper.exceriseEquipment} - mechanicsType: ${upper.mechanicsType}`
    
    div.addEventListener("mouseenter", function(event){
        //event.target.style.backgroundColor = "purple";
        event.target.classList.add("purple")
        setTimeout(function(){
            //event.target.style.backgroundColor = "black";
            event.target.classList.remove("purple")
        },500)
    }, false);


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
    searchInput().addEventListener("change, handleSearch")
}

document.addEventListener("DOMContentLoaded", handlePageLoaded)
//const handleLoaded = () => {
    //create 3 boxes or a box per muscle group
    //attach an event listener a click listner 
    // put them on the page queryselector
    // have an array musclegroups = ["shoulders, "chest", "back"]
    //muscleGroup.ForEach
//}
//document.addEventListener("DOMContentLoaded", handleLoaded) 