
import makeCard from "./makeCard.js"

fetch("http://localhost:8088/employees?_expand=computer&_expand=department")
.then(data => data.json()).then((jsonObj) => {
    const domRef = document.getElementById("display-container")
    jsonObj.forEach(element => {
        console.log(element)
        domRef.innerHTML += makeCard.employeeCard(element)
    });
}
)