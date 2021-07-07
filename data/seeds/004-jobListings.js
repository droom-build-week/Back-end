exports.seed = function(knex) {
  return knex("jobListings")
    .del()
    .then(function() {
      return knex("jobListings").insert([
        {
          title: "Team Lead",
          description: "We are looking for a new Team Lead in WEBEU5",
          salary: "35000$",
          company_id: 1
        },
        {
          title: "Section Lead",
          description: "We are looking for a new Section Lead in WEBEU5",
          salary: "60000$",
          company_id: 1
        },
        {
          title: "Cutter",
          description: "Someone who cuts the videos for our online courses",
          salary: "30000$",
          company_id: 2
        }
      ]);
    });
};
