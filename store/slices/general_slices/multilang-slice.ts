import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MultiLangApi from "../../../services/api/general_apis/multilanguage-api";
import { RootState } from "../../root-reducer";

export const fetchMultiLanguagesThunkAPI: any = createAsyncThunk(
  "multilanguage/fetchMultilanguage",
  async (token: any) => {
    const MultilanguageData = await MultiLangApi(token);
    console.log("multilanguage res", MultilanguageData);
    return MultilanguageData;
  }
);

interface RepoDisplayTag {
  languageData: any;
  error: string;
  isLoading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: RepoDisplayTag = {
  languageData: [],
  error: "",
  isLoading: "idle",
};

export const MultiLanguageScreen = createSlice({
  name: "multilanguage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMultiLanguagesThunkAPI.pending, (state) => {
      state.languageData = [];
      state.isLoading = "pending";
      state.error = "";
    });
    builder.addCase(fetchMultiLanguagesThunkAPI.fulfilled, (state, action) => {
      console.log("languagedata payload", action.payload);
      state.languageData = action.payload;
      state.isLoading = "pending";
      state.error = "";
    });
    builder.addCase(fetchMultiLanguagesThunkAPI.rejected, (state) => {
      state.isLoading = "failed";
      state.error = "Network error";
      state.languageData = [];
    });
  },
});

export const multiLanguageDataFromStore = (state: RootState) =>
  state.MultilanguageScreen;

export default MultiLanguageScreen.reducer;
