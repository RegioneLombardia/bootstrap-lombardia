---
layout: it25_docs
title: Header
description: Header applicativi Web.
group: componenti-principali
toc: true
---

<!-- Style override for Documentation purposes -->
<style>
  @media (max-width: 991px) {
    .it-header-slim-wrapper .it-header-slim-wrapper-content a.btn-full {
      margin-top: -7px;
    }
  }
  .it25-hamburger-btn-wrapper {
    display: none;
  }
</style>

<div class="bd-example">
{% include esempi-lombardia/header.html %}
</div>

E' composto da due parti, entrambe obbligatorie:
1. top bar
2. barra istituzionale

## Top bar
Può contenere voci di servizio quali: Login/Logout (quindi la gestione del profilo utente tramite le voci del dropdown), Scelta lingua, Assistenza.

<div class="bd-example">
{% include esempi-lombardia/topbar.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/topbar.html %}
{% endhighlight %}

Nel momento in cui la pagina viene caricata a video, la barra è alta 58 pixel.  
Rimane fissa in cima alla pagina quando questa scorre verso l'alto.

Su smartphone
1. Appare il logo della Regione Lombardia in negativo
2. Le voci servizio sono ridotte a icona

Su Desktop
1. Il logo della Regione Lombardia in negativo non è visualizzato
2. Le voci di servizio hanno la dicitura

Quando la pagina scorre verso il basso:
- le voci servizio e l'eventuale logo in negativo scompaiono
- l'altezza si riduce a 20 pixel

### Top bar sottile
Nel caso in cui non si abbiano voci di servizio da inserire, la top bar può essere ridotta ad un'altezza di 20 pixel già alla comparsa della pagina, aggiungendo la classe `thin` al `div` principale del componente.

<div class="bd-example">
{% include esempi-lombardia/topbar_thin.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/topbar_thin.html %}
{% endhighlight %}


Su smartphone la top bar sottile inizialmente apparirà comunque alta 56 pixel per mostrare il logo della Regione Lombardia (che non è mostrato nella barra istituzionale per ragioni di spazio), per poi restringersi allo scorrimento verso il basso della pagina.


## Barra istituzionale

**Deve** contenere il **logo** di Regione Lombardia e il **nome dell'applicativo**, preceduto dall' **acronimo** se esiste.  
**Può** contenere l'**hamburger menu** a sinistra del logo di Regione Lombardia e il **campo di ricerca** a destra.

L'altezza iniziale della barra è di 94 pixel su schermi grandi, di 80 su schermi piccoli.  
A scorrimento verso il basso rimane fissa posizionandosi sotto la top bar e si restringe a 50 pixel.

Su smartphone
1. Il logo della Regione Lombardia scompare (viene sostituito dal logo in negativo sulla top bar)
2. Il nome dell'applicativo si riduce di dimensione
3. L'eventuale campo di ricerca è ridotto a icona
4. Compare il pulsante hamburger per l'apertura del menù orizzontale o della sidebar.

A scorrimento in basso
1. Il logo della Regione compare rimpicciolito (quello nella topbar scorre verso l'alto e non è più visibile)
2. Il nome dell'applicativo viene ulteriormente ridotto di dimensione
3. Il campo di ricerca scompare
4. Il pulsante hamburger è leggermente rimpicciolito
5. L'altezza complessiva della barra istituzionale diminuisce

Su desktop
1. Il Logo della Regione è visualizzato in grande
2. Il nome dell'applicativo ha un font di dimensioni maggiori
3. Il campo di ricerca è mostrato.
4. Il pulsante hamburger non compare in quanto il menù orizzontale, o la sidebar, è mostrato.

A scorrimento in basso
1. Il Logo della Regione rimpicciolisce
2. Il nome dell'applicativo rimpicciolisce
3. Il campo di ricerca rimane invariato
4. L'altezza complessiva della barra diminuisce.

Nota: per poter meglio rendersi conto del comportamento della top bar e della barra istituzionale è utile richiamare una delle schermate composte, per esempio quella della **[Tabella complessa]({{ site.baseurl }}/docs/it25/esempi/pag_tabella/)**.

<div class="bd-example">
{% include esempi-lombardia/barra_istituzionale.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/barra_istituzionale.html %}
{% endhighlight %}

Il `<div>` principale è caratterizzato dalle classi `it-header-center-wrapper` e `it25-barra-ist`.  
Al suo interno il `div` con classe `it-header-center-content-wrapper` contiene due `div` che posizionano il loro contenuto verso il lato sinistro e destro della barra, che hanno rispettivamente le classi: `it-brand-wrapper` e `it-right-zone`.  

In  `it-brand-wrapper` oltre al logo della Regione Lombardia e al nome dell'applicativo, sono contenuti 2 bottoni che appaiono solo sugli schermi di minori dimensioni, alternativamente per aprire o chiudere il **[menù orizzontale]({{ site.baseurl }}/docs/it25/componenti-principali/menu-orizzontale/)** o la **[sidebar]({{ site.baseurl }}/docs/it25/componenti-principali/sidebar/)** eventualmente presenti nella pagina.



### Bottone hamburger

Il bottone *hamburger* compare nella *barra istituzionale* a sinistra del logo di Regione Lombardia.  
Una volta premuto il bottone l'icona *hamburger* è sostituita da una "X" per segnalare che premendolo nuovamente il menù (o la sidebar) scomparirà.

Il menu orizzontale è visualizzato immediatamente se la finestra ha **[dimensioni]({{ site.baseurl }}/docs/organizzare-gli-spazi/griglie/#le-opzioni)** `lg` o `xl`.    
Quindi il bottone *hamburger* compare quando le dimensioni della pagina sono `xs` o `sm` o `md`.  
La sidebar invece compare anche sugli schermi `md` e, di conseguenza, il relativo bottone *hamburger* solo per pagine `xs` o `sm`.  

Per ottenere questo comportamento, la struttura HTML dell'header della pagina deve essere di questo tipo:

Per il menù orizzontale
{% highlight html %}
<header class="it25-menu"> (oppure semplicemente <header>)
  . . . top bar . . .
  . . . barra istituzionale . . .
  . . . barra utente (facoltativa) . . .
  . . . menu orizzontale . . .
</header>
{% endhighlight %}

Per la sidebar
{% highlight html %}
<header class="it25-sidebar">
  . . . top bar . . .
  . . . barra istituzionale . . .
  . . . barra utente (facoltativa) . . .
</header>
{% endhighlight %}

La *sidebar* poi va inserita nel `body` della pagina (vedi esempio **[pagina con sidebar]({{ site.baseurl }}/docs/it25/esempi/pag_sidebar/)**).

Nel caso in cui non si abbiano né l'una né l'altra, e quindi il bottone *hamburger* non vada mai visualizzato, la struttura deve essere:
{% highlight html %}
<header class="it25-none">
  . . . top bar . . .
  . . . barra istituzionale . . .
  . . . barra utente (facoltativa) . . .
</header>
{% endhighlight %}


### Due loghi
Nella *barra istituzionale* è possibile inserire un secondo logo utilizzando un tag `img` con le classi `it25-header-logo d-none d-md-block`.  
Comparirà accanto a quello di Regione Lombardia e avrà lo stesso comportamento responsivo.

E' possibile vedere un esempio nella pagina **[form]({{ site.baseurl }}/docs/it25/esempi/pag_form/)**.
