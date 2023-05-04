import { useState, useEffect } from 'react'
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
import Test from './test';

function App() {




  const [startLang, setstartLang] = React.useState("");
  const [endLang, setendLang] = React.useState("");
  const [text, setText] = React.useState("");


  const Language = [];

  Data.languages.forEach(element => {
    Language.push({ label: element.languageName })
  });



  return (
    <>
      <h1 className="text-fuchsia-500 font-bold underline" >
        Translator app
      </h1>

      <div className="flex justify-center place-content-center gap-4  " >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Language}
          defaultValue="test"
          sx={{ width: 300 }}
          inputValue={startLang}
          onInputChange={(event, newInputValue) => {
            setstartLang(newInputValue);
          }}
          renderInput={(params) => <TextField {...params} label="Sprache"
          />}
        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Language}
          sx={{ width: 300 }}
          inputValue={endLang}
          onInputChange={(event, newInputValue) => {
            setendLang(newInputValue);
          }}
          renderInput={(params) => <TextField {...params} label="Sprache" />}
        />
      </div>

      <div className="flex justify-center place-content-center gap-4  p-5">
        <FormControl sx={{ width: '55ch' }}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />

        </FormControl>
        <FormControl sx={{ width: '55ch' }}>
          <TextField
            id="outlined-multiline-static "
            multiline
            label=""
            rows={4}

          />
        </FormControl>

      </div>

      <Button variant="contained" >
        Send
      </Button>

      <CustomPaginationActionsTable tableHeader={"nummerone"} />

    </>
  )
}

export default App
