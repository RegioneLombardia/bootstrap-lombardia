---
layout: it25_docs
title: Accordion
group: informazioni
toc: yes
---

## Apertura multipla

In questa versione dell’accordion è possibile **aprire più di un pannello** contemporaneamente.

{% capture example %}
<div id="collapseDiv1" class="collapse-div" role="tablist">
  <div class="collapse-header" id="heading1">
    <button data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
      Collapsible Item 1
    </button>
  </div>
  <div id="collapse1" class="collapse show" role="tabpanel" aria-labelledby="heading1">
    <div class="collapse-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
    </div>
  </div>
  <div class="collapse-header" id="heading2">
    <button data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
      Collapsible Item 2
    </button>
  </div>
  <div id="collapse2" class="collapse show" role="tabpanel" aria-labelledby="heading2">
    <div class="collapse-body">
      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
  </div>
  <div class="collapse-header" id="heading3">
    <button data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
      Collapsible Item 3
    </button>
  </div>
  <div id="collapse3" class="collapse" role="tabpanel" aria-labelledby="heading3">
    <div class="collapse-body">
      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}



## Apertura singola

Aggiungendo ad ogni elemento `.collapse` l'attributo `data-parent` con il relativo *ID* del contenitore padre, l'apertura di un pannello provocherà la chiusura degli altri.

{% capture example %}
<div id="accordionDiv1" class="collapse-div" role="tablist">
  <div class="collapse-header" id="headingA1">
    <button data-toggle="collapse" data-target="#accordion1" aria-expanded="true" aria-controls="accordion1">
      Accordion 1
    </button>
  </div>
  <div id="accordion1" class="collapse show" role="tabpanel" aria-labelledby="headingA1" data-parent="#accordionDiv1">
    <div class="collapse-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
    </div>
  </div>
  <div class="collapse-header" id="headingA2">
    <button data-toggle="collapse" data-target="#accordion2" aria-expanded="false" aria-controls="accordion2">
      Accordion 2
    </button>
  </div>
  <div id="accordion2" class="collapse" role="tabpanel" aria-labelledby="headingA2" data-parent="#accordionDiv1">
    <div class="collapse-body">
      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
  </div>
  <div class="collapse-header" id="headingA3">
    <button data-toggle="collapse" data-target="#accordion3" aria-expanded="false" aria-controls="accordion3">
      Accordion 3
    </button>
  </div>
  <div id="accordion3" class="collapse" role="tabpanel" aria-labelledby="headingA3" data-parent="#accordionDiv1">
    <div class="collapse-body">
      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


## Icona a sinistra

Aggiungendo la classe `.collapse-left-icon` al wrapper l'icona chevron (<svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
</svg>), che indica lo stato di apertura, è sostituita da segni meno/più allineati a sinistra del titolo del pannello.

{% capture example %}
<div id="collapseDiv1-lft" class="collapse-div collapse-left-icon" role="tablist">
  <div class="collapse-header" id="heading1-lft">
    <button data-toggle="collapse" data-target="#collapse1-lft" aria-expanded="true" aria-controls="collapse1-lft">
      Titolo 1
    </button>
  </div>
  <div id="collapse1-lft" class="collapse show" role="tabpanel" aria-labelledby="heading1-lft">
    <div class="collapse-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
    </div>
  </div>
  <div class="collapse-header" id="heading2-lft">
    <button data-toggle="collapse" data-target="#collapse2-lft" aria-expanded="false" aria-controls="collapse2-lft">
      Titolo 2
    </button>
  </div>
  <div id="collapse2-lft" class="collapse" role="tabpanel" aria-labelledby="heading2-lft">
    <div class="collapse-body">
      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
  </div>
  <div class="collapse-header" id="heading3-lft">
    <button data-toggle="collapse" data-target="#collapse3-lft" aria-expanded="false" aria-controls="collapse3-lft">
      Titolo 3
    </button>
  </div>
  <div id="collapse3-lft" class="collapse" role="tabpanel" aria-labelledby="heading3-lft">
    <div class="collapse-body">
      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Per maggiori dettagli sui metodi di implementazione si veda la relativa **[documentazione tecnica]({{ site.baseurl }}/docs/componenti/collapse/#implementazione)**.

{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:
- **[Gruppi di elementi richiudibili]({{ site.baseurl }}/docs/componenti/collapse/#gruppi-di-elementi-richiudibili)**
{% endcapture %}{% include callout.html content=callout type="info" %}
