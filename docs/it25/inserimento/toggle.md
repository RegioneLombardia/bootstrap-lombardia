---
layout: it25_docs
title: Toggle
group: inserimento
toc: false
---

Un **Toggle** (o switch) è un controllo che permette all’utente di scegliere la modalità on/off di un singolo settaggio – rappresentando l’analogia dell’interruttore accesso/spento.




{% capture example %}
  <div class="row justify-content-between">
    <div class="col-3">
      <div>Default</div>
      <div class="toggles">
        <label for="toggleEsempio1a">
          Non selezionato
          <input type="checkbox" id="toggleEsempio1a">
          <span class="lever leverRight"></span>
        </label>
      </div>
      <div class="toggles">
        <label for="toggleEsempio1b">
          Selezionato
          <input type="checkbox" id="toggleEsempio1b" checked>
          <span class="lever"></span>
        </label>
      </div>
    </div>
    <div class="col-3">
      <div>Disabilitato</div>
      <div class="toggles">
        <label for="toggleEsempio2a">
          Non selezionato
          <input disabled type="checkbox" id="toggleEsempio2a">
          <span class="lever"></span>
        </label>
      </div>
      <div class="toggles">
        <label for="toggleEsempio2b">
          Selezionato
          <input disabled type="checkbox" id="toggleEsempio2b" checked>
          <span class="lever leverRight"></span>
        </label>
      </div> 
    </div>
  </div>
{% endcapture %}{% include example.html content=example %}



{% capture callout %}
#### {{ site.data.short.dt }}
Per i dettagli tecnici sulla costruzione dei toggle si veda la **[relativa pagina]({{ site.baseurl }}/docs/form/toggles/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
