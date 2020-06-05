module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    skills: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: "Applications Analyst"
    }
  });
  return Post;
};
