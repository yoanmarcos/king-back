const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

// GET

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.pays.findMany({
      include: {
        Ressource: true,
        Habitant: true,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.pays.findUnique({
      where: {
        id: +id,
      },
      include: {
        Ressource: true,
        Habitant: true,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

// POST

router.post('/', async (req, res, next) => {
  try {
    const { name, RessourceId } = req.body;
    const results = await prisma.pays.create({
      data: {
        name,
        Ressource: { connect: { id: parseInt(RessourceId, 10) } },
      },
    });
    res.status(201).json(results);
  } catch (err) {
    next(err);
  }
});

// DELETE

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.pays.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// PUT

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, country, text, longitude, latitude } = req.body;
    const results = await prisma.pays.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        name,
        country,
        text,
        longitude,
        latitude,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
