import { Router } from 'express';

import { create, findAll, findOne, updateOne, deleteOne } from './todoRep.js'

const router = Router();

router.post('/', async (req, res) => {
  
    const result = await create(req.body);
    res.status(201).json(result)
})

router.get('/', async (req, res) => {
    const result = await findAll();

    res.json(result)
})

router.get('/:id', async (req, res) => {
    const result = await findOne(+req.params.id);

    res.json(result)
})

router.put('/:id', async (req, res) => {
    const result = await updateOne(+req.params.id, req.body);

    res.json(result)
})

router.delete('/:id', async (req, res) => {
    const result = await deleteOne(+req.params.id);
    res.json(result)
    res.json({message:'deleted'})
})

export default router;

