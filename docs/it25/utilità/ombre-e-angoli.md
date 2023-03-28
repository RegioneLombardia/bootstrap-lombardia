---
layout: it25_docs
title: Ombre e angoli
group: utilità
toc: true
---


## Angoli
I bordi arrotondati si ottengono tramite le classi `border` e `rounded`.  
Sono previsti tre tipi di arrotondamento, piccolo medio e grande.

{% capture example %}
<div class="border border-dark rounded-sm p-3 mb-3">BORDER RADIUS-2PX</div>
<div class="border border-dark rounded    p-3 mb-3">BORDER RADIUS-4PX</div>
<div class="border border-dark rounded-lg p-3 mb-3">BORDER RADIUS-8PX</div>
{% endcapture %}
{% include example.html content=example %}


## Ombre
Le classi per la generazione di ombre sono 3 oltre a quella per l'eliminazione dell'ombra ad un componente che la erediti:

{% capture example %}
<div class="shadow-sm   p-3 mb-5">shadow-sm</div>
<div class="shadow      p-3 mb-5">shadow</div>
<div class="shadow-lg   p-3 mb-5">shadow-lg</div>
<div class="shadow-none p-3 mb-5 border">shadow-none</div>
{% endcapture %}
{% include example.html content=example %}

I valori corrispondenti sono i seguenti:
{% highlight html %}
$box-shadow-sm: 1px 1px  2px     rgba(50, 50, 50, 0.35) !default;
$box-shadow:    1px 4px  8px 0   rgba(50, 50, 50, 0.15) !default;
$box-shadow-lg: 1px 8px 24px 1px rgba( 0,  0,  0, 0.35) !default;
{% endhighlight %}

{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:
- **[Bordi]({{ site.baseurl }}/docs/organizzare-gli-spazi/bordi/#bordi-arrotondati)**
- **[Ombreggiature]({{ site.baseurl }}/docs/organizzare-gli-spazi/ombreggiature/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
