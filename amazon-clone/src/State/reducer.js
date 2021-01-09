export const initalState = {
    basket: [{
        id: '987654545654367',
        title: 'This is a very very long title for a product',
        price: 9.99,
        rating: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/5179mAwVxBL._AC_SX679_.jpg'
    },
    {
        id: '9876212154567',
        title: 'This is a very very long title for a product',
        price: 9.99,
        rating: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/5179mAwVxBL._AC_SX679_.jpg'
    },
    {
        id: '9876545698765437',
        title: 'This is a very very long title for a product',
        price: 9.99,
        rating: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/5179mAwVxBL._AC_SX679_.jpg'
    },
    {
        id: '98765434232453213456765432567',
        title: 'This is a very very long title for a product',
        price: 9.99,
        rating: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/5179mAwVxBL._AC_SX679_.jpg'
    }],
    user: null,
}

const reducer = (state, action) => {
    console.log(action);
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