---
layout: it25_docs
title: Calendario
group: informazioni
toc: no
---

La componente **Calendario** può assolvere diverse funzioni all’interno di un’interfaccia: nella sua forma più semplice di data picker è spesso impiegato all’interno di processi di inserimento dati, oppure all’interno di una form.  
In altre forme più complesse può assolvere una funzione comunicativa e ricoprire una posizione di maggiore visibilità.


{% capture example %}
<div class="row mt-5 mt-md-0">
  <div class="col-md-4 col-xl-3">
    <div class="form-group">
      <label class="active" for="data_nascita">Data di nascita</label>
      <input type="date" id="data_nascita"/>
    </div>
  </div>
  <div class="col-md-4 offset-xl-3 col-xl-3">
    <div class="form-group">
      <label class="active" for="data_da">Periodo da</label>
      <input type="date" id="data_da"/>
    </div>
  </div>
  <div class="col-md-4 col-xl-3">
    <div class="form-group">
      <label class="active" for="data_a">a</label>
      <input type="date" id="data_a"/>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


## Breaking change

{% capture callout %}
Eliminato **Calendario avanzato** per problemi di accessibilità.
{% endcapture %}{% include callout-breaking.html content=callout version="2.5.3" type="danger" %}
