const Lap = require('../models/lap.model')

exports.create = async(req, res) => {

    const lastlap = await Lap.lastopenlapbyid(req.params.id)
    if (lastlap.length > 0) {
        const lap = await Lap.end(lastlap[0].id, req.body)

        if(lap){
            res.status(200).send({message: 'Ok Lap Complete!'})
        }else{
            res.status(500).send({message: 'Error.'})
        }
    }else{
        const lap = await Lap.start(req.body)

        if(lap){
            res.status(200).send({message: 'Ok Lap Started!'})
        }else{
            res.status(500).send({message: 'Error.'})
        }
    }

}

exports.read = async(req, res) => {
    const lap = await Lap.read();
    res.status(200).send(lap)
}

exports.update = async(req, res) => {
    const lap = await Lap.update(req.params.id, req.body)

    if(lap){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.delete = async (req, res) => {
    const lap = await Lap.delete(req.params.id, req.body);

    if (lap) {
        res.status(200).send({ message: 'Ok!' })
    } else {
        res.status(500).send({ message: 'Error.' });
    }
}


exports.readById = async(req, res) => {
    const lap = await Lap.readById(req.params.id)
    console.log('Requested Lap for Tag ID : %s', req.params.id)
    //res.status(200).send(lap)
    res.json(lap);
}