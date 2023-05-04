import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Data from "./sprache.json";
import React from 'react';
import CustomPaginationActionsTable from "./Table";



function Test(props) {


    return (
        <>
            <h1 className="text-fuchsia-500 font-bold underline" >
                {props.text}
            </h1>



        </>
    )
}

export default Test
