import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useMapSearch } from "../../store/MapStore";

const QuickAccess = () => {
  const { quickAccessKey, setQuickAccessKey } = useMapSearch((state) => state);
  const [item, setItem] = React.useState(quickAccessKey);

  const handleChange = (e: SelectChangeEvent) => {
    const newItem = e.target.value;
    setItem(newItem);
    setQuickAccessKey(newItem);
  };

  const menuList = ["California", "New York", "Illinois", "Texas", "Arizona"];
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small" size="small">
        Quick Access
      </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={item}
        label="quick-access"
        onChange={handleChange}
        size="small"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {menuList.map((name: string, index: number) => (
          <MenuItem value={name} key={index}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default QuickAccess;
