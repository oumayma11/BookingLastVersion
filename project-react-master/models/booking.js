module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Booking", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nbChildren: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nbAdults: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totlaPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });


    Booking.associate = models => {
        Booking.belongsTo(models.Client, {
            foreignkey: {
                allowNull: false
            }
        });
    };
    Booking.associate = models => {
        Booking.belongsToMany(models.FeedBack, {
            through: 'id',
            as: 'user',
            foreignkey: {
                allowNull: false
            }
        });
    };
    Booking.associate = models => {
        Booking.hasMany(models.Room, {
            onDelete: "CASCADE",
            onUpdate:"CASCADE"
        });
    };


    return Booking;
};
