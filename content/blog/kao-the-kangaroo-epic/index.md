---
title: Giocare a Kao the Kangaroo riscattato da Epic Store
date: "2023-05-08T08:17:13.284Z"
description: "Piccola guida su come riuscire a farlo funzionare su Deck"
---

Questa settimana l'Epic Store regala, tra le altre cose, Kao the Kangaroo, remake di un platform 3d _vecchio come me_.

Se provate a importare il gioco su Steam dopo averlo scaricato tramite il solito Heroic Launcher, vi troverete di fronte a questo errore:

![Screenshot dell'errore "Visual C++ Runtime Error"](./runtime-error.jpg)

Per risolvere, anche questa volta, ci aiuta una [risposta ad un thread di Reddit](https://www.reddit.com/r/SteamDeck/comments/137rlmn/comment/jiv5spx/?utm_source=share&utm_medium=ios_app&utm_name=ioscss&utm_content=1&utm_term=1&context=3).
Faccio qui sotto un piccolo riassunto

### Passi da seguire per l'installazione corretta

- Scarichiamo il gioco tramite Heroic Launcher
- Entriamo in Modalità Desktop, apriamo Steam e scegliamo di aggiungere un gioco non di Steam
- All'interno della cartella del gioco, non importiamo l'exe chiamato _Kao-the-Kangaroo.exe_, ma cerchiamo quello all'interno della cartella _KaoDRMFree_ chiamato **Kao-Win64-Shipping.exe**. In generale il path corretto dovrebbe essere il seguente: _/[path-di-heroic]/KaotheKangarooZHs8t/KaoDRMFree/Binaries/Win64/Kao-Win64-Shipping.exe_
- Una volta importato su Steam, scegliamo come opzione di Compatibilità l'avvio con _Proton Experimental_

Fatto ciò saremo pronti a saltare e menare i pugni come un _perfetto canguro_ anche sulla nostra Deck.

Davide
