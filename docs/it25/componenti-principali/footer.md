---
layout: it25_docs
title: Footer
description: Footer per il fondo pagina.
group: componenti-principali
toc: false
---

Il Footer è la componente base ideata per il fondo pagina.

Deve contenere come ultima riga il copyright e al di sopra il nome del servizio.  
In mezzo è opportuno inserire i link di servizio e se i link in questione sono molti è meglio organizzarli su righe e colonne, lasciando che l’altezza del footer cresca di conseguenza.

<div class="bd-example">
{% include html_docs/footer/footer.html %}
</div>

{% highlight html %}
{% include html_docs/footer/footer.html %}
{% endhighlight %}

Nota:
La dicitura del copyright è strutturata in modo da andare a capo a blocchi a seconda della dimensione dello schermo.

### Footer minimo

Nel caso in cui serva un footer sottile, il minimo consentito è quello riportato di seguito.

<div class="bd-example">
{% include html_docs/footer/footer_minimo.html %}
</div>

{% highlight html %}
{% include html_docs/footer/footer_minimo.html %}
{% endhighlight %}

### Footer con loghi multipli

La seconda casistica di gestione di loghi multipli contempla l’inserimento dei loghi partner **al negativo all’interno del footer, sempre in orizzontale e per un massimo di 4 loghi per riga**.

Si specifica tuttavia che questa circostanza è strettamente vincolata alla disponibilità di loghi al negativo.  
Qualora si disponesse soltanto della loro versione in positivo, essi devono essere posizionati esternamente, come mostrato nella sezione **[gestione loghi multipli]({{ site.baseurl }}/docs/it25/componenti-principali/gestione-loghi-multipli/)**.

<div class="bd-example">
{% include html_docs/footer/footer_loghi.html %}
</div>
{% highlight html %}
<footer class="footer">
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <div class="it25-footer-logo">
          <img src="{{ site.baseurl }}/dist/assets/img/logo-saf-lombardia.png" alt="logo scuola alta formazione lombardia" class="img-fluid p-3">
        </div>
      </div>
      <div class="col-3">
        <div class="it25-footer-logo">
          <img src="{{ site.baseurl }}/dist/assets/img/logo-cna-lombardia-bianco.png" alt="logo cna formazione lombardia" class="img-fluid p-3">
        </div>
      </div>
      . . .
      . . .
    </div>
    <div class="row">
      <div class="col-12 my-4 fw-bold title">ACCREDITAS Sistema di accreditamento</div>
    </div>
    <div class="row">
      <div class="col-12 copyright">
        <span class="d-inline-block">&copy; Copyright Regione Lombardia tutti i diritti riservati</span>
        <span class="d-inline-block"> - C.F. 80050050154</span>
        <span class="d-inline-block"> - Piazza Città di Lombardia 1</span>
        <span class="d-inline-block"> - 20124 Milano</span>
      </div>
    </div>
  </div>
</footer>      
{% endhighlight %}
