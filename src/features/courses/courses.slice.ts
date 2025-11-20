import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Course } from "./courses.types";
import {
  getCoursesThunk,
  getCourseByIdThunk,
  createCourseThunk,
  updateCourseThunk,
  deleteCourseThunk,
} from "./courses.thunk";

// ================= STATE =================
interface CoursesState {
  items: Course[];
  selected?: Course | null;
  loading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  items: [],
  selected: null,
  loading: false,
  error: null,
};

// ================= SLICE =================
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    clearSelected: (state) => {
      state.selected = null;
    },
  },
  extraReducers: (builder) => {
    // ===== GET ALL =====
    builder.addCase(getCoursesThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getCoursesThunk.fulfilled,
      (state, action: PayloadAction<Course[]>) => {
        state.loading = false;
        state.items = action.payload;
      }
    );
    builder.addCase(getCoursesThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Lỗi khi tải courses";
    });

    // ===== GET BY ID =====
    builder.addCase(getCourseByIdThunk.fulfilled, (state, action) => {
      state.selected = action.payload;
    });

    // ===== CREATE =====
    builder.addCase(createCourseThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
    });

    // ===== UPDATE =====
    builder.addCase(updateCourseThunk.fulfilled, (state, action) => {
      const index = state.items.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
      if (state.selected?.id === action.payload.id) {
        state.selected = action.payload;
      }
    });

    // ===== DELETE =====
    builder.addCase(deleteCourseThunk.fulfilled, (state, action) => {
      const id = action.meta.arg; // ✅ id truyền vào thunk
      state.items = state.items.filter((c) => c.id !== id);

      if (state.selected?.id === id) {
        state.selected = null;
      }
    });
  },
});

export const { clearSelected } = coursesSlice.actions;
export default coursesSlice.reducer;
