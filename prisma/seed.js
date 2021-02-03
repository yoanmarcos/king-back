const faker = require('faker');
const prisma = require('../src/prismaClient');

(async () => {
  await prisma.ressource.create({
    data: {
      Type: 'Fer',
    },
  });
  await prisma.ressource.create({
    data: {
      Type: 'Or',
    },
  });
  await prisma.ressource.create({
    data: {
      Type: 'Argent',
    },
  });
  await prisma.ressource.create({
    data: {
      Type: 'Blé',
    },
  });
  await prisma.ressource.create({
    data: {
      Type: 'Bois',
    },
  });
  await prisma.ressource.create({
    data: {
      Type: 'Poissons',
    },
  });
  await prisma.ressource.create({
    data: {
      Type: 'Armes',
    },
  });

  await prisma.pays.create({
    data: {
      name: 'Colchis',
      Ressource: {
        connect: {
          id: faker.random.number({ min: 1, max: 7 }),
        },
      },
    },
  });

  await prisma.pays.create({
    data: {
      name: 'France',
      Ressource: {
        connect: {
          id: faker.random.number({ min: 1, max: 7 }),
        },
      },
    },
  });

  await prisma.pays.create({
    data: {
      name: 'Grèce',
      Ressource: {
        connect: {
          id: faker.random.number({ min: 1, max: 7 }),
        },
      },
    },
  });

  await prisma.pays.create({
    data: {
      name: 'Roumanie',
      Ressource: {
        connect: {
          id: faker.random.number({ min: 1, max: 7 }),
        },
      },
    },
  });

  await prisma.habitant.create({
    data: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      statut: 'Famille Royale',
      link: '',
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
      statut: 'Famille Royale',
      link: faker.image.avatar(),
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
      statut: 'Famille Royale',
      link: faker.image.avatar(),
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
      statut: 'Famille Royale',
      link: faker.image.avatar(),
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
      statut: 'Famille Royale',
      link: faker.image.avatar(),
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
      statut: 'Famille Royale',
      link: faker.image.avatar(),
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
      statut: 'Famille Royale',
      link: faker.image.avatar(),
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
      link: faker.image.avatar(),
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
      link: faker.image.avatar(),
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
      link: faker.image.avatar(),
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
      link: faker.image.avatar(),
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
      link: faker.image.avatar(),
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
      link: faker.image.avatar(),
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
      link: faker.image.avatar(),
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
      link: faker.image.avatar(),
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
      link: faker.image.avatar(),
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
      link: faker.image.avatar(),
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
      link: faker.image.avatar(),
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
      statut: 'Paysan',
      link: faker.image.avatar(),
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
      statut: 'Paysan',
      link: faker.image.avatar(),
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
      statut: 'Paysan',
      link: faker.image.avatar(),
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
      statut: 'Paysan',
      link: faker.image.avatar(),
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
      statut: 'Paysan',
      link: faker.image.avatar(),
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
      statut: 'Paysan',
      link: faker.image.avatar(),
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
      statut: 'Paysan',
      link: faker.image.avatar(),
      Pays: {
        connect: {
          id: 1,
        },
      },
    },
  });
})().finally(async () => {
  console.log('Seed done');
  await prisma.$disconnect();
});
