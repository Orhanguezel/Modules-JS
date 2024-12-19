# HTTP headers / Mittwoch 18.12.24

## Lernziele :

1. Was ist `header` ?

- Header liefern zusätzliche Informationen für Anfragen und Antworten
  - Sie beschreiben oft die Anfrage/Antwort; Metadaten
  - Zum Beispiel: content-type, content-length

2. was sind `CORS` und `SOP` ?

- URL teile : Protokoll, Domain, Port, Ressourcenpfad, usw...
- Die "Origin" ist die Kombination aus Protokoll, Domain und Port einer URL

- In http://ddg.gg:80 ist die Origin die Kombination aus http, ddg.gg und 80

- Deine Webseite ist: http://ddg.gg:80/

  - Gleiche Origin: http://ddg.gg:80/ - gleiches Protokoll, Domain, Port

  - Gleiche Origin: http://ddg.gg:80/style.css - gleiches Protokoll, Domain, Port

  - NICHT gleiche Origin: http://AAA.gg:80/login - andere Domain

  - NICHT gleiche Origin: http://ddg.gg:21/login - anderer Port

  - NICHT gleiche Origin: https://ddg.gg:80/login - anderes Protokoll

  - SOP : Skripte einer Origin können nur auf Daten der gleichen Origin zugreifen

  - CORS ist ein Mechanismus, der es erlaubt, Ressourcen über verschiedene Origins hinweg zu teilen

- CORS erlaubt es, die SOP zu umgehen, aber auf eine kontrollierte und sichere Weise

### Resources :

- [HTTP headers General Video](https://www.youtube.com/watch?v=1v7RoeXyww4)

- [Headers MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#message_body_information)

- [Cors MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

- [CORS Videos](https://www.youtube.com/watch?v=4KHiSt0oLJ0)

- [CORS Proxy](https://corsproxy.io/)

### Tasks :

- []()

