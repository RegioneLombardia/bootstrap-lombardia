---
layout: it25_docs
title: Profilo
group: componenti-per-il-mobile
toc: false
---

La sezione profilo è raggiungibile attraverso la selezione della voce “Profilo” nel burger menu, dalla bottom bar oppure all’interno dell’app.

Il profilo ha l’obiettivo di conservare e mostrare:

- le informazioni legate all’utente
- i principali dati anagrafici e la loro gestione ed aggiornamento
- le comunicazioni importanti
- il link ai termini di utilizzo e informativa privacy
- la possibilità di attivare e disattivare preferenze dell’utente logout dall’app

<div class="bd-example-mobile">
  <h3>Componenti</h3>
    <div class="row my-5">
      <div class="col">
       {% include html_docs_mobile/general/header-formatter.html title='Profilo basic/Autenticazione forte' text='Nel caso il servizio permetta l’utente di autenticarsi con la sua propria mail, oppure con altri metodi “non forti” (spid, cie, ecc.), troverà nel profilo l’opzione modifica.' %}
    <div class="py-2">
    {% include html_docs_mobile/profile/profile.html display='d-block' %}
    </div>
    <div class="py-2">
    {% include html_docs_mobile/profile/profile.html display='d-none' %}
    </div>    
    </div>
    <div class="col">
    {% include html_docs_mobile/general/header-formatter.html title='Box Informativi' text='' %}
    <div class="py-2">
    {% include html_docs_mobile/profile/info-box-anagrafica.html  %}
    </div>
    <div class="py-2">
    {% include html_docs_mobile/profile/info-box.html display="d-none" %}
    </div>
    <div class="py-2">
        {% include html_docs_mobile/profile/info-box.html display="d-block"  %}
    </div>    
    </div>
    <div class="col">
       {% include html_docs_mobile/general/header-formatter.html title='Elementi Interattivi' text='' %}
       <div class="py-2">
        {% include html_docs_mobile/profile/interactive-card.html displaySvg=true displayCircle=false icon1='it-file-save' icon2='it-external-link-fill' text='Termini di utilizzo'  %}
        </div>   
        <div class="py-2">
        {% include html_docs_mobile/profile/interactive-card.html displaySvg=true displayCircle=false  icon1='it-lock-fill' icon2='it-external-link-fill' text='Privacy'  %}
        </div>   
          <div class="py-2">
        {% include html_docs_mobile/profile/interactive-card.html displaySvg=false displayCircle=true text='Titolo'  %}
        </div>     
          <div class="py-2">
        {% include html_docs_mobile/profile/info-list.html %}
        </div>     
        <div class="py-2">
        {% include html_docs_mobile/profile/exit.html %}
        </div>
    </div>
</div>
</div>

 <div class="device-auto mt-4 ">
     {% include html_docs_mobile/general/top-iphone.html %}
    {% include html_docs_mobile/header/barra-istituzionale-mobile-example.html   title='Profilo' icon='it-burger'  %}
 {% include html_docs_mobile/profile/default.html  %}
 </div>

{% highlight html %}
{% include html_docs_mobile/profile/profile.html display='d-none' %}
{% include html_docs_mobile/profile/info-box-anagrafica.html %}
{% include html_docs_mobile/profile/info-box.html display="d-block" %}
{% include html_docs_mobile/profile/interactive-card.html displaySvg=true displayCircle=false icon1='it-file-save' icon2='it-external-link-fill' text='Termini di utilizzo' %}
{% include html_docs_mobile/profile/interactive-card.html displaySvg=false displayCircle=true text='Titolo' %}
{% include html_docs_mobile/profile/info-list.html %}
{% include html_docs_mobile/profile/exit.html %}
{% endhighlight %}
