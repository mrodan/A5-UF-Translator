module.exports = {
detectLanguage : async (text) => {
    try {
      let response = await translate.detect(text);
      return response[0].language;
    } catch (error) {
      console.log(error);
      return 0;
    }
  },
  
  translateText : async (text, targetLanguage) => {
    try {
      let [response] = await translate.translate(text, targetLanguage);
      //console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
detectLanguage('Hola Hola')
translateText('Hola Hola Hola chao', 'he');