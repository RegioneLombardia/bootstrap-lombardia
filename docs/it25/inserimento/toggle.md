---
layout: it25_docs
title: Toggle
group: inserimento
toc: false
---

Un **Toggle** (o switch) è un controllo che permette all’utente di scegliere la modalità on/off di un singolo settaggio – rappresentando l’analogia dell’interruttore accesso/spento.

<div class="bd-example">
  <div class="row">
    <div class="col">Default</div>
    <div class="col">Disabilitato</div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/toggle/toggle.html text='Selezionato' on='leverRight' id='1' checked='checked' %}
    </div>
    <div class="col">
    {% include html_docs/toggle/toggle.html text='Selezionato' checked='checked' disabled='disabled' id='2' %}
    </div>
  </div>
  <div class="row">
      <div class="col">
      {% include html_docs/toggle/toggle.html text='Non Selezionato' id='3' %}
      </div>
      <div class="col">
      {% include html_docs/toggle/toggle.html text='Non Selezionato' disabled='disabled' id='4' %}
      </div>
    </div>
</div>
{% highlight html %}
 <div class="row">
    <div class="col">Default</div>
    <div class="col">Disabilitato</div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/toggle/toggle.html text='Selezionato' checked='checked' id='1' %}
    </div>
    <div class="col">
    {% include html_docs/toggle/toggle.html text='Selezionato' checked='checked' disabled='disabled' id='2' %}
    </div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/toggle/toggle.html text='Non Selezionato' id='3' %}
    </div>
    <div class="col">
    {% include html_docs/toggle/toggle.html text='Non Selezionato' disabled='disabled' id='4' %}
    </div>
  </div>
{% endhighlight %}
