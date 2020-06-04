module.exports = function(sequelize, DataTypes) {
  var employers = sequelize.define("employers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about: {
      type: DataTypes.TEXT,
      defaultValue: "Edit your about, so we know more about you.",
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true, 
      }
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8,120]      
      }
    },
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  employers.prototype.validPassword = function(pwd) {
    return bcrypt.compareSync(pwd, this.pwd);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  employers.addHook("beforeCreate", function(employers) {
    employers.pwd = bcrypt.hashSync(employers.pwd, bcrypt.genSaltSync(10), null);
  });

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
  
  var jobAds = sequelize.define("jobAds", {
    emp_id: {
      type: DataTypes.INTEGER, //
      allowNull: false,
    },
    job_id: {
      type: DataTypes.INTEGER, //
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  });

  jobAds.belongsTo(jobs, {foreignKey: 'job_id'});
  jobAds.belongsTo(employers, {foreignKey: 'emp_id'});

  
  var employees = sequelize.define("employees", {
    job_id: {
      type: DataTypes.INTEGER, //
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true, 
      }
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8,120]      
      }
    },
  });

  employees.belongsTo(jobs, {foreignKey: 'job_id'});
  employees.belongsTo(employers, {foreignKey: 'emp_id'});

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  employees.prototype.validPassword = function(pwd) {
    return bcrypt.compareSync(pwd, this.pwd);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  employees.addHook("beforeCreate", function(employees) {
    employees.pwd = bcrypt.hashSync(employees.pwd, bcrypt.genSaltSync(10), null);
  });
  
  return employers, jobAds, employees, jobs
};
module.exports = employers, jobAds, employees, jobs