import React from 'react';
import Grid from '@material-ui/core/Grid';
import UploadItem from './uploadItem';

const CreateItem = () => {

    return (


        <div style={{ textAlign: 'center' }}>

            <header> <h1>ניהול האתר </h1></header>
            <Grid container
                spacing={10}>

                <Grid item
                    xs={12} s={6} md={6} lg={6} xl={6}>
                    <UploadItem />
                </Grid>
                <Grid item
                    xs={12} s={6} md={6} lg={6} xl={6}>
                    <div>הוצאות הכנסות</div>
                </Grid>
            </Grid>

        </div>


    )
}

export default CreateItem;
