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