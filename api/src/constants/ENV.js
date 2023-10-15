module.exports = {
  MONGODB_HOST: 'database',
  MONGODB_USER: 'root',
  MONGODB_PASSWORD: 'pZ5FbOZ50GkZ',
  MONGODB_DATABASE: process.env.NODE_ENV === 'development' ? 'dev-todo-app' : 'todo-app',
};
