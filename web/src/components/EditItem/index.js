import React, { useState } from 'react'
import api from '../../services/api'

import './styles.css'

export default function EditItem({ dev, toggleEditing }) {
   const [name, setName] = useState(dev.name)
   const [techs, setTechs] = useState(dev.techs.join(', '))
   const [bio, setBio] = useState(dev.bio)

   async function handleUpdate() {
      const updatedDev = {
         name,
         techs,
         bio 
      }
      await api.put(`/devs/${dev._id}`, updatedDev)
      toggleEditing()
   }

   return (
      <li className="dev-item">
         <div className="header-div">
            <header>
               <img src={dev.avatar_url} alt={dev.name} />
               <div className="user-info">
                  <input
                     type="text"
                     value={name}
                     onChange={e => setName(e.target.value)}
                  />
                  <input
                     type="text"
                     value={techs}
                     onChange={e => setTechs(e.target.value)}
                  />
               </div>
            </header>
         </div>
         <input 
            type="text"
            value={bio}
            onChange={e => setBio(e.target.value)}
         />
         <div className="edit-buttons">
            <button id="cancel-button" onClick={() => toggleEditing()}>Cancelar</button>
            <button id="save-button" onClick={() => handleUpdate()}>Salvar</button>
         </div>
      </li>
   )
}