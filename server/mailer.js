const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to the Vento Mailer API')
})

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body

  // Create a transporter object using SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.m1.websupport.sk',
    port: 465,
    secure: true, // true only for 465
    auth: {
      user: 'booking@vento.sk',
      pass: process.env.EMAIL_PASSWORD // Using process.env for email password
    }
  })

  // Define email content
  const mailOptions = {
    from: 'Vento Web Formulár <web@vento.sk>',
    to: 'booking@vento.sk', // Receiver address (your email address)
    subject: 'New Message from your website', // Subject line
    text: `Meno odosielateľa: ${name}\nDátum události: ${email}\nEmail: ${email}\nSpráva: ${message}` // Email body
  }

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error)
      res.status(500).send('Failed to send email')
    } else {
      console.log('Email sent:', info.response)
      res.status(200).send('Email sent successfully')
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
