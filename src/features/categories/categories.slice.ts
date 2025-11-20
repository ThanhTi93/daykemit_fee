import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Category } from "./categories.types";
import {
  getCategoriesThunk,
  getCategoryByIdThunk,
  createCategoryThunk,
  updateCategoryThunk,
  deleteCategoryThunk,
} from "./categories.thunk";

// ================= STATE =================
interface CategoriesState {
  items: Category[];
  selected?: Category | null;
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  items: [],
  selected: null,
  loading: false,
  error: null,
};

// ================= SLICE =================
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    clearSelected: (state) => {
      state.selected = null;
    },
  },
  extraReducers: (builder) => {
    // ===== GET ALL =====
    builder.addCase(getCategoriesThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getCategoriesThunk.fulfilled,
      (state, action: PayloadAction<Category[]>) => {
        state.loading = false;
        state.items = action.payload;
      }
    );
    builder.addCase(getCategoriesThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Lỗi khi tải categories";
    });

    // ===== GET BY ID =====
    builder.addCase(getCategoryByIdThunk.fulfilled, (state, action) => {
      state.selected = action.payload;
    });

    // ===== CREATE =====
    builder.addCase(createCategoryThunk.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });

    // ===== UPDATE =====
    builder.addCase(updateCategoryThunk.fulfilled, (state, action) => {
      const index = state.items.findIndex((cat) => cat.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
      if (state.selected?.id === action.payload.id) {
        state.selected = action.payload;
      }
    });

    // ===== DELETE =====
    builder.addCase(deleteCategoryThunk.fulfilled, (state, action) => {
      const id = action.meta.arg; // ✅ id truyền vào thunk
      state.items = state.items.filter((cat) => cat.id !== id);

      // Nếu category hiện tại đang chọn bị xóa thì clear
      if (state.selected?.id === id) {
        state.selected = null;
      }
    });
  },
});

export const { clearSelected } = categoriesSlice.actions;
export default categoriesSlice.reducer;
