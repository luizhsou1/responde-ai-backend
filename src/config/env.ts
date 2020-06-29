export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/respondeAi',
  port: (process.env.PORT || 3000) as number,
  pathFirebaseJson: process.env.PATH_FIREBASE_JSON || '../../responde-ai-cloud-firebase-adminsdk-jw7h4-5eb2cc0c57.json',
};
