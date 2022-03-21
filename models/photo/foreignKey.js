module.exports = db => {
    db.Photo.belongsTo(db.Board, {
        foreignKey: "board_id"
    });
}
