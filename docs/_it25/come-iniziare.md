---
layout: it25_docs
title: Come iniziare
toc: true
---

Bootstrap Regione Lombardia è una customizzazione di Boostrap Italia per **adeguarlo alle {{ site.data.short.rl-guide }}**.

E' quindi un **[fork del progetto Bootstrap Italia](https://github.com/italia/bootstrap-italia/network/members)**, presente su GitHub, da cui eredita i componenti, le funzionalità e tutti i relativi aggiornamenti e correzioni.


### Come usare Bootstrap Regione Lombardia
Per utilizzare il codice compilato di Bootstrap Regione Lombardia, è sufficiente scaricare ed includere nella pagina HTML alcuni file, tra cui un file CSS, un Javascript, i fonts e una SVG sprite, che è possibile trovare qui:

<a href="https://github.com/RegioneLombardia/bootstrap-lombardia/releases/download/v{{ site.current_version }}/bootstrap-lombardia.zip" class="btn btn-primary">Scarica Bootstrap Regione Lombardia v{{ site.current_version }}</a>

E' anche possibile usare i file sorgente di Bootstrap Regione Lombardia attraverso il package manager **npm**.  
{% highlight sh %}
npm i bootstrap-lombardia --save
{% endhighlight %}

Per quanto riguarda l'utilizzo di CSS, Javascript, fonts, icone compresi nel file compresso scaricato, si faccia riferimento al **[relativo paragrafo]({{ site.baseurl }}/docs/come-iniziare/introduzione/#css)** della documentazione tecnica.  

### Linee Guida
Le **Linee Guida** di Bootstrap Regione Lombardia **indicano quali componenti utilizzare**, nella costruzione delle pagine di Web per le applicazione Regione Lombardia, e mostrano una serie di **Esempi** che possono essere utilizzati come base da cui partire.

### Documentazione Tecnica
La {{ site.data.short.dt }} **completa** cui fare riferimento per tutti i dettagli sulle specifiche dei componenti è quella originale di Bootstrap Italia **[ricompilata con i colori della Regione Lombardia]({{ site.baseurl }}/docs/documentazione-tecnica/)**.
