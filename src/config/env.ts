export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/respondeAi',
  port: (process.env.PORT || 3030) as number,
};
