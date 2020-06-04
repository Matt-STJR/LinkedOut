module.exports = function(sequelize, DataTypes) {
 
  var jobAds = sequelize.define("jobAds", {
    employerId: {
      type: DataTypes.INTEGER, //
      allowNull: false,
    },
    jobId: {
      type: DataTypes.INTEGER, //
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  });

  jobAds.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    jobAds.belongsTo(models.jobs, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  jobAds.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    jobAds.belongsTo(models.employers, {
      foreignKey: {
        allowNull: false
      }
    });
  };

 return jobAds;
  
};