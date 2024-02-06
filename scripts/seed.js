import { sequelize, Category, Species } from "../db/model.js"; 

const categories = [
    {
        name: "Mammal",
        color: "Pink",
    },
    {
        name: "Reptile",
        color: "Green",
    },
    {
        name: "Bird",
        color: "Yellow",
    },
    {
        name: "Fish",
        color: "Orange",
    },
    {
        name: "Amphibian",
        color: "Blue",
    },
];

const species = [
    {
        name: "Dog",
        length: 36,
        color: "Brown",
        categoryId: 1,
    },
    {
        name: "Cat",
        length: 18,
        color: "Black",
        categoryId: 1,
    },
    {
        name: "Snake",
        length: 60,
        color: "Brown",
        categoryId: 2,
    },
    {
        name: "Turtle",
        length: 10,
        color: "Green",
        categoryId: 2,
    },
    {
        name: "Parrot",
        length: 15,
        color: "Red",
        categoryId: 3,
    },
    {
        name: "Goldfish",
        length: 3,
        color: "Gold",
        categoryId: 4,
    },
    {
        name: "Frog",
        length: 5,
        color: "Green",
        categoryId: 5,
    },
];

await sequelize.sync({ force: true });

await Category.bulkCreate(categories);

await Species.bulkCreate(species);

await sequelize.close();