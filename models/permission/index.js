module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "permissions",
      {
        permission_pk:{
          primaryKey: true,
          autoIncrement:true,
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        permission_id: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        mail_auth:{
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        mail_checkAuth:{
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        permission_value:{
          type: DataTypes.BOOLEAN,
          allowNull: true,
        }

  },
  
      {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: false,
      }
    );
  };
  