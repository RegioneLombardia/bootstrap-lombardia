---
layout: docs
title: Colori
description: Palette dei colori di Regione Lombardia
group: componenti-principali
toc: true
---

## Colori Primari
  I colori primari sono il verde e il bianco.  
  Il <strong class="primary-color">Verde</strong> è il colore identificativo dell’intera brand identity e rappresenta la radice per creare altri colori della palette primaria.

  <div class="primary-color-container">
    <div class="square-color primary-bg">
      <span class="white-color">#2A7A38</span>
    </div>
    <div class="square-color white-bg shadow">
      <span>#FFFFFF</span>
    </div>
    <div class="clearfix"></div>
   </div>

<br>
{% capture callout %}

### Codici e classi

#### <svg class="icon icon-warning icon-lg"><use xlink:href="/dist/svg/sprite.svg#it-warning-circle"></use></svg> Codici e classi dei colori nella documentazione
I codici esadecimali dei colori mostrati in **[Colori Custom]({{ site.baseurl }}/docs/utilities/colori-custom/)** sia per il colore primario che per i complementari e i triadici, spesso **non corrispondono al colore visualizzato**.  
{% endcapture %}{% include callout.html content=callout type="warning" %}

La documentazione riporta, come costanti fisse, i **codici** dei colori **originari** di Bootstrap **Italia**.  
I colori visualizzati sono invece impostati tramite **variabili** che sono state **personalizzate** per Bootstrap **Lombardia**.

{% capture callout %}
####  <svg class="icon icon-success icon-lg"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg> Utilizzare le classi di colore
Per ottenere i colori corrispondenti alla palette del Sistema di identità visiva digitale di Regione Lombardia, **utilizzate le classi** specificate nella documentazione.  
Il colore risultante sarà quello che vedete nella documentazione e aderente alle linee guida.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}


## Colori Secondari

{% capture callout %}
####  <svg class="icon icon-danger icon-lg"><use xlink:href="/dist/svg/sprite.svg#it-close-circle"></use></svg> Colori Analoghi
I colori secondari **[Analoghi]({{ site.baseurl }}/docs/utilities/colori-custom/#analoghi)** **non fanno parte della "palette" di Regione Lombardia**.  
Pertanto si raccomanda di **NON UTILIZZARLI**.
{% endcapture %}{% include callout.html content=callout type="danger" %}


### Complementari e triadici
Questi colori sono normalmente utilizzati per le <span class="complementary-1-color">**segnalazioni di errore**</span>, gli <span class="complementary-2-color">**avvisi di attenzione**</span>, le informazioni di <span class="complementary-3-color">**azione eseguita correttamente**</span>.
<div class="primary-color-container">
  <div class="square-color complementary-1-bg">
    <span>#D92A27</span>
  </div>
  <div class="square-color complementary-2-bg">
    <span>#FF9900</span>
  </div>
  <div class="square-color complementary-3-bg">
    <span>#42B357</span>
  </div>
  <div class="clearfix"></div>
</div>

<br>

Anche in questo caso si raccomanda di **utilizzare le classi** specificate nella **[documentazione]({{ site.baseurl }}/docs/utilities/colori-custom/#complementari-e-triadici)** anziché i codici esadecimali.


## Varianti colori secondari

{% capture callout %}
####  <svg class="icon icon-danger icon-lg"><use xlink:href="/dist/svg/sprite.svg#it-close-circle"></use></svg> Varianti colori Analoghi
Anche le **[varianti dei colori analoghi]({{ site.baseurl }}/docs/utilities/colori-custom/#analoghi-1)** **non fanno parte della "palette" di Regione Lombardia**.  
Pertanto si raccomanda di **NON UTILIZZARLE**.
{% endcapture %}{% include callout.html content=callout type="danger" %}

{% capture callout %}
#### <svg class="icon icon-warning icon-lg"><use xlink:href="/dist/svg/sprite.svg#it-warning-circle"></use></svg> Varianti colori Complementari e Triadici
**[Queste varianti]({{ site.baseurl }}/docs/utilities/colori-custom/#complementari-e-triadici-1)**, anche se comprese nella *palette* del Sistema di identità visiva digitale di Regione Lombardia, è bene **NON UTILIZZARLE**, a meno di necessità particolari.  
{% endcapture %}{% include callout.html content=callout type="warning" %}


## Colori neutrali
I **[colori neutri]({{ site.baseurl }}/docs/utilities/colori-custom/#colori-neutrali)** nelle linee guida sono tre ma le classi previste riguardano solo i primi due (blu e grigio).   
Il terzo colore neutro è molto simile al bianco, che quindi può essere utilizzato al suo posto.

<div class="primary-color-container">
<div class="square-color neutral-1-bg">
<span class="white-color">#003254</span>
</div>
<div class="square-color neutral-2-bg">
<span>#E6E9F2</span>
</div>
<div class="square-color #FCFCFF shadow">
<span>#FCFCFF</span>
</div>
<div class="clearfix"></div>
</div>

<br>

## Varianti colori neutrali
{% capture callout %}
#### <svg class="icon icon-warning icon-lg"><use xlink:href="/dist/svg/sprite.svg#it-warning-circle"></use></svg> Varianti colori Neutrali
Anche **[queste varianti]({{ site.baseurl }}/docs/utilities/colori-custom/#varianti-colori-neutrali)**, sono da utilizzare con attenzione e solo in caso di reale necessità.  
{% endcapture %}{% include callout.html content=callout type="warning" %}


## Grigi chiari
{% capture callout %}
#### <svg class="icon icon-warning icon-lg"><use xlink:href="/dist/svg/sprite.svg#it-warning-circle"></use></svg> Grigi chiari
**[Questi grigi]({{ site.baseurl }}/docs/utilities/colori-custom/#grigi-chiari)**, possono essere utilizzati, se serve, facendo attenzione al fatto che sono semitrasparenti.  
{% endcapture %}{% include callout.html content=callout type="warning" %}
