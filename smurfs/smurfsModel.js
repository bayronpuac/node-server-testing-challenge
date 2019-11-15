const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

function insert(smurf) {
  return (
    db('smurfs')
      .insert(smurf, "id")
      // .then(([id]) => {
      .then(ids => {
        const id = ids[0];
        // const [id] = ids;
        return db('smurfs')
          .where({ id })
          .first();
      })
  );
}

async function update(id, changes) {
  return db('smurfs')
  .update({smurf})
  .where({id});
}

function remove(id) {
  return db('smurfs')
  .where({id})
  .del();
}

function getAll() {
  return db('smurfs');
}

function findById(id) {
  return db('smurfs').where({id}).first();
}
