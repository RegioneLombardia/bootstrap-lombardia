---
layout: docs
title: Progress bar
group: inserimento
toc: false
---
L'indicatore di progresso previsto dalle *Linee Guida* è la **progress bar** utilizzabile anche nei *wizard*.

**Non è previsto** l'utilizzo dei **[grafici a cerchio]({{ site.baseurl }}/docs/componenti/progress-indicators/#donuts)**.

{% capture example %}
<div class="progress progress-lg progress-color">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-color">
  <div class="progress-bar bg-dark" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}{% include example.html content=example %}


I colori da usare sono quelli qui riportati, quindi il **verde** o il **blu** principali della palette di {{ site.data.short.rl }}

La barra standard è molto sottile, per ottenere un spessore maggiore va utilizzata la classe `progress-lg`.

{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della {{ site.data.short.dt }}:
- **[Progress Bar]({{ site.baseurl }}/docs/componenti/progress-indicators/#progress-bar)**
{% endcapture %}{% include callout.html content=callout type="info" %}
