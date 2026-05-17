const express = require('express');
const { getAccountInfo, getCardInfo, getSecurityInfo, getTransferInfo, submitTransfer } = require('../controllers/clientController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/account', protect, getAccountInfo);
router.get('/card', protect, getCardInfo);
router.get('/security', protect, getSecurityInfo);
router.get('/transfer', protect, getTransferInfo);
router.post('/transfer', protect, submitTransfer);

module.exports = router;
