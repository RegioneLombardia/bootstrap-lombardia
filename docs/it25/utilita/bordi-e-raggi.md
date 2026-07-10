---
layout: it25_docs
title: Bordi e Raggi
group: utilita
toc: true
---

## Borders

Il {{ site.data.short.dsl }} prevede tre spessori specifici di bordo:

{% comment %}Example name: IT25 Borders{% endcomment %}
{% capture example %}
<div class="d-flex align-items-start flex-column mb-3">
  <div class="p-2 w-100">
    <div class="border-top border-primary it25-border-xs"></div>
    <span><strong>xs</strong> 0.5px</span>
  </div>
  <div class="p-2 w-100">
    <div class="border-top border-primary it25-border-sm"></div>
    <span><strong>sm</strong> 1px</span>
  </div>
  <div class="p-2 w-100">
    <div class="border-top border-primary it25-border-base"></div>
    <span><strong>base</strong> 2px</span>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


**Utilizzo delle classi:**

`it25-border-(tipo di spessore)`

Nota: lo spessore di *0.5px* non esiste. Si utilizza uno spessore di *1px* opacizzandone il colore al 50% per ottenere l'illusione ottica di uno spessore inferiore.

## Radius

Il {{ site.data.short.dsl }} prevede specifici tipi di arrotondamento:

{% comment %}Example name: IT25 Radius{% endcomment %}
{% capture example %}
<img src="https://placehold.co/200x125/caedd0/808080/?text=smooth 4px" class="it25-radius-smooth" alt="Esempio di immagine arrotondata">
<img src="https://placehold.co/200x125/caedd0/808080/?text=smoother 16px" class="it25-radius-smoother" alt="Esempio di immagine arrotondata">
<img src="https://placehold.co/200x125/caedd0/808080/?text=mobile-round 40px" class="it25-radius-mobile-round" alt="Esempio di immagine arrotondata">
<img src="https://placehold.co/200x125/caedd0/808080/?text=web-round 48px" class="it25-radius-web-round" alt="Esempio di immagine arrotondata">
<img src="https://placehold.co/125x125/caedd0/808080/?text=circle 80px" class="it25-radius-circle" alt="Esempio di immagine arrotondata">
{% endcapture %}{% include example.html content=example %}


**Utilizzo delle classi:**

`it25-radius-(tipo arrotondamento)`



{% capture callout %}
## {{ site.data.short.dt }}
Per ulteriori opzioni per l'applicazione dei bordi si veda alla voce:  
**[{{ site.data.short.link }}Bordi]({{ site.baseurl }}/docs/organizzare-gli-spazi/bordi/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
