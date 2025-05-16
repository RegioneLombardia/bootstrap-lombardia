---
layout: it25_docs
title: Header
description: Header applicativi Web.
group: componenti-principali
toc: true
---

La componente **Header** - posta sempre nella testata del layout - si ottiene dall’unione di due altre componenti: **topbar** e **barra istituzionale**.

La **topbar**, la barra soprastante l’header, verrà sempre utilizzata come componente identitaria di Regione Lombardia e, anche nel caso non contenga alcuna funzionalità, essa sarà presente sotto forma di banda colorata. In alcuni casi tale componente può essere impiegata come toolbar di servizio per l’inserimento di link quali **login**, **cambio lingua**, **assistenza** ecc.

La componente **barra istituzionale**, fornita in diverse varianti, applicabili a seconda del dato contesto, conterrà menu di navigazione (hamburger o dropdown), loghi e titolazioni dei servizi.

**N.B.**: I link di servizio e le informazioni di governance relative al servizio non sono mai presenti nell’header, ma sono contenute **unicamente nel footer**.

---

### Header Base

In questo esempio è riportato un header base con topbar, barra istituzionale, logo di Regione Lombardia e nome del servizio.
<div class="bd-example">
{% include html_docs/header/topbar_base.html %}
{% include html_docs/header/header_base.html %}
</div>
{% highlight html %}
{% include html_docs/header/topbar_base.html %}
{% include html_docs/header/header_base.html %}
{% endhighlight %}

---

## Header con topbar di servizio e search field

La topbar può accogliere informazioni come ad esempio l’accesso utente.  
Nel caso in cui il servizio lo richieda, è possibile aggiungere un campo di ricerca generico all’interno della barra istituzionale nella parte destra.

<div class="bd-example">
{% include html_docs/header/topbar_login.html %}
{% include html_docs/header/header_search.html %}
</div>
{% highlight html %}
{% include html_docs/header/topbar_login.html %}
{% include html_docs/header/header_search.html %}
{% endhighlight %}

---

## Header con accesso effettuato e dropdown

Il menu dropdown può contenere informazioni utili per il login, il logout e la gestione del profilo utente e delle impostazioni. Queste info possono essere relative all’utente e all’operatore che sta utilizzando il servizio.

La dimensione del menu dropdown può variare a seconda delle esigenze, come ad esempio per accogliere una maggiore lunghezza delle voci al suo interno.

<div class="bd-example">
{% include html_docs/header/topbar_dropdown.html %}
<div class="it-header-center-wrapper it25-barra-ist">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="it-header-center-content-wrapper">
          <div class="it-brand-wrapper">
            <a href="#">
              <img src="{{ site.baseurl }}/dist/assets/img/logo-rl.png" alt="logo regione lombardia" class="it25-header-logo d-none d-md-block" />
              <div class="it-brand-text">ACRONIMO Nome applicativo</div>
            </a>
          </div>
          <div class="it-right-zone">
            <form>
              <div class="it-search-wrapper">
                <input id="search-input98" class="form-control d-none d-lg-flex mr-sm-2 ml-auto" type="search" placeholder="Cerca..." aria-label="Testo per ricerca">
                  <button class="btn p-0 m-1" type="submit" aria-label="Esegui ricerca">
                    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-search"></use></svg>
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{% highlight html %}
{% include html_docs/header/topbar_dropdown.html %}
{% include html_docs/header/header_search.html %}
{% endhighlight %}

---

## Bottone hamburger

Normalmente la pagina di un applicativo ha un menù di navigazione principale, orizzontale o verticale.

Su schermi di piccole dimensioni tale menù scompare per ragioni di spazio.  
Compare però un *bottone hamburger* per poter aprire e chiudere il menù.

Il bottone hamburger:
{% highlight html %}
<div class="it25-hamburger-btn-wrapper">
  <button
    id="btn-hamburger"
    class="custom-navbar-toggler btn btn-xs"
    type="button"
    aria-controls="nav1"
    aria-expanded="false"
    aria-label="Mostra/Nascondi la navigazione"
    data-bs-toggle="navbarcollapsible"
    data-bs-target="#nav1"
  >
    <svg class="icon icon-primary">
      <use xlink:href="/dist/svg/sprites.svg#it-burger"></use>
    </svg>
  </button>
</div>
{% endhighlight %}

**deve** essere inserito nell*header* all’interno di: `<div class="it-brand-wrapper">`  
prima del link contenente il logo della Regione Lombardia.

In questo modo comparirà automaticamente, sugli schermi di piccole dimensioni, a sinistra nella barra istituzionale.

A seconda del tipo di menù (orizzontale, verticale o sidebar) cambiano i valori degli attributi:  
* `class`
* `data-bs-toggle`

In particolare, **solo per il menu verticale**, per attivare il funzionamento, è necessario invocare la funzione :
```
bootstrap.it25Header()
```

## Esempi

Per vedere i dettagli delle diverse tipologie di menù di navigazione e bottone hamburger, e il loro funzionamento all'interno di pagine complete, si veda la pagina delgli [Esempi]({{ site.baseurl }}/docs/it25/esempi/).

I dettagli tecnici del codice sono spiegati nei relativi link di **codice commentato**. 
