import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
  searchSuggestions: [],
  lat: 28.7041,
  lng: 77.1025,
};

const mapSearchSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload || "";
    },
    setSearchSuggestions(state, action) {
      state.searchSuggestions = action.payload;
    },
    setLatitude(state, action) {
      state.lat = action.payload;
    },
    setLongitude(state, action) {
      state.lng = action.payload;
    },
  },
});

export const {
  setSearchInput,
  setSearchSuggestions,
  setLatitude,
  setLongitude,
} = mapSearchSlice.actions;

export const selectSearchInput = (state) => state.map.searchInput;

export const selectSearchSuggestions = (state) => state.map.searchSuggestions;

export const selectLatitude = (state) => state.map.lat;
export const selectLongitude = (state) => state.map.lng;

export default mapSearchSlice.reducer;

//Thunk

export function fetchSuggestions(searchValue) {
  return async function fetchSuggestionThunk(dispatch, getState) {
    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`;
      const response = await fetch(endpoint);
      const results = await response.json();
      dispatch(setSearchSuggestions(results?.features));
    } catch (err) {
      console.log(err);
    }
  };
}
