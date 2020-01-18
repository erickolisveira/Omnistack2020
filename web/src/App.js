import React, { useState, useEffect } from 'react'
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'

const App = () => {
   const [devs, setDevs] = useState([])

   useEffect(() => {
      async function loadDevs() {
         const response = await api.get('./devs')

         setDevs(response.data)
      }
      loadDevs()
   }, [])

   async function handleSubmitDev(data) {
      const response = await api.post('./devs', data)

      setDevs([...devs, response.data])
   }

   async function handleDelete(_id) {
      await api.delete(`./devs/${_id}`)
      setDevs(devs.filter(dev => dev._id !== _id ))
   }

   return (
      <div id="app">
         <aside>
            <strong>Cadastrar</strong>
            <DevForm onSubmit={handleSubmitDev}/>
         </aside>
         <main>
            <ul>
               {devs.map(dev => (
                  <DevItem key={dev._id}  dev={dev} handleDelete={handleDelete}/>
               ))}
            </ul>
         </main>
      </div>
   )
}

export default App