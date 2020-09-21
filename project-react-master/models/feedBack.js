module.exports = (sequelize, DataTypes) => {
    const FeedBack = sequelize.define("FeedBack", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    FeedBack.associate = models => {
        FeedBack.belongsToMany(models.Booking, {
            onDelete: "cascade"
        });
    };
    FeedBack.associate = models => {
        FeedBack.belongsTo(models.Client, {
            onDelete: "cascade",
            onUpdate: "CASCADE"
        });
    };

    
    

    return FeedBack;
};
