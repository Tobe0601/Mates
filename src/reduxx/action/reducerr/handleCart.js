const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  /*
    switch (action.type) {
        case ADDITEM:
        //Evalua si el objeto existe
        const exist = state.find((x)=> x.id === product.id);
            if(exist){
                return state.map((x)=>
                x.id === product.id ? {...x, qty: x.qty + 1}: x
                );
            }
            
            break;
    
        default:
            break;
    }

}

export default handleCart;
*/
};