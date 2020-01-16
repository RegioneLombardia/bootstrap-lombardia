---
layout: it25_docs
title: Menu orizzontale
description: Menù principale di navigazione
group: componenti-principali
toc: false
---

Può contenere, oltre a semplici link, menù **[dropdown]({{ site.baseurl }}/docs/componenti/dropdown#dropdown-menu)** e **[megamenu]({{ site.baseurl }}/docs/menu-di-navigazione/megamenu#megamenu-classico)**.  
E' anche possibile definire un gruppo di link di secondaria importanza che si posizionano automaticamente sul lato destro del menù e con caratteri leggermente più piccoli.

Su smartphone
1. La visualizzazione è comandata dal bottone *hamburger* nella **[barra istituzionale]({{ site.baseurl }}/docs/it25/componenti-principali/header#barra-istituzionale)**
2. Le voci sono visualizzate in verticale (per questione di spazio) su un pannello a comparsa con scorrimento orizzontale dal lato sinistro e con oscuramento della pagina sottostante.

A scorrimento in basso
1. Se aperto, il menù e la pagina sottostante scorrono separatamente a seconda di dove sia il cursore.
2. Se la pagina scorre e la testata si stringe o allarga, il menù aperto si sposta di conseguenza, rimanendo appena sotto la barra istituzionale.

Su desktop  
E' sempre visualizzato e, a scorrimento in basso, rimane posizionato fisso sotto la barra istituzionale o eventualmente sotto la barra utente.

<div class="bd-example">
{% include esempi-lombardia/menu_orizzontale.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/menu_orizzontale.html %}
{% endhighlight %}

Nota: per poter meglio rendersi conto del comportamento di questo componente è utile richiamare una delle schermate composte, per esempio quella della **[Tabella complessa]({{ site.baseurl }}/docs/it25/esempi/pag_tabella/)**, e provare a restringere la finestra video e far scorrere la pagina in basso e in alto.
