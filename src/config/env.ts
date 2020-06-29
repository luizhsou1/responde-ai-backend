export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/respondeAi',
  port: (process.env.PORT || 3030) as number,
  pathFirebaseJson: process.env.FIREBASE_CONFIG_PATH || '../../responde-ai-cloud-firebase-adminsdk.json',
};
