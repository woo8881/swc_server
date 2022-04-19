const boardService = require('./boardService');
const path = require('path');
const fs = require("fs");
// const hashing = require(path.join(__dirname, '../../config', 'hashing.js'));
// const salt = require(path.join(__dirname, '../../config', 'config.json')).salt;

module.exports = {
    
    makeBoard:(req,res)=>{
        const body = req.body;
        const imgData = req.file
        // console.log(req.file)
        boardService.makeBoard(body, imgData).then((result)=>{
            // console.log(result)
            let obj={}
            if(result==false){
                logger.error('글쓰기 실패');
                obj["suc"]=false;
                obj["err"]="글쓰기 실패"
                res.send(obj)
            }else{
                logger.info('글쓰기');
                obj["suc"]=true;
                obj["board"] = result;
                res.send(obj);
            }
           
        })
    },
    remakeBoard:(req,res)=>{
        const body = req.body;
        const imgData = req.file
        // console.log(req.body)
        boardService.remakeBoard(body, imgData).then((result)=>{
            let obj={}
            if(result==false){
                logger.error('수정 실패');
                obj["suc"]=false;
                obj["err"]="수정 실패"
                res.send(obj)
            }else{
                logger.info('수정');
                obj["suc"]=true;
                res.send(obj);
            }
           
        })
    },
    deleteBoard:(req,res)=>{
        const boardId = req.params.board_id;
        boardService.deleteBoard(boardId).then(result=>{
            let obj={}
            if(result==false){
                logger.error('삭제 실패');
                obj["suc"]=false;
                obj["err"]="삭제 실패"
                res.send(obj)
            }else{
                logger.info('삭제');
                obj["suc"]=true;
                res.send(obj);
            }
           
        })
    },
    inquiryBoard:(req,res)=>{
        const boardType = req.params.board_id;
        const page = req.params.page;
        boardService.inquiryBoard(boardType, page).then(result=>{
            let obj={}
            if(result==false){
                logger.error('게시판 찾기 실패');
                obj["suc"]=false;
                obj["err"]="게시판 찾기 실패"
                res.send(obj)
            }else{
                logger.info('게시판 찾기');
                obj["suc"]=true;
                obj["board"]=result;
                res.send(obj);
            }
        })
    },
    inquiryBulletin:(req,res)=>{
        const boardContent = req.params.board_id;
        boardService.inquiryBulletin(boardContent).then(obj=>{
            let obj2={}
            if(obj==false){
                logger.error('게시글 찾기 실패');
                obj2["suc"]=false;
                obj2["err"]="게시글 찾기 실패"
                res.send(obj2)
            }else{
                logger.info('게시글 찾기');
                obj2["suc"]=true;
                obj2["board"]=obj
                res.send(obj2);
            }
           
        })
    },
    search:(req,res)=>{
        const search = req.params.search;
        const page = req.params.page;
        boardService.search(search, page).then(result=>{
            let obj={}
            if(result==false){
                logger.error('검색 실패');
                obj["suc"]=false;
                obj["err"]="검색 실패"
                res.send(obj)
            }else{
                logger.info('검색');
                obj["suc"]=true;
                obj["board"]=result;
                res.send(obj);
            }
        })
    }

}
