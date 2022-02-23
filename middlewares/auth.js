const jwt = require('../jwt/authorization.js');

const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const authUtil = {
    checkToken: async (req, res, next) => {
        var token = req.headers.token;
        // 토큰 없음
        if (!token)
            return res.send("토큰없음");
        // decode
        const user = await jwt.verify(token);console.log(user)
        // 유효기간 만료
        if (user === TOKEN_EXPIRED)
            return res.send("만료됨");
        // 유효하지 않는 토큰
        if (user === TOKEN_INVALID)
            return res.send("유효하지 않음");
        // if (user.user_id=== undefined)
        //     return res.send("아이디가 틀리거나 없음");
        next();
    }
}

module.exports = authUtil;