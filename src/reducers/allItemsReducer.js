import items from '../data/allItems';

const initialState =
    items


const allItemsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'INITIAL_ITEMS':
            return payload
        default: return state
    }
}

export default allItemsReducer