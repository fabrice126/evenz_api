**Comment lancer l'application sous windows**
=======
1. Récupérer l'application sur le GIT
2. Installer node js : *<a href="https://nodejs.org/en/" target="_blank">ici</a>*
3. Installer mongodb : version >= 3.2 : *<a href="https://www.mongodb.com/" target="_blank">ici</a>*  
*3.1.* Lancer mongodb, voir : *"<a href="#mongodb-sous-windows">Comment lancer les bases de données>MongoDB sous Windows</a>"*  
*3.2.* (facultatif mais conseillé) Installer robomongo : *<a href="https://robomongo.org/" target="_blank">ici</a>*  
4. Lancer le serveur node js  
*4.1.* En ligne de commande : `cd C:/Users/user/Documents/evenz`  
*4.2.* Taper la commande : `npm start`
*4.3.* Si ça ne fonctionne pas : taper `npm install` en ligne commande dans le projet evenz (voir 4.1.) cela installera les dépendances du projet  
*5.3.* Le serveur est maintenant lancé sur *http://localhost:3000/* (dans le navigateur)  


**Comment lancer la base de données**
=======

## MongoDB sous Windows
- Dans le menu windows rechercher puis cliquer sur "Editer variables d'environnement" (une popup s'affiche)
- Editer la variable "PATH" en ajoutant le chemin suivant `;C:\Program Files\MongoDB\Server\3.0\bin`
- Puis créer le repertoire suivant `C:\data\db`
- Dans une première console cmd taper: `mongod` (accepter la permission réseaux)
- Dans une deuxième console cmd taper :`mongo` (la version de MongoDB s'affiche)
- Sur cette deuxième console taper : `show dbs`  pour afficher les BD existantes
- *<a href="http://stackoverflow.com/questions/26585433/mongodb-failed-to-connect-to-127-0-0-127017-reason-errno10061" target="_blank">Voir plus d'infos concernant la mise en place de MongoDB</a>
