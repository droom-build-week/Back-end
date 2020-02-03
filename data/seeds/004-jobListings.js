exports.seed = function(knex) {
  return knex("jobListings")
    .del()
    .then(function() {
      return knex("jobListings").insert([
        {
          title: "Team Lead",
          description: "We are looking for a new Team Lead in WEBEU5",
          companies_id: 1
        },
        {
          title: "Section Lead",
          description: "We are looking for a new Section Lead in WEBEU5",
          companies_id: 1
        },
        {
          title: "Cutter",
          description: "Someone who cuts the videos for our online courses",
          companies_id: 2
        }
      ]);
    });
};
