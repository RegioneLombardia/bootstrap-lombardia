---
layout: it25_docs
title: Introduzione
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


### Documentazione
La **{{ site.data.short.dt }}** completa cui fare riferimento per l'utilizzo dei componenti è quella **[originale ricompilata per Regione Lombardia]({{ site.baseurl }}/docs/informazioni/)**.    

Per rispettare le **[{{ site.data.short.rl-guide }}]({{ site.url }}/docs/it25/download/Linee_guida_Applicativi.pdf)** e il **[{{ site.data.short.ivd }}]({{ site.url }}/docs/it25/download/Identita_visiva_digitale_RL.pdf)**, **va utilizzato solo un sottoinsieme** sia delle varianti cromatiche e tipografiche, che dei componenti, che si hanno a disposizione in quanto ereditati dalla libreria originaria.

La qui presente **guida di Bootstrap Regione Lombardia** indica quali componenti utilizzare, nella costruzione delle pagine di Web per le applicazione Regione Lombardia, e mostra una serie di **Esempi** che possono essere utilizzati come base da cui partire.
