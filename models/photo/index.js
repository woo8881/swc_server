module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "photos",
      {
         photo_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement:true,
          allowNull: false,
          },
          
          photo_url: {
            type: DataTypes.STRING(255),
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
  