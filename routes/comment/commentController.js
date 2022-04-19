const commentService = require('./commentService');

module.exports = {
    makeComment: (req, res) => {
       const body = req.body;   
        commentService.makeComment(body).then(result => {
            let obj={}
            if(result==false){
                logger.error('댓글 쓰기 실패');
                obj["suc"]=false;
                obj["err"]="댓글 쓰기 실패"
                res.send(obj)
            }else{
                logger.info('댓글 쓰기');
                obj["suc"]=true;
                obj["comment"]=result
                res.send(obj);
            }
        })
    },
    remakeComment: (req, res) => {
        const body = req.body;   
         commentService.remakeComment(body).then(result => {
             let obj={}
             if(result==false){
                logger.error('댓글 수정 실패');
                 obj["suc"]=false;
                 obj["err"]="댓글 수정 실패"
                 res.send(obj)
             }else{
                logger.info('댓글 수정');
                 obj["suc"]=true;
                 res.send(obj);
             }
         })
     },
     deleteComment: (req, res) => {
        const del = req.params.comment_id;   
         commentService.deleteComment(del).then(result => {
             let obj={}
             if(result==false){
                logger.error('댓글 삭제 실패');
                 obj["suc"]=false;
                 obj["err"]="댓글 삭제 실패"
                 res.send(obj)
             }else{
                logger.info('댓글 삭제');
                 obj["suc"]=true;
                 res.send(obj);
             }
         })
     },
    // getLast:(req,res)=>{
    //     const userId = req.params.user_id;
    //     lastService.getLast(userId).then(result=>{
    //         res.send(result);
    //     })

    // }
}