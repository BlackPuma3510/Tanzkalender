# Tanzkalender Bayreuth und Umgebung

Statische Webseite mit drei Seiten:

- `index.html` – **Kalender** mit Monatsansicht, Filter nach Art und Liste der nächsten Termine
- `angebot.html` – **Angebot**: Salsa Abend, Fiesta Latina und Tanzkurs
- `team.html` – **Über uns**: Sven, Jessica und Jonny

## Termine eintragen

Alle Termine stehen in `assets/termine.js`. Einfach einen neuen Eintrag hinzufügen:

```js
{
  datum: "2026-12-05", beginn: "20:00", ende: "01:00",
  art: "salsa",            // "salsa" | "fiesta" | "kurs"
  titel: "Salsa Abend", ort: "Bayreuth",
  beschreibung: "Kurzer Text"
},
```

Die aktuell eingetragenen Termine sind Beispiele.

## Fotos

In `team.html` ist bei jeder Person kommentiert, wie man ein Foto statt der Initiale einsetzt
(Bild z. B. als `assets/jonny.jpg` ablegen).

## Ansehen

`index.html` im Browser öffnen – kein Server oder Build nötig. Lässt sich z. B. direkt über GitHub Pages veröffentlichen.
