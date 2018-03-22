"use strict";

const faker = require("faker");
const randomInt = require("../randomInt");

module.exports.generateTrainingPrograms = (limit) => {
  let trainingPrograms = [];
  for (let i=0; i<limit; i++) {
    let name = faker.fake("{{name.jobArea}} 101");
    let start_date = faker.date.past(5, new Date());
    let end_date = faker.date.between(start_date, new Date());
    // max_capacity = random number between 10 and 20
    let max_capacity = randomInt(10) + 10;
    trainingPrograms.push({
      name,
      start_date,
      end_date,
      max_capacity
    });
  }
  return trainingPrograms;
};