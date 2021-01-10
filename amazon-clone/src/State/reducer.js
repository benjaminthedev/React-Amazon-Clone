export const initalState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding items to the basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //Clones the basket
            let newBasket = [...state.basket];
            //Check to see if item exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            //If greater than 0 then splice
            if (index >= 0) {
                //if item exists in the basket, remove it. 
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can not remove product with the ID of ${action.id}`
                );
            }
            //Return the new cloned basket!
            return {
                ...state, basket: newBasket
            }
        default:
            return state;
    }
}

export default reducer;