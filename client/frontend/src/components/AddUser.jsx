import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

const AddUser = () => {
    const { addUser } = useContext(AppContext);
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser(user); // Pass user data to addUser
        // Optionally, clear form fields or handle success
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Add User
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    type="email"
                />
                <TextField
                    label="Phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    type="password"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '16px' }}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default AddUser;
