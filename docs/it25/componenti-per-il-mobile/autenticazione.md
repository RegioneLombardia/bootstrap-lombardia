---
layout: it25_docs
title: Autenticazione
group: componenti-per-il-mobile
toc: false
---

La schermata di autenticazione viene presentata all’utente di default la prima volta che apre l’app. Per agevolare l’accesso evitando l’autenticazione Spid ad ogni apertura del servizio, alcune app possono predisporre un codice di sicurezza da otto cifre dopo aver fatto la prima autenticazione.

**L’interfaccia di queste schermate corrisponde al servizio di autenticazione regionale IdPC**

**A - Selezione della modalità di autenticazione**

**B - Inserimento del codice di sicurezza**

<div class="row my-5">
    <div class="col">
    <h5 class="fw-bold">Accesso</h5>
    <p>Sceglie la modalità</p>
      <div class="device m-auto  bg-device-white">
       {% include html_docs_mobile/general/top-iphone.html %}
      <div class="row">
        <div class="col-xs-12 mt-3">
        {% include html_docs_mobile/header/header-mobile.html %}
        {% include html_docs_mobile/header/barra-istituzionale-mobile.html title='Servizio di autenticazione' showHelp='d-none' %}
        {% include html_docs_mobile/authentication/spid.html %}
        </div>
      </div>     
      </div>
    </div>
    <div class="col">
     <h5 class="fw-bold">Codice di sicurezza</h5>
    <p>Login veloce</p>
      <div class="device m-auto bg-device-white">
       {% include html_docs_mobile/general/top-iphone.html %}
        <div class="row">
        <div class="col-xs-12 mt-3">
        {% include html_docs_mobile/header/header-mobile.html %}
        {% include html_docs_mobile/header/barra-istituzionale-mobile.html title='Servizio di autenticazione' showHelp='d-none' id_suff='11' %}
        {% include html_docs_mobile/authentication/code.html id_suff="12" %}
        </div>
      </div> 
      </div>
    </div>
  </div>

Per il background utilizzare la classe css `bg-device-white`.

{% highlight html %}

<h5 class="f-bold">Accesso</h5>
<p>Sceglie la modalità</p>
{% include html_docs_mobile/authentication/spid.html %}
<h5 class="f-bold">Codice di sicurezza</h5>
<p>Login veloce</p>
{% include html_docs_mobile/authentication/code.html id_suff="13" %}
{% endhighlight %}
