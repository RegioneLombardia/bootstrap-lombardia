---
layout: it25_docs
title: Pagina di dettaglio
group: componenti-per-il-mobile
toc: false
---

I template della pagina di Dettaglio, come quelli della pagina Assistenza, possono essere utilizzati nel caso della progettazione di pagine con diversi livelli di complessità.

**A - Pagina di dettaglio informativa**

Per dettagli con basso livello di complessità.

**B - Pagina di dettaglio dinamica**

Per dettagli interattivi e multimediali.

<div class="bd-example-mobile sm">
  <h3>Componenti</h3>
    <div class="py-2 example-card-sm">
    {% include html_docs_mobile/detail/card-green-image.html title=true class='card-sm' %}
    </div>
</div>

<div class="row my-5">
  <div class="col">
    <h5 class="fw-bold">Pagina di dettaglio informativa</h5>
    <div class="device  mt-4 ">
    {% include html_docs_mobile/general/top-iphone.html %}
    {% include html_docs_mobile/header/barra-istituzionale-mobile-example.html   title='Indietro' icon='it-arrow-left'  %}
    {% include html_docs_mobile/detail/info-detail.html  %}
    </div>
  </div>
  <div class="col">
    <h5 class="fw-bold">Pagina di dettaglio dinamica</h5>
    <div class="device-auto mt-4 ">
    {% include html_docs_mobile/general/top-iphone.html %}
    {% include html_docs_mobile/header/barra-istituzionale-mobile-example.html   title='Indietro' icon='it-arrow-left'  %}
    {% include html_docs_mobile/detail/info-detail-dynamic.html  %}
    </div>
  </div>
</div>
{% highlight html %}
 <h5 class="fw-bold">Pagina di dettaglio informativa</h5>
{% include html_docs_mobile/detail/info-detail.html  %}
<h5 class="fw-bold">Pagina di dettaglio dinamica</h5>
{% include html_docs_mobile/detail/info-detail-dynamic.html  %}
{% endhighlight %}
