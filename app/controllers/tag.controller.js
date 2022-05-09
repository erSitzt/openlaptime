const Tag = require('../models/tag.model')

exports.create = async(req, res) => {


        const tag = await Tag.create(req.body)

        if(tag){
            res.status(200).send({message: 'Ok Tag Created!'})
        }else{
            res.status(500).send({message: 'Error.'})
        }
    

    }

exports.read = async(req, res) => {
    const tag = await Tag.read();
    res.status(200).send(tag)
}

exports.update = async(req, res) => {
    const tag = await Tag.update(req.params.id, req.body)

    if(tag){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.delete = async (req, res) => {
    const tag = await Tag.delete(req.params.id, req.body);

    if (tag) {
        res.status(200).send({ message: 'Ok!' })
    } else {
        res.status(500).send({ message: 'Error.' });
    }
}


exports.readById = async(req, res) => {
    const tag = await Tag.readById(req.params.id)
    console.log('Requested Tag for Tag ID : %s', req.params.id)
    //res.status(200).send(tag)
    res.json(tag);
}