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
  Chip,
} from "@mui/material";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useAppSelector } from "../../../store/hooks";
import { truncateText } from "../../../utils/functionContanst";
import type { Course } from "../../../features/courses/courses.types";

interface TableCourseProps {
  onAdd: () => void;
  onEdit: (course: Course) => void;
  onDelete: (course: Course) => void;
}

const TableCourse: React.FC<TableCourseProps> = ({
  onAdd,
  onEdit,
  onDelete,
}) => {
  const { items, loading } = useAppSelector((state) => state.courses);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredItems = items.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedItems = filteredItems.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
      {/* Header */}
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
          List Courses
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            size="small"
            placeholder="Search course..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(0);
            }}
          />
          <Button variant="contained" color="primary" onClick={onAdd}>
            + Add Course
          </Button>
        </Box>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>ImgUrl</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Categories</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Updated At</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={8} align="center">
                Loading...
              </TableCell>
            </TableRow>
          ) : paginatedItems.length > 0 ? (
            paginatedItems.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.id}</TableCell>
                <TableCell>
                  {course.images.length > 0 ? (
                    course.images.map((img) => (
                      <img
                        src={img.imgUrl}
                        alt="#"
                        style={{ width: 60, height: 40, objectFit: "cover", borderRadius: 4 }}
                      />
                    ))

                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{truncateText(course.description)}</TableCell>
                <TableCell>
                  {course.categories?.map((cid) => {
                    return <Chip  label={cid?.name || "Unknown"} sx={{ mr: 0.5 }} />;
                  })}
                </TableCell>
                <TableCell>
                  {course.createdAt ? new Date(course.createdAt).toLocaleString() : "-"}
                </TableCell>
                <TableCell>
                  {course.updatedAt ? new Date(course.updatedAt).toLocaleString() : "-"}
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => onEdit(course)}>
                    <MdEdit />
                  </IconButton>
                  <IconButton color="error" onClick={() => onDelete(course)}>
                    <MdDeleteForever />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} align="center">
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 20]}
        count={filteredItems.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default TableCourse;
