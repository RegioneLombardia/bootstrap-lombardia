---
layout: it25_docs
title: Gestione Loghi Multipli
group: componenti-principali
toc: false
---

Nel caso in cui si necessiti di inserire loghi di _main sponsor o partner tecnici_, essi possono essere posizionati **sotto forma di banner appena sopra il footer**, come mostrato negli esempi di seguito, o in alternativa essi possono essere **accolti nel footer** (si rimanda alla sezione dedicata al Footer per esempi dedicati a questa casistica).
Nel primo caso citato, ovvero quello del banner posto sopra il footer, i loghi devono essere **posizionati orizzontalmente**. Si consiglia di inserire un **massimo di 4 loghi per riga**, e qualora il logo di Regione Lombardia fosse già stato inserito nell’header esso **non deve essere inserito nuovamente** nel banner.

_Versione del banner con 4 loghi_

{% include html_docs/loghi/singola_riga.html %}
{% include esempi-lombardia/footer.html %}
{% highlight html %}
{% include html_docs/loghi/singola_riga.html %}
{% endhighlight %}

_Versione del banner con 8 loghi_

{% include html_docs/loghi/singola_riga.html doublerow=true %}
{% include esempi-lombardia/footer.html %}
{% highlight html %}
{% include html_docs/loghi/singola_riga.html doublerow=true %}
{% endhighlight %}
