import redis from 'redis';

// Create a Redis client
const client = redis.createClient();

// Handle connection errors
client.on('error', (err) => {
  console.error('Redis client not connected to the server:', err.message);
});

// Handle successful connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Function to publish a message after a delay
function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    client.publish('holberton school channel', message);
  }, time);
}

// Publish messages at different intervals
publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);