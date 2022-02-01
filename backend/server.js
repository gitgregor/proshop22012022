import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import connectDB from './config/db.js'
//that one has used before MongoDB was seeded and productRoutes.js was created
// import products from './data/products.js'

import productRoutes from './routes/productRoutes.js'

// those was used before configure module in package.json

// const express = require('express')
// const dotenv = require('dotenv')
// const products = require('./data/products')

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running... ')
})

//======= those routes are ccoppied to the  routes files========
// and it was done after lesson on which we created seeder to populated MongoDB in compass
// and app. has changed on router productRouter.js.


// find all products

// app.get('/api/products', (req, res) => {
//     res.json(products)
// })

// find specific product

// app.get('/api/products/:id', (req, res) => {
//     const product = products.find(p => p._id === req.params.id)
//     res.json(product)
// })
//==============================================================

app.use('/api/products', productRoutes)

app.use(notFound)
// app.use((req, res, next) => {
//     const error = new Error(`Not Found - ${req.originalUrl}`)
//     res.status(404)
//     next(error)
// })

app.use(errorHandler)
// app.use((err, req, res, next) => {
//     const statusCode = res.statusCode === 200 ? 500 : res.statusCode
//     res.status(statusCode)
//     res.json({
//         message: err.message,
//         stack: process.env.MODE_ENV === 'production' ? null : err.stack,
//     })
// })


const PORT = process.env.PORT || 5000

// app.listen(5000, console.log('Server running on port  5000'))
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port  ${PORT}`))