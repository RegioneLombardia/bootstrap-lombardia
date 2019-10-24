---
layout: docs
title: Header
description: Header applicativi Web.
group: componenti-lombardia
toc: true
---

<!-- Style override for Documentation purposes -->
<style>
  @media (max-width: 991px) {
    .it-header-slim-wrapper .it-header-slim-wrapper-content a.btn-full {
      margin-top: -7px;
    }
  }
</style>


E' composto da tre parti:
1. top bar
2. barra istituzionale
3. menu principale

## Top bar
E' **obbligatoria**.

Può contenere voci di servizio quali: Home, Contatti, Assistenza, Numero verde, Login/Logout, Impostazioni, Scelta lingua, ecc.

<div class="bd-example">
{% include esempi-lombardia/topbar.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/topbar.html %}
{% endhighlight %}


## Barra istituzionale

**Deve** contenere il **logo** e il **nome dell'applicativo**, preceduto dall' **acronimo** se esiste.  
**Può** contenere il **campo di ricerca** a destra e l'**hamburger menu** a sinistra che comanda la comparsa del [menù principale](#menù-principale).  

Restringendosi le dimensioni dello schermo, **scompaiono**:
1. il **logo**, che però appare nella *top bar*
2. il **campo di ricerca**, che viene sostituito da un pulsante per farlo comparire tra la *barra istituzionale* e il *menù principale*.

Inoltre, in caso di schermi **molto piccoli**, *acronimo* e *nome dell'applicativo* vengono disposti su due righe.

Scorrendo la pagina verso il basso, la bassa istituzionale rimane fissa in alto nello schermo, posizionata sotto la *top bar*, si restringe leggermente ed anche il logo rimpicciolisce.

<div class="bd-example">
{% include esempi-lombardia/barra_istituzionale.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/barra_istituzionale.html %}
{% endhighlight %}

E' composta da due `<div>` principali:  
Il primo è caratterizzato dalle classi `it-header-center-wrapper it-small-header theme-light barra-ist`, contiene il corpo dell'header.  
Il secondo è un `container-fluid` di una riga contenente il campo di ricerca visualizzabile a comando sugli schermi piccoli.

