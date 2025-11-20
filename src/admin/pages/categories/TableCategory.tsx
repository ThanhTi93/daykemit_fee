import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  TablePagination,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useAppSelector } from "../../../store/hooks";
import { truncateText } from "../../../utils/functionContanst";

// Định nghĩa props cho TableCategory
interface TableCategoryProps {
  onAdd: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TableCategory: React.FC<TableCategoryProps> = ({
  onAdd,
  onEdit,
  onDelete,
}) => {
  const { items, loading } = useAppSelector((state) => state.categories);

  // State phân trang
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // State search
  const [searchTerm, setSearchTerm] = useState("");

  // Xử lý khi đổi trang
  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Xử lý khi đổi số hàng trên 1 trang
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Lọc dữ liệu theo searchTerm
  const filteredItems = items.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Cắt dữ liệu theo trang
  const paginatedItems = filteredItems.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
      {/* Header với Title, Search, Add */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          List Categories
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          {/* Ô search */}
          <TextField
            size="small"
            placeholder="Search category..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(0); // reset về trang 1 khi search
            }}
          />

          {/* Nút thêm */}
          <Button variant="contained" color="primary" onClick={onAdd}>
            + Add Category
          </Button>
        </Box>
      </Box>

      {/* Bảng */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Updated At</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
                Loading...
              </TableCell>
            </TableRow>
          ) : paginatedItems.length > 0 ? (
            paginatedItems.map((cat) => (
              <TableRow key={cat.id}>
                <TableCell>{cat.id}</TableCell>
                <TableCell>{cat.name}</TableCell>
                <TableCell>{truncateText(cat.description)}</TableCell>
                <TableCell>
                  {cat.createdAt
                    ? new Date(cat.createdAt).toLocaleString()
                    : "-"}
                </TableCell>
                <TableCell>
                  {cat.updatedAt
                    ? new Date(cat.updatedAt).toLocaleString()
                    : "-"}
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => onEdit(cat.id)}>
                    <MdEdit />
                  </IconButton>
                  <IconButton color="error" onClick={() => onDelete(cat.id)}>
                    <MdDeleteForever />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Phân trang */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={filteredItems.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default TableCategory;
