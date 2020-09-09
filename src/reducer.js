export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
    // Explore more about reduce function
    basket?.reduce((ammount, item) => item.price + ammount, 0);

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user : action.user
            }
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case "REMOVE_FROM_BASKET":
            // Logic for removing item from basket

            // We cloned the basket
            let newBasket = [...state.basket];

            // Find the id
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // Item exists, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn('Cant remove product is not found (id : ${action.id})')
            }

            return { 
                ...state,
                basket: newBasket,
            };

        default:
            return state;
    }
}

export default reducer;