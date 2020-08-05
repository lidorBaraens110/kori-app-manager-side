import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { Input, Button, IconButton, TextField } from '@material-ui/core';
import Sizes from './sizes';
import BackupIcon from '@material-ui/icons/Backup';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const Edit = ({ sale, handleImageChange, newPrice,
    onClick, name, type, bodyBuild, description,
    handleChangeSize, handleChange, images, price,
    handleDateChange, sizes, date, handleBuyTheLook }) => {

    return (
        <div>
            <div style={{
                border: 'solid black 1px', padding: '5%', display: 'flex', flexDirection: 'column',
                alignItems: 'space-between', alignContent: 'space-evenly'
            }}>
                <FormControl fullWidth style={{ marginBottom: '2rem' }}>
                    <InputLabel id="bodyBuildId">מבנה גוף</InputLabel>
                    <Select
                        labelId="bodyBuildId"
                        id='bodyBuild'
                        name='bodyBuild'
                        value={bodyBuild}
                        onChange={handleChange}
                    >
                        <MenuItem value={'אגסי'}>
                            אגסי
                        </MenuItem>
                        <MenuItem value={'מלבני'}>
                            מלבני
                        </MenuItem>
                        <MenuItem value={'שעון חול'}>
                            שעון חול
                        </MenuItem>
                        <MenuItem value={'משולש הפוך'}>
                            משולש הפוך
                        </MenuItem>
                    </Select>

                </FormControl>
                <FormControl fullWidth style={{ marginBottom: '2rem' }}>
                    <InputLabel id="demo-simple-select-label">סוג</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id='type'
                        name='type'
                        value={type}
                        onChange={handleChange}
                    >
                        <MenuItem value={'חולצה'}>
                            חולצה
                        </MenuItem>
                        <MenuItem value={'מכנס'}>
                            מכנס
                        </MenuItem>
                        <MenuItem value={'שמלה'}>
                            שמלה
                        </MenuItem>
                    </Select>
                </FormControl>
                <TextField fullWidth name="name"
                    onChange={handleChange} label="שם"
                    value={name} variant="outlined"
                    style={{ marginBottom: '2rem' }} />

                <TextField fullWidth name="description"
                    value={description} onChange={handleChange}
                    label="תיאור" rows={2} variant="outlined" multiline
                    style={{ marginBottom: '2rem' }} />


                <div style={{ display: 'flex' }} dir='rtl'>
                    {sizes.map(size => {
                        return <Sizes
                            value={size.left}
                            onChange={handleChangeSize}
                            size={size.name}
                        />
                    })}
                </div>

                <TextField fullWidth name="price"
                    placeholder="מחיר"
                    value={price} onChange={handleChange}
                    label={sale ? "מחיר קודם" : "מחיר"} variant="outlined"
                    style={{ marginBottom: '2rem' }} />
                <div style={{ display: 'flex', flexDirection: 'row' }}>

                    <p>sale</p> <input type='checkbox' onClick={onClick} checked={sale} />
                </div>

                {sale &&
                    <TextField fullWidth name="newPrice"
                        placeholder="מחיר"
                        value={newPrice} onChange={handleChange}
                        label="מחיר חדש" variant="outlined"
                        style={{ marginBottom: '2rem' }} />}

                {images.map((item, index) => {
                    return <TextField fullWidth name="images"
                        key={index}
                        value={item}
                        onChange={(value) => handleImageChange(value, index)}
                        label='תמונה' variant="outlined" multiline
                        style={{ marginBottom: '2rem' }} />
                })}
                {/* <Button onClick={handleBuyTheLook}>Buy The Look</Button> */}

                <div style={{ padding: '5rem' }}>
                    <ReactDatePicker
                        selected={date}
                        onChange={handleDateChange}
                    />
                </div>
            </div>
        </div >
    )
}
export default Edit;