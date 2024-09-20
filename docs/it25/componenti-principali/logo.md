---
layout: it25_docs
title: Logo
group: componenti-principali
toc: true
---

Di seguito è rappresentata la versione del **Logo di Regione Lombardia** utilizzata per le interfacce web.

L’**area di rispetto** è la distanza minima da considerare in fase di abbinamento del logo ad altri elementi e/o marchi.  
Nel caso delle interfacce di Regione Lombardia, il logo deve essere inserito **nell’header all’interno della barra istituzionale in posizione sinistra**.  

Il logo non deve mai essere alterato e si consiglia di utilizzare sempre lo stesso nella sua forma originale.  
Lo spazio che intercorre tra il logo ed eventuali altri elementi nella barra istituzionale **deve essere di almeno 24 pixel**.  
Il marchio e la sua costituzione ed applicazione sono regolati dal Brandbook emesso da Regione Lombardia.

{% capture example %}

<div class="d-flex flex-row mb-3">
  <div class="p-2 me-5"> 
      <img src="{{ site.baseurl }}/dist/assets/img/logo-rl.png"
          alt="logo regione lombardia" class="it25-header-logo d-none d-md-block">
  </div>
  <div class="p-2 primary-bg rounded-3">
      <img style="height: 65px" src="{{ site.baseurl }}/dist/assets/img/logo-rl-bianco.png"
          alt="logo regione lombardia" class="it25-header-logo d-none d-md-block">
  </div>
</div>

{% endcapture %}{% include example.html content=example %}
