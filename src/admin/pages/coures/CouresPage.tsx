// src/pages/admin/CoursePage.tsx
"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import TableCourse from "./TableCourse";
import ModalDelete from "../../components/ModalDelete";
import {
  createCourseThunk,
  updateCourseThunk,
  deleteCourseThunk,
} from "../../../features/courses/courses.thunk";
import type { Course, CreateCourseDto } from "../../../features/courses/courses.types";
import CourseFormModal from "./CourseFormModal";

const CoursePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.courses);

  const [openAddEdit, setOpenAddEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleAdd = () => {
    setSelectedCourse(null);
    setOpenAddEdit(true);
  };

  const handleEdit = (courses: Course) => {
    setSelectedCourse(courses);
    setOpenAddEdit(true);
  };

  const handleDelete = (courses: Course) => {
    setSelectedCourse(courses);
    setOpenDelete(true);
  };

  const handleSubmitAddEdit = async (data: CreateCourseDto) => {
    console.log("vao day");
    
    if (selectedCourse?.id) {
      console.log(data);
      await dispatch(updateCourseThunk({ id: selectedCourse?.id, data }));
    } else {
      console.log("adđ");
      await dispatch(createCourseThunk(data));
    }
    setOpenAddEdit(false);
  };


  const handleConfirmDelete = () => {
    if (selectedCourse?.id) {
      dispatch(deleteCourseThunk(selectedCourse?.id));
    }
    setOpenDelete(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <TableCourse
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Modal Add/Edit */}
      <CourseFormModal
        open={openAddEdit}
        onClose={() => setOpenAddEdit(false)}
        initialData={
          selectedCourse
            ? {
              name: selectedCourse.name,
              description: selectedCourse.description,
              categoryIds:
                selectedCourse.categories?.map((c) => c.id) || [],
              images:
                selectedCourse.images?.map(
                  (img) => img.imgUrl
                ) || [],
            }
            : null
        }
        onSubmit={handleSubmitAddEdit}
        loading={loading}
      />

      {/* Modal Delete */}
      <ModalDelete
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Course"
        description="Are you sure you want to delete this course?"
      />
    </div>
  );
};

export default CoursePage;
