import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuggestions, setSearchInput } from "../store/mapSearchSlice";

import {
  selectSearchSuggestions,
  setLatitude,
  setLongitude,
  setSearchSuggestions,
} from "../store/mapSearchSlice";

const SuggestionInput = () => {
  const dispatch = useDispatch();
  const searchSuggestions = useSelector(selectSearchSuggestions);

  const onSuggestionSelected = (suggestion) => {
    if (suggestion !== null) {
      dispatch(setLatitude(parseFloat(suggestion?.center[1])));
      dispatch(setLongitude(parseFloat(suggestion?.center[0])));
      dispatch(setSearchSuggestions([]));
      dispatch(setSearchInput(suggestion?.place_name));
    }
  };

  const getPlacesSuggestions = async (e) => {
    dispatch(fetchSuggestions(e.target.value));
  };

  const handleTextChange = async (e) => {
    dispatch(setSearchInput(e.target.value));
    if (e.target.value.length >= 2) {
      await getPlacesSuggestions(e);
    } else {
      dispatch(setSearchSuggestions([]));
    }
  };
  return (
    <Autocomplete
      onClose={() => dispatch(setSearchSuggestions([]))}
      onChange={(event, newValue) => {
        onSuggestionSelected(newValue);
      }}
      freeSolo
      options={searchSuggestions}
      getOptionLabel={(option) => option.place_name || ""}
      onInputChange={handleTextChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search a place"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
};

export default SuggestionInput;
