const crypto = require('crypto');

const token = crypto.randomBytes(20).toString('hex'); // token 생성
    const data = { // 데이터 정리
      token,
      ttl: 300 // ttl 값 설정 (5분)
    };

module.export = data