const boardService = require('./boardService');
const path = require('path');
// const hashing = require(path.join(__dirname, '../../config', 'hashing.js'));
// const salt = require(path.join(__dirname, '../../config', 'config.json')).salt;

module.exports = {
    
    makeBoard:(req,res)=>{
        const body = req.body;
        boardService.makeBoard(body).then(result=>{
            res.send(result);
        })
    },
    remakeBoard:(req,res)=>{
        const body = req.body;
        boardService.remakeBoard(body).then(result=>{
            res.send(result)
        })
    },
    deleteBoard:(req,res)=>{
        const body = req.body;
        boardService.deleteBoard(body).then(result=>{
            res.send(result)
        })
    },
    inquiryBoard:(req,res)=>{
        const boardType = req.params.boardInquiry;
        const page = req.params.page;
        boardService.inquiryBoard(boardType, page).then(result=>{
            res.send(result)
        })
    },
    inquiryBulletin:(req,res)=>{
        const boardContent = req.params.board_content;
        boardService.inquiryBulletin(boardContent).then(obj=>{
            res.send(obj)
         
        })
    },
    search:(req,res)=>{
        const search = req.params.search;
        const page = req.params.page;
        boardService.search(search, page).then(result=>{
            res.send(result)
        })
    }

}
