/* eslint-env node */
import express from 'express'
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))
app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  //if (true) throw 'error...  '
  res.send('ok')
})
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
