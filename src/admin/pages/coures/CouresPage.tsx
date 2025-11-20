// src/pages/admin/CoursePage.tsx
"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import TableCourse from "./TableCourse";
import ModalAddCourse from "./ModalAddCourse";
import ModalDelete from "../../components/ModalDelete";
import {
  createCourseThunk,
  updateCourseThunk,
  deleteCourseThunk,
} from "../../../features/courses/courses.thunk";
import type { CreateCourseDto } from "../../../features/courses/courses.types";

const CoursePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.courses);

  const [openAddEdit, setOpenAddEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleAdd = () => {
    setSelectedId(null);
    setOpenAddEdit(true);
  };

  const handleEdit = (id: number) => {
    setSelectedId(id);
    setOpenAddEdit(true);
  };

  const handleDelete = (id: number) => {
    setSelectedId(id);
    setOpenDelete(true);
  };

  const handleSubmitAddEdit = (data: CreateCourseDto) => {
    if (selectedId) {
      dispatch(updateCourseThunk({ id: selectedId, data }));
    } else {
      dispatch(createCourseThunk(data));
    }
  };

  const handleConfirmDelete = () => {
    if (selectedId) {
      dispatch(deleteCourseThunk(selectedId));
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
      <ModalAddCourse
        open={openAddEdit}
        handleClose={() => setOpenAddEdit(false)}
        initialData={
          selectedId ? items.find((i) => i.id === selectedId) || null : null
        }
        onSubmit={handleSubmitAddEdit}
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
