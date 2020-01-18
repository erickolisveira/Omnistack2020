const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

//index, show, store, update, destroy

module.exports = {
   async index(req, res) {
      const devs = await Dev.find({})
      return res.json(devs)
   },

   async show(req, res){
      const dev = await Dev.findById(req.params.id)
      return res.json(dev)
   },

   async store(req, res) {
      const { github_username, techs, latitude, longitude } = req.body
   
      let dev = await Dev.findOne({ github_username })

      if(!dev) {
         const user = await axios.get(`https://api.github.com/users/${github_username}`)
         
         const { name = login, avatar_url, bio } = user.data
      
         const techsArray = parseStringAsArray(techs)
      
         const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
         }
      
         dev = await Dev.create({
            github_username, 
            name, 
            avatar_url, 
            bio, 
            techs: techsArray,
            location
         })
      }
      return res.json(dev)
   },

   async update(req, res) {
      const body = req.body
      const dev = {
         name: body.name,
         bio: body.bio,
         techs: parseStringAsArray(body.techs)
      }
      const updatedDev = await Dev.findByIdAndUpdate(req.params.id, dev, { new: true })
      return res.json(updatedDev)
   },

   async destroy(req, res) {
      await Dev.findByIdAndDelete(req.params.id)
      return res.status(204).end()
   }
}