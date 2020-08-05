const initialState = {
    type: '',
    bodyBuild: '',
    name: '',
    description: '',
    price: '',
    newPrice: null,
    sizes: [
        { name: 's', left: 0 },
        { name: 'm', left: 0 },
        { name: 'l', left: 0 },
        { name: 'xl', left: 0 }
    ],
    sale: false,
    images: ['-', '-'],
    date: new Date()
}


const itemReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'INITIAL':
            return initialState
        case 'EDIT_ITEM':
            console.log(payload.name, payload.value)
            return { ...state, [payload.name]: payload.value }
        case 'UPLOAD_ITEM':
            console.log(payload)
            return state
        case 'ITEM_SALE':
            console.log('vsnalk')
            return { ...state, sale: !state.sale }
        case 'FILL_ITEM':
            console.log(payload)
            return { ...state, ...payload, sale: false }
        case 'EDIT_IMAGES':
            return {
                ...state, images: state.images.map((url, index) => {
                    if (index === payload.index) {
                        return payload.value
                    } else {
                        return url
                    }
                })
            }
        case 'EDIT_SIZE':
            console.log(payload.name + payload.value)
            return {
                ...state, sizes: state.sizes.map(size => {
                    if (size.name !== payload.name) {
                        return { ...size }
                    } else {
                        return {
                            ...size,
                            left: payload.value
                        }
                    }
                })
            }

        default:
            return state
    }
}

export default itemReducer;