import {Container, Dialog, DialogTitle, Button, Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( {
    comps : {
        display: "flex",
        justifyContent : "center"
    }
})


function Nappi(props){

    const tyyli = useStyles();

    return(
        <Container>
            <Box className={tyyli.comps}>
                <Button variant="contained" onClick={props.muutaNayta} >Vaihda Kaupunki</Button>
            </Box>
            
        </Container>

    )
}

export default Nappi;

