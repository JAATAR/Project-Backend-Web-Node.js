# Project-Backend-Web-Node.js


## Beschrijving

Dit Node.js project is ontwikkeld voor het beheren van producten, bestellingen en gebruikers. Het omvat een RESTful API die interacties mogelijk maakt met een MongoDB-database. Hieronder volgt een uitleg van de gebruikte bronnen en hoe deze zijn geïntegreerd in het project.

## Gebruikte Bronnen

1. [Node.js Packages API Documentatie](https://nodejs.org/dist/latest/docs/api/packages.html)
   - Geraadpleegd voor een dieper inzicht in beschikbare packages en modules in Node.js.
   - Gebruikt om effectiever gebruik te maken van Node.js-mogelijkheden.

2. [Node.js Officiële Website](https://nodejs.org/en)
   - Geraadpleegd voor up-to-date informatie, installatie-instructies en de nieuwste Node.js-versie.

3. [MongoDB](https://www.mongodb.com)
   - Gebruikt als de database voor het project.
   - Bron voor documentatie en voorbeelden met betrekking tot het gebruik van MongoDB met Node.js.

4. [Postman](https://www.postman.com/)
   - Handige tool voor het testen van API-eindpunten tijdens ontwikkeling.
   - Vereenvoudigt het versturen van HTTP-verzoeken en inspecteren van de respons.

5. [bcrypt.js](https://github.com/kelektiv/node.bcrypt.js)
   - Library voor veilige opslag van wachtwoorden in de gebruikersdatabase.
   - GitHub-pagina geraadpleegd voor documentatie en integratie-instructies.

6. [YouTube Tutorial](https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=1)
   - YouTube-tutorialreeks gebruikt als leidraad voor het ontwikkelen van de Node.js API.
   - Geraadpleegd voor praktische voorbeelden en implementatiedetails.

## Codebestanden

1. **`models/order.js`, `models/product.js`, `models/user.js`**
   - Mongoose-schema's voor bestellingen, producten en gebruikers.
   - Definiëren de structuur van gegevens in MongoDB.

2. **`routes/orders.js`, `routes/products.js`, `routes/user.js`**
   - Route-implementaties voor bestellingen, producten en gebruikers.
   - Definiëren eindpunten van de API en bevatten verwerkingslogica.

3. **`app.js`**
   - Hoofdbestand van de applicatie waarin de Express-app wordt geconfigureerd.
   - Middleware, routes en error-handling geïntegreerd.

4. **`server.js`**
   - Initialiseert de HTTP-server en luistert op het opgegeven poortnummer.

## Installatie en Uitvoering

1. Zorg ervoor dat Node.js is geïnstalleerd.
2. Voer `npm install` uit in de hoofdmap van het project.
3. Start de server met `node server.js`.

De API is beschikbaar op `http://localhost:3000`.

**Opmerking:** Zorg ervoor dat MongoDB correct is geconfigureerd en draait op de opgegeven URI in `app.js`.


