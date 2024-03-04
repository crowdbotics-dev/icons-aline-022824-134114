import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_shop_list = createAsyncThunk(
  "shops/api_v1_shop_list",
  async payload => {
    const response = await apiService.api_v1_shop_list(payload)
    return response.data
  }
)
export const api_v1_shop_create = createAsyncThunk(
  "shops/api_v1_shop_create",
  async payload => {
    const response = await apiService.api_v1_shop_create(payload)
    return response.data
  }
)
export const api_v1_shop_retrieve = createAsyncThunk(
  "shops/api_v1_shop_retrieve",
  async payload => {
    const response = await apiService.api_v1_shop_retrieve(payload)
    return response.data
  }
)
export const api_v1_shop_update = createAsyncThunk(
  "shops/api_v1_shop_update",
  async payload => {
    const response = await apiService.api_v1_shop_update(payload)
    return response.data
  }
)
export const api_v1_shop_partial_update = createAsyncThunk(
  "shops/api_v1_shop_partial_update",
  async payload => {
    const response = await apiService.api_v1_shop_partial_update(payload)
    return response.data
  }
)
export const api_v1_shop_destroy = createAsyncThunk(
  "shops/api_v1_shop_destroy",
  async payload => {
    const response = await apiService.api_v1_shop_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_shop_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_shop_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shop_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shop_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_shop_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shop_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shop_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_shop_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shop_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shop_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_shop_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shop_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shop_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_shop_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shop_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shop_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_shop_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shop_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_shop_list,
  api_v1_shop_create,
  api_v1_shop_retrieve,
  api_v1_shop_update,
  api_v1_shop_partial_update,
  api_v1_shop_destroy,
  slice: shopsSlice
}
