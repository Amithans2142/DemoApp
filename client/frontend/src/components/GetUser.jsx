import React, { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Typography, Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const GetUser = () => {
    const { loading, users, fetchUsers, deleteUser } = useContext(AppContext);

    useEffect(() => {
        fetchUsers();
    }, []);

    // Define columns for the DataGrid
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        { field: 'role', headerName: 'Role', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => {
                const handleEdit = () => {
                    // Handle edit action here
                    console.log('Edit:', params.row);
                };

                const handleDelete = () => {
                    // Handle delete action here
                    deleteUser(params.row.id); // Pass ID to deleteUser
                };

                return (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton color="primary" onClick={handleEdit}>
                            <EditIcon />
                        </IconButton>
                        <IconButton color="error" onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                );
            },
        },
    ];

    // Convert user data to the format expected by DataGrid
    const rows = users.map((user, index) => ({
        id: user._id || index, // Ensure that user data includes a unique ID
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
    }));

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Users List
            </Typography>
            {loading ? (
                <Typography>Loading...</Typography>
            ) : (
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        getRowId={(row) => row.id} // Ensure unique ID for each row
                    />
                </Box>
            )}
        </Container>
    );
};

export default GetUser;
