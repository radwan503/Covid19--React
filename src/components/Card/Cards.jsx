import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css';

import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading..';
    }

    return (

        <div className={styles.container}>

            <Grid container spacing={3}>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.confirmed.value} duration={2.5} separator=","></CountUp>
                        
                        </Typography>

                        <Typography color="textSecondary">{ new Date(confirmed.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active case of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovery</Typography>
                        <Typography variant="h5">  
                        <CountUp start={0} end={confirmed.recovered.value} duration={2.5} separator=","></CountUp>
                        </Typography>

                        <Typography color="textSecondary">{ new Date(confirmed.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovery from case of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={confirmed.deaths.value} duration={2.5} separator=","></CountUp>
                        </Typography>

                        <Typography color="textSecondary">{ new Date(confirmed.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of death case of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;