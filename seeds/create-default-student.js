/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del();
  await knex('students').insert([
    {id: 1, name: 'Rory', phoneNumber: "911-911-9999"}
  ]);
};
