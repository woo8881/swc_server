const memberService = require("./memberService");

module.exports = {
  teamJoin: (req, res) => {
    const team = req.params.team_id;
    const user = req.params.user_id;
    memberService.teamJoin(team, user).then((result) => {
      console.log(result);
      let obj = {};
      if (result == 1) {
        logger.info("공모전 참가 취소");
        obj["suc"] = true;
        obj["member"] = "공모전 참가 취소";
        res.send(obj);
      } else if (result[1] == true) {
        logger.info("공모전 참가");
        obj["suc"] = true;
        res.send(obj);
      } else {
        logger.error("공모전 참가 실패");
        obj["suc"] = false;
        obj["err"] = "공모전 참가 실패";
      }
    });
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
};
