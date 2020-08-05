import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const Sizes = ({ size, value, onChange }) => {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <FormControl fullWidth style={{ marginBottom: '2rem', marginRight: '1rem' }}>

            <InputLabel id={size}>{size}</InputLabel>
            <Select
                labelId={size}
                id={size}
                name={size}
                value={value}
                onChange={onChange}
            >
                {numbers.map(number => {
                    return <MenuItem key={number} value={number}>{number}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}
export default Sizes;