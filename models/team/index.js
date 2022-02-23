module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "teams",
      {
         team_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement:true,
          allowNull: false,
          },  
          team_name: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },
          team_maximum: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },
          team_limit_date: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          team_chat: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },



  },
  
      {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: false,
      }
    );
  };
  