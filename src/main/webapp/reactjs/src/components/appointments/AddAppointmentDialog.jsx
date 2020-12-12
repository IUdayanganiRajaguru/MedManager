import { React, useState} from 'react';
import AppointmentService from './AppointmentService';

import { Button, TextField,Dialog, DialogActions, DialogContent, DialogTitle, Card } from '@material-ui/core';
import { MenuItem, InputLabel, Select, FormControl, FormControlLabel, Radio, FormLabel, Grid, RadioGroup } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { makeStyles } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    //KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#ffffff00',
        width: 'auto',
        marginTop: '90px',
        variant: 'none'
    },
    button: {
        spacing: '1',
    },
    formControl: {
        width: '80%',
        //   spacing: 1,
        //marginBottom: '25px',
        //marginLeft: '20px',
        maxWidth: '300px',
        display: 'flex',
    },
}));

const theme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            root: {
                width: '80%',
                //   spacing: 1,
                marginBottom: '20px',
                marginLeft: '20px',
                maxWidth: '240px',
                //display: 'flex',
            },
        },
    },
});

const initialFieldValues = {
    id: 0,
    date: '', 
    symptoms: '',
    comment: '',
    consultTime: '',  
    currentStatus: ''
}

function AddAppointmentDialog() {

    const classes = useStyles();

    const [values, setValues] = useState(initialFieldValues);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());


    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };


    const handleDateChange = (date) => {
      setSelectedDate(date);
    };


    //text Field onChange
    const handleInputChange = (e) => {
        const {name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
    };

    const submit = e => {
        e.preventDefault();
        const {name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
        console.log('appointment => ' +JSON.stringify(values));
        AppointmentService.createAppointment(values).then(res =>{
            alert('Appointment created successfully!!!');
            setValues(initialFieldValues);
            handleClose();
        })
            .catch(err => alert(err));
    };


    const handleReset = e => {
        e.preventDefault();
        setValues(initialFieldValues);
        handleClose();
    };

    return (  
        <div>
                <Button 
                    style={{marginTop: '90px'}}
                    variant="outlined" 
                    color="primary"
                    className={classes.button}
                    startIcon={<PostAddIcon  />}
                    onClick={handleClickOpen}
                >
                    Add New Appointment
                </Button>
    
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Appointment</DialogTitle>
                <DialogContent>
                    <ThemeProvider theme={theme}>
                    {/*<form onSubmit={e =>{*/}
                    {/*    e.preventDefault();*/}
                    {/*    submit(e);*/}
                    {/*}}>*/}
                    <form style={{padding:'10px'}}>
                        <Grid container>
                            <Grid item xs={6}>
                                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container >
                                        <KeyboardDatePicker
                                            variant="inline"
                                            inputVariant="outlined"
                                            size="small"
                                            marginTop="0px"
                                            marginLeft="0px"
                                            id="date-picker-dialog"
                                            label="Date"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    label="Password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    label="Age"
                                    name="age"
                                    value={values.age}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    label="Email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    label="Qualifications"
                                    name="qualifications"
                                    value={values.qualifications}
                                    onChange={handleInputChange}
                                />
                                
                            </Grid>
                            <Grid item xs={6}>
                                {/* SelectSegment Option for Role*/}
                                <FormControl variant="outlined" size="small">
                                    <InputLabel>Role</InputLabel>
                                    <Select
                                        label="Role"
                                        name="role"
                                        value={values.role}
                                        onChange={handleInputChange}
                                    >
                                        <MenuItem value="Administrator">Administrator</MenuItem>
                                        <MenuItem value="Doctor">Doctor</MenuItem>
                                        <MenuItem value="Nurse">Nurse</MenuItem>
                                        <MenuItem value="Pharmacist">Pharmacist</MenuItem>
                                        <MenuItem value="PHI">PHI</MenuItem>
                                        <MenuItem value="Lab Assistent">Lab Assistent</MenuItem>
                                        <MenuItem value="Receptionist">Receptionist</MenuItem>
                                        <MenuItem value="Councilor">Councilor</MenuItem>
                                    </Select>
                                </FormControl>

                                {/* Radio Button */}
                                <FormControl variant="outlined" size="small">
                                    <FormLabel>Gender</FormLabel>
                                    <RadioGroup row={true}
                                            name="gender"
                                            value={values.gender}
                                            onChange={handleInputChange}
                                            color="primary"
                                    >
                                        <FormControlLabel value="Male" control={<Radio color="primary"/>} label="Male" />
                                        <FormControlLabel value="Female" control={<Radio color="primary"/>} label="Female" />
                                        <FormControlLabel value="Other" control={<Radio color="primary"/>} label="Other" />
                                    </RadioGroup>
                                </FormControl>

                                <TextField
                                    variant="outlined"
                                    size="small"
                                    label="Contact Number"
                                    name="contactNumber"
                                    value={values.contactNumber}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </ThemeProvider>
                </DialogContent>
                <DialogActions style={{marginBottom: '20px', marginRight: '20px'}}>
                    <Button 
                        variant="outlined" 
                        color="primary"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        onClick={submit}
                    >
                        Save
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        className={classes.button}
                        startIcon={<CancelIcon />}
                        onClick={handleReset}   
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddAppointmentDialog;