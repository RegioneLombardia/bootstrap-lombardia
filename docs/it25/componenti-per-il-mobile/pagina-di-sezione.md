---
layout: it25_docs
title: Pagina di sezione
group: componenti-per-il-mobile
toc: false
---

**Le pagine di sezione raccolgono informazioni in molteplici modalità tra cui elenchi verticali, tabelle e componenti a scorrimento laterale.**

Di seguito sono riportati due esempi con livelli di complessità differenti. Nel primo caso il titolo precede una sezione di ricerca seguita da un elenco. Nel secondo caso, lo scorrimento laterale di vari elementi divisi per categorie permette una navigazione semplice della pagina.

<div class="bd-example-mobile">
  <h3>Componenti</h3>
    <div class="row my-5">
      <div class="col">
    <div class="py-2">
      {% include html_docs_mobile/assistance/input-search.html %}
    </div> 
    <div class="py-2">
       {% include html_docs_mobile/assistance/card-image.html text=true %}
    </div> 
     <div class="py-2">
      {% include html_docs_mobile/sections/section-card.html icon=true text='Lorem ipsum' %}
    </div> 
    </div>
    <div class="col">
        <div class="py-2">
        <div class="example-card-sm">
        {% include html_docs_mobile/assistance/card-image.html title=true class='card-sm' action='Titolo Sezione' %}
        </div>
       </div>
        <div class="py-4 mt-3">
         <div class="example-card-sm">
        {% include html_docs_mobile/assistance/card-image-lg.html %}
        </div>
       </div>
    </div>
</div>
</div>

<div class="row my-5">
  <div class="col">
    <h5 class="fw-bold">Pagina di sezione informativa</h5>
    <div class="device-auto  mt-4 ">
      {% include html_docs_mobile/general/top-iphone.html %}
    {% include html_docs_mobile/header/barra-istituzionale-mobile.html  title='Lorem ipsum' showHelp='d-none'  %}
    <div class="p-3">
    {% include html_docs_mobile/sections/default.html %}
    </div>
    </div>
  </div>
  <div class="col">
    <h5 class="fw-bold">Pagina di sezione dinamica</h5>
    <div class="device-auto mt-4 ">
    {% include html_docs_mobile/general/top-iphone.html %}
    {% include html_docs_mobile/header/barra-istituzionale-mobile-example.html   title='Indietro' icon='it-arrow-left'  %}
    <div class="pt-3 pb-4 px-2">
     {% include html_docs_mobile/sections/default-dynamic.html %}
    </div>
     {% include html_docs_mobile/general/toolbar-section.html %}
    </div>
  </div>
</div>

{% highlight html %}

<h5 class="fw-bold">Pagina di sezione informativa</h5>
{% include html_docs_mobile/assistance/input-search.html %}
 {% include html_docs_mobile/sections/default.html %}
<h5 class="fw-bold">Pagina di sezione dinamica</h5>
   {% include html_docs_mobile/sections/default-dynamic.html %}
   {% include html_docs_mobile/general/toolbar-section.html %}
{% endhighlight %}
