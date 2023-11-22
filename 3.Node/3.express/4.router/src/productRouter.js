const express = require('express');
const router = express.Router();

// 상품 기본 정보
router.get('/', (req, res) => {
    res.send('상품 기본 정보');
});

// 상품 상세 조회
router.get('/detail', (req, res) => {
    res.send('상품 상세 정보');
});

// 사용자 설정 조회
router.get('/list', (req, res) => {
    res.send('상품 전체 목록');
});

module.exports = router;