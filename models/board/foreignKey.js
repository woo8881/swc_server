module.exports = (db) => {
  db.Board.belongsTo(db.User, {
    foreignKey: "user_id",
  });

  db.Board.hasMany(db.Comment, {
    foreignKey: "board_id",
    sourceKey: "board_id",
  });
  db.Board.hasMany(db.Likes, {
    foreignKey: "board_id",
    sourceKey: "board_id",
  });
  db.Board.hasMany(db.Team, {
    foreignKey: "board_id",
    sourceKey: "board_id",
  });
  db.Board.hasMany(db.Photo, {
    foreignKey: "board_id",
    sourceKey: "board_id",
  });
};
