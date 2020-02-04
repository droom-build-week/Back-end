exports.up = function (knex) {
  return knex.schema
    .createTable("users", table => {
      table.increments();
      table.string("full_name").notNullable();
      table
        .string("username")
        .notNullable();
      table.string("email").notNullable();
      table.string("occupation").notNullable();
      table.string("profile_photo");
      table.string("password").notNullable();
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
      table.unique(['username', 'email']);
    })
    .createTable("admins", table => {
      table.increments();
      table.string("full_name").notNullable();
      table.string("position").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.unique('email');
    })
    .createTable("companies", table => {
      table.increments();
      table
        .string("company_name")
        .notNullable();
      table.string("industry").notNullable();
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
      table.unique('company_name');
    })
    .createTable("jobListings", table => {
      table.increments();
      table.string("title", 128).notNullable();
      table.text("description").notNullable();
      table.string("salary").notNullable();
      table
        .integer("company_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("companies")
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
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("company_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("companies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("job_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("jobListings")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.boolean("applicant_response").defaultTo(false);
      table.boolean("company_response").defaultTo(false);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("matches")
    .dropTableIfExists("jobListings")
    .dropTableIfExists("companies")
    .dropTableIfExists("admins")
    .dropTableIfExists("users");
};
