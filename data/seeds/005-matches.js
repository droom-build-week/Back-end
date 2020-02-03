exports.seed = function(knex) {
  return knex("matches")
    .del()
    .then(function() {
      return knex("matches").insert([
        {
          applicant_id: 1,
          company_id: 1,
          jobListings_id: 1
        },
        {
          applicant_id: 2,
          company_id: 1,
          jobListings_id: 2
        }
      ]);
    });
};
