const checkboxes = document.querySelectorAll(".chocolate-checkbox");
const totalPriceDisplay = document.getElementById("totalPrice");

let totalPrice = 0;
let selectedItems = 0;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const price = parseFloat(checkbox.getAttribute("price"));

    if (checkbox.checked) {
      totalPrice += price;
      selectedItems++;
    } else {
      totalPrice -= price;
      selectedItems--;
    }

    if (selectedItems <= 8) {
      totalPriceDisplay.innerText = totalPrice.toFixed(2);
    } else {
      checkbox.checked = false;
      selectedItems--;
      alert("You can only select up to 8 items.");
    }
  });
});
