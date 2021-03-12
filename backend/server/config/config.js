// Should not be included in GitHub
// Secret Keys

const config = {
  db: {
    uri:
      'mongodb+srv://admin:adminpwd@cluster0.c5owr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  },
  google_cloud_translate: {
    type: 'service_account',
    project_id: 'copper-frame-307117',
    private_key_id: '75b899590bb22defd8cb0a0a92ebf891bd72e067',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDkXf0h3ckhCvsz\nZLxtBlZlnlysSbRH3XU0tYwvFOCsePlf2WeKo23U2yIepvYaBIBKx2azMxj07Ul2\n+gHcu4biagtsmLQ4dzXmvMLid9l53jjIB5Z0Z7qMNitNtjjh3y6zod/idVTqxW3w\nt7mf2VDIcPOoPzib9SpYgs9Yt2bI2F4ldQ4SBibqY4BfJrXupjmZX3lmuFmBqhuD\nGFE0Hss2qf9nVkxq6Gqkt3wzX7GErkyCez6AfoOMnbth1o5pD140pTpzWQ4xkIV6\nCZhvA2bp3XIEknNdKWE7GiE5Vp1LY9fizCQsZMcj2G/fT1lsHqyMxllsqCjD/457\nNXkYwhrXAgMBAAECggEAUxLP0SCNmHwWqnj0RJLgHgJQQwpizxvEFcMPNldZbdRq\nHxCGpnvSKfL3RABHmWpWwx0rgnfNlde1+FZ1E/eR105tTnl0YfAXxxKWsGyZy8fn\njviXpkvPpE7WTORDaANYyVbTC13UYL0mQ8GKAJi81tWkBWnOLYmveFhJlkPNW7UO\nDAWyuKu4XgU43KlHWYe+qEpMhabr7PtRk6hEPqhNVsqsBOooA2+3kWGXNR2IY7IQ\nkjL6mW+InoJ4zracAEwhmuErJxV+IMHbKfJ1ndOLPFPC4zDxWiiHpELYcm+ks3n+\nxjt7YZEF7rryo18dSXlHSpD0YA3bDNdnYixxLgNSeQKBgQDysE7lTIHOvbt/KFOZ\njn4jcf/DGSlZDKP45jxfcDJAgdxKBh6y08MjaKHcYvndl2gt8UEfOYU+C6jlzM9X\nqqZwENQhugV5cAdK5OCJRgl9yOzrtz+wp/nHxuzyfEyn+34P9KezYlc3FAZj36Ba\nvhhmOA0CSJyiq6zkP+GskAV3CQKBgQDw5JXwhZP3xWzdxkiBFZMYJ/RGV+qBTGTd\nj+UJAjQ9W/Zb/ta+Y35DpwtWFwOK5+JHmu8FxnyEN/7w1VFR7vigqjdlvr9k3JiX\nJuamMVhD2w0V4Xjq7mvAKqoBKygLc9+M258yTzzf3/Zeop1GgAnHIUJj95/quW5y\nfAPd3ESa3wKBgFsQ7Yn9e3gomgLNDxG/9nU2gdKjznAr3hu3yU/GuhSaph7gzQQt\nkjvnN1WLjlcoSV9z+AvPecAef/I7OFKdJndG2VMOip9W+mWQHPFl5oncq4qH6M5R\nOdlNO/yByAIAzP0PwR3++NsiGIPBllp2mpFA1yDUPnKMGQRNNFGceXCBAoGBAI7I\nHmty8XJx7YZCKeWBIS+3Nt2e7Jt46Ww+BxZg3Q/le0+p7CTrGgMFdv2vJGVn7kJc\n/gHhVRqViiG7frjeuTWZzr4a4pzo9/TXlOy64MNPiiEHBMHTUcCUSTHqH5EyPDXk\nUybhuoZD3GbZYflQmPsTpqNUOdBJ2sI26Z/OGEfnAoGBAI5C3bTxtpN70Tknn6aT\nyVe5svBHb6vYh8xFyqK7rXZ9zqS0qIo2kR7Fy1OtKctK8HZZhspsshRvMlGOLCRR\nyadu8daM0GNk+3k77qwF2gI0Dt6H2TExRJ+PUEu65jb5dLPZXu8lfJTFzA+hlXGh\nNpqqofkU+K1705BgG6lOIoWB\n-----END PRIVATE KEY-----\n',
    client_email: 'gatorcom@copper-frame-307117.iam.gserviceaccount.com',
    client_id: '106105321776807690098',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/gatorcom%40copper-frame-307117.iam.gserviceaccount.com',
  },
  port: 5000,
};

module.exports = config;