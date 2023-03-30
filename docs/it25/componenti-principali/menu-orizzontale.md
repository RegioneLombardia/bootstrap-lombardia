---
layout: it25_docs
title: Menu orizzontale
description: Menù principale di navigazione
group: componenti-principali
toc: false
---

Il **Menu orizzontale** è il menu principale di navigazione. Esso può contenere, oltre a _semplici link_, il _menu dropdown_ ed il _megamenu_.
Su **desktop** il menu è sempre visualizzato e a scorrimento in basso e rimane posizionato fisso sotto la barra istituzionale. Se la pagina scorre, il menu si sposta di conseguenza, rimanendo sotto la barra istituzionale.
Questa tipologia di menu viene preferita al _menu verticale_ quando **le voci del menu sono al massimo 5 e le label sono brevi**.
Su **smartphone** la visualizzazione del menu orizzontale è comandata dal bottone hamburger nella barra istituzionale e le voci sono visualizzate in verticale per questioni di spazio. In questo caso il pannello comparirà con uno scorrimento laterale da sinistra ed oscuramento della pagina sottostante.

<div class="bd-example">
{% include esempi-lombardia/menu_orizzontale.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/menu_orizzontale.html %}
{% endhighlight %}
