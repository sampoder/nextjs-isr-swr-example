import { getTaxiData } from '../../lib/helpers'

export default async function handler(req, res){
	res.status(200).json(await getTaxiData())
}
