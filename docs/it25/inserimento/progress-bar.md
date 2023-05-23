---
layout: it25_docs
title: Progress bar
group: inserimento
toc: false
---

La **Progress bar** è una componente utile per stabilire la percentuale di completamento di un task all’interno di una pagina.  
Questo elemento può essere utilizzato per indicarne la percentuale di completamento, oppure come elemento aggiuntivo della componente wizard, come indicatore di una procedura.

{% capture example %}

<div class="progress progress-lg progress-color">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-color">
  <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-color">
  <div class="progress-bar bg-dark" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}{% include example.html content=example %}

La barra standard è molto sottile, per ottenere un spessore maggiore va utilizzata la classe `progress-lg`.

{% capture callout %}
#### {{ site.data.short.dt }}
Per i dettagli tecnici sulla costruzione delle progress bar si veda la **[relativa pagina]({{ site.baseurl }}/docs/componenti/progress-indicators/#progress-bar)**
{% endcapture %}{% include callout.html content=callout type="info" %}
