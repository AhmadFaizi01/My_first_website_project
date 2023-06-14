document.addEventListener('DOMContentLoaded', () => {
  let shopping_cart = document.querySelector(' = ().shopping_cart');
  document.querySelector('#cart_btn').onclick = () => { 
    shopping_cart.classList.toggle('active');
  }
});

let shopping_cart = document.querySelector('shopping_cart');

document.querySelector('#cart_btn').onclick = () => 
{
  shopping_cart.classList.toggle('active');
}

