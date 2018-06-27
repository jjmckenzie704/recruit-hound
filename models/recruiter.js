module.exports = function(sequelize, DataTypes) {
    var recruiterAgency = sequelize.define("recruiterAgency", {
      prefix: {
          type: DataTypes.STRING,
          allowNull: false,
          default: "R",
          validate: {
              len: [1]
          }
      },
        recruiting_agency: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      street_address1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      unit1: {
        type: DataTypes.STRING,
        allowNull: true
      },
      city1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      state1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2],
          is: ["^[a-z]+$",'i']
        }
      },
      zip_code1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [5],
          isNumeric: true,
          not: ["[a-z]",'i']
        }
      },
      number1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          not: ["[a-z]",'i']
        }
      },
      national: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        validate: {
          notNull: true
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [0, 1000]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [0, 500],
          isEmail: true
        }
      },
      website: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
          isUrl: true
        }
      }
    });
  
    return recruiterAgency;
  };
  