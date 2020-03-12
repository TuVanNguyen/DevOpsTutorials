const express =  require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient({
	host: 'redis-server',
	port: 6379
})

client.get('visits', (err, visits) => {
	if(visits === 'NaN' || visits === 'null') {
		client.set('visits',1);
	}
})

app.get('/', (req,res) => {
	client.get('visits', (err, visits) => {
		client.set('visits', parseInt(visits)+1)
		res.send('Number of visits is: ' + visits)
	})
})

app.listen(8081, ()=>{
	console.log('Listening on port 8081')
})
