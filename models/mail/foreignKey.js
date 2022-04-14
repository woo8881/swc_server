module.exports = db => {
    db.Mail.hasMany(db.User, {
        foreignKey: "mail_id",
        sourceKey: "mail_id"
      });
}
