const router = require('express').Router();
let Item = require('../models/item');


router.route('/').get((req, res) => {
    Item.find()
        .then(item => res.json(item))
        .catch(err => res.status(400).json('error: ' + err))
})

router.route('/add').post((req, res) => {
    console.log('we are here')
    const { type, bodyBuild, name,
        description, price, newPrice,
        sizes, date, images, sale } = req.body;
    const newItem = new Item({
        newPrice,
        type, bodyBuild, name, description, price, sale, sizes,
        date, images
    });

    newItem.save()
        .then(() => {
            res.json('item added !')
        })
        .catch(err => {
            res.status(400).json('error: ' + err);
            console.log(err)
        });
})

router.route('/:id').get((req, res) => {
    const id = req.params.id;
    Item.findById(id)
        .then((item) => res.json(item))
        .catch(err => res.status(400).json('error: ' + err))
})

router.route(':/id').delete((req, res) => {
    const id = req.params.id;
    Item.findByIdAndDelete(id)
        .then(() => res.json('item deleted'))
        .catch(err => res.status(400).json('error: ' + err))
})

router.route('/update:/id').post((req, res) => {
    const id = req.params.id;
    const { username, duration, date, description } = req.body;
    Item.findById(id)
        .then(item => {
            item.username = username,
                item.duration = duration,
                item.date = date,
                item.description = description

            item.save()
                .then(() => res.json('item update'))
                .catch(err => res.status(400).json('error: ' + err))
        })
        .catch(err => res.status(400).json('err: ' + err))
})

module.exports = router