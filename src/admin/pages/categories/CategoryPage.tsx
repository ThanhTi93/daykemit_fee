import React, { useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import TableCategory from "./TableCategory";
import ModalDelete from "../../components/ModalDelete";
import CategoryFormModal from "./CategoryFormModal";

import {
  createCategoryThunk,
  deleteCategoryThunk,
  updateCategoryThunk,
} from "../../../features/categories/categories.thunk";
import type { CreateCategoryDto } from "../../../features/categories/categories.types";

const CategoryPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.categories);

  const [openAddEdit, setOpenAddEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedCategory = useMemo(() => {
    if (selectedId === null) return null;
    return items.find((item) => item.id === selectedId) ?? null;
  }, [selectedId, items]);

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

  const handleSubmitAddEdit = (data: CreateCategoryDto) => {
    if (selectedId !== null) {
      dispatch(updateCategoryThunk({ id: selectedId, data }));
    } else {
      dispatch(createCategoryThunk(data));
    }
    setOpenAddEdit(false);
  };

  const handleConfirmDelete = () => {
    if (selectedId !== null) {
      dispatch(deleteCategoryThunk(selectedId));
    }
    setOpenDelete(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <TableCategory
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <CategoryFormModal
        open={openAddEdit}
        onClose={() => setOpenAddEdit(false)}
        initialData={
          selectedCategory
            ? {
                name: selectedCategory.name,
                description: selectedCategory.description,
              }
            : null
        }
        loading={loading}
        onSubmit={handleSubmitAddEdit}
      />

      <ModalDelete
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Category"
        description="Are you sure you want to delete this category?"
      />
    </div>
  );
};

export default CategoryPage;
