import React,{useState} from 'react'
import axios from 'axios';
import Myheader from '../Basics/Myheader'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Link, useHistory } from "react-router-dom"
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Upload = () => {

    //const newarr = arr.map((item)=>{
    //    return {'value':item,'checked':false}
    //})
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const history = useHistory()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [checked, setChecked] = useState(new Array(6).fill(false));
    const [message,setMessage] = useState([])

    const handleChange = (position) => {
        const updatedCheckedState = checked.map((item, index) =>
            index === position ? !item : item
        );

        setChecked(updatedCheckedState);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseCart = () => {
        setOpen(false);
        axios.post('http://127.0.0.1:8000/pres/cart/', checked, { // receive two parameter endpoint url ,form data
        })
        .then(res => {
            console.log(res.data)
            history.push('/cart')
        })
    };

    const handleClosePay = () => {
        setOpen(false);
        axios.post('', checked, { // receive two parameter endpoint url ,form data
        })
        .then(res => {
            history.push('/pay')
        })
    };

    
    const [selectedFile,setSelectedFile] = useState("")

    const handleInputChange = (event)=>{
        setSelectedFile(event.target.files[0])
    }

    const submit=()=>{
        
        const data = new FormData() 
        data.append('file', selectedFile)
        console.warn(selectedFile);
        let url = "http://127.0.0.1:8000/pres/fileupload/";

        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.warn(res.data.medicines);
            setMessage(res.data.medicines)
            handleClickOpen()
            //Math.floor(Math.random() * (100)) + 100;
            //history.push("/confirm");
        })
    }
    return (
        <div>
            <div>
                <Myheader/>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title" style={{'fontStyle':'Raleway'}}>
                    {"Confirm your order"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                    { message? (message.map((item,key)=>{
                            return (
                            <>
                                {item}
                                <Checkbox
                                checked={checked[key]}
                                onChange={()=>handleChange(key)}
                                key={key}
                                inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <br/>
                                <br/>
                            </>)
                        })): <></>}
                        

                        
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={handleCloseCart}>
                        Add to Cart
                    </Button>
                    <Button onClick={handleClosePay} autoFocus>
                        Direct Pay
                    </Button>
                    </DialogActions>
                </Dialog>


                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />

                            {/*<h3 className="text-white">React File Upload - Nicesnippets.com</h3>*/}
                            <br />
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="text-white" style={{'margin':'20px','fontSize':'20px'}}>Select File :</label>
                                    <input type="file" className="form-control" name="upload_file" onChange={handleInputChange} style={{'margin':'20px'}} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-dark" onClick={()=>submit()} style={{'margin':'20px','backgroundColor':'#334756','color':'white'}}>SAVE</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload


