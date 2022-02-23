const teamService = require('./teamService');

module.exports = {
    teamUp: (req, res) => {
       const body = req.body;
        teamService.teamUp(body).then(result => {
            res.send(result);
        })
    },
    teamRemake: (req, res) => {
        const body = req.body;
         teamService.teamRemake(body).then(result => {
             res.send(result);
         })
     },
     teamDelete: (req, res) => {
        const del = req.params.team_id;
         teamService.teamDelete(del).then(result => {
             res.send(result);
         })
     },
    // getteam:(req,res)=>{
    //     const userId = req.params.user_id;
    //     teamService.getteam(userId).then(result=>{
    //         res.send(result);
    //     })

    // }
}
