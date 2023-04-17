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

### Header Base

In questo esempio è riportato un header base con topbar, barra istituzionale, logo di Regione Lombardia e nome del servizio.

{% include html_docs/header/header_base.html %}
{% highlight html %}
{% include html_docs/header/header_base.html %}
{% endhighlight %}

## Header con topbar di servizio e search field

La topbar può accogliere informazioni come ad esempio l’accesso utente. Nel caso in cui il servizio lo richieda, è possibile aggiungere un campo di ricerca generico all’interno della barra istituzionale nella parte destra.

{% include html_docs/header/header_topbar_search.html %}
{% highlight html %}
{% include html_docs/header/header_topbar_search.html %}
{% endhighlight %}

## Header con accesso effettuato e dropdown

Il menu dropdown può contenere informazioni utili per il login, il logout e la gestione del profilo utente e delle impostazioni. Queste info possono essere relative all’utente e all’operatore che sta utilizzando il servizio. La dimensione del menu dropdown può variare a
seconda delle esigenze, come ad esempio per accogliere una maggiore lunghezza delle voci al suo interno.

<div class="bd-example">
{% include html_docs/header/header_login_dropdown.html %}
</div>
{% highlight html %}
{% include html_docs/header/header_login_dropdown.html %}
{% endhighlight %}

## Header hamburger menu

L’hamburger menu deve essere posizionato appena sotto l’header a sinistra e si richiama cliccando sulla relativa icona. Esso si utilizza quando si ha l’esigenza di trattare in forma di lista le voci del menu, quindi all’interno di applicativi con molte sezioni cui si deve dare accesso in qualsiasi punto della navigazione. E’ possibile che al mouse over lo stato delle voci cambi. In questo caso le variabili valutabili sono: voce sottolineata e colore di background grigio chiaro.

<div class="bd-example">
{% include html_docs/header/header_hamburger.html %}
</div>
{% highlight html %}
{% include html_docs/header/header_hamburger.html %}
{% endhighlight %}
