module.exports = function(sequelize, DataTypes) {

var jobs = sequelize.define("jobs", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return jobs;
};