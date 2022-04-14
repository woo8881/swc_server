module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "mail",
      {
        mail_pk:{
          primaryKey: true,
          autoIncrement:true,
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        mail_id: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        mail_auth:{
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        mail_checkAuth:{
          type:DataTypes.STRING(255),
          allowNull:true
        }

  },
  
      {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: false,
      }
    );
  };
  