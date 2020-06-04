module.exports = function(sequelize, DataTypes) {
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
  employees.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    employees.belongsTo(models.jobs, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  employees.prototype.validPassword = function(pwd) {
    return bcrypt.compareSync(pwd, this.pwd);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  employees.addHook("beforeCreate", function(employees) {
    employees.pwd = bcrypt.hashSync(employees.pwd, bcrypt.genSaltSync(10), null);
  });
  
  return employees;
};
