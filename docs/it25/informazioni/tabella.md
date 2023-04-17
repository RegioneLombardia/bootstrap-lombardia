---
layout: it25_docs
title: Tabella
group: informazioni
toc: no
---

La **Tabella** è una serie di colonne e righe riempite di dati testuali e può essere larga quanto la pagina senza padding (_max
container_).
Ogni colonna della tabella rispetta la griglia di base e comprende almeno una colonna della griglia. Se la tabella ha molte colonne, dovrà essere responsive, ovvero a scorrimento orizzontale (_scroll laterale_).
All’interno di una tabella è molto importante gestire correttamente i contenuti e soprattuto gli spazi, lasciando adeguata spaziatura tra le voci.
E’ opportuno **non utilizzare testi troppo lunghi** ed **evidenziare** - magari utilizzando il corpo bold - il **nome/id/numero della voce**. Dove possibile sintetizzare i contenuti con icone significanti.
I **testi** all’interno delle righe vanno **allineati a sinistra**. Le icone possono essere allineate sia a sinistra che al centro. Checkbox e radio button invece vanno centrati all’interno della cella.

{% include html_docs/tabella/tabella_full.html %}

### Tabelle base

_Righe da 48px_

{% include html_docs/tabella/tabella_base.html type='h-sm' %}
{% highlight html %}
{% include html_docs/tabella/tabella_base.html type='h-sm' %}
{% endhighlight %}

_Righe da 80px_

{% include html_docs/tabella/tabella_base.html type='h-md' %}
{% highlight html %}
{% include html_docs/tabella/tabella_base.html type='h-md' %}
{% endhighlight %}
