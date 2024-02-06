import Sequelize, { DataTypes, Model } from 'sequelize';
import util from 'util';

const sequelize = new Sequelize ('postgresql:///animals_project');

class Species extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Species.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
    name: {
        type: DataTypes.STRING,
        allowNull: false
  },
  length: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
},
{
    tableName: 'species',
    sequelize: sequelize,
    timestamps: false
});


class Category extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
            type: DataTypes.STRING,
            allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    tableName: 'categories',
    sequelize: sequelize,
    timestamps: false
});

Category.hasMany(Species, { foreignKey: 'categoryId' });
Species.belongsTo(Category, { foreignKey: 'categoryId' });

export { Species, Category, sequelize };