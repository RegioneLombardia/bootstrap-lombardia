---
layout: it25_docs
title: Header
description: Header applicativi Web.
group: componenti-principali
toc: true
---

Area di intestazione principale di un sito o servizio che presenta l'identità visiva e il menu di navigazione primaria.

La **topbar**, la barra verde soprastante, verrà sempre utilizzata come componente identitaria di Regione Lombardia e, anche nel caso non contenga alcuna funzionalità, essa sarà presente sotto forma di banda colorata  **contenente il logo di Regione Lombardia**.  
Quando serve il componente può essere impiegato come toolbar di servizio inserendo voci quali **login**, **cambio lingua**, **assistenza** ecc.

L' **header centrale** principale, contiene il logo dell'applicativo, se esiste, e/o Acronimo e Nome dell'applicativo.

La **barra di navigazione** orizzontale contiene le voci di menu di primo livello.  
Quando queste sono però più di 5, meglio utilizzare un **menu verticale** a comparsa comandato da un bottone hamburger alla sinistra dell'header.

---

### Navigazione orizzontale

In questo esempio è riportato un header base con topbar, barra istituzionale, logo di Regione Lombardia e nome del servizio.

<header class="it-header-wrapper">
{% include html_docs/header/topbar.html %}
<div class="it-nav-wrapper">
{% include html_docs/header/center_menu-oriz.html %}
{% include html_docs/header/navbar_oriz.html %}
</div>
</header>

{% highlight html %}
<header class="it-header-wrapper">
{% include html_docs/header/topbar.html %}
<div class="it-nav-wrapper">
{% include html_docs/header/center_menu-oriz.html %}
{% include html_docs/header/navbar_oriz.html %}
</div>
</header>
{% endhighlight %}
---

## Header con topbar di servizio e search field

La topbar può accogliere informazioni come ad esempio l’accesso utente.  
Nel caso in cui il servizio lo richieda, è possibile aggiungere un campo di ricerca generico all’interno della barra istituzionale nella parte destra.
{% raw %}
{% comment %}Example name: IT25 Header Search{% endcomment %}
{% capture example %}
{% include html_docs/header/topbar_login.html %}
{% include html_docs/header/header_search.html %}
{% endcapture %}{% include example.html content=example %}
{% endraw %}
---

## Header con accesso effettuato e dropdown

Il menu dropdown può contenere informazioni utili per il login, il logout e la gestione del profilo utente e delle impostazioni. Queste info possono essere relative all’utente e all’operatore che sta utilizzando il servizio.

La dimensione del menu dropdown può variare a seconda delle esigenze, come ad esempio per accogliere una maggiore lunghezza delle voci al suo interno.
{% raw %}
{% comment %}Example name: IT25 Header Topbar Dropdown{% endcomment %}
{% capture example %}
{% include html_docs/header/topbar_dropdown.html %}
{% include html_docs/header/header_search.html %}
{% endcapture %}{% include example.html content=example %}
{% endraw %}
---

## Header con logo negativo

Nei casi in cui deve essere presente logo specifico per l'applicativo, il logo di Regione Lombardia nella topbar deve essere visibile qualunque sia la dimensione dello schermo.
{% raw %}
{% comment %}Example name: IT25 Header Topbar Logo Negativo Logo{% endcomment %}
{% capture example %}
{% include html_docs/header/topbar_logo-neg.html %}
{% include html_docs/header/header_indip_logo.html %}
{% endcapture %}{% include example.html content=example %}
{% endraw %}

La topbar con il logo negativo può essere utilizzata anche con il solo nome dell'applicativo
{% raw %}
{% comment %}Example name: IT25 Header Topbar Logo Negativo Testo{% endcomment %}
{% capture example %}
{% include html_docs/header/topbar_logo-neg.html %}
{% include html_docs/header/header_indip_text.html %}
{% endcapture %}{% include example.html content=example %}
{% endraw %}
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
  in particolare **per il menù verticale va omesso** `custom-navbar-toggler`
* `data-bs-toggle`  
  sia per il **menù verticale** che per la **sidebar** va impostato `collapse` invece di *navbarcollapsible*

In particolare, **solo per il menu verticale**, per attivare il funzionamento, è necessario invocare la funzione :
```
bootstrap.it25Header()
```

## Esempi

Per vedere i dettagli delle diverse tipologie di menù di navigazione e bottone hamburger, e il loro funzionamento all'interno di pagine complete, si veda la pagina delgli [Esempi]({{ site.baseurl }}/docs/it25/esempi/).

I dettagli tecnici del codice sono spiegati nei relativi link di **codice commentato**. 
