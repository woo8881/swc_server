module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "like",
      {
        likes_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement:true,
          allowNull: false,
        },
      },
      {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: false,
      }
    );
  };
  