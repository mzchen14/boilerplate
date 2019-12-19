const router = require('express').Router();

//further delegate the routes to match individual routers

//ex: router.use('/users', require('./users)) // to match all req to /api/users

//404s

router.use((req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

module.exports = router
