import React, { useState } from 'react'

import './styles.css'
import EditItem from '../EditItem'

function Dev({ dev, toggleEditing, handleDelete }) {
   return (
      <li className="dev-item">
         <div className="header-div">
            <header>
               <img src={dev.avatar_url} alt={dev.name} />
               <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
               </div>
            </header>
            <button className="close-button" onClick={() => handleDelete(dev._id)}>
               <strong>X</strong>
            </button>
         </div>
         <p>{dev.bio}</p>
         <div className="footer-div">
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
            <button className="edit-button" onClick={() => toggleEditing()}>Editar</button>
         </div>
      </li>
   )
}

export default function DevItem({ dev, handleDelete }) {
   const [isEditing, SetIsEditing] = useState(false)

   function toggleEditing() {
      SetIsEditing(!isEditing)
   }

   if(!isEditing)
      return( 
         <Dev 
            dev={dev} 
            handleDelete={handleDelete}
            toggleEditing={toggleEditing}
         /> 
      )
   else
      return( 
         <EditItem 
            dev={dev}
            toggleEditing={toggleEditing}
         />
      )
}