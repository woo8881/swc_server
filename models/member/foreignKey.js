module.exports = db => {
    db.Member.belongsTo(db.Team, {
        foreignKey: "team_id"
    });
    db.Member.belongsTo(db.User, {
        foreignKey: "user_id"
    });


}
