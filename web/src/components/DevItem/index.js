import React from 'react'

import './styles.css'

export default function DevItem({ dev, handleDelete }) {
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
         <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
      </li>
   )
}