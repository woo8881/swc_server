const memberService = require('./memberService');

module.exports = {
    teamJoin: (req, res) => {
        const team = req.params.team_id;
        const user = req.params.user_id;
         memberService.teamJoin(team, user).then(result => {
             res.send(result);
         })
     },
    // useteaminfo: (req, res) => {
    //    const userId = req.params.user_id;
    //    const eggId =req.params.egg_id;
    
    //     contestteaminfoService.useteaminfo(userId, eggId).then(result => {
    //         res.send(result);
    //     })
    // },
    // getteaminfo:(req,res)=>{
    //     const userId = req.params.user_id;
    //     contestteaminfoService.getteaminfo(userId).then(result=>{
    //         res.send(result);
    //     })
    // }
}
