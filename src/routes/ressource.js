const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

// GET

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.ressource.findMany({
      include: {
        Pays: true,
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
    const results = await prisma.ressource.findUnique({
      where: {
        id: +id,
      },
      include: {
        Pays: true,
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
    const results = await prisma.ressource.create({
      data: {
        Type: req.body.Type,
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
    await prisma.ressource.delete({
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
    const { Type } = req.body;
    const results = await prisma.ressource.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        Type,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
