const commentService = require('./commentService');

module.exports = {
    makeComment: (req, res) => {
       const body = req.body;   
        commentService.makeComment(body).then(result => {
            res.send(result);
        })
    },
    makeReply: (req, res) => {
        const body = req.body;   
         commentService.makeReply(body).then(result => {
             res.send(result);
         })
     }
    // getLast:(req,res)=>{
    //     const userId = req.params.user_id;
    //     lastService.getLast(userId).then(result=>{
    //         res.send(result);
    //     })

    // }
}