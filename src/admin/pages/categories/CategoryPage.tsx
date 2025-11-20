// src/pages/admin/CategoryPage.tsx
"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import TableCategory from "./TableCategory";
import ModalAddCategory from "./ModalAddCategory";
import ModalDelete from "../../components/ModalDelete";
import { createCategoryThunk, deleteCategoryThunk, updateCategoryThunk } from "../../../features/categories/categories.thunk";

const CategoryPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state) => state.categories);

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

    const handleSubmitAddEdit = (data: { name: string; description: string }) => {
        console.log(data);  
        if (selectedId) {
            dispatch(updateCategoryThunk({ id: selectedId, data }));
        } else {
            dispatch(createCategoryThunk(data));
        }
    };

    const handleConfirmDelete = () => {
        if (selectedId) {
            dispatch(deleteCategoryThunk(selectedId));
        }
        setOpenDelete(false);
    };

    return (
        <div style={{ padding: "20px" }}>
            <TableCategory onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} />

            {/* Modal Add/Edit */}
            <ModalAddCategory
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
                title="Delete Category"
                description="Are you sure you want to delete this category?"
            />
        </div>
    );
};

export default CategoryPage;
