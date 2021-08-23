import {Dialog, DialogTitle, Button, TextField} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import {useState} from "react";

const useStyles = makeStyles( { 
  comps : {
    margin: "20px"
  }
})


function Kaupunkivalikko(props) {

  const tyyli = useStyles();
  

    return(
    <Dialog open={props.nayta}>
        <DialogTitle>Valitse Kaupunki</DialogTitle>
        <TextField 
          label="Kirjoita kaupunki tähän" 
          className={tyyli.comps} 
          id="kaupunkihaku"
          onChange={ (e) => {props.setHaku(e.target.value)}}
          />
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => props.haeKaupunki(props.haku)}
           >Hae</Button>
      </Dialog>
    )
}

export default Kaupunkivalikko;