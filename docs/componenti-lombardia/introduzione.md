---
layout: docs
title: Introduzione
description: Linee Guida e Documentazione
toc: false
---

Bootstrap Lombardia è una customizzazione di Boostrap Italia per **adeguarlo alla Linee Guida** per i siti Web della Regine Lombardia.

E' quindi un **[fork del progetto Bootstrap Italia](https://github.com/italia/bootstrap-italia/network/members)**, presente su GitHub, da cui eredita i componenti, le funzionalità e tutti i relativi aggiornamenti e correzioni.

Per rispettare le Linee Guida della Regione Lombardia e la sua Brand Identity, **va utilizzato solo un sottoinsieme** sia delle varianti cromatiche e tipografiche, che dei componenti, che si hanno a disposizione in quanto ereditati dalla piattaforma originaria.

Per rendere meno oneroso il lavoro di integrazione degli aggiornamenti pubblicati da **[Designers Italia](https://developers.italia.it/it/designers/)**, non vengono eliminati dalla piattaforma componenti, funzionalità o altro che non vanno usati, né la relativa **documentazione**, che **è lasciata così com'è**, eccettuato il mutamento dei colori dovuto alla reimpostazione delle **[variabili relative](https://github.com/RegioneLombardia/bootstrap-lombardia/blob/master/src/scss/custom-lombardia/colors_vars.scss)**.

Alla documentazione originale viene premessa la sezione **Linee Guida** che spiega **cosa utilizzare e cosa no**, dei vari componenti, per rimanere all'interno delle **specifiche esigenze della Regione Lombardia**, lasciando poi il dettaglio tecnico del funzionamento delle singole parti alla *documentazione*.

{% capture callout %}
####  <svg class="icon icon-warning icon-lg"><use xlink:href="/dist/svg/sprite.svg#it-warning-circle"></use></svg> Raccomandazione Importante
Prima di utilizzare un componente od una variante cromatica o tipografica, si **consiglia vivamente** di consultare la relativa parte delle **linee guida**, e controllare gli eventuali **avvisi e restrizioni d'uso**.
{% endcapture %}{% include callout.html content=callout type="warning" %}
