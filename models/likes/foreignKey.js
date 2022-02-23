module.exports = db => {
    db.Comment.belongsTo(db.User, {
        foreignKey: 'user_id'
    });
    db.Comment.belongsTo(db.Board, {
        foreignKey: 'board_id'
    });

  
}
