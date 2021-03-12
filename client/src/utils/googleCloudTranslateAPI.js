import config from '../config/config'
const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate({
  credentials: config.google_cloud_translate,
  projectId: config.google_cloud_translate.project_id,
});

export default translate;
