---
layout: it25_docs
title: Header
description: Header applicativi Web.
group: navigazione
toc: true
---

Area di intestazione principale di un sito o servizio che presenta l'identità visiva e il menu di navigazione primaria.

Il logotipo di Regione Lombardia si trova nella *topbar* per lasciare spazio al logo dell'applicativo.  
In questo modo la brand identity del sito rimane riconoscibile sottolineando la sua affiliazione con l'ecosistema digitale.

---
## Navigazione orizzontale

Se le voci di menu di primo livello non sono più di 5, sono disposte orizzontalmente nell'header.  
Solo se necessario l'header può ospitare fino a un massimo di tre logotipi.  
In caso l'applicativo non abbia un logo può essere usato un acronimo e/o il nome dell'applicativo.

<div class="exclude-a11y-check">
<header class="it-header-wrapper">
  {% include html_docs/header/topbar.html %}
  <div class="it-nav-wrapper">
    {% include html_docs/header/center_menu-oriz.html logo="yes" %}
    {% include html_docs/header/navbar_oriz.html navor-id="dochead01" %}
  </div>
</header>
</div>
<br/>
<div class="exclude-a11y-check">
<header class="it-header-wrapper" style="position: static">
  {% include html_docs/header/topbar.html %}
  <div class="it-nav-wrapper">
    {% include html_docs/header/center_menu-oriz.html textlogo="yes" %}
    {% include html_docs/header/navbar_oriz.html navor-id="dochead02"%}
  </div>
</header>
</div>
<br/>
<br/>

### Menu Orizzontale
Il **Menu orizzontale** è il menu principale di navigazione. Esso può contenere, oltre a _semplici link_, il _menu dropdown_ ed il _megamenu_.

Su **desktop** il menu è sempre visualizzato e a scorrimento in basso e rimane posizionato fisso sotto la barra istituzionale. Se la pagina scorre, il menu si sposta di conseguenza, rimanendo sotto la barra istituzionale.  
Questa tipologia di menu viene preferita al _menu verticale_ quando **le voci del menu sono poche e le label sono brevi**.

Su **smartphone** la visualizzazione del menu orizzontale è comandata dal bottone hamburger nella barra istituzionale e le voci sono visualizzate in verticale per questioni di spazio. In questo caso il pannello comparirà con uno scorrimento laterale da sinistra ed oscuramento della pagina sottostante.

Si vedano le voci **menu orizzontale** e **form** nella pagina degli [esempi]({{ site.baseurl }}/docs/it25/esempi/) per una migliore comprensione del possibile utilizzo.

<div class="exclude-a11y-check">
{% comment %}Example name: IT25 Menu orizzontale{% endcomment %}
{% capture example %}
  {% include html_docs/header/navbar_oriz.html navor-id="dochead03" %}
{% endcapture %}{% include example.html content=example %}
</div>

---
## Hamburger button

Se le voci di menu di primo livello sono più di 5, vanno collocate in un **menù verticale a comparsa**, comandato da un *hamburger button*.
<div class="exclude-a11y-check">
<header class="it-header-wrapper" style="position: static">
  {% include html_docs/header/topbar.html dropdowns="yes" %}
  {% include html_docs/header/center_menu-vert.html logo="yes" %}
</header>
<br/>
<header class="it-header-wrapper">
  {% include html_docs/header/topbar.html dropdowns="yes" %}
  {% include html_docs/header/center_menu-vert.html textlogo="yes" %}
</header>
</div>
<br/>
<br/>

### Menu Verticale
Il **Menu verticale** può incorporare _liste semplici_ e _liste innestate_.  

Si utilizza quando si ha l’esigenza di trattare in forma di lista le voci del menu, quindi all’interno di applicativi con **molte sezioni** cui si deve dare accesso in qualsiasi punto della navigazione.  
Lo si preferisce per garantire la leggibilità delle voci nella lista, che può scorrere per una visualizzazione completa.

Questo tipo di menu è sempre **collocato a sinistra dello schermo**; può essere utilizzato in modalità a scomparsa o *sidebar*.  
Si vedano le voci **menu verticale** e **sidebar** nella pagina degli [esempi]({{ site.baseurl }}/docs/it25/esempi/) per una migliore comprensione del possibile utilizzo.


#### Semplice

{% comment %}Example name: IT25 Menu verticale semplice{% endcomment %}
{% capture example %}
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 it25-sidebar">
      {% include html_docs/menu-verticale/menu-verticale-semplice.html %}
      </div>
    </div>
  </div>
{% endcapture %}{% include example.html content=example %}


#### Annidato

{% comment %}Example name: IT25 Menu verticale annidato{% endcomment %}
{% capture example %}
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 it25-sidebar">
        {% include html_docs/menu-verticale/menu-verticale-annidato.html %}
      </div>
    </div>
  </div>
{% endcapture %}{% include example.html content=example %}




---
## Accesso area privata

La **topbar** può essere impiegata come toolbar di servizio inserendo voci quali **login**, **cambio lingua**, **assistenza** ecc.

<div class="exclude-a11y-check">
<header class="it-header-wrapper">
  {% include html_docs/header/topbar.html dropdowns="yes" language="yes" access="yes" %}
  <div class="it-nav-wrapper">
    {% include html_docs/header/center_menu-oriz.html logo="yes" %}
  </div>
</header>
<br/>
<header class="it-header-wrapper">
  {% include html_docs/header/topbar.html dropdowns="yes" language="yes" logged="yes" %}
  <div class="it-nav-wrapper">
    {% include html_docs/header/center_menu-oriz.html logo="yes" %}
  </div>
</header>
</div>

Il menu dropdown può contenere link utili per il logout e la gestione del profilo e delle impostazioni utente.  

<br/>
<br/>

---
## Comportamento scroll

Allo scroll down:
1. la topbar sparisce
2. il center header
  - se il menù è orizzontale, sparisce  
    e logo e pulsante cerca vengono clonati nella navbar orizzontale
  - se il menu è verticale, diminuisce in altezza.

Scrollando al top della pagina l'header torna alla versione completa.

Per vedere il comportamento dell'header e dei diversi tipi di menù di navigazione, e il loro funzionamento all'interno di pagine complete, si vedano le pagine degli esempi.

---
## Esempi

**Nota:**  
Per ogni link si apre un tab separato in cui compare una pagina intera di esempio.  
Può essere utile "staccarla" dalle altre per provare anche vedere la responsività della stessa quando si variano le dimensioni della finestra portandole a livello tablet e smartphone.

<a href="{{ site.baseurl }}/docs/it25/esempi/menu-oriz/" target="_blank">menu orizzontale</a>  
<a href="{{ site.baseurl }}/docs/it25/esempi/menu-vert/" target="_blank">menu verticale</a>  
<a href="{{ site.baseurl }}/docs/it25/esempi/sidebar/" target="_blank">sidebar</a>  


---

## Utilizzo del componente
L'header è costruito sulla base del componente [header di bootstrap-italia]({{ site.baseurl }}/docs/menu-di-navigazione/header/) che è composto da tre parti:
1. **topbar** equivalente allo *slim header*
2. **header centrale** 
3. **navbar** il menu di navigazione che può essere *orizzontale*, *verticale* o *sidebar*.

### Sticky header
Il Design System di Regione Lombardia prevede l'utilizzo dell'header di tipo *sticky*.  
Quindi gli attributi html del tag `<header>` tipicamente sono:

{% highlight html %}
{% raw %}
<header class="it-header-wrapper it-header-sticky"
  data-bs-position-type="fixed"
  data-bs-toggle="sticky"
  data-bs-target="#header-nav-wrapper"
  data-bs-sticky-class-name="is-sticky">
{% endraw %}
{% endhighlight %}

cui segue, a seconda del tipo di menù utilizzato:

#### orizzontale

{% highlight html %}
{% raw %}
  {% include html_docs/header/topbar.html %}
  <div class="it-nav-wrapper">
    {% include html_docs/header/center_menu-oriz.html %}
    {% include html_docs/header/navbar_oriz.html %}
  </div>
</header>
{% endraw %}
{% endhighlight %}

#### verticale

{% highlight html %}
{% raw %}
   {% include html_docs/header/topbar.html %}
   {% include html_docs/header/center_menu-vert.html %}
    <div id="it25-menu-vert">
     {% include html_docs/menu-verticale/menu-verticale-annidato.html %}
    </div>
</header>
{% endraw %}
{% endhighlight %}


#### sidebar

{% highlight html %}
{% raw %}
   {% include html_docs/header/topbar.html %}
   {% include html_docs/header/center_sidebar.html %}
</header>

<main>
  <div class="container-fluid">
    <div class="row flex-xl-nowrap">
      <div class="col-12 col-md-3 col-xl-2 it25-sidebar">
      {% include html_docs/menu-verticale/menu-verticale-annidato.html %}
      </div>
      <div class="col-12 col-md-9">
        <h1>Nome form</h1>
        <form class="my-5 px-5" id="justValidate" action="index.html" method="post">
. . .
{% endraw %}
{% endhighlight %}

In questo caso il *menu-verticale-annidato* è inserito nel `<main>` della pagina.

---
### Topbar
La stuttura html della topbar è la seguente:

{% highlight html %}
{% include html_docs/header/topbar.html %}
{% endhighlight %}


All'interno del `<div class="it-header-slim-right-zone">` vanno posti i dropdown adatti all'applicativo:

{% highlight html %}
{% include html_docs/header/topbar_dropdowns.html language="yes" access="yes" logged="yes" %}
{% endhighlight %}


---
### Center
Il codice per la parte centrale cambia leggermente a seconda del tipo di menù di navigazione pincipale scelto.

#### orizzontale
{% highlight html %}
{% include html_docs/header/center_menu-oriz.html logo="yes" textlogo="yes" %}
{% endhighlight %}

#### verticale
{% highlight html %}
{% include html_docs/header/center_menu-vert.html logo="yes" textlogo="yes" %}
{% endhighlight %}

#### sidebar
{% highlight html %}
{% include html_docs/header/center_sidebar.html logo="yes" textlogo="yes" %}
{% endhighlight %}


**Nota**: Nel caso non esistano né logo né acronimo, e quindi l'unica cosa che compare nel *center* sia il nome dell'applicativo, vanno tolte le classi `d-none d-md-inline` dal tag  
```
<span class="it25-app-name d-inline">Nome applicativo</span>
```
e sostituite con `d-inline`, in modo che il nome applicativo compaia anche sugli schermi di piccole dimensioni.  
Naturalmente, se il nome apllicativo è molto lungo, si può decidere di visualizzarne, sugli schermi piccoli, una versione abbreviata sempre giocando sulle classi **[{{ site.data.short.link }}Display]({{ site.baseurl }}/docs/organizzare-gli-spazi/display/)**

## Attivazione 
**Per attivare il funzionamento** di tutti i tipi di menù, **è necessario invocare la funzione** :
```
bootstrap.it25Header()
```

## Breaking change
{% capture callout %}
**Nuovo Header**  
- Cambiamento struttura
- Comportamento di default: riduzione dimensioni allo scroll verso il basso.
- Duplicazione del logo applicativo nella navbar del menu orizzontale.
{% endcapture %}{% include callout-breaking.html content=callout version="2.7.0" type="danger" %}
