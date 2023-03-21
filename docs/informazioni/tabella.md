---
layout: docs
title: Tabella
group: informazioni
toc: no
---


All’interno di una tabella è molto importante gestire correttamente i contenuti, la dimensione e la spaziatura tra le colonne:
- Non utilizzare testi troppo lunghi.
- Evidenziare in **grassetto** il codice/numero/nome identificativo della riga.
- Dove possibile sintetizzare il contenuto con icone significanti, rispettando però anche i criteri di accessibilità (usando l'attributo `alt`, o tag `span` con classe `sr-only`, o dei **tooltip** ).
- Nel caso la tabella abbia molte colonne utilizzare la classe **[table-responsive]({{ site.baseurl }}/docs/organizzare-i-contenuti/tabelle/#tabelle-responsive)** che attiva lo scorrimento orizzontale sugli schermi di piccole dimensioni.

Allineamenti:
- Il **testo** all’interno delle righe va allineato a **sinistra**
- I **numeri** e gli importi a **destra**, eventualmente normalizzando il numero **decimali**, in modo che risultino correttamente **incolonnati**.
- Le **icone** possono essere allineate a sinistra, ma anche al centro.
- **Checkbox**, radio button, etc. invece vanno al **centro** della cella.
- Qualora il **testo** sia **sempre** una sola lettera (es. "M/F" in una colonna "sesso") o un codice **molto corto**, la colonna può risultare più leggibile se il contenuto è posto in **centro**.

L’altezza delle righe (interlinea) è funzionale al tipo di schermi su cui l'applicazione è destinata ad essere visualizzata:
- Sugli smarphone e sui tablet l'altezza della riga, soprattutto se questa contiene checkbox o icone che possono essere cliccate, deve essere tale da fare in modo che con il pollice non si finisca con il premerne facilmente due.
- Su applicativi destinati ad un uso pressoché solo su desktop, e destinati a visualizzare molte righe per pagina, è meglio ridurne l'altezza usando la classe `table-sm` sul tag `table`.

Lettura facilitata:
- Per tabelle con molte colonne e/o righe sottili, conviene utilizzare le **[righe striate]({{ site.baseurl }}/docs/organizzare-i-contenuti/tabelle/#righe-striate)**.
- Può altrimenti essere utilizzato l'**[hover]({{ site.baseurl }}/docs/organizzare-i-contenuti/tabelle/#righe-ed-hover)**, **ma non in contemporanea con la striatura**.
- La colorazione delle righe tramite le **[classi contestuali]({{ site.baseurl }}/docs/organizzare-i-contenuti/tabelle/#classi-contestuali)** è da utilizzare **solo per segnalare** righe contenenti **errori** (classi `table-danger` o `table-warning`).
- **NON UTLIZZARE** la classe `table-dark` per invertire la colorazione delle righe.
- La **[caption]({{ site.baseurl }}/docs/organizzare-i-contenuti/tabelle/#captions)** può essere utilizzata per migliorare l'accessibilità.

Un esempio di tabella che può chiarire alcuni dei concetti sopra elencati si trova nelle *schermate composte* : **[Tabella complessa]({{ site.baseurl }}/docs/it25/esempi/pag_tabella/)**.

{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:
- **[Tabelle]({{ site.baseurl }}/docs/organizzare-i-contenuti/tabelle/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
