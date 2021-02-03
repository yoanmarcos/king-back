const faker = require('faker');
const prisma = require('../src/prismaClient');

async function main() {
  await prisma.ressource.create({
    data: {
      type: 'Fer',
    },
  });
  await prisma.ressource.create({
    data: {
      type: 'Or',
    },
  });
  await prisma.ressource.create({
    data: {
      type: 'Argent',
    },
  });
  await prisma.ressource.create({
    data: {
      type: 'Blé',
    },
  });
  await prisma.ressource.create({
    data: {
      type: 'Bois',
    },
  });
  await prisma.ressource.create({
    data: {
      type: 'Poissons',
    },
  });
  await prisma.ressource.create({
    data: {
      type: 'Armes',
    },
  });

  await prisma.habitant.create({
    data: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      statut: 'Noble',
      Pays: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.habitant.create({
    data: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      statut: 'Noble',
      Pays: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.habitant.create({
    data: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      statut: 'Noble',
      Pays: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.habitant.create({
    data: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      statut: 'Noble',
      Pays: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.habitant.create({
    data: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      statut: 'Noble',
      Pays: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.habitant.create({
    data: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      statut: 'Noble',
      Pays: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.habitant.create({
    data: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      statut: 'Noble',
      Pays: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.habitant.create({
    data: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      statut: 'Noble',
      Pays: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.habitant.create({
    data: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      statut: 'Noble',
      Pays: {
        connect: {
          id: 1,
        },
      },
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    console.log('Seed done');
    await prisma.$disconnect();
  });
