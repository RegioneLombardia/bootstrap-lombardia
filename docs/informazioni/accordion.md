---
layout: docs
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
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading1c">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1c" aria-expanded="true" aria-controls="collapse1c">
       Account
      </button>
    </h2>
    <div id="collapse1c" class="accordion-collapse collapse show" role="region" aria-labelledby="heading1c">
      <div class="accordion-body">
       {% include esempi-lombardia/account_posta.html %}
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading2c">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2c" aria-expanded="false" aria-controls="collapse2c">
         Indirizzo
      </button>
    </h2>
    <div id="collapse2c" class="accordion-collapse collapse" role="region" aria-labelledby="heading2c">
      <div class="accordion-body">
       {% include esempi-lombardia/indirizzo.html %}
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading3c">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3c" aria-expanded="false" aria-controls="collapse3c">
      Trasporti
      </button>
    </h2>
    <div id="collapse3c" class="accordion-collapse collapse" role="region" aria-labelledby="heading3c">
      <div class="accordion-body">
       {% include esempi-lombardia/toggles.html %}
      </div>
    </div>
  </div>
</div>

{% highlight html %}

<div class="accordion" id="collapseExample">
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading1c">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1c" aria-expanded="true" aria-controls="collapse1c">
      Account
      </button>
    </h2>
    <div id="collapse1c" class="accordion-collapse collapse show" role="region" aria-labelledby="heading1c">
      <div class="accordion-body">
          {% include esempi-lombardia/account_posta.html %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading2c">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2c" aria-expanded="false" aria-controls="collapse2c">
       Indirizzo
      </button>
    </h2>
    <div id="collapse2c" class="accordion-collapse collapse" role="region" aria-labelledby="heading2c">
      <div class="accordion-body">
        {% include esempi-lombardia/indirizzo.html %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading3c">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3c" aria-expanded="false" aria-controls="collapse3c">
       Trasporti
      </button>
    </h2>
    <div id="collapse3c" class="accordion-collapse collapse" role="region" aria-labelledby="heading3c">
      <div class="accordion-body">
        {% include esempi-lombardia/toggles.html %}
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

## Apertura singola

Aggiungendo ad ogni elemento `.accordion-collapse` l'attributo `data-parent` con il relativo _ID_ del contenitore padre, l'apertura di un pannello provocherà la chiusura degli altri.

<div class="bd-example"  id="accordionExample1">
<div class="accordion-item">
    <h2 class="accordion-header " id="heading1">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
       Account
      </button>
    </h2>
    <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading1">
      <div class="accordion-body">
           {% include esempi-lombardia/account_posta2.html %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
      Indirizzo
      </button>
    </h2>
    <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading2">
      <div class="accordion-body">
         {% include esempi-lombardia/indirizzo2.html %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading3">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
      Trasporti
      </button>
    </h2>
    <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading3">
      <div class="accordion-body">
        {% include esempi-lombardia/toggles2.html %}
      </div>
    </div>
  </div>
</div>

{% highlight html %}

<div class="accordion" id="accordionExample1">
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading1">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
        Account
      </button>
    </h2>
    <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading1">
      <div class="accordion-body">
         {% include esempi-lombardia/account_posta2.html %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
       Indirizzo
      </button>
    </h2>
    <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading2">
      <div class="accordion-body">
        {% include esempi-lombardia/indirizzo2.html %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading3">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
        Trasporto
      </button>
    </h2>
    <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading3">
      <div class="accordion-body">
       {% include esempi-lombardia/toggles2.html %}
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

## Icona a sinistra

Aggiungendo la classe `.accordion-left-icon` ad `.accordion`, si ottiene una variante in cui l’icona chevron che indica lo stato di apertura è sostituita da segni meno/più allineati a sinistra del titolo dell’header.

<div class="bd-example accordion  accordion-left-icon" id="accordionExampleLft">
   <div class="accordion-item">
    <h2 class="accordion-header " id="heading1l">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1l" aria-expanded="true" aria-controls="collapse1l">
      Account
      </button>
    </h2>
    <div id="collapse1l" class="accordion-collapse collapse show" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading1l">
      <div class="accordion-body">
        {% include esempi-lombardia/account_posta3.html %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading2l">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2l" aria-expanded="false" aria-controls="collapse2l">
      Indirizzo
      </button>
    </h2>
    <div id="collapse2l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading2l">
      <div class="accordion-body">
         {% include esempi-lombardia/indirizzo3.html %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading3l">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3l" aria-expanded="false" aria-controls="collapse3l">
        Trasporti
      </button>
    </h2>
    <div id="collapse3l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading3l">
      <div class="accordion-body">
         {% include esempi-lombardia/toggles3.html %}
      </div>
    </div>
  </div>
</div>

{% highlight html %}

<div class="accordion accordion-left-icon" id="accordionExampleLft">
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading1l">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1l" aria-expanded="true" aria-controls="collapse1l">
       Account
      </button>
    </h2>
    <div id="collapse1l" class="accordion-collapse collapse show" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading1l">
      <div class="accordion-body">
        {% include esempi-lombardia/account_posta3.html %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading2l">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2l" aria-expanded="false" aria-controls="collapse2l">
        Indirizzo
      </button>
    </h2>
    <div id="collapse2l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading2l">
      <div class="accordion-body">
        {% include esempi-lombardia/indirizzo3.html %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header " id="heading3l">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3l" aria-expanded="false" aria-controls="collapse3l">
        Trasporti
      </button>
    </h2>
    <div id="collapse3l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading3l">
      <div class="accordion-body">
         {% include esempi-lombardia/toggles3.html %}
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

Per maggiori dettagli sui metodi di implementazione si veda la relativa **[documentazione tecnica]({{ site.baseurl }}/docs/componenti/collapse/#implementazione)**.

{% capture callout %}

#### <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti

Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:

- **[Gruppi di elementi richiudibili]({{ site.baseurl }}/docs/componenti/collapse/#gruppi-di-elementi-richiudibili)**
  {% endcapture %}{% include callout.html content=callout type="info" %}
