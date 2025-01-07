const client = require('./client');

async function example() {
    await client.set('msg:3', 'Hello Redis from Node.js');
    //await client.expire('msg:1', 10);
    const res = await client.get('msg:1');
    console.log(res);
}

example();