filterSelection("all")
function filterSelection(family) {
    let filterDiv;
    let i;
    filterDiv = document.getElementsByClassName("brick");
    if (family == "all") family = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < filterDiv.length; i++) {
        RemoveClass(filterDiv[i], "show-brick");
        if (filterDiv[i].className.indexOf(family) > -1) AddClass(filterDiv[i], "show-brick");
    }
}
// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
        }
    }
}
// Hide elements that are not selected
function RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
// Add active class to the current control button (highlight it)
const filterContainer = document.getElementById("filerContainer");
const filter = filterContainer.getElementsByClassName("filter");
for (let i = 0; i < filter.length; i++) {
    filter[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}