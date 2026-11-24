# Fardriver Log-Viewer

Inoffizieller Browser-Viewer für Logdateien (Format `WLOG1`, CSV) der Android-App **Worthless Controls** für Fardriver-Controller.
Gedacht für Logs, die in der App wegen ihrer Größe (> ca. 10.000 Messwerte) nicht mehr geöffnet werden können.

## Benutzung

1. Seite öffnen https://schalonsus.github.io/fardriver-log-viewer/ (oder `index.html` lokal im Browser öffnen).
2. Logdatei(en) auswählen oder auf die Seite ziehen. Mehrere Dateien gleichzeitig sind möglich.

Alles läuft lokal im Browser. Die Logs werden nicht hochgeladen. Nur die Kartenkacheln werden von Esri / OpenTopoMap geladen.

## Funktionen

- Kennzahlen (Max-Werte, Energie, Rekuperation, Strecke, Wh/km), gelten für den gewählten Zoom-Bereich
- Alle veränderlichen Kanäle einzeln ein-/ausblendbar, jeder mit eigenem Diagramm
- Zoomen und Verschieben: Übersichtsleiste, Box-Zoom, Pinch-Zoom am Handy, Strg+Mausrad
- Synchrones Fadenkreuz in allen Diagrammen und auf der Karte
- GPS-Strecke auf Karte (Straße, Topo, Satellit, Grau), einfärbbar nach beliebigem Wert

## Hinweise

- Keine Verbindung zum App-Entwickler, keine Gewähr.
- Das Logformat stammt von Worthless Controls und kann sich ändern.
- Kartendaten: © Esri, HERE, Garmin, © OpenStreetMap-Mitwirkende; OpenTopoMap (CC-BY-SA).
