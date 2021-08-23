import Grid from '@material-ui/core/Grid';
import {Container, Snackbar} from "@material-ui/core"
import './App.css';
import Otsikko from "./components/Otsikko";
import Nappi from "./components/Nappi";
import Kaupunkivalikko from "./components/Kaupunkivalikko";
import Saatieto from "./components/Saatieto";
import {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( {
  root :{
    background: '#f44336'
  }
})

function App() {

  const tyyli = useStyles();

  const [nayta, setNayta] = useState(false);
  const [haku, setHaku] = useState("");
  const [kaupunki, setKaupunki] = useState({name: "test",main:{temp:1}, weather :[{description: "test", icon: "10d"}]});
  const [virheAuki, setVirheAuki] = useState(false);

  

  //show dialog where to change city
  function muutaNayta(){
    setNayta(!nayta);
  }

  function closeSnack(){
    setVirheAuki(false);
  }

  //get wheather info
  async function haeSaa(city){
    let response = await fetch(`https://so3server.herokuapp.com/saatilanne/${city}`);

    let resJson = await response.json();
    
    if(resJson.cod == "404"){
      console.log("virhe")
      setVirheAuki(true);
    }else{
      setKaupunki(resJson);
    }
    console.log(resJson);
    
}

  //search for city
  function haeKaupunki(kaup){
    let apuHaku = "";
    //convert scandic letters
    for (let i = 0; i < kaup.length; i++){
      if(kaup.charAt(i) === "å" || kaup.charAt(i) === "Å"){
        apuHaku += "a"
      }else if(kaup.charAt(i) === "ä" || kaup.charAt(i) === "Ä"){
        apuHaku += "a"
      }else if(kaup.charAt(i) === "ö" || kaup.charAt(i) === "Ö"){
        apuHaku += "o"
      }else{
        apuHaku += kaup.charAt(i);
      }
    }

    haeSaa(apuHaku);
    setNayta(!nayta);
  }

useEffect( () => {
    haeSaa("mikkeli")
},[])

  return (
    <Container className={tyyli.root}>
      <Grid container>
        <Grid item xs={12}>
          <Otsikko/>
        </Grid>
        <Grid item xs={12}>
          <Saatieto kaupunki={kaupunki}/>
        </Grid>
        <Grid item xs={12}>
          <Nappi muutaNayta={muutaNayta}/>
        </Grid>
      </Grid>
      <Kaupunkivalikko nayta={nayta} haku={haku} setHaku={setHaku} haeKaupunki={haeKaupunki}/>
      <Snackbar open={virheAuki} autoHideDuration={4000} onClose={closeSnack} message="Kyseisellä haulla ei löydy kaupunkia">
        
      </Snackbar>
    </Container>
  );
}

export default App;
