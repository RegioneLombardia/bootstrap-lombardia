---
layout: docs
title: Footer
description: Footer per il fondo pagina.
group: componenti-lombardia
toc: true
---

## Come usarlo

Copiare il codice HTML all'interno delle proprie pagine web inserendolo in fondo al tag `body`.

Può essere personalizzato nel testo, ma è importante ... 

### Footer Applicativi Web

<div class="bd-example">
{% include esempi-lombardia/footer.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/footer.html %}
{% endhighlight %}


#### Note
All'interno del tag footer il div con classe container-fluid e px-3 mantiene la distanza di 16 pixel dal bordo sinistro della videata.

Il div che contiene il nome dell'appliativo, ha classe my-4, che crea un margine di 24 pixel sopra e sotto il testo.

La dicitura del copyright è strutturata in modo da andare a capo a blocchi a seconda della dimensione dello schermo. 
