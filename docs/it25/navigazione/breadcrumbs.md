---
layout: it25_docs
title: Breadcrumbs
group: navigazione
toc: true
---

Le **Breadcrumbs** sono un modello di navigazione secondario che aiuta l’utente a **comprendere la gerarchia tra i livelli e tornare indietro
attraverso di essi**.  
Esse forniscono all’utente un **feedback relativo sia alla pagina che al percorso di navigazione**.

Le Linee Guida per il design digitale di Regione Lombardia prevedono breadcrumbs con e senza icone.
{% include html_docs/breadcrumbs/breadcrumbs.html %}

### Breadcrumbs senza icone

{% capture example %}
<nav class="breadcrumb-container" aria-label="Percorso di navigazione">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a><span class="separator">/</span></li>
    <li class="breadcrumb-item"><a href="#">Secondo livello</a><span class="separator">/</span></li>
    <li class="breadcrumb-item active" aria-current="page"><a href="#">Terzo Livello</a></li>
  </ol>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="breadcrumb-container" aria-label="Percorso di navigazione">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a><span class="separator">&gt;</span></li>
    <li class="breadcrumb-item"><a href="#">Secondo livello</a><span class="separator">&gt;</span></li>
    <li class="breadcrumb-item active" aria-current="page"><a href="#">Terzo Livello</a></li>
  </ol>
</nav>
{% endcapture %}
{% include example.html content=example %}

---

### Breadcrumbs con icone

{% include html_docs/breadcrumbs/breadcrumbs_icons.html %}

{% capture example %}
<nav class="breadcrumb-container" aria-label="Percorso di navigazione">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <svg class="icon icon-sm icon-secondary align-top me-1" aria-hidden="true"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-pa"></use></svg>
      <a href="#">Home</a>
      <span class="separator">/</span>
    </li>
    <li class="breadcrumb-item">
      <svg class="icon icon-sm icon-secondary align-top me-1" aria-hidden="true"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-box"></use></svg>
      <a href="#">Secondo livello</a><span class="separator">/</span>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      <svg class="icon icon-sm icon-secondary align-top me-1" aria-hidden="true"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-files"></use></svg>
      <a href="#">Terzo Livello</a>
    </li>
  </ol>
</nav>
{% endcapture %}
{% include example.html content=example icon=true %}
