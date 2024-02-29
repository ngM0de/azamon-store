const { faker } = require('@faker-js/faker');
const fs = require('fs');
const result = [];
const res = fs.readdirSync(`${__dirname}/assets/images`, { encoding: 'utf-8' });
for (let i = 0; i <= 50; i++) {
  const obj = {
    id: i,
    image: `"/assets/images/${res[Math.floor(Math.random() * 5)]}"`,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 0, max: 1500 }),
    type: Math.floor(Math.random() * 4),
    rating: Math.floor(Math.random() * 5)
  };

  result.push(JSON.stringify(obj));
}

for (let r of result) {
  console.log(r.replaceAll(/'|\\"/g, '') + ',');
}
