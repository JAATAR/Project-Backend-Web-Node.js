# Project-Backend-Web-Node.js


Dit Node.js project is ontwikkeld voor het beheren van producten, bestellingen en gebruikers. Het omvat een RESTful API die interacties mogelijk maakt met een MongoDB-database. Hieronder volgt een uitleg van de gebruikte bronnen en hoe deze zijn geïntegreerd in het project.

#1. Node.js Packages API Documentatie
De Node.js Packages API-documentatie is geraadpleegd om een dieper inzicht te krijgen in de verschillende beschikbare packages en modules in Node.js. Deze informatie werd gebruikt om effectiever gebruik te maken van de mogelijkheden van Node.js bij het ontwikkelen van het project.

#2. Node.js Officiële Website
De officiële Node.js-website werd gebruikt als referentiepunt voor het verkrijgen van up-to-date informatie over Node.js, installatie-instructies en het verkrijgen van de nieuwste versie van Node.js voor de ontwikkeling van het project.

#3. MongoDB
MongoDB wordt gebruikt als de database voor dit project. De MongoDB-website diende als bron voor documentatie en voorbeelden met betrekking tot het gebruik van MongoDB met Node.js. Het hielp bij het begrijpen van de MongoDB-gegevensmodellering en het uitvoeren van databasebewerkingen met Mongoose.

#4. Postman
Postman is gebruikt als een handige tool voor het testen van de API-eindpunten tijdens de ontwikkeling. Het vergemakkelijkte het versturen van HTTP-verzoeken en het inspecteren van de ontvangen respons.

#5. bcrypt.js
De bcrypt.js library wordt gebruikt voor het veilig opslaan van wachtwoorden in de gebruikersdatabase. Het biedt functionaliteit voor het hashen van wachtwoorden voordat ze worden opgeslagen. De GitHub-pagina van bcrypt.js werd geraadpleegd voor documentatie en integratie-instructies.

#6. YouTube Tutorial
Een YouTube-tutorialreeks werd gebruikt als een leidraad voor het ontwikkelen van de Node.js API. Het werd geraadpleegd voor praktische voorbeelden en implementatiedetails.

# Codebestanden
#1. models/order.js, models/product.js, models/user.js
Deze bestanden bevatten de Mongoose-schema's voor respectievelijk bestellingen, producten en gebruikers. Ze definiëren de structuur van de gegevens die worden opgeslagen in de MongoDB-database.

#2. routes/orders.js, routes/products.js, routes/user.js
Deze bestanden bevatten de route-implementaties voor bestellingen, producten en gebruikers. Ze definiëren de verschillende eindpunten van de API en bevatten logica voor het verwerken van inkomende HTTP-verzoeken.

#3. app.js
Het hoofdbestand van de applicatie waarin de Express-applicatie wordt geconfigureerd. Hier worden middleware, routes en error-handling geïntegreerd.

#4. server.js
Het bestand dat de HTTP-server initialiseert en luistert op het opgegeven poortnummer.

# Installatie en Uitvoering
Zorg ervoor dat Node.js is geïnstalleerd op het systeem.
Installeer de vereiste packages met npm install in de hoofdmap van het project.
Start de server met node server.js.
De API zal nu beschikbaar zijn op http://localhost:3000.

