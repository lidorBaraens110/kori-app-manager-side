import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";
import { editItem, itemSale, initial, editImages, editSize } from '../action';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core'
import Edit from '../common/edit';

const UploadItem = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const item = useSelector(state => state.item)
    const [check, setCheck] = useState(false)
    // const [picture, setPicture] = useState('');
    const handleChange = (event) => {
        const { value, name } = event.target
        dispatch(editItem({ name, value }))
    };
    const handleDateChange = (date) => {
        let name = 'date';
        let value = date;
        dispatch(editItem({ name, value }));
    }
    const handleChangeSize = (e) => {
        const { value, name } = e.target;
        console.log(name + '   ' + value)
        dispatch(editSize({ name, value }))


    }
    const handleClick = () => {
        console.log(item)
        axios.post('http://localhost:8080/items/add', item)
            .then(res => console.log(res))
            .catch(err => console.log('error: ' + err))
        // dispatch(initial());
    }
    const handleImageChange = (e, index) => {
        console.log(e)
        const value = e.target.value
        dispatch(editImages({ index, value }))
    }

    const handleBuyTheLook = () => {
        history.push('/buythelook');
    }
    const handleSale = () => {
        dispatch(itemSale())
    }

    return (
        <div>
            <h1>
                העלאת פריט
            </h1>
            <Edit
                sale={item.sale}
                onClick={handleSale}
                name={item.name}
                description={item.description}
                date={item.date}
                price={item.price}
                newPrice={item.newPrice}
                type={item.type}
                bodyBuild={item.bodyBuild}
                sizes={item.sizes}
                handleBuyTheLook={handleBuyTheLook}
                handleChange={handleChange}
                handleDateChange={handleDateChange}
                images={item.images}
                handleImageChange={handleImageChange}
                handleChangeSize={handleChangeSize}
            />
            <button onClick={handleClick} > העלה את התוכן</button>
        </div>
    )
}

export default UploadItem;
