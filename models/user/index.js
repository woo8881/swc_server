module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "users",
    {
      user_id: {
        primaryKey: true,
        type: DataTypes.STRING(255),
         allowNull: false,
         unique: true,
      },
      user_password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      user_tel: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      user_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      // user_address: {
      //   type: DataTypes.STRING(255),
      //   allowNull: false,
      // },
      user_gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      user_nickname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      user_pw_question: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      user_pw_answer: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      user_image: {
        type: DataTypes.STRING(255),
        allowNull: false,
      }
      // user_grade: {
      //   type: DataTypes.STRING(255),
      //   allowNull: true,
      // },
      // user_graduation: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: false,
      // },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false,
    }
  );
};
