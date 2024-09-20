---
layout: it25_docs
title: Radio buttons
group: inserimento
toc: false
---

Un **Radio button** (o option button) è un controllo che permette all’utente di effettuare una scelta singola esclusiva nell’ambito
di un insieme predefinito di opzioni o possibili scelte.

{% capture example %}
  <div class="row">
    <div class="col">
    <div>Default</div>
      <div class="form-check form-check-inline">
        <input name="gruppo1" type="radio" id="radio1">
        <label for="radio1">Non selezionato</label>
      </div>
      <div class="form-check form-check-inline">
        <input name="gruppo1" type="radio" id="radio2" checked>
        <label for="radio2">Selezionato</label>
      </div>
    </div>
    <div class="col">
      <div>Disabilitato</div>
      <div class="form-check form-check-inline">
        <input name="gruppo2" type="radio" id="radio3" disabled>
        <label for="radio3">Non selezionato</label>
      </div>
      <div class="form-check form-check-inline">
        <input name="gruppo2" type="radio" id="radio4" checked disabled>
        <label for="radio4">Selezionato</label>
      </div>
    </div>
  </div>
{% endcapture %}{% include example.html content=example %}


{% capture callout %}
#### {{ site.data.short.dt }}
Per i dettagli tecnici sulla costruzione dei radio button si veda la **[relativa pagina]({{ site.baseurl }}/docs/form/radio-button/)**
{% endcapture %}{% include callout.html content=callout type="info" %}


