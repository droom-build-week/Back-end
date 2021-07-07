const db = require("../data/db-config");

const Admins = require("./admins-model");

beforeEach(async () => {
  await db("admins").truncate();
})

describe('Hobbits Model', () => {
  describe('** ADD ADMIN **', () => {
    test('should insert the correct number  of admins into the Database', async () => {
      await Admins.add({
        "full_name": "Jon Snow",
        "position": "Technical Recruiter",
        "email": "jon@snow.com",
        "password": "1234"
      })
      await Admins.add({
        "full_name": "Luke Snow",
        "position": "Chief Hirer",
        "email": "luke@snow.com",
        "password": "2345"
      })
      await Admins.add({
        "full_name": "Lynna Stark",
        "position": "Hiring Manager",
        "email": "lynna@stark.com",
        "password": "3456"
      })

      const admins = await db("admins");
      expect(admins).toHaveLength(3);
    })

    test('should not break inputs on inserting admin ', async () => {
      const admin = await Admins.add({
        "full_name": "Luke Snow",
        "position": "Chief Hirer",
        "email": "luke@snow.com",
        "password": "2345"
      })
      expect(admin).toMatchObject({
        "email": "luke@snow.com",
        "full_name": "Luke Snow",
        "position": "Chief Hirer"
      })
    })
  })

  describe("** FIND ADMIN BY FILTER **", () => {
    test('should return correct admin on filtering', async () => {
      const jon = await Admins.add({
        "full_name": "Jon Snow",
        "position": "Technical Recruiter",
        "email": "jon@snow.com",
        "password": "1234"
      })

      const email = jon.email;

      const admin = await Admins.findBy({ email });
      console.log(admin)

      expect(admin).toMatchObject({
        "full_name": "Jon Snow",
        "position": "Technical Recruiter",
        "email": "jon@snow.com",
        "password": "1234"
      })
    })
    
  })
  


})
