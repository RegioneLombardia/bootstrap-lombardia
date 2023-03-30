---
layout: it25_docs
title: Footer
description: Footer per il fondo pagina.
group: componenti-principali
toc: false
---

Il Footer è la componente base ideata per il fondo pagina. Deve contenere come ultima riga il copyright e al di sopra il nome del servizio. In mezzo è opportuno inserire i link di servizio e se i link in questione sono molti è meglio organizzarli su righe e colonne, lasciando
che l’altezza del footer cresca di conseguenza.

<div class="bd-example">
{% include esempi-lombardia/footer.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/footer.html %}
{% endhighlight %}

Nota:
La dicitura del copyright è strutturata in modo da andare a capo a blocchi a seconda della dimensione dello schermo.

### Footer minimo

Nel caso in cui serva un footer sottile, il minimo consentito è quello riportato di seguito.

<div class="bd-example">
{% include esempi-lombardia/footer_minimo.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/footer_minimo.html %}
{% endhighlight %}

### Footer con loghi multipli

Come anticipato nella sezione precedente, la seconda casistica di gestione di loghi multipli contempla l’inserimento dei loghi partner **al negativo all’interno del footer, sempre in orizzontale e per un massimo di 4 loghi per riga**. Si specifica tuttavia che questa circostanza è strettamente vincolata alla disponibilità di loghi al negativo. Qualora si disponesse soltanto della loro versione in positivo, essi devono essere posizionati esternamente, come mostrato sopra.

{% include html_docs/footer/footer_loghi.html %}
{% highlight html %}
{% include html_docs/footer/footer_loghi.html %}
{% endhighlight %}
