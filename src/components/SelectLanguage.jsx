import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function SelectLanguage({ setSelectedLanguage, language }) {
  return (
    <Box id="select-language-box">
      <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <InputLabel id="language">Language</InputLabel>
        <Select
          MenuProps={{
            disableScrollLock: true,
          }}
          labelId="select-language"
          id="select-language"
          value={language}
          label="Language"
          onChange={setSelectedLanguage}
        >
          <MenuItem value="pt-br">pt-br</MenuItem>
          <MenuItem value="en-us">en-us</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
