module.exports = db => {
    db.Team.belongsTo(db.Board, {
        foreignKey: "board_id"
    });


    db.Team.hasMany(db.Member, {
        foreignKey: "team_id",
        sourceKey: "team_id"
    });

}
