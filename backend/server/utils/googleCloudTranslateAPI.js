const { Translate } = require('@google-cloud/translate').v2;
const config = require('../config/config');

const translate = new Translate({
    credentials: config.google_cloud_translate,
    projectId: config.google_cloud_translate.project_id,
  });

module.exports = translate;