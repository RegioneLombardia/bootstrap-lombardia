---
layout: docs
title: Barra utente
description: Barra Utente e Operatore
group: componenti-principali
toc: false
---

E' **facoltativa**, se presente va posta sotto la *barra istituzionale*.

Nel caso debba contenere dati relativi sia all'utente che all'operatore, è possibile utilizzare due `div` con classe `col-6`, per avere due colonne che tengono separati i dati anche negli schermi di piccole dimensioni, quando il contenuto si allinea su due righe, altrimenti conviene usare la classe `col-12`.

Quando la pagina scorre verso il basso la barra rimane visibile senza stringersi.

<div class="bd-example">
{% include esempi-lombardia/barra_utente.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/barra_utente.html %}
{% endhighlight %}
