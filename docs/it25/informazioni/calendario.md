---
layout: it25_docs
title: Calendario
group: informazioni
toc: no
---

Il primo campo richiama un calendario modale, gli altri invece sono legati a due datepicker impostati in modo tale che la seconda data non possa essere inferiore alla prima; nel caso lo sia le due date vengono automaticamente rese identiche all'ultima selezionata.

<div class="bd-example">
{% include esempi-lombardia/datepickers.html %}
</div>
{% highlight html %}
{% include esempi-lombardia/datepickers.html %}
{% endhighlight %}

Nella pagina, oltre al codice HTML, va anche inserito lo script per l'aggancio dei campi al relativo *datepiker* e la configurazione dello stesso.

{% capture callout %}
#### <svg class="icon icon-warning icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-circle"></use></svg> Comparsa del datepicker
Per questioni di accessibilità è necessario che la data, oltre che selezionabile dal calendario, possa essere scritta direttamente via tastiera.  
Quindi **il *datepicker* deve comparire solo su richiesta, non automaticamente** quando il focus si sposta sul campo data da imputare.  
{% endcapture %}{% include callout.html content=callout type="warning" %}

{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:
- **[Input calendario]({{ site.baseurl }}/docs/form/input-calendario/)**

Per tutte le possibilità e la configurazione del plugin Javascript del *datepicker* si vedano:
- **[Demo](http://eureka2.github.io/ab-datepicker/)**
- **[Readme](https://github.com/eureka2/ab-datepicker#ab-datepicker)**
{% endcapture %}{% include callout.html content=callout type="info" %}

{% capture callout %}
####  <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg> Versione scura
Si raccomanda di **NON UTILIZZARE** la **[versione scura]({{ site.baseurl }}/docs/form/input-calendario/#versione-scura)** del datepicker.
{% endcapture %}{% include callout.html content=callout type="danger" %}
