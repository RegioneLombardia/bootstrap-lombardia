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
      <div class="form-check">
        <input id="check1" class="" type="checkbox" checked="checked" />
        <label for="check1" class="">Selezionato</label>
      </div>
    </div>
    <div class="col">
      <div class="form-check">
        <input id="check2" class="" type="checkbox" checked="checked" disabled="" />
        <label for="check2" class="disabled">Selezionato</label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-check">
        <input id="check3" class="semi-checked" type="checkbox" />
        <label for="check3" class="">Mixed</label>
      </div>
    </div>
    <div class="col">
      <div class="form-check">
        <input id="check4" class="semi-checked" type="checkbox" disabled="" />
        <label for="check4" class="disabled">Mixed</label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-check">
        <input id="check5" class="" type="checkbox" />
        <label for="check5" class="">Non Selezionato</label>
      </div>
    </div>
    <div class="col">
      <div class="form-check">
        <input id="check6" class="" type="checkbox" disabled="" />
        <label for="check6" class="disabled">Non Selezionato</label>
      </div>
    </div>
  </div>
</div>



{% capture callout %}
#### {{ site.data.short.dt }}
Per i dettagli tecnici sulla costruzione delle checkbox si veda la **[relativa pagina]({{ site.baseurl }}/docs/form/checkbox/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
