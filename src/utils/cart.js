

let cart =[];

if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'))
}

export const addToCart = (newProduct,next) => {
    const exitsProducts = cart.find(product=>product.id == newProduct.id)
    if(!exitsProducts){
        cart.push(newProduct);
    }else{
        exitsProducts.quantity++;
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    next();
}

export const plusCart = (id, next) => {
    cart.find((pro) => pro.id == id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  };
  
  export const minusCart = (id, next) => {
    const minusCart = cart.find((pro) => pro.id == id);
    minusCart.quantity--;
    if (minusCart.quantity < 1) {
      
      removeCart(id, next);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  };
  
  export const removeCart = (id, next) => {
    const confirm = window.confirm("Bạn có muốn xóa sp không!");
    if (confirm) {
      cart = cart.filter(item => item.id != id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  };
  