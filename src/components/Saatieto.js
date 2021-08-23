import {Box, Grid, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useState, useEffect} from "react";
import Ikoni from "./Ikoni";



const useStyles = makeStyles( {
    comps : {
        display: "flex",
        justifyContent : "center"
    }
})




function Saatieto(props) {

    const tyyli = useStyles();
    

    return(
        
            <Grid container>
                <Grid item xs={12}>
                    <Box className={tyyli.comps}>
                        <Typography>{props.kaupunki.name}</Typography>
                    </Box>
                </Grid> 
                <Grid item xs={4}>
                    <Box className={tyyli.comps}>
                        <Typography>Lämpötila: {props.kaupunki.main.temp}</Typography>
                    </Box>
                </Grid> 
                <Grid item xs={4}>
                    <Box className={tyyli.comps}>
                        <Typography>Kuvaus: {props.kaupunki.weather[0].description}  </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={tyyli.comps}>
                        <Ikoni ikoni={props.kaupunki.weather[0].icon}/>
                    </Box>
                </Grid>                
            </Grid>
        
    )
}

export default Saatieto;