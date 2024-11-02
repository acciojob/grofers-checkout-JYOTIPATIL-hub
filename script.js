function calculateTotal() {
    // Get all elements with the class "prices"
    const prices = document.querySelectorAll(".prices");
    
    // Calculate the sum of prices
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    // Create a new row for the total price
    const table = document.getElementById("groceryTable");
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");
    
    // Set the colspan to span across all columns and display total
    totalCell.setAttribute("colspan", "2");
    totalCell.textContent = `Total Price: ${total}`;
    
    // Add the cell to the row, and the row to the table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
}
