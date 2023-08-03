// this one is simple we just need to toggle the active class in faq

// creating our variable
const btn = document.querySelectorAll(".faq-toggle");

// using forEach and then adding an event listener
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // parentNode is like its stated the parent of the variable so btn being .faq-toggle's parent would be .faq
    // so it selecting .faq to toggle active
    btn.parentNode.classList.toggle("active");
  });
});
