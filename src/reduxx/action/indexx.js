// Para agregar los productos al carro

export const addCart = (product) => {
  return {
    type: "ADDCART",
    payload: product,
  };
};

// Para borrar los productos al carro

export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
