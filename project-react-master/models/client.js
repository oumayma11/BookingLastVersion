module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define("Client", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
       
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false
        },

      image: {
            type: DataTypes.STRING,
            allowNull: false
        }
       
    });

    Client.associate = models => {
        Client.hasMany(models.Booking, {
            onDelete: "cascade"
        });
    };

    Client.associate = models => {
        Client.hasMany(models.FeedBack, {
            onDelete: "cascade"
        });
    };

    return Client;
};
