exports.seed = function(knex) {
  return knex("admins")
    .del()
    .then(function() {
      return knex("admins").insert([
        {
          full_name: "Remi Becheru",
          position: "TL",
          email: "Remi.Becheru@test.com"
        },
        {
          full_name: "Matt Locklin",
          position: "SL",
          email: "Matt.Locklin@test.com"
        }
      ]);
    });
};
