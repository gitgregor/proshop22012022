import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// app.get  routes from server.js  has changed on router.get


// @desc Fetch all products
// @route GET /api/products
// @access Public

// find all products
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const products = await Product.find({})

        res.json(products)
    }))


// @desc Fetch single product
// @route GET /api/products/:id
// @access Public

// find specific product
router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id)

        if (product) {
            res.json(product)
        } else {
            res.status(404).json({ message: 'Product not found' })
        }

        //was before seeder
        // const product = products.find(p => p._id === req.params.id)
        res.json(product)
    }))

export default router

// below how the paths are changed:

//'/api/products' on '/'
// '/api/products/:id' on ':/id'

//============
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