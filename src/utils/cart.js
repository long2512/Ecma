let cart =[];

if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'))
}

export const addToCart = (newProduct,callBack) => {
    const exitsProducts = cart.find(product=>product.id === newProduct.id)
    if(!exitsProducts){
        cart.push(newProduct);
    }else{
        exitsProducts.quantity++;
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    callBack();
}

export const plusCart = (id, callBack) => {
    cart.find((pro) => pro.id === id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    callBack();
  };
  
  export const minusCart = (id, callBack) => {
    const minusCart = cart.find((pro) => pro.id === id);
    minusCart.quantity--;
    if (minusCart.quantity < 1) {
      // const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?');
      // if (confirm) {
      //   cart = cart.filter((item) => item !== id);
      // }
      removeCart(id, callBack);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    callBack();
  };
  
  export const removeCart = (id, callBack) => {
    const confirm = window.confirm("Bạn có muốn xóa sp không!");
    if (confirm) {
      cart = cart.filter((item) => item.id !== id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    callBack();
  };