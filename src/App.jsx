import './App.css'

import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const App = () => {
const [users, setUsers] = useState([]);

const addUser = async(newUser) => {
try {
const response = await fetch('https://67281958270bd0b975545a57.mockapi.io/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(newUser),
});
if (response.ok) {

const data = await response.json();
setUsers([...users, data]);
} else {
console.error('Error al agregar usuario');
}} catch (error) {
console.error('Error en la solicitud: ', error);
}
};

const deleteUser = async (id) => {
    try {
      const response = await fetch(`https://67281958270bd0b975545a57.mockapi.io/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(users.filter(user => user.id !== id));
      } else {
        console.error('Error al eliminar el usuario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

return (
<div>
<div>
<h1 className='Titulo' >Lista de Usuarios</h1>
</div>
<UserForm addUser={addUser} />

<div className="user-list">
    {users.map((user) => (
        <div key={user.id} className="user-item">
        <span className="user-name">{user.name}</span>
        <span className="user-email">{user.email}</span>
        {/* Botón de eliminar */}
        <button 
        className="delete-button" 
        onClick={() => deleteUser(user.id)}>
        Eliminar
        </button>
        </div>
    ))}
</div>
    
<UserList/>

</div>
);
};

export default App;