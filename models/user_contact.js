module.exports = function(sequelize, DataTypes) {
    var userContact = sequelize.define("userContact", {
        person_name: {
           type: DataTypes.STRING,
           allowNull: false,
           validate: {
               len: [1]
           }
        },
        number1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                not: ["[a-z]",'i']
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 75],
                isEmail: true
            }
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [0, 1000]
            }
        },
    });
  
    return userContact;
  };
  