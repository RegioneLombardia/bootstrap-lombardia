---
layout: docs
title: Footer
description: Footer per il fondo pagina.
group: componenti-lombardia
toc: true
---

## Footer standard

Deve contenere come ultima riga il *copyright* e, al di sopra, il nome dell'applicativo.  
In mezzo è opportuno inserire i link di servizio usuali quali Cookie policy, Privacy, Contatti, ecc.  
Se i link in questione sono molti è meglio organizzarli su righe e colonne, lasciando che l'altezza del *footer* cresca di conseguenza.

<div class="bd-example">
{% include esempi-lombardia/footer.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/footer.html %}
{% endhighlight %}


Nota:
La dicitura del copyright è strutturata in modo da andare a capo a blocchi a seconda della dimensione dello schermo.

## Footer minimo

Nel caso in cui serva un footer sottile, il minimo consentito è quello riportato nell'esempio qui sotto.

<div class="bd-example">
{% include esempi-lombardia/footer_minimo.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/footer_minimo.html %}
{% endhighlight %}
