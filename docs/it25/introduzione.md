---
layout: it25_docs
title: Introduzione
toc: true
---

Bootstrap Regione Lombardia è una customizzazione di Boostrap Italia per **adeguarlo alle Linee Guida per il design degli applicativi di Regione Lombardia**.

E' quindi un **[fork del progetto Bootstrap Italia](https://github.com/italia/bootstrap-italia/network/members)**, presente su GitHub, da cui eredita i componenti, le funzionalità e tutti i relativi aggiornamenti e correzioni.


### Come usare Bootstrap Regione Lombardia
Per utilizzare il codice compilato di Bootstrap Regione Lombardia, è sufficiente scaricare ed includere nella pagina HTML alcuni file, tra cui un file CSS, un Javascript, i fonts e una SVG sprite, che è possibile trovare qui:

<a href="http://lab.lispa.it/templates/bootstrap-lombardia/releases/download/v{{ site.current_version }}/bootstrap-lombardia.zip" class="btn btn-primary">Scarica Bootstrap Regione Lombardia v{{ site.current_version }}</a>


E' anche possibile usare i file sorgente di Bootstrap Regione Lombardia attraverso il package manager **npm**.  
{% highlight sh %}
npm i bootstrap-lombardia --save
{% endhighlight %}

Per quanto riguarda l'utilizzo di CSS, Javascript, fonts, icone compresi nel file compresso scaricato, si faccia riferimento al **[relativo paragrafo]({{ site.baseurl }}/docs/come-iniziare/introduzione/#css)** della documentazione tecnica.  


### Documentazione
La **Documentazione tecnica** completa cui fare riferimento per l'utilizzo dei componenti è quella **originale di Bootstrap Italia**, **[ricompilata per Regione Lombardia]({{ site.baseurl }}/docs/informazioni/)**.    

Per rispettare le Linee Guida della Regione Lombardia e la sua Brand Identity, **va utilizzato solo un sottoinsieme** sia delle varianti cromatiche e tipografiche, che dei componenti, che si hanno a disposizione in quanto ereditati dalla libreria originaria.

La qui presente **guida di Bootstrap Regione Lombardia** indica quali componenti utilizzare, nella costruzione delle pagine di Web per le applicazione Regione Lombardia, e mostra una serie di esempi pratici (le *Schermate Composte*), che possono essere utilizzati come base da cui partire.
