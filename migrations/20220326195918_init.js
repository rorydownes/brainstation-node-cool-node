/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('students', function (table) {
            table.increments('id');
            table.string('name');
            table.string('phoneNumber');
            table.timestamps();
        })
        .createTable('grades', function(table) {
            table.increments('id');
                table.integer('studentId');
                table.integer('exercise1').unsigned();
        });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable('students')
        .dropTable('grades');
};
