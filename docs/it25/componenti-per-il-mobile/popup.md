---
layout: it25_docs
title: Popup
group: componenti-per-il-mobile
toc: false
---

<style>
  /* Style override for Documentation purposes */
   .it-example-modal  {
   height: 100%;
  }
  .it-example-modal .modal {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    z-index: 1;
    display: block;
    overflow: hidden;
    background: rgb(172 188 200 / 54%)
  }
  .it-example-modal .modal .modal-dialog{
    padding: 0.5rem;
  }
</style>

**I pop up vengono visualizzati al di sopra della pagina corrente**, la quale viene disabilitata ed oscurata da un overlay con opacità.

I pop up si potranno utilizzare nei casi in cui è importante non distogliere il focus dell’utente dalla pagina in relazione ad un avviso legato ad un’azione che sta per compiere.

I pop up principali potranno essere i seguenti:

**Conferma** (verde)
<br>
**Errore** (rosso)
<br>
**Informazione** (blu)
<br>
**Attenzione** (giallo)

<div class="bd-example-mobile xs center-flex">
  <h3>Componenti</h3>
  <div class="row mt-4">
  <div class="col">
     <svg class="icon"> <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-success-fill"></use></svg>
  </div>
  <div class="col">
    <svg class="icon"> <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle-fill"></use></svg>
  </div>
  <div class="col">
     <svg class="icon"> <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-fill"></use></svg>
  </div>
  <div class="col">
    <svg class="icon"> <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-error-fill"></use></svg>
  </div>
</div>
</div>

{% include html_docs_mobile/popup/device.html %}

{% highlight html %}
<svg class="icon"> <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-success-fill"></use></svg>
<svg class="icon"> <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle-fill"></use></svg>
<svg class="icon"> <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-fill"></use></svg>
<svg class="icon"> <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-error-fill"></use></svg>
{% endhighlight %}
