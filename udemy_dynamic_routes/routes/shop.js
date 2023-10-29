const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

// /products/:productId 를 탐색하지 말라고 하는 것.
// 대신 /products/ 이 뒤에는 아무거나 와도 된다.
// 만약 /products/delete라는 경로가 올 경우 밑의 경로보다 위에 와야 한다.
// 이는 더 명확한 경로가 있을 경우 위에서 처리하라는 의미이다.
// 위의 주석은 더 효율적인 처리를 위해서 인 것 같다.
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
