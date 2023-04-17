---
layout: it25_docs
title: Menu Verticale
description: Menù principale di navigazione
group: componenti-principali
toc: false
---

Il **Menu verticale** può incorporare _liste semplici_ e _liste innestate_. Viene utilizzato **quando le voci di menu sono superiori a 5** e lo si preferisce per garantire la leggibilità degli item nella lista, che potrà essere scrollata per una visualizzazione completa. Questo tipo di menu è sempre **collocato a sinistra dello schermo** per facilitare una lettura consequenziale delle informazioni.

<div class="bd-example">
  <div class="container-fluid">
    <div class="row flex-xl-nowrap">
      <div class="col-6">
      {% include html_docs/menu-verticale/menu-verticale-semplice.html %}     
      </div>
      <div class="col-6">
        {% include html_docs/menu-verticale/menu-verticale-annidato.html %}
      </div>
    </div>
  </div>
</div>

{% highlight html %}
{% include html_docs/menu-verticale/menu-verticale-semplice.html %}
{% include html_docs/menu-verticale/menu-verticale-annidato.html %}
{% endhighlight %}
