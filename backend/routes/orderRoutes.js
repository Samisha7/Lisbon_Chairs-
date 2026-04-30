const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST /api/orders
// Create a new order
router.post('/', async (req, res) => {
  try {
    const { items, total } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }

    const order = new Order({
      items,
      total
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error creating order' });
  }
});

module.exports = router;
