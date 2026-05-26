---
layout: it25_docs
title: Breadcrumbs
group: navigation
toc: true
---

Le **Breadcrumbs** sono un modello di navigazione secondario che aiuta l’utente a **comprendere la gerarchia tra i livelli e tornare indietro
attraverso di essi**.  
Esse forniscono all’utente un **feedback relativo sia alla pagina che al percorso di navigazione**.

Le Linee Guida per il design digitale di Regione Lombardia prevedono breadcrumbs senza icone.

{% comment %}Example name: IT25 Breadcrumbs{% endcomment %}
{% capture example %}
<nav class="breadcrumb-container" aria-label="Percorso di navigazione">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a><span class="separator" aria-hidden="true">/</span></li>
    <li class="breadcrumb-item"><a href="#">Secondo livello</a><span class="separator" aria-hidden="true">/</span></li>
    <li class="breadcrumb-item active" aria-current="page">Terzo Livello</li>
  </ol>
</nav>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}
## {{ site.data.short.dt }}
Per i dettagli tecnici sulla costruzione dei breadcrumb si veda la voce:  
**[{{ site.data.short.link }}Breadcrumbs]({{ site.baseurl }}/docs/menu-di-navigazione/breadcrumbs/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
