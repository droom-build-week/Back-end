exports.seed = function(knex) {
  return knex("companies")
    .del()
    .then(function() {
      return knex("companies").insert([
        {
          company_name: "Lambda School",
          industry: "education",
          password: "test1234",
          admin_id: 1
        },
        {
          company_name: "Codecademy",
          industry: "education",
          password: "test1234",
          admin_id: 2
        }
      ]);
    });
};
