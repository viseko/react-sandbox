import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// Получаем случайное число из публичного API
export const fetchRandomNumber = createAsyncThunk("counter/fetchRandomNumber", async () => {
  const response = await fetch("https://random-data-api.com/api/number/random_number");
  const data = await response.json();
  return data.number;
});

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomNumber.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRandomNumber.fulfilled, (state, action) => {
        state.loading = false;
        state.count = action.payload;
      })
      .addCase(fetchRandomNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;