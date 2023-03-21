---
layout: docs
title: Cookiebar
group: informazioni
toc: yes
---
<!-- Style override for Documentation purposes -->
<style>
  .bd-example .cookiebar {
    display: block;
    position: static;
    transform: none;
  }
</style>

Il codice HTML riportato qui sotto è da copiare all'interno delle proprie pagine web inserendolo appena dopo l'apertura del tag `body`.

E' importante lasciare inalterata la classe `cookiebar` perché ad essa è collegata la funzione Javascript che gestisce la visualizzazione della Cookiebar.

Il bottone permette la chiusura della Cookiebar attraverso il _data attribute_ `data-bs-accept="cookiebar"`; un ulteriore link di approfondimento dovrà portare alla pagina di gestione preferenze dei cookies.

Per le visualizzazione a schermo intero potete guardare la pagina di esempio: **[esempio Cookiebar]({{ site.baseurl }}/docs/esempi/pag_cookiebar/){:target="_blank"}**.


<div class="bd-example">
  {% include esempi-lombardia/cookiebar.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/cookiebar.html %}
{% endhighlight %}
