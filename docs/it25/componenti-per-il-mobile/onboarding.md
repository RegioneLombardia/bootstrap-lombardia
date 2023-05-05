---
layout: it25_docs
title: Onboarding
group: componenti-per-il-mobile
toc: false
---

L’onboarding viene presentato all’utente al primo utilizzo con l’obiettivo di illustrare le funzionalità principali dell’applicazione.
Attraverso le call to action l’utente potrà andare avanti nel flusso di presentazione delle funzionalità o saltare la presentazione (caso in cui l’utente conosca gia le funzionalità). Il processo di onboarding può essere richiamato anche negli utilizzi successivi in altre sezioni dell’app come nell’assistenza.

A - **Descrittivo-informativo**

Immagine accompagnata di titolo e testo descrittivo, stepper e pulsanti “Avanti” e “Indietro”.

B - **Dinamico**

Immagine di sottofondo a tutto schermo accompagnata di titolo e testo breve, stepper e pulsanti “Continua” e “Salta”.

{% include html_docs_mobile/onboarding/componenti.html %}

<div class="row my-5">
    <div class="col">
    <h5 class="fw-bold">Descrittivo-informativo</h5>
    <p>
   Immagine accompagnata di titolo e testo descrittivo, stepper e pulsanti “Avanti” e “Indietro”.
    </p>
      <div class="device-auto m-auto">
       {% include html_docs_mobile/general/top-iphone.html %}
            {% include html_docs_mobile/onboarding/descrittivo.html %}
      </div>
    </div>
    <div class="col">
     <h5 class="fw-bold">Dinamico</h5>
    <p>Immagine di sottofondo a tutto schermo accompagnata di titolo e testo breve, stepper e pulsanti “Continua” e “Salta”.
    </p>
      <div class="device m-auto">
       {% include html_docs_mobile/general/top-iphone.html %}
        {% include html_docs_mobile/onboarding/dinamico.html %}
      </div>
    </div>
  </div>

{% highlight html %}

 <h5 class="fw-bold">Descrittivo-informativo</h5>
 {% include html_docs_mobile/onboarding/descrittivo.html %}
   <h5 class="fw-bold">Dinamico</h5>
   {% include html_docs_mobile/onboarding/dinamico.html %}
{% endhighlight %}
