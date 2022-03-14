// Update with your config settings.
require("dotenv").config();
module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: "optee3",
            user: "postgres",
            password: "postgres",
        },
        migrations: {
            directory: "./model/knex/migrations"
        },
        seeds: {
            directory: "./model/knex/seeds"
        },
    },
    testing: {
        client: "postgresql",
        connection: {
            database: "optee_test",
            user: "postgres",
            password: "postgres",
        },
        migrations: {
            directory: "./model/knex/migrations"
        },
        seeds: {
            directory: "./model/knex/seeds"
        },
    },
    production: {
        client: "postgresql",
        connection: {
            database: "optee",
            user: "postgres",
            password: "postgres",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./model/knex/migrations"
        },
        seeds: {
            directory: "./model/knex/seeds"
        },
    },
};