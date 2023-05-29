---
layout: it25_docs
title: Form
group: componenti-per-il-mobile
toc: false
---

<style>
  .bd-example-mobile{
    width: 30vw;
  }
</style>

**L’utilizzo dei form è previsto all’interno di pagine o finestre e modali in cui è richiesto all’utente un inserimento di dati**. I campi che devono essere obbligatoriamente compilati dovranno essere contrassegnati. A destra, un esempio del comportamento dei campi.

Gli elementi a corredo e supporto dei form potranno essere i seguenti:

_Text box_
<br>
_Check box_
<br>
_Radio button_
<br>
_Menu a tendina (Accordion)_
<br>
_Bottoni_

Gli elementi del form e tutti i contenuti mostrati sono disposti ed organizzati in maniera coerente e funzionale alla lettura.
La lunghezza in colonne degli elementi dovrà inoltre essere la stessa per tutti i campi della stessa categoria e importanza di informazione e dovrà essere sufficiente a contenere il dato richiesto.

<div class="bd-example-mobile">
  <h3>Componenti</h3>
       <div class="pt-4 pb-2">
        {% include html_docs_mobile/form/validato.html  %}
       </div>
      <div class="py-2">
        {% include html_docs_mobile/form/errore.html  %}
      </div> 
      <div class="py-2">
        {% include html_docs_mobile/form/input.html optionalString='*' id_suff="16"  %}
       </div>
        <div class="py-2">
        {% include html_docs_mobile/form/input.html optionalString='(obbligatorio)' id_suff="17"  %}
       </div>
</div>

<div class="device-auto mt-5">
  {% include html_docs_mobile/general/top-iphone.html %}
  {% include html_docs_mobile/header/barra-istituzionale-mobile.html title='Lorem ipsum' showHelp='d-none' %}
  <div class="pb-4">
  {% include html_docs_mobile/form/device.html %}
  </div>
</div>

{% highlight html %}
{% include html_docs_mobile/form/device.html %}
{% endhighlight %}
