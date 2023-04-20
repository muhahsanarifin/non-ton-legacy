import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ContentType } from "@/utils/types/reduxType";
import { getContents } from "@/utils/api/content";

const initialState: ContentType = {
  retriveContents: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
  err: null,
};

const retriveContentsThunk = createAsyncThunk(
  "contents",
  async (params: string) => {
    try {
      const response = await getContents(params);
      // console.log("Response retrive content:", response.data);
      return response.data;
    } catch (error: any) {
      console.error(error?.message);
    }
  }
);

const contentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {
    reset: (prevState) => {
      return {
        ...prevState,
        retriveContents: [],
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(retriveContentsThunk.pending, (prevState) => {
      return {
        ...prevState,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    });
    builder.addCase(
      retriveContentsThunk.fulfilled,
      (prevState, action: PayloadAction<any>) => {
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          isRejected: false,
          retriveContents: action.payload,
        };
      }
    );
    builder.addCase(
      retriveContentsThunk.rejected,
      (prevState, action: PayloadAction<any>) => {
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          err: action.payload,
        };
      }
    );
  },
});

export const contentsAction = {
  ...contentsSlice.actions,
  retriveContentsThunk,
};

export default contentsSlice.reducer;
