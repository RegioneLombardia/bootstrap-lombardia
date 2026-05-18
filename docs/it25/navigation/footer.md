---
layout: it25_docs
title: Footer
group: navigation
toc: true
---

Menù di navigazione secondaria posto in fondo alle pagine per presentare contenuti supplementari come contatti, informazioni legali e link alle sezioni di un sito.

{% comment %}Example name: IT25 Footer Standard{% endcomment %}
{% capture example %}
{% include html_docs/footer/footer.html %}
{% endcapture %}{% include example.html content=example %}

## Gestione loghi
Il footer può presentare fino a 3 loghi (contando anche l'eventuale *logo* testuale), che si aggiungono a quello di Regione Lombardia.  
Questa possibilità è strettamente vincolata alla disponibilità di **loghi monocromatici in bianco**.

{% comment %}Example name: IT25 Footer Loghi al negativo{% endcomment %}
{% capture example %}
{% include html_docs/footer/footer.html logo-negativo="yes"%}
{% endcapture %}{% include example.html content=example %}

#### loghi multipli
Eventuali loghi in numero superiore a 3, o comunque se a colori, devono essere posizionati esternamente.


{% comment %}Example name: IT25 Footer Loghi multipli{% endcomment %}
{% capture example %}
{% include html_docs/footer/footer.html multilogo="yes"%}
{% endcapture %}{% include example.html content=example %}
