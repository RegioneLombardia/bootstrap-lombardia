---
layout: it25_docs
title: Megamenu
group: navigazione
toc: false
---

Il **Megamenu** è una variante della componente dropdown.  
Presenta un **sottomenu** contenente **elenchi di link relativi ad una voce del menu di navigazione**.

Si raccomanda l’utilizzo di questa componente nella forma più semplice e pulita, utilizzando il **megamenu classico**, con o senza **intestazione delle colonne** (_header_).

### Megamenu Classico

Il megamenu ha una struttura colonnare in cui ogni colonna richiama al suo interno la componente _lista_ per costruire l’elenco di link desiderato.

{% capture example %}
{% include html_docs/megamenu/megamenu.html section=false id_suff="26" %}
{% endcapture %}
{% include example.html content=example %}

### Megamenu con intestazione delle colonne

Il megamenu con intestazione delle colonne viene utilizzato quando vi sono delle categorie di liste in cui sono raggruppate le voci di menu per facilitare la ricerca dei contenuti.

{% capture example %}
{% include html_docs/megamenu/megamenu.html section=true id_suff="27" %}
{% endcapture %}
{% include example.html content=example %}
