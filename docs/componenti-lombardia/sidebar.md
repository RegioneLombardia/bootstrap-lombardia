---
layout: docs
title: Sidebar
description: Barra laterale di navigazione
group: componenti-principali
toc: false
---

Su smartphone
1. La visualizzazione è comandata dal bottone *hamburger* nella **[barra istituzionale]({{ site.baseurl }}/docs/componenti-lombardia/header#barra-istituzionale)**
2. Le voci sono visualizzate in verticale in un pannello che si apre sotto la barra istituzionale
3. Premendo il bottone *hamburger* la pagina scorre automaticamente in alto per visualizzare immediatamente le voci della sidebar.

A scorrimento in basso  
La sidebar scorre verticalmente per consentire l'accesso alle voci più in basso

Su desktop  
E' sempre visualizzata in verticale a lato della pagina e scorre solidalmente con essa.

<div class="bd-example">
  <div class="container-fluid">
    <div class="row flex-xl-nowrap">
      <div class="col-6">
        {% include esempi-lombardia/sidebar.html %}
      </div>
    </div>
  </div>
</div>

{% highlight html %}
{% include esempi-lombardia/sidebar.html %}
{% endhighlight %}

Per poter meglio rendersi conto del comportamento di questo componente è utile richiamare la schermata composta **[Pagina con sidebar]({{ site.baseurl }}/docs/esempi-lombardia/pag_sidebar/)**, e provare a restringere la finestra video e far scorrere la pagina in basso e in alto.
