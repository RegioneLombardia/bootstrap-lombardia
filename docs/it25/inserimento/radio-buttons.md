---
layout: it25_docs
title: Radio buttons
group: inserimento
toc: false
---

Un **Radio button** (o option button) è un controllo che permette all’utente di effettuare una scelta singola esclusiva nell’ambito
di un insieme predefinito di opzioni o possibili scelte.

<div class="bd-example">
  <div class="row">
    <div class="col">Default</div>
    <div class="col">Disabilitato</div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/radio_buttons/radio_buttons.html text='Selezionato' checked='checked' id='1' %}
    </div>
    <div class="col">
    {% include html_docs/radio_buttons/radio_buttons.html text='Selezionato' checked='checked' disabled='disabled' id='2' %}
    </div>
  </div>
  <div class="row">
      <div class="col">
      {% include html_docs/radio_buttons/radio_buttons.html text='Non Selezionato' id='3' %}
      </div>
      <div class="col">
      {% include html_docs/radio_buttons/radio_buttons.html text='Non Selezionato' disabled='disabled' id='4' %}
      </div>
    </div>
</div>
{% highlight sh %}
<div class="row">
    <div class="col">Default</div>
    <div class="col">Disabilitato</div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/radio_buttons/radio_buttons.html text='Selezionato' checked='checked' id='1' %}
    </div>
    <div class="col">
    {% include html_docs/radio_buttons/radio_buttons.html text='Selezionato' checked='checked' disabled='disabled' id='2' %}
    </div>
  </div>
  <div class="row">
      <div class="col">
      {% include html_docs/radio_buttons/radio_buttons.html text='Non Selezionato' id='3' %}
      </div>
      <div class="col">
      {% include html_docs/radio_buttons/radio_buttons.html text='Non Selezionato' disabled='disabled' id='4' %}
      </div>
    </div>
{% endhighlight %}
