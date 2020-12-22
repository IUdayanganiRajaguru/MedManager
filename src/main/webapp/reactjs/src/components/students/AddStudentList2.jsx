import React, {useEffect} from 'react'
import { useState } from 'react';
import StudentService from './StudentService';
import * as XLSX from 'xlsx'

import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from '@material-ui/core'
import Input from '@material-ui/core/Input';
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import SaveIcon from '@material-ui/icons/Save'
import CancelIcon from '@material-ui/icons/CancelRounded';
import AttachFileIcon from '@material-ui/icons/AttachFile';


export default function AddStudentList2() {

    const [values, setValues] = useState();

    const readExcel = (file) => {
        const promise = new Promise((resolve,reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file)

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray,{type:'buffer'});
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
            };

            fileReader.onerror = ((error) => {
                reject(error);
            });
        });

        promise.then((d) => {
            console.log(d);
            for(let i=0; i<d.length;i++) {
                StudentService.createStudent(d[i]).then(res => {
                    setValues(res.data);
                });
            }
        });
    }

    // useEffect(()=> {
    //     handleSubmit();
    // }, []);

    const handleSubmit = e => {
        alert('Patient added successfully!!!');
        window.location.reload();
    }

    const handleReset = e => {
        e.preventDefault();
        readExcel(null);
    };

    return (
        <div>
            <input 
                type="file"
                onChange={(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                }}
            />
                    <Button
                        variant="outlined"
                        color="primary"
                        //className={classes.button}
                        startIcon={<SaveIcon />}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                    <Button 
                        variant="outlined"
                        color="secondary"
                        //className={classes.button}
                        startIcon={<CancelIcon />}
                        onClick={handleReset}
                    >
                        Cancel
                    </Button>
        </div>
    )
}
