import { db } from "../database/database.js";

export async function getViagens(req, res){
    const object = await db.query(` SELECT * FROM viagens;`)
    try{

        res.status(200).send(object.rows)
    }catch(err){
        res.status(500).send(err.message)
    }
}

export async function getInfoViagens(req, res){
    const {id} = req.params
    console.log(id)

    const description = await db.query(` SELECT * FROM descricao WHERE "viagemId"=$1`, [id])
    const info = await db.query(`SELECT * FROM viagens WHERE id=$1;`, [id])
    const hours = await db.query(`SELECT * FROM dias WHERE "viagemId"=$1;`, [id])

    const travelDates = hours.rows
    
    const object ={
        name: info.rows[0].name,
        viagemId: description.rows[0].viagemId,
        experience: info.rows[0].experience,
        description: description.rows[0].description,
        travelDates
    }

    try{
        res.status(200).send(object)
    }catch{
        res.status(500).send(err.message)
    }
}


export async function buyticket(req, res){
    const { id } = req.params

    const dia = await db.query(`SELECT * FROM dias WHERE id=$1;`, [id])
    const viagem = await db.query(`SELECT * FROM viagens WHERE id=$1;`, [dia.rows[0].viagemId])
    
    const object ={
        partida: dia.rows[0].local,
        destino: viagem.rows[0].name,
        data: dia.rows[0].date,
        hora: dia.rows[0].hour,
        experiencia: viagem.rows[0].experience
    }

    try{
        res.status(200).send(object)
    }catch(err){
        res.status(500).send(err.message)
    }
}