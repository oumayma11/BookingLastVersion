module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define("Room", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
        },
        roomType: {
            type: DataTypes.ENUM,
            values: ['suite', 'VIP', 'normal','single','double'],
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nbRoomAvailable: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
       
        price: {
            type: DataTypes.FLOAT,
            allowNull: true
        }
    });


   
    Room.associate = models => {
        Room.belongsToMany(models.Discounts, {
            through: 'discount_room',
            as: 'dis_room',
            foreignkey: {
                allowNull: false
            }
        });
    };

    Room.associate = models => {
        Room.belongsTo(models.Booking, {
            foreignkey: {
                allowNull: false,
               
            }
        });
    };
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'room', // name of Source model
            'BookingId', // name of the key we're adding 
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'booking', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }
        );
    };
        down: (queryInterface, Sequelize) => {
            return queryInterface.removeColumn(
                'room', // name of Source model
                'BookingId' // key we want to remove
            );
        }

    return Room;
};
