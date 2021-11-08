const searchInput = () => document.querySelector("#search-input")
const upperUl = () => document.querySelector("#upper-list")

const fetchUpper = () => {

}

const handlePageLoaded = () => {
    fetchUpper()
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