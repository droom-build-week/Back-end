exports.seed = function(knex) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          full_name: "Luis Schekerka",
          username: "Luigi94",
          email: "luis_schekerka@yahoo.de",
          occupation: "Web-Developer",
          password: "test1234",
          age: 24,
          past_experience: "16 weeks of Lambda School",
          interests: "Coding"
        },
        {
          full_name: "Evans Ibok",
          username: "Evans123",
          email: "evansibok@gmail.com",
          occupation: "Web-Developer",
          password: "test1234",
        }
      ]);
    });
};
