import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import { editUser, getUsers } from "../Service/api";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        "& > *": {
            marginTop: 20
        }
    }
})

const initialValues={
    name:'',
    username:'',
    email:'',
    phone:''
}

const EditUser = ()=>{

    const [user, setuser] = useState(initialValues)
    const {name,username,email,phone}=user;
    const { id } = useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(() => {
       loadUserData();
    },[]);

    const loadUserData = async ()=>{
        const response = await getUsers(id);
        setuser(response.data);
    }

    const onValueChange = (e)=>{
        // console.log(e.target.value);
        setuser({...user, [e.target.name]:e.target.value})
    }

    const editUserDetails = async()=>{
        await editUser(id,user);
        history.push('/all');
    }

    return(
        <FormGroup className={classes.container}>
            <Typography variant="h4">Update User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='username' value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={phone}/>
            </FormControl>
            <Button onClick={editUserDetails} variant="contained" color="primary">Update Data</Button>
        </FormGroup>
    )
}

export default EditUser;