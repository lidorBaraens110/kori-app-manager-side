export const initial = () => {
    return {
        type: 'INITIAL'
    }
}
export const itemSale = () => {
    return {
        type: 'ITEM_SALE'
    }
}
export const initialItems = (items) => {
    return {
        type: 'INITIAL_ITEMS',
        payload: items
    }
}
export const editItem = ({ name, value }) => {
    return {
        type: 'EDIT_ITEM',
        payload: { name, value }
    }
}
export const editSize = ({ name, value }) => {
    return {
        type: 'EDIT_SIZE',
        payload: { name, value }
    }
}

export const uploadItem = (item) => {
    return {
        type: 'UPLOAD_ITEM',
        payload: item
    }
}

export const fillItem = (item) => {
    return {
        type: 'FILL_ITEM',
        payload: item
    }
}
export const editImages = ({ index, value }) => {
    return {
        type: 'EDIT_IMAGES',
        payload: { index, value }
    }
}
