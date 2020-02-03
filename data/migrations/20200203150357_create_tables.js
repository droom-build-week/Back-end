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
      table.text("profile_photo");
      table.text("password").notNullable();
      table.integer("age").unsigned();
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
    .createTable("admins", table => {
      table.increments();
      table.text("full_name").notNullable();
      table.text("position").notNullable();
      table.text("email").notNullable();
    })
    .createTable("companies", table => {
      table.increments();
      table
        .text("company_name")
        .unique()
        .notNullable();
      table.text("industry").notNullable();
      table.text("password").notNullable();
      table
        .integer("admin_id")
        .notNullable()
        .references("id")
        .inTable("admins")
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
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
      table.text("salary").notNullable();
      table
        .integer("company_id")
        .notNullable()
        .references("id")
        .inTable("companies")
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
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
        .inTable("users")
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("company_id")
        .notNullable()
        .references("id")
        .inTable("companies")
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("job_id")
        .notNullable()
        .references("id")
        .inTable("jobListings")
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.boolean("applicant_response").defaultTo(false);
      table.boolean("company_response").defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("matches")
    .dropTableIfExists("jobListings")
    .dropTableIfExists("companies")
    .dropTableIfExists("admins")
    .dropTableIfExists("users");
};
