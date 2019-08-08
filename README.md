# Synolia

Php = 3h10min

1h prise en main interface et lecture docs WebServices.
1h création projet et connection réussie API (prise en main de httpful et compréhension de la syntaxe des API).
30 min pour bien comprendre et faire fonctionner le système de filtres.
20 min pour identifier les "tickets", réalistation de l'exercice avec les "Tasks".
20 min pour essayer de fair une création de Task soldé par un echec de compréhension du système de création de records.

Developpement un peu long car utilisation de Postman pour tester les requêtes, avant de les mettre et tester sur le projet et la logique liée aux routes des APIs n'est pas facile à cerner via la documentation.

Server : Apache 2.4.39 (WAMP)
PHP : 7.3.5
Libraries : Httpful   (envoi de requestes APIs, permet d'economiser le temps de mise en place et config curl),
            Smarty    (affichage templates)
            Bootstrap 4 (design)
            JQuery 3.3


JS = 2H (echec)

Essai de requêtes par Ajax et par CORS, Echec dans les 2 cas, Bloqué par l'erreur de requête cross-origin interdite.


Améliorations / Finitions :

Séparer les méthodes et eventuellement les passer sont symfony avec controllers et services. Améliorer le design du front. Améliorer les sécurité des appels.
