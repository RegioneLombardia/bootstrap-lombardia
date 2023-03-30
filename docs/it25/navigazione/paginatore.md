---
layout: it25_docs
title: Paginatore
group: navigazione
toc: false
---

Il **Paginatore** è una componente utile per indicare una serie di contenuti correlati tra **più pagine**. Tendenzialmente si trova nella parte in **basso a destra o al centro** della pagina.

{% capture example %}

<div class="container-fluid">
  <div class="row">
    <div class="col">
      <label class="my-3">Default</label>
      {% include html_docs/paginatore/paginatore.html %}
    </div>
    <div class="col">
      <label class="my-3">Variante con comando “more”</label>
      {% include html_docs/paginatore/paginatore.html more=true %}
    </div>
  </div>
  <div class="row">
    <div class="col">
      <label class="my-3">Variante con jump page</label>
      {% include html_docs/paginatore/paginatore.html jump=true %}
    </div>
    <div class="col">
      <label class="my-3">Variante semplificata</label>
       {% include html_docs/paginatore/paginatore_semplificato.html %}
    </div>
  </div>
</div>

{% endcapture %}
{% include example.html content=example %}
