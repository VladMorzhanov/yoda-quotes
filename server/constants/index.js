const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  NODE_ENV,
  REDIS_URL: process.env.REDIS_URL || 'def',
  API_URI: '/api/',
  MONGO_URL: process.env.MONGO_URL,
  MONGO_TEST_URL: process.env.MONGO_URL,
  LANGUAGES: ['en'],
  SES: process.env.SES || 'def',
  SALT: process.env.SALT,
  SC: {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    SERVER_ERROR: 500
  },
  EC: {
    SERVER_ERROR: 0,
    NOT_OUR_APP: 1,
    DATA_NOT_PROVIDED: 2,
    TRY_OTHER_AUTH: 3,
    USER_EXISTS: 4,
    WRONG_PASSWORD: 5,
    WRONG_EMAIL: 6,
    DATA_VALIDATION_FAILED: 7,
    DATA_NOT_FOUND: 8,
    DATA_NOT_SAVED: 9
  },
  MIME_TYPES: {
    PNG: 'image/png',
    JPEG: 'image/jpeg',
    GIF: 'image/gif',
    BMP: 'image/bmp'
  }
}
