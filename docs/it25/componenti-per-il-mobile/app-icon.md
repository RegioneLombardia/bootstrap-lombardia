---
layout: it25_docs
title: App Icon
group: componenti-per-il-mobile
toc: true
---

L'**icona** è il primo elemento che gli utenti vedono quando trovano un app sull'App Store. Nella fase iniziale, quando l'utente sta ancora
decidendo se scaricare l'app, l'icona è l’elemento che aiuterà a **generare interesse** in essa.
Una volta installata l'app, invece, l'obiettivo dell'icona cambia, in quanto aiuterà la **riconoscibilità** dell'app rispetto alle altre icone.
L’icona dell’app è quindi fondamentale per i download e l’awareness del brand.

I 3 aspetti principali sono:

- Scalabilità
- Coerenza
- Unicità

### Suggerimenti

<div class="container-fluid my-5">
  <div class="row">
    <div class="col">
      <h5 class="f-bold"> Scalabilità </h5>
      Uno degli aspetti più importanti di un'icona è la scalabilità. Poiché l'icona verrà mostrata in diversi punti della piattaforma e in diverse dimensioni, è importante che essa mantenga la sua leggibilità e unicità.</p>
    </div>
    <div class="col">
      <h5 class="f-bold"> Coerenza </h5>
      Plasmare un'immagine coerente ed unificata dell’app nella mente dell'utente aumenta la soddisfazione, la fidelizzazione e la viralità del prodotto.
    </div>
    <div class="col">
      <h5 class="f-bold"> Unicità </h5>
      Attirare l'attenzione dell'utente e sapersi distinguere dalle altre icone è un fattore fondamentale per creare unicità.
    </div>
  </div>
  <hr>
    <div class="row">
      <div class="col">
        Abbraccia la semplicità e concentrati su un singolo oggetto, preferibilmente una forma o un elemento unico che mantiene i suoi contorni e le sue qualità quando viene ridimensionato.
    </div>
    <div class="col">
      Allinea la palette di colori e utilizza un linguaggio di progettazione simile e coerente anche all’interno dell’applicazione, in questo modo l’icona funzionerà in armonia con l'essenza, la funzionalità ed il design dell’applicazione.
    </div>
    <div class="col">
      Rimuovi i dettagli e lavora sulla astrazione delle forme. Le icone troppo complicate sono nemiche della riconoscibilità. Cerca di non essere banale e dai uno sguardo alle decine di app differenti che Regione Lombardia offre già.
    </div>
  </div>
</div>

<div class="primary-color">
  <svg class="icon icon-primary">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use>
   </svg>
  Nota
  </div>
L’uso di colori e gradient differenti, all’interno del perimetro cromatico suggerito nel documento, è **consentito**. Per rispettare la coerenza nel design delle app icon, seguire le indicazioni riportate nella sezione e i principi chiave: **semplicità + colori + brand identity + riconoscibilità**.
**La creatività e l’unicità dell’identità di un’app non prescinde dalla conformità alle linee guida del master brand di Regione Lombardia.**

### App Icon

<div class="bd-example">
  <div class="row">
    <div class="col">
      <h4>App Icon - iOS</h4>
      {% include html_docs_mobile/icons/ios_icon.html %}
    </div>
    <div class="col">
    <h4>App Icon - Android</h4>
      {% include html_docs_mobile/icons/android_icon.html %}
    </div>
  </div>
</div>

{% highlight html %}

<h4>App Icon - iOS</h4>
{% include html_docs_mobile/icons/ios_icon.html %}
<h4>App Icon - Android</h4>
{% include html_docs_mobile/icons/android_icon.html %}
{% endhighlight %}

### Preview

{% include html_docs_mobile/icons/preview.html %}
<br>

### App naming

{% include html_docs_mobile/general/app-naming.html %}
