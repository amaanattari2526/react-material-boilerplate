import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AppAutoComplete(props_) {
  return (
    <Autocomplete
    size={props_.size}
    onChange={(e, newValue) => {
        console.log(newValue);
        if(props_.onSelect) props_.onSelect(newValue)
    }}
      id="country-select-demo"
      sx={{ width: 300 }}
      options={props_.data}
      autoHighlight
      getOptionLabel={(option) => option.title}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {props_.allowIcons == true ? <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.id.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.id.toLowerCase()}.png 2x`}
            alt=""
          /> : null}
          {option.title}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props_.label}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
