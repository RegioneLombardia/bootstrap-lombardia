---
layout: it25_docs
title: Menu Verticale
description: Menù principale di navigazione
group: componenti-principali
toc: true
---

Il **Menu verticale** può incorporare _liste semplici_ e _liste innestate_.  

Si utilizza quando si ha l’esigenza di trattare in forma di lista le voci del menu, quindi all’interno di applicativi con **molte sezioni** cui si deve dare accesso in qualsiasi punto della navigazione.  
Lo si preferisce per garantire la leggibilità degli item nella lista, che potrà essere scrollata per una visualizzazione completa.

Questo tipo di menu è sempre **collocato a sinistra dello schermo** per facilitare una lettura consequenziale delle informazioni.


## Semplice

<div class="bd-example">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 it25-sidebar">
      {% include html_docs/menu-verticale/menu-verticale-semplice.html %}
      </div>
    </div>
  </div>
</div>
{% highlight html %}
<div class="col-md-4 it25-sidebar">
 {% include html_docs/menu-verticale/menu-verticale-semplice.html %}
</div>
{% endhighlight %}


## Innestata

<div class="bd-example" style="">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 it25-sidebar">
        {% include html_docs/menu-verticale/menu-verticale-annidato.html %}
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="col-md-4 it25-sidebar">
{% include html_docs/menu-verticale/menu-verticale-annidato.html %}
</div>
{% endhighlight %}
