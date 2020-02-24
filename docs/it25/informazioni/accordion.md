---
layout: it25_docs
title: Accordion
group: informazioni
toc: yes
---

Può essere utilizzato per
- **spezzare un output lungo** in sezioni, in modo da mostrarne una alla volta e contenere la lunghezza della pagina
- **dividere un form** di modifica dati in piccoli pannelli, dedicati ognuno ad un argomento.

**Non** va utilizzato però **per input lunghi** e complicati o che prevedono passi successivi in quanto:
1. Rende pesante il caricamento della pagina da parte del browser
2. Può risultare complicato segnalare errori relativi a dati che si trovano in pannelli diversi
3. Non consente di controllare che l'utente inserisca i dati in una sequenza prestabilita.

## Apertura multipla

In questa versione dell’accordion è possibile **aprire più di un pannello** contemporaneamente.

<div class="bd-example">
  <div id="collapseDiv1" class="collapse-div" role="tablist">
    <div class="collapse-header" id="heading1">
      <button data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
        Account
      </button>
    </div>
    <div id="collapse1" class="collapse show" role="tabpanel" aria-labelledby="heading1">
      <div class="collapse-body">
        {% include esempi-lombardia/account_posta.html %}
      </div>
    </div>
    <div class="collapse-header" id="heading2">
      <button data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
        Indirizzo
      </button>
    </div>
    <div id="collapse2" class="collapse" role="tabpanel" aria-labelledby="heading2">
      <div class="collapse-body">
        {% include esempi-lombardia/indirizzo.html %}
      </div>
    </div>
    <div class="collapse-header" id="heading3">
      <button data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
        Trasporti
      </button>
    </div>
    <div id="collapse3" class="collapse" role="tabpanel" aria-labelledby="heading3">
      <div class="collapse-body">
        {% include esempi-lombardia/toggles.html %}
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div id="collapseDiv1" class="collapse-div" role="tablist">
  <div class="collapse-header" id="heading1">
    <button data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
      Account
    </button>
  </div>
  <div id="collapse1" class="collapse show" role="tabpanel" aria-labelledby="heading1">
    <div class="collapse-body">
       include esempi-lombardia/account_posta.html
    </div>
  </div>
  <div class="collapse-header" id="heading2">
    <button data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
      Indirizzo
    </button>
  </div>
  <div id="collapse2" class="collapse" role="tabpanel" aria-labelledby="heading2">
    <div class="collapse-body">
       include esempi-lombardia/indirizzo.html
    </div>
  </div>
  <div class="collapse-header" id="heading3">
    <button data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
      Trasporti
    </button>
  </div>
  <div id="collapse3" class="collapse" role="tabpanel" aria-labelledby="heading3">
    <div class="collapse-body">
       include esempi-lombardia/toggles.html
    </div>
  </div>
</div>
{% endhighlight %}

## Apertura singola

Aggiungendo ad ogni elemento `.collapse` l'attributo `data-parent` con il relativo *ID* del contenitore padre, l'apertura di un pannello provocherà la chiusura degli altri.

<div class="bd-example">
  <div id="accordionDiv1" class="collapse-div" role="tablist">
    <div class="collapse-header" id="headingA1">
      <button data-toggle="collapse" data-target="#accordion1" aria-expanded="false" aria-controls="accordion1">
        Account
      </button>
    </div>
    <div id="accordion1" class="collapse" role="tabpanel" aria-labelledby="headingA1" data-parent="#accordionDiv1">
      <div class="collapse-body">
        {% include esempi-lombardia/account_posta.html %}
      </div>
    </div>
    <div class="collapse-header" id="headingA2">
      <button data-toggle="collapse" data-target="#accordion2" aria-expanded="false" aria-controls="accordion2">
        Indirizzo
      </button>
    </div>
    <div id="accordion2" class="collapse" role="tabpanel" aria-labelledby="headingA2" data-parent="#accordionDiv1">
      <div class="collapse-body">
        {% include esempi-lombardia/indirizzo.html %}
      </div>
    </div>
    <div class="collapse-header" id="headingA3">
      <button data-toggle="collapse" data-target="#accordion3" aria-expanded="false" aria-controls="accordion3">
        Trasporti
      </button>
    </div>
    <div id="accordion3" class="collapse" role="tabpanel" aria-labelledby="headingA3" data-parent="#accordionDiv1">
      <div class="collapse-body">
        {% include esempi-lombardia/toggles.html %}
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div id="accordionDiv1" class="collapse-div" role="tablist">
  <div class="collapse-header" id="headingA1">
    <button data-toggle="collapse" data-target="#accordion1" aria-expanded="false" aria-controls="accordion1">
      Account
    </button>
  </div>
  <div id="accordion1" class="collapse" role="tabpanel" aria-labelledby="headingA1" data-parent="#accordionDiv1">
    <div class="collapse-body">
       include esempi-lombardia/account_posta.html
    </div>
  </div>
  <div class="collapse-header" id="headingA2">
    <button data-toggle="collapse" data-target="#accordion2" aria-expanded="false" aria-controls="accordion2">
      Indirizzo
    </button>
  </div>
  <div id="accordion2" class="collapse" role="tabpanel" aria-labelledby="headingA2" data-parent="#accordionDiv1">
    <div class="collapse-body">
       include esempi-lombardia/indirizzo.html
    </div>
  </div>
  <div class="collapse-header" id="headingA3">
    <button data-toggle="collapse" data-target="#accordion3" aria-expanded="false" aria-controls="accordion3">
      Trasporti
    </button>
  </div>
  <div id="accordion3" class="collapse" role="tabpanel" aria-labelledby="headingA3" data-parent="#accordionDiv1">
    <div class="collapse-body">
       include esempi-lombardia/toggles.html
    </div>
  </div>
</div>
{% endhighlight %}



## Icona a sinistra

Aggiungendo la classe `.collapse-left-icon` al wrapper l'icona chevron (<svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
</svg>), che indica lo stato di apertura, è sostituita da segni meno/più allineati a sinistra del titolo del pannello.

<div class="bd-example">
  <div id="collapseDiv1-lft" class="collapse-div collapse-left-icon" role="tablist">
    <div class="collapse-header" id="heading1-lft">
      <button data-toggle="collapse" data-target="#collapse1-lft" aria-expanded="true" aria-controls="collapse1-lft">
        Account
      </button>
    </div>
    <div id="collapse1-lft" class="collapse show" role="tabpanel" aria-labelledby="heading1-lft">
      <div class="collapse-body">
        {% include esempi-lombardia/account_posta.html %}
      </div>
    </div>
    <div class="collapse-header" id="heading2-lft">
      <button data-toggle="collapse" data-target="#collapse2-lft" aria-expanded="false" aria-controls="collapse2-lft">
        Indirizzo
      </button>
    </div>
    <div id="collapse2-lft" class="collapse" role="tabpanel" aria-labelledby="heading2-lft">
      <div class="collapse-body">
        {% include esempi-lombardia/indirizzo.html %}
      </div>
    </div>
    <div class="collapse-header" id="heading3-lft">
      <button data-toggle="collapse" data-target="#collapse3-lft" aria-expanded="false" aria-controls="collapse3-lft">
        Trasporti
      </button>
    </div>
    <div id="collapse3-lft" class="collapse" role="tabpanel" aria-labelledby="heading3-lft">
      <div class="collapse-body">
        {% include esempi-lombardia/toggles.html %}
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div id="collapseDiv1-lft" class="collapse-div collapse-left-icon" role="tablist">
  <div class="collapse-header" id="heading1-lft">
    <button data-toggle="collapse" data-target="#collapse1-lft" aria-expanded="true" aria-controls="collapse1-lft">
      Account
    </button>
  </div>
  <div id="collapse1-lft" class="collapse show" role="tabpanel" aria-labelledby="heading1-lft">
    <div class="collapse-body">
      include esempi-lombardia/account_posta.html
    </div>
  </div>
  <div class="collapse-header" id="heading2-lft">
    <button data-toggle="collapse" data-target="#collapse2-lft" aria-expanded="false" aria-controls="collapse2-lft">
      Indirizzo
    </button>
  </div>
  <div id="collapse2-lft" class="collapse" role="tabpanel" aria-labelledby="heading2-lft">
    <div class="collapse-body">
      include esempi-lombardia/indirizzo.html
    </div>
  </div>
  <div class="collapse-header" id="heading3-lft">
    <button data-toggle="collapse" data-target="#collapse3-lft" aria-expanded="false" aria-controls="collapse3-lft">
      Trasporti
    </button>
  </div>
  <div id="collapse3-lft" class="collapse" role="tabpanel" aria-labelledby="heading3-lft">
    <div class="collapse-body">
       include esempi-lombardia/toggles.html
    </div>
  </div>
</div>
{% endhighlight %}

Per maggiori dettagli sui metodi di implementazione si veda la relativa **[documentazione tecnica]({{ site.baseurl }}/docs/componenti/collapse/#implementazione)**.

{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:
- **[Gruppi di elementi richiudibili]({{ site.baseurl }}/docs/componenti/collapse/#gruppi-di-elementi-richiudibili)**
{% endcapture %}{% include callout.html content=callout type="info" %}
