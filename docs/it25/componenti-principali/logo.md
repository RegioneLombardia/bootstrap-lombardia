---
layout: it25_docs
title: Logo
group: componenti-principali
toc: true
---

Quella contenuta in *Bootstrap Regione Lombardia* è la versione del logo di Regione Lombardia che viene utilizzata per gli applicativi.

L’area di rispetto è la distanza minima da considerare in fase di abbinamento del logo ad altri elementi ed altri marchi.

Nel caso degli applicativi di Regione Lombardia il logo deve essere inserito nell’header all’interno della barra istituzionale in posizione sinistra.

A destra del logo di Regione Lombardia va il nome dell’applicativo.

Lo spazio che intercorre tra il logo di Regione Lombardia ed eventuali altri loghi nella barra istituzionale **deve essere di 24 pixel**.

## Le immagini

Una volta scompattato l'archivio *bootstrap-lombardia.zip*, le immagini si trovano nella directory `assets/img/`, e sono:


### Standard
`logo-rl.png`
<div class="bd-example">
  <img src="{{ site.baseurl }}/dist/assets/img/logo-rl.png" alt="logo regione lombardia" class="it25-header-logo d-none d-md-block">
</div>

Questa è la versione utilizzata nella **[barra istituzionale]({{ site.baseurl }}/docs/it25/componenti-principali/header/#barra-istituzionale)**.  
All'interno di questa **le dimensioni sono prestabilite** e diminuiscono quando si scorre la pagina verso il basso.  
All'immagine viene poi associato un margine destro di 24 pixel per tenere a distanza il nome dell'applicativo.


### Bianca
`logo-rl-bianco.png`
<div class="bd-example">
  <div class="it-header-slim-wrapper it25-top-bar" style="height: 65px">
    <img style="height: 65px" src="{{ site.baseurl }}/dist/assets/img/logo-rl-bianco.png" alt="logo regione lombardia" class="it25-header-logo d-none d-md-block">
  </div>
</div>

Questa seconda versione, che ha uno sfondo trasparente, è utilizzata nella **[top-bar]({{ site.baseurl }}/docs/it25/componenti-principali/header/#top-bar)** e compare solo sugli schermi di piccole dimensioni, quando non è possibile, per ragioni di spazio, visualizzare quello normale nella barra istituzionale.

Anche in questo caso le dimensioni sono prestabilite e l'immagine viene allineata a sinistra nella top-bar con una distanza dal bordo della finestra di 24 pixel.


## Uso
In entrambi i casi dimensioni e distanze sono ottenuti via *css* tramite le classi associate agli elementi in cui le immagini sono contenute.  

{% capture callout %}
#### <svg class="icon icon-warning icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-circle"></use></svg> Dimensioni del Logo
**La struttura HTML** della barra istituzionale e della top-bar, e in generale di tutto l'*header*, **va mantenuta** in modo da non compromettere tali impostazioni.
{% endcapture %}{% include callout.html content=callout type="warning" %}
