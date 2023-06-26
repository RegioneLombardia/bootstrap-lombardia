---
layout: it25_docs
title: Slider
group: call-to-action
toc: yes
---

Gli **Slider** offrono la possibilità di selezionare un valore da un intervallo posto lungo una barra in maniera visiva ed immediata, presentando l’intera gamma di scelte possibili per l’utente.  
Queste componenti sono ideali per regolare impostazioni come volume e luminosità o per applicare filtri e possono utilizzare icone su entrambe le estremità della barra per rappresentare una scala numerica o relativa.

{% capture example %}
<input type="range" min="0" max="100" step="1" value="10" class="form-range" id="customRange1" aria-label="sposta il cursore per aumentare o diminuire">
{% endcapture %}{% include example.html content=example %}

## Slider con tooltip
<div class="exclude-a11y-check">
{% capture example %}
<div id="single-thumb" class="slider-container" style="margin-top:20px">
<div class="slider"></div>
<div class="blobs centered">
    <div class="blob value centered"></div>
    <div class="blob centered"></div>
</div>
<div class="value-text centered"></div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

Lo slider con tooltip è un componente implementato in javascript ed il cui codice è importato all'interno di `bootstrap-lombardia.min.js`.  
E' basato sulla libreria **range-slider-input** la cui documentazione completa è reperibile a **[questo indirizzo](https://www.jsdelivr.com/package/npm/range-slider-input)**.

Per attivarlo si deve invocare la funzione:
{% highlight html %}
new bootstrap.it25().gooeyRangeSlider(
  document.querySelector('#single-thumb'),
  {
    min: 0,
    max: 100,
    value: [0, 10],
    thumbsDisabled: [true, false],
    rangeSlideDisabled: false
  },
  1, (value) => console.log(value)
)
{% endhighlight %}

Il primo parametro della funzione è l'*id* dell'elemento da inizializzare.  
`min` e  `max` determinano i limiti del range.  
`value` imposta i valori **iniziali** del range.  
L'ultimo parametro della funzione serve per definire una **callback** sul **change** del valore.  
(In questo esempio viene scritto nella console del browser il valore selezionato)

Tutti i parametri di configurazione sono documentati **[qui](https://github.com/n3r4zzurr0/range-slider-input#parameters)**
