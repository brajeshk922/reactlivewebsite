import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import {NavLink} from "react-router-dom";
const useStyle = makeStyles({
    header: {
        backgroundColor: '#111111',
        // position: 'static', //bcoz by default toolbar position is fixed so it is hide the other tag
    },
    tabs: {
        color:"white",
        textDecoration:"none",
        marginRight:20,
        fontSize:20
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar >
                <NavLink to="/" exact className={classes.tabs}>Alrex gym</NavLink>
                <NavLink to="/all" exact className={classes.tabs}>All Users</NavLink>
                <NavLink to="/add" exact className={classes.tabs}>Add User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;