import mongodb from 'mongodb'

export default async function makeDb(){
	const MongoClient = mongodb.MongoClient
	const url = 'mongodb://localhost:27017'
	const dbName = 'jwt_sample_db'
	//Create mongodb client connection
	const client = new MongoClient(url, { useNewUrlParser: true }) 
	//Establish connection
	await client.connect() 
	//Get db driver object
	const db = await client.db(dbName)
	db.makeId = makeIdFromString
	
	return db
}

//create mongodb object id based on string value id
function makeIdFromString(id) {
	return new mongodb.ObjectID(id)
}