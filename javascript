// Update total price
function updateTotal() {
  let total = 0;
  document.querySelectorAll(".cart-item").forEach(item => {
    const price = parseFloat(item.querySelector(".price").textContent) || 0;
    const qty = parseInt(item.querySelector(".quantity").textContent) || 0;
    total += price * qty;
  });
  document.querySelector("#total").textContent = total.toFixed(2);
}

// Quantity +
document.querySelectorAll(".plus-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const qtyElem = btn.parentElement.querySelector(".quantity");
    qtyElem.textContent = parseInt(qtyElem.textContent) + 1;
    updateTotal();
  });
});

// Quantity -
document.querySelectorAll(".minus-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const qtyElem = btn.parentElement.querySelector(".quantity");
    const qty = parseInt(qtyElem.textContent);
    if (qty > 1) {
      qtyElem.textContent = qty - 1;
      updateTotal();
    }
  });
});

// Delete item
document.querySelectorAll(".delete-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".cart-item");
    item.remove();
    updateTotal();
  });
});

// Like button toggle
document.querySelectorAll(".like-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked"); // define `.liked` in your CSS with a different color
  });
});

// Initial total
updateTotal();
