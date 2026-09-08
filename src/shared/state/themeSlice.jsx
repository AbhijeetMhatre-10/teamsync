import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: localStorage.getItem("theme") || "dark",
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      
      localStorage.setItem("theme", state.mode);

      if(state.mode==="light"){
        document.documentElement.classList.add("light")
      }else{
        document.documentElement.classList.remove("light")
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
