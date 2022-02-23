module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "comments",
      {
        comment_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement:true,
          allowNull: false,
        },
        comment_content:{
            type:DataTypes.STRING(300),
            allowNull:false,
        },
        comment_date:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        comment_parents:{
            type:DataTypes.INTEGER,
            allowNull:true,
        }
      },
      {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: false,
      }
    );
  };
  