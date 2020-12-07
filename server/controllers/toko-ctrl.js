const Toko = require('../models/toko-model')

//Create
createToko = (req,res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: `You must provide a toko`,
        })
    }

    const toko = new Toko(body)

    if(!toko) {
        return res.status(400).json({ success: false, error: err })
    }

    toko
        .save()
        .then(() => {
            return res.status(201).json({ 
                success: true,
                id: toko._id,
                message: `toko added`,
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: `toko not added!`,
            })
        })

    }
//Update
    updateToko = async (req, res) => {
        const body = req.body

        if(!body){
            return res.status(400).json({
                success: false,
                error: `You must Provide  a body to update`,
            })
        }
        
        toko.findOne({_id: req.params.id }, (err, toko) => {
            if(err) {
                return res.status(400).json({
                    err,
                    message: `toko not found`,
                })
            }

            toko.name = body.nametoko
            toko.time = body.alamat
            toko.rating = body.tarif
            toko

                .save()
                .then(() =>{
                    return res.status(200).json({
                        success: true,
                        id: toko._id,
                        message: `toko updated!`,
                    })
                })
                .catch(error => {
                    return res.status(400).json({
                        err,
                        message: `toko not updated!`
                    })
                })

        })
    }

//Deelete

deletToko = async (req, res) => {
    await toko.findOneAndDelete({ _id: req.params.id }, (err, toko) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!toko) {
            return res.status(400).json({ success: false, error: `toko not found`})
        }

        return res.status(200).json({ success: true, data: toko})
    }).catch(err => console.log(err))
}

getTokoById = async (req, res) => {
    await toko.findOne({ _id: req.params.id}, (err, toko) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }

        if (!toko) {
            return res.status(400).json({success: false, error: `toko not found`})
        }
        return res.status(200).json({ success: true,  data: toko })
    }).catch(err => console.log(err))
}

getToko = async (req, res) => {
    await toko.find({}, (err, toko) => {
        if (err) {
            return res.status(400).json({ success: false, error: err})
        }
        if(!toko.length) {
            return res.status(400).json({success: false, error: `toko not found`})
        }
        return res.status(200).json({ success: true, data: toko})
    }).catch(err => console.log(err))
}

module.exports = {
    createToko,
    updateToko,
    deletToko,
    getToko,
    getTokoById,
}
