module.exports = (db) => {
    db.User.hasMany(db.Board, {
      foreignKey: {name: "user_id", allowNull:false,
                  constraints: true,
                  onDelete:'cascade'
    },
          sourceKey: "user_id",

    });
    db.User.hasMany(db.Comment, {
        foreignKey: "user_id",
        sourceKey: "user_id"
      });
    db.User.hasMany(db.Team, {
       foreignKey: "user_id",
       sourceKey: "user_id"
     });
    db.User.hasMany(db.Member, {
        foreignKey: "user_id",
        sourceKey: "user_id"
      });
      db.User.hasMany(db.Likes, {
        foreignKey: "user_id",
        sourceKey: "user_id"
      });
    
  };
  