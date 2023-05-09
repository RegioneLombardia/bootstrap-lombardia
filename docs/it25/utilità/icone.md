---
layout: it25_docs
title: Icone
group: utilità
toc: false
---

Le Icone proposte di seguito sono quelle proposte da AgID.  
Sono contenutte tutte all'interno uno sprite SVG, presente nella libreria alla cartella `dist/svg`.

In alternativa, nel caso si necessiti di altre icone oltre a quelle fornite è ammesso l’utilizzo dell’icon pack **Icomoon**, scaricabile all’indirizzo **[https://icomoon.io/](https://icomoon.io/)**.  
Si consiglia di utilizzare icone appartenenti allo stesso ecosistema, ed in generale di mantenere coerenza nell’utilizzo di esse.

<div class="row">
  {% for icona in site.data.icons.regular %}
  <div class="col-12 col-md-6 col-lg-4">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#{{icona}}"></use></svg> {{icona}}
  </div>{% endfor %}
</div>
<h4 class="mt-4">File</h4>
<div class="row">
  {% for icona in site.data.icons.files %}
  <div class="col-12 col-md-6 col-lg-4">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#{{icona}}"></use></svg> {{icona}}
  </div>{% endfor %}
</div>

{% capture callout %}
#### {{ site.data.short.dt }}
Per l'utilizzo delle icone e il loro dimensionamento e colorazione, si consulti la **[relativa pagina]({{ site.baseurl }}/docs/utilities/icone/)**.
{% endcapture %}{% include callout.html content=callout type="info" %}
