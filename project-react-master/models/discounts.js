module.exports = (sequelize, DataTypes) => {
    const Discounts = sequelize.define("Discounts", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
         description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publishDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false
        }

    });

    Discounts.associate = models => {
        Discounts.belongsTo(models.Admin, {
            foreignkey: {
                allowNull: false
            }
        });
    };

    Discounts.associate = models => {
        Discounts.belongsToMany(models.Room, {
            through: 'discount_room',
            as: 'dis_room',
            foreignkey: {
                allowNull: false
            }
        });
    };

   

    return Discounts;
};
