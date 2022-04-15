

const mailAuth = {
    checkMail: async (req, res, next) => {
        var mail = req.headers.mail;
        // 토큰 없음
        if (!mail)
            return res.send("토큰없음");
        // decode
        const user = await jwt.verify(mail);console.log(user)
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

module.exports = mailAuth;