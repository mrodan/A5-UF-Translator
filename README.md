# A5-UF-Translator
## CEN 4721 Spring 2021 .
Simple web application that will allow users to communicate with each other in two languages.

###### First instructions (step 1):
1) Clone repository
2) cd to "A5 Translator" folder and run ```npm install``` to download all necessary dependencies (back-end)
2) cd to "client" folder (inside A5 Translator) and run ```npm install``` to download all necessary dependencies (front-end)

###### Include your Google Cloud Translate KEY (step 2): [This step may be already done]
1) cd to "A5 Translator/client/src" and create a folder called config (inside src)
2) cd to "config" (created folder) and create a file called config.js
3) Fill the file (config.js) with the following structure and the Google Cloud Translate KEY
```
const config = {
  google_cloud_translate: {
    // YOUR GOOGLE CLOUD API KEY!
    // Do not copy the {}
  },
};
export default config;
```

###### To run (step 3):
cd to "A5 Translator" and run ```npm run dev```
It will run the server and client concurrently
