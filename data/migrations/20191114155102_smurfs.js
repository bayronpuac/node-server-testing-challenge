exports.up = function(knex) {
  return knex.schema.createTable('smurfs', tbl => {
    tbl.increments();

    tbl.string('name', 255).notNullable();
    tbl.string('img', 255);
  });
};

exports.down = function(knex) {
  // undo the operation in up
  return knex.schema.dropTableIfExists('smurfs');
};

