import { Box, makeStyles } from "@material-ui/core";
import gym1 from "../Assets/Images/gym1.jpg";
import gym2 from "../Assets/Images/gym2.jpg";

const useStyle = makeStyles({
    image: {
        width:"50%",
        height:"auto",
    }
})

const Home = ()=>{

    const classes = useStyle();

    return(
        // BOX BEHAVE LIKE DIV
       <Box style={{display:"flex", height:'90vh'}}>
           <img className={classes.image} src={gym1}/>
           <img className={classes.image} src={gym2}/>
       </Box>
    )
}

export default Home;