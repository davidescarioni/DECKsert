---
title: Scaricare giochi pesanti da GOG
date: "2023-02-28T21:25:03.284Z"
description: "Come raggirare un problema di Heroic Launcher"
---

Ho provato a scaricare [Control Ultimate Edition](https://www.gog.com/game/control_ultimate_edition) tramite GOG utilizzando [Heroic Launcher](https://heroicgameslauncher.com/), ma il download si è bloccato quando era appena al 30%. Dopo aver fatto diverse ricerche online, ho scoperto che il problema potrebbe essere causato dalle API di GOG che smettono di rispondere dopo circa 15 minuti di download a causa della dimensione del gioco, che è discretamente pesante (circa 27 GB).

Sono comunque riuscito a scaricarlo e ho scoperto empiricamente che la procedura corretta per il download è la seguente:

- Accedere alla modalità desktop.
- Aprire Heroic Launcher e scaricare il gioco desiderato.
- Quando il download si blocca, premere "Pausa/Annulla", interrompere il download e poi riprenderlo.

Nota: anche il primo passaggio è essenziale, in quanto sembra che Heroic Launcher non aggiorni correttamente le percentuali di download se avviato dall'interfaccia di gioco di Steam OS.

A quanto pare il download fallisce per un [problema noto](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues/2368): sembra comunque già in dirittura d'arrivo una soluzione, fortunatamente.

Ringrazio [Allibragi](https://livellosegreto.it/@allibragi) per l'aiuto e per la segnalazione della issue.

Davide.
