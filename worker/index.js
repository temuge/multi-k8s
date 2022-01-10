const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});
const sub = redisClient.duplicate();

function fib(index) {
    console.log('Got ' + index);
    if (index < 2) {
        console.log('Returning 1 for ' + index);
        return 1;
    }
    const value = fib(index - 1) + fib(index - 2);
    
    console.log('Returning ' + value + ' for ' + index);
    return value;
}

sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)));
})
sub.subscribe('insert');
