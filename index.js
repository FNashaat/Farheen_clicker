// initialize count to 0
let count = 0;
let savedCounts = []; // Array to store saved counts


// Function to increment the count
function increment() {
   count += 1;
   // Updates the displayed count
   document.getElementById("count-el").innerText = count;
   console.log("Number of clicks: " + count);
}


function save() {
   savedCounts.push(count); // Adds current count to array
   document.getElementById("count-el").innerText = count; // Updates the count
   document.getElementById("saved-entries").innerText = "Saved Entries: " + savedCounts.join(", "); // Displays count
}
document.getElementById("increment-btn").addEventListener("click", increment);
