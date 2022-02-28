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
      const skyListRaw = await fetch(`${ASSETS_URL}/sky/`);
      const skyList = await skyListRaw.text();

      const skyListArray = skyList.split('<a href=".');
      skyListArray.shift();

      const skies = skyListArray.filter((a) => a.indexOf('/.') !== 0);

      setList(skies.map((a) => (
        a.split('>')[1].split('<')[0]
      )));
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
