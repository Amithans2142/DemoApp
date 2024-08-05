import { createContext, useState } from "react";

export const AppContext = createContext();
const url = "http://localhost:5000/api/v1";

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

     //fetch all users
  async function fetchUsers() {
    setLoading(true);
    try {
      
      const response = await fetch(`${url}/users`, {
      
      });
      const data = await response.json();
      console.log({data});
      setUsers(data.users);
    } catch (error) {
      console.log(error);
      console.log("error in fetching data");
    }
    setLoading(false);
  }

  const addUser = async (user) => {
try {
    const response = await fetch(`${url}/adduser`,{
        method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            console.log({ data });
    
} catch (error) {
    console.log(error);
    
    
}
    

  
  }

    // Edit a user
    const editUser = async (id) => {
        try {
            await fetch(`${url}/update/${id}`, { method: 'PUT' });
            fetchUsers(); 
        } catch (error) {
            console.log("error in deleting user", error);
        }
    };

     // Delete a user
     const deleteUser = async (id) => {
        try {
            await fetch(`${url}/delete/${id}`, { method: 'DELETE' });
            fetchUsers(); 
        } catch (error) {
            console.log("error in deleting user", error);
        }
    };

  const value = {
    loading,
    setLoading,
    users,
    setUsers,
    fetchUsers,
    addUser,
    deleteUser,
    editUser
   
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
    
}

