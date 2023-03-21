---
layout: docs
title: Breadcrumbs
group: navigazione
toc: false
---

Le *Linee Guida* prevedono breacrumbs con e senza icone.

{% capture example %}
<nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a><span class="separator">/</span></li>
    <li class="breadcrumb-item"><a href="#">Subsection</a><span class="separator">/</span></li>
    <li class="breadcrumb-item active" aria-current="page">Current section</li>
  </ol>
</nav>

<nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><svg class="icon icon-sm icon-secondary align-top mr-1" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg><a href="#">Home</a><span class="separator">/</span></li>
    <li class="breadcrumb-item"><svg class="icon icon-sm icon-secondary align-top mr-1" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg><a href="#">Subsection</a><span class="separator">/</span></li>
    <li class="breadcrumb-item active" aria-current="page"><svg class="icon icon-sm icon-secondary align-top mr-1" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>Current section</li>
  </ol>
</nav>
{% endcapture %}
{% include example.html content=example %}


{% capture callout %}
####  <svg class="icon icon-success icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg> Separatore
Come separatore utilizzare sempre la barra: **/**
{% endcapture %}{% include callout.html content=callout type="accessibility" %}


{% capture callout %}
####  <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg> Sfondo scuro
**NON UTILIZZARE** i breadcrumbs su **[sfondo scuro](https://italia.github.io/bootstrap-italia/docs/menu-di-navigazione/breadcrumbs/#su-sfondo-scuro )**
{% endcapture %}{% include callout.html content=callout type="danger" %}

{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:
- **[Breadcrumbs](https://italia.github.io/bootstrap-italia/docs/menu-di-navigazione/breadcrumbs/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
