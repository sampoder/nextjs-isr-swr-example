export async function getTaxiData(){
	let data = await fetch("https://api.data.gov.sg/v1/transport/taxi-availability").then(r => r.json())
    console.log(data)
	return {taxis: data.features[0].properties.taxi_count, updatedAt: data.features[0].properties.timestamp}
}

export default async function handler(req, res){
	res.status(200).json(await getTaxiData())
}
