import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";

import {
  FiEdit2,
  FiTrash2,
  FiUser,
} from "react-icons/fi";

import {
  useDeleteAccountMutation,
  useGetAccountsQuery,
} from "../../../features/accounts/accounts.rtk";

import type { Account } from "../../../features/accounts/accounts.types";

const TableAccount = () => {
  const {
    data: accounts,
    isLoading,
    isError,
  } = useGetAccountsQuery();

  const [deleteAccount] =
    useDeleteAccountMutation();

  // =========================
  // DELETE
  // =========================
  const handleDelete = async (
    id: number
  ) => {
    try {
      await deleteAccount(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // LOADING
  // =========================
  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        py={5}
      >
        <CircularProgress />
      </Box>
    );
  }

  // =========================
  // ERROR
  // =========================
  if (isError) {
    return (
      <Typography color="error">
        Failed to load accounts
      </Typography>
    );
  }

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: "20px",
        border:
          "1px solid rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}
    >
      <Table>
        {/* HEADER */}
        <TableHead>
          <TableRow
            sx={{
              bgcolor: "#f8fafc",
            }}
          >
            <TableCell>
              <Typography
                fontWeight="bold"
              >
                User
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                fontWeight="bold"
              >
                Email
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                fontWeight="bold"
              >
                Role
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                fontWeight="bold"
              >
                Status
              </Typography>
            </TableCell>

            <TableCell align="right">
              <Typography
                fontWeight="bold"
              >
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        {/* BODY */}
        <TableBody>
          {accounts?.map(
            (account: Account) => (
              <TableRow
                key={account.id}
                hover
              >
                {/* USER */}
                <TableCell>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Avatar>
                      <FiUser />
                    </Avatar>

                    <Box>
                      <Typography
                        fontWeight={600}
                      >
                        {
                          account.username
                        }
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        ID: {account.id}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>

                {/* EMAIL */}
                <TableCell>
                  <Typography>
                    {account.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {account.role}
                  </Typography>
                </TableCell>
                {/* STATUS */}
                <TableCell>
                  <Chip
                    label="Active"
                    color="success"
                    size="small"
                  />
                </TableCell>

                {/* ACTIONS */}
                <TableCell align="right">
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="flex-end"
                  >
                    {/* EDIT */}
                    <Tooltip title="Edit">
                      <IconButton
                        color="primary"
                      >
                        <FiEdit2 />
                      </IconButton>
                    </Tooltip>

                    {/* DELETE */}
                    <Tooltip title="Delete">
                      <IconButton
                        color="error"
                        onClick={() =>
                          handleDelete(
                            account.id
                          )
                        }
                      >
                        <FiTrash2 />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableAccount;