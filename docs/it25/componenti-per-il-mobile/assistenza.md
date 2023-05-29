---
layout: it25_docs
title: Assistenza
group: componenti-per-il-mobile
toc: false
---

Per la sezione assistenza/supporto sono qui rappresentati due template di esempio utili sia alla progettazione di app semplici che per quelle più complesse e con maggiori funzionalità.

**A - Assistenza diretta**

Per supporto ad utenti di app con funzionalità ristrette

**B - Assistenza avanzata**

Un’opzione di supporto per servizi complessi caratterizzate da esempi di procedure guidate e documentazione specifica di supporto.

<div class="bd-example-mobile">
  <h3>Componenti</h3>
    <div class="row my-5">
      <div class="col">
    <div class="py-2">
     {% include html_docs_mobile/profile/info-list.html id_suff='01'%}
    </div> 
    <div class="py-2">
      {% include html_docs_mobile/assistance/green-number.html %}
    </div> 
     <div class="py-2">
      {% include html_docs_mobile/assistance/survey.html icon=true text='Compila il questionario di gradimento' %}
    </div> 
    </div>
    <div class="col">
       <div class="py-2">
        {% include html_docs_mobile/assistance/input-search.html id_suff="04" %}
       </div>
      <div class="py-2">
        {% include html_docs_mobile/assistance/survey.html text='Lorem ipsum' %}
      </div> 
        <div class="py-2">
        {% include html_docs_mobile/assistance/card-image.html text=true %}
       </div>
        <div class="py-2 example-card-sm">
        {% include html_docs_mobile/assistance/card-image.html title=true class='card-sm' action='Azione'  %}
       </div>
    </div>
</div>
</div>

<div class="row my-5">
  <div class="col">
    <h5 class="fw-bold">Assistenza diretta</h5>
    <div class="device-auto  mt-4 ">
     {% include html_docs_mobile/general/top-iphone.html %}
    {% include html_docs_mobile/header/barra-istituzionale-mobile-example.html   title='Indietro' icon='it-arrow-left'  %}
    <div class="pt-3 pt-3 pb-3">
    {% include html_docs_mobile/assistance/assistenza_diretta.html  %}
    </div>
    {% include html_docs_mobile/footer/footer-mobile.html  %}
    </div>
  </div>
  <div class="col">
    <h5 class="fw-bold">Assistenza avanzata</h5>
    <div class="device-auto mt-4 ">
    {% include html_docs_mobile/general/top-iphone.html %}
    {% include html_docs_mobile/header/barra-istituzionale-mobile-example.html   title='Indietro' icon='it-arrow-left'  %}
    <div class="pt-3 pb-4 px-2">
    {% include html_docs_mobile/assistance/assistenza_avanzata.html  %}
    </div>
    </div>
  </div>
</div>
{% highlight html %}
{% include html_docs_mobile/profile/info-list.html id_suff='01'%}
{% include html_docs_mobile/assistance/green-number.html %}
{% include html_docs_mobile/assistance/survey.html icon=true text='Compila il questionario di gradimento' %}
{% include html_docs_mobile/assistance/input-search.html id_suff="05"%}
{% include html_docs_mobile/assistance/survey.html text='Lorem ipsum' %}
{% include html_docs_mobile/assistance/card-image.html text=true %}
{% include html_docs_mobile/assistance/card-image.html title=true class='card-sm' %}

{% endhighlight %}
