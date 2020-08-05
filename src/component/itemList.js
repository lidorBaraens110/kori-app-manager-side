import React, { useState, useEffect } from 'react';
import Item from './item';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
//import { FaShoppingBag } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fillItem, initialItems } from '../action'
import StandardCard from '../common/standardCard';
const ItemList = () => {
    const history = useHistory();
    const items = useSelector(state => state.allItems)
    const dispatch = useDispatch()

    const handleEdit = (item) => {
        dispatch(fillItem(item))
        history.push('/edit')
    }
    useEffect(() => {
        axios.get('http://localhost:5000/items/')
            .then(res => {
                if (res.data.length > 0) {
                    dispatch(initialItems(res.data))
                }
            })
    }, [])

    // const [items, setItems] = useState([])
    const handleMouseOver = (id) => {
        // const current = items.find(obj => obj.id === id);
        // current.currentImage++;
        // setItems([...items]);
    }
    const handleMouseOut = (id) => {
        // const current = items.find(obj => obj.id === id);
        // current.currentImage = 0;
        // setItems([...items])
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className='subHeader'>New Collection</h1>
            {/* <SortClothe
            /> */}
            <Grid
                container
                spacing={5}
                style={{ padding: '3% 7% 3% 7%', textAlign: 'center' }}>
                {items.map(item => {
                    const { s, md, lg, xl } = item;
                    return (
                        <Grid
                            key={item.id}
                            item
                            xs={12} sm={6} md={4} lg={3} xl={3}>

                            <Item
                                onMouseOut={handleMouseOut}
                                onMouseOver={handleMouseOver}
                                id={item.id}
                                key={item.id}
                                image={item.images[0]}
                                name={item.name}
                                s={s}
                                md={md}
                                lg={lg}
                                xl={xl}
                                price={item.price} />
                            <Button onClick={() => handleEdit(item)}> ערוך</Button>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default ItemList;