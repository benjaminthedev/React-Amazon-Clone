export const initalState = {
    basket: [],
    user: null,
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding items to the basket
            break;

        case 'REMOVE_FROM_BASKET':
            //remove items from basket
            break;
        default:
            return state;
    }
}

export default reducer;