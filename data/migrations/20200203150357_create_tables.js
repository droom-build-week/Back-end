exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      table.increments();
      table.text("full_name").notNullable();
      table
        .text("username")
        .unique()
        .notNullable();
      table.text("email").notNullable();
      table.text("occupation").notNullable();
      table.text("password").notNullable();
      table.integer("age");
      table.text("past_experience");
      table.text("interests");
      table
        .timestamp("created_at")
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .notNullable()
        .defaultTo(knex.fn.now());
    })
    .createTable("admin", table => {
      table.increments();
      table.text("full_name").notNullable();
      table.text("position").notNullable();
      table.text("email").notNullable();
    })
    .createTable("companies", table => {
      table.increments();
      table
        .text("companie_name")
        .unique()
        .notNullable();
      table.text("industry").notNullable();
      table.text("password").notNullable();
      table
        .integer("admin_id")
        .notNullable()
        .references("id")
        .inTable("admin");
      table
        .timestamp("created_at")
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .notNullable()
        .defaultTo(knex.fn.now());
    })
    .createTable("jobListings", table => {
      table.increments();
      table.text("title", 128).notNullable();
      table.text("description").notNullable();
      table
        .integer("companies_id")
        .notNullable()
        .references("id")
        .inTable("companies");
      table
        .timestamp("created_at")
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .notNullable()
        .defaultTo(knex.fn.now());
    })
    .createTable("matches", table => {
      table.increments();
      table
        .integer("applicant_id")
        .notNullable()
        .references("id")
        .inTable("users");
      table
        .integer("company_id")
        .notNullable()
        .references("id")
        .inTable("companies");
      table
        .integer("jobListings_id")
        .notNullable()
        .references("id")
        .inTable("jobListings");
      table.text("applicant_response");
      table.text("company_response");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("matches")
    .dropTableIfExists("jobListings")
    .dropTableIfExists("admin")
    .dropTableIfExists("companies")
    .dropTableIfExists("users");
};
