---
layout: it25_docs
title: Card
group: informazioni
toc: yes
---

Le **Card** sono dei contenitori di contenuti ed azioni relative ad una data informazione. Esse possono accogliere un titolo, un paragrafo, un’immagine e una call to action formata
da un link di grandezza variabile a seconda delle necessità, posizionato sempre in basso (lateralmente o al centro). Le distanze dai margini sono date da uno spazio di **24 px in tutti i lati della card**.
Le card, adattabili e ridimensionabili, sono un elemento modulare che facilita la trasposizione responsive del design.

{% capture example %}

<div class="row">
  <div class="col">
 {% include html_docs/cards/card.html %}
  </div>
  <div class="col">
 {% include html_docs/cards/card.html %}
  </div>
  <div class="col">
 {% include html_docs/cards/card.html %}
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card con foto

Nella versione con foto la metà dello spazio viene destinato ad un’immagine posizionata nella parte superiore della card. Per motivi di accessibilità, **il testo della card non deve essere mai posizionato sopra le immagini**.

{% capture example %}

<div class="row">
  <div class="col">
  {% include html_docs/cards/card_immagine.html category=true %}
  </div>
  <div class="col">
  {% include html_docs/cards/card_immagine.html %}
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card con link

Con la versione card con link è possibile avere dei sottolink in calce alla card.

{% capture example %}

  <div style="width: 20rem;">
  {% include html_docs/cards/card_immagine.html linklist=true %}
  </div>
{% endcapture %}{% include example.html content=example %}

### Card con foto e call to action

All’interno delle card è possibile inserire anche una call-to action, con le modalità già spiegate e un testo di categorizzazione sopra la card.

{% capture example %}

<div class="row">
  <div class="col">
 {% include html_docs/cards/card_immagine.html button=true %}
  </div>
  <div class="col">
 {% include html_docs/cards/card.html header=true %}
  </div>
  <div class="col">
 {% include html_docs/cards/card.html %}
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
