---
layout: it25_docs
title: Progress bar
group: componenti
toc: false
---

La **Progress bar** è una componente utile per stabilire la percentuale di completamento di un task all’interno di una pagina.  
Questo elemento può essere utilizzato per indicarne la percentuale di completamento, oppure come elemento aggiuntivo della componente wizard, come indicatore di una procedura.

{% comment %}Example name: IT25 Progress bar thin{% endcomment %}
{% capture example %}
<div class="progress progress-color">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-color">
  <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-color">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-color">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}{% include example.html content=example %}

La barra standard è molto sottile, per ottenere un spessore maggiore va utilizzata la classe `progress-lg`.
{% comment %}Example name: IT25 Progress bar large{% endcomment %}
{% capture example %}
<div class="progress progress-lg progress-color">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-lg progress-color">
  <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-lg progress-color">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-lg progress-color">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}
## {{ site.data.short.dt }}
Per i dettagli tecnici sulla costruzione delle progress bar si veda la voce:  
**[{{ site.data.short.link }}Progress bar]({{ site.baseurl }}/docs/componenti/progress-indicators/#progress-bar)**
{% endcapture %}{% include callout.html content=callout type="info" %}
