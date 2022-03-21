module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "boards",
      {
        board_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement:true, 
          allowNull: false,
        },
        board_type:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
        board_title:{
            type:DataTypes.STRING(150),
            allowNull:false,
        },
        board_content:{
            type:DataTypes.STRING(1500),
            allowNull:false,
        },
        board_hits:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        board_date:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        board_state:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        board_img:{
            type: DataTypes.STRING(3000),
            allowNull:true,
        },
        board_detail:{
            type:DataTypes.STRING(255),
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
  