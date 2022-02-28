/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ASSETS_URL } from 'common';

const SkySelector = ({ sky, onChange }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      const skyListRaw = await fetch(`${ASSETS_URL}/sky/list.json`);
      const listObj = await skyListRaw.json();
      setList(listObj.list);
    })();
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select a Sky</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sky || list[0]}
        label="Select a Sky"
        onChange={(e) => onChange(e.target.value)}
      >
        {
          list.map((value) => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};

export default SkySelector;
