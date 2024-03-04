import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_productlisting_list = createAsyncThunk(
  "productListings/api_v1_productlisting_list",
  async payload => {
    const response = await apiService.api_v1_productlisting_list(payload)
    return response.data
  }
)
export const api_v1_productlisting_create = createAsyncThunk(
  "productListings/api_v1_productlisting_create",
  async payload => {
    const response = await apiService.api_v1_productlisting_create(payload)
    return response.data
  }
)
export const api_v1_productlisting_retrieve = createAsyncThunk(
  "productListings/api_v1_productlisting_retrieve",
  async payload => {
    const response = await apiService.api_v1_productlisting_retrieve(payload)
    return response.data
  }
)
export const api_v1_productlisting_update = createAsyncThunk(
  "productListings/api_v1_productlisting_update",
  async payload => {
    const response = await apiService.api_v1_productlisting_update(payload)
    return response.data
  }
)
export const api_v1_productlisting_partial_update = createAsyncThunk(
  "productListings/api_v1_productlisting_partial_update",
  async payload => {
    const response = await apiService.api_v1_productlisting_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_productlisting_destroy = createAsyncThunk(
  "productListings/api_v1_productlisting_destroy",
  async payload => {
    const response = await apiService.api_v1_productlisting_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const productListingsSlice = createSlice({
  name: "productListings",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_productlisting_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_productlisting_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_productlisting_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_productlisting_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_productlisting_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_productlisting_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_productlisting_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_productlisting_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_productlisting_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_productlisting_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_productlisting_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_productlisting_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_productlisting_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_productlisting_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_productlisting_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_productlisting_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_productlisting_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_productlisting_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_productlisting_list,
  api_v1_productlisting_create,
  api_v1_productlisting_retrieve,
  api_v1_productlisting_update,
  api_v1_productlisting_partial_update,
  api_v1_productlisting_destroy,
  slice: productListingsSlice
}
