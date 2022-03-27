const knex = require('knex')(require('./knexfile'));
const axios = require('axios');

const API_URL = 'https://api.kanye.rest';

axios.get(API_URL)
	.then(async ({ data }) => {
		console.log('Successfully wrote the cool quote to our database!');
		console.log(data.quote);

		await knex('kanye_quotes').insert([{
			quote: data.quote
		}]);

		const results = await knex
		.select("quote")
		.from('kanye_quotes');
		
		console.log(results);
	})
	.catch(error => {
		console.log(error);
	});
	