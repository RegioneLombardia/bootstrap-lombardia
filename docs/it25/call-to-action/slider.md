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


## Breaking change

{% capture callout %}
Eliminato **Slider con tooltip** per problemi di accessibilità.
{% endcapture %}{% include callout-breaking.html content=callout version="2.5.3" type="danger" %}
