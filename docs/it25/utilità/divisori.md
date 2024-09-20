---
layout: it25_docs
title: Divisori
group: utilità
toc: false
---

I **Divisori** sono elementi grafici che permettono di **separare in maniera concettuale più contenuti** e di **organizzare essi in gruppi**.  
I divisori devono essere evidenti in un layout, ma non predominanti e dovrebbero essere utilizzati solo se gli elementi necessitano di una separazione aggiuntiva o alternativa allo spazio vuoto (o bianco) che si impiega di default.

_Colore HEX: D9D9D9_

{% comment %}Example name: Divisori{% endcomment %}
{% capture example %}
<div class="d-flex align-items-start flex-column mb-3">
  <div class="p-2 w-100">
    <span>1px</span>
    <div class="divider-1"></div>
  </div>
  <div class="p-2 w-100">
    <span>1px con ombra</span>
    <div class="divider-1-shadow"></div>
  </div>
  <div class="p-2 w-100">
    <span>2px</span>
    <div class="divider-2"></div>
  </div>
  <div class="p-2 w-100">
    <span>2px con ombra</span>
    <div class="divider-2-shadow"></div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

