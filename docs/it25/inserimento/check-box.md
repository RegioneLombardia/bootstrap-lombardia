---
layout: it25_docs
title: Check box
group: inserimento
toc: false
---

Una **Checkbox** (o tickbox) è un controllo che permette all’utente di selezionare scelte multiple in un insieme predefinito di opzioni o possibili scelte.

<div class="bd-example">
  <div class="row">
    <div class="col">Default</div>
    <div class="col">Disabilitato</div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/checkbox/checkbox.html text='Selezionato' checked='checked' id='check1' %}
    </div>
    <div class="col">
    {% include html_docs/checkbox/checkbox.html text='Selezionato' checked='checked' disabled='disabled' id='check2' %}
    </div>
  </div>
  <div class="row">
      <div class="col">
      {% include html_docs/checkbox/checkbox.html text='Mixed' id='check3' chkclass='semi-checked' %}
      </div>
      <div class="col">
      {% include html_docs/checkbox/checkbox.html text='Mixed' disabled='disabled' id='check4' chkclass='semi-checked' %}
      </div>
    </div>
  <div class="row">
      <div class="col">
      {% include html_docs/checkbox/checkbox.html text='Non Selezionato' id='check5' %}
      </div>
      <div class="col">
      {% include html_docs/checkbox/checkbox.html text='Non Selezionato' disabled='disabled' id='check6' %}
      </div>
    </div>
</div>


{% capture callout %}
#### {{ site.data.short.dt }}
Per i dettagli tecnici sulla costruzione delle checkbox si veda la **[relativa pagina]({{ site.baseurl }}/docs/form/checkbox/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
