---
layout: it25_docs
title: Header
description: Header applicativi Web.
group: navigation
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

<header class="it-header-wrapper">
  {% include html_docs/header/topbar.html %}
  <div class="it-nav-wrapper">
    {% include html_docs/header/center_menu-oriz.html logo="yes" %}
    {% include html_docs/header/navbar_oriz.html %}
  </div>
</header>
<br/>
<div class="exclude-a11y-check">
<header class="it-header-wrapper" style="position: static">
  {% include html_docs/header/topbar.html %}
  <div class="it-nav-wrapper">
    {% include html_docs/header/center_menu-oriz.html textlogo="yes" %}
    {% include html_docs/header/navbar_oriz.html %}
  </div>
</header>
</div>
<br/>
<br/>

---
## Hamburger menu

Se le voci di menu di primo livello sono più di 5, vanno collocate in un menù verticale a comparsa, comandato da un *hamburger button*.
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

---
## Accesso area privata

La **topbar** può essere impiegata come toolbar di servizio inserendo voci quali **login**, **cambio lingua**, **assistenza** ecc.

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

