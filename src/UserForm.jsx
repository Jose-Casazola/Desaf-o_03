import React, { useState } from 'react';
import './UserForm.css'
const UserForm = ({ addUser }) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = () => {
const newUser = { name, email };

addUser(newUser);
};

return (
<div>
<h2 className='Agregar_Usuario'>Agregar Usuario</h2>

<label className='Nombre'>Nombre: </label>
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
<br />
<label className='Email'>Email: </label>
<input type="text"value={email} onChange={(e) => setEmail(e.target.value)} />
<br/> 
<button className='Boton' onClick={handleSubmit}>Agregar</button>

<h1 className='Lista_de_Usuarios'>Lista de Usuarios:</h1>
</div>
  );
};
export default UserForm;