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
    
    return employers;
};