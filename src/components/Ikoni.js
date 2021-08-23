
import {Paper} from "@material-ui/core";
import Image from 'material-ui-image';


function Ikoni(props) {

    let url = `http://openweathermap.org/img/wn/${props.ikoni}@2x.png`;

    return(
        <div>
            <img src = {url} />
        </div>
    )
}

export default Ikoni;