---
layout: it25_docs
title: Termini e condizioni di utilizzo e Informativa privacy
group: componenti-per-il-mobile
toc: false
---

La schermata di termini di utilizzo e informativa privacy viene presentata all’utente di default la prima volta che apre l’applicazione e nel caso in cui l’utente disinstalli ed in seguito re-installi l’applicazione.

A - **Toggle off**

B - **Toggle on**

<div class="bd-example-mobile sm">
  <h3>Componenti</h3>
    <div class="py-2 example-card-sm">
      <div class="icon-circle-shadow">
        <svg class="icon icon-xl"> <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-shield"></use></svg>
      </div>
    </div>
    <div class="py-2 example-card-sm d-inline-block">
    {% include html_docs/toggle/toggle.html id='toggle1' %}   
    </div>
     <div class="py-2 example-card-sm d-inline-block">
    {% include html_docs/toggle/toggle.html id='toggle2' on='leverRight' checked='checked' %}
    </div>
    <div class="py-2 example-card-sm">
      <button type="button" class="btn btn-primary btn-mobile-radius" data-focus-mouse="false">Avanti</button>
    </div>
</div>

<div class="row my-5">
  <div class="col">
    <h5 class="fw-bold">Toggle Off</h5>
    <p>Selezionare le impostazioni desiderate.</p>
    <div class="device m-auto">
    {% include html_docs_mobile/conditions/conditions.html %}
    </div>
  </div>
  <div class="col">
    <h5 class="fw-bold">Toggle On</h5>
    <p>Selezioni attive e bottone Avanti</p>
    <div class="device m-auto">
    {% include html_docs_mobile/conditions/conditions-on.html %}
    </div>
  </div>
</div>

{% highlight html %}

<h5 class="fw-bold">Toggle Off</h5>
{% include html_docs_mobile/conditions/conditions.html %}
<h5 class="fw-bold">Toggle On</h5>
{% include html_docs_mobile/conditions/conditions-on.html %}
{% endhighlight %}
