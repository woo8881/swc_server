const teamService = require('./teamService');

module.exports = {
    teamUp: (req, res) => {
       const body = req.body;
        teamService.teamUp(body).then(result => {
            let obj={}
            if(result==false){
                obj["suc"]=false;
                obj["err"]="팀 생성 실패"
                res.send(obj)
            }else{
                obj["suc"]=true;
                obj["board"]=result;
                res.send(obj);
            }
        })
    },
    teamRemake: (req, res) => {
        const body = req.body;
         teamService.teamRemake(body).then(result => {
            let obj={}
            if(result==false){
                obj["suc"]=false;
                obj["err"]="팀 수정 실패"
                res.send(obj)
            }else  if(result==true){
                obj["suc"]=true;
                res.send(obj);
            }
         })
     },
     teamDelete: (req, res) => {
        const del = req.params.team_id;
         teamService.teamDelete(del).then(result => {
            let obj={}
            if(result==false){
                obj["suc"]=false;
                obj["err"]="팀 삭제 실패"
                res.send(obj)
            }else  if(result==true){
                obj["suc"]=true;
                res.send(obj);
            }
         })
     },
    // getteam:(req,res)=>{
    //     const userId = req.params.user_id;
    //     teamService.getteam(userId).then(result=>{
    //         res.send(result);
    //     })

    // }
}
