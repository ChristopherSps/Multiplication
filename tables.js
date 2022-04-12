/* This is where we print out the times tables */

function tables(){
    let factor = localStorage.getItem("problemFactor");
    // if (factor === "undefined") {
    //     alert("hey");
    //     factor = prompt("Times tables for ");
    // }
    let tableText = "Table for "+factor+ "\n";
    for (let row = min; row <= max; row++) {
        tableText += factor+ " * " +row+ " = "+ factor*row + "\n";
        alert(tableText);
    }
    alert(tableText);
}
