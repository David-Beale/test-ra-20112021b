import { configureStore } from "@reduxjs/toolkit";

import comics from "./comics";
import favourites from "./favourites";

export default configureStore({
  reducer: {
    comics,
    favourites,
  },
});
