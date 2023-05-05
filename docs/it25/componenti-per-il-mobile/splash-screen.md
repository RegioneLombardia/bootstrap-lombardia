---
layout: it25_docs
title: Splash screen
group: componenti-per-il-mobile
toc: false
---

Lo **Splash screen** viene presentato all’utente all’apertura dell’app. In alcuni sistemi operativi può comparire con uno zoom-in proprio dall’icona dell’app (e per ciò rispetta anche l’identità grafica).

**A - Splash icona sottofondo**
Questa variante aiuta l’utente riconoscere subito l’app grazie ad una composizione chiara, pulita e senza distrazioni.
**Consigliata per applicativi indirizzati ad operatori o utenti particolari.**

**B - Splash gradient**
Questa variante presenta una composizione più ingaggiante in cui l’identità dell’app viene comunicata con l’icona in alto.
**Consigliata per applicativi indirizzati a cittadini.**

  <div class="row my-5">
    <div class="col">
    <h5 class="fw-bold">Splash icona sottofondo</h5>
    <p>
    Questa variante aiuta l’utente riconoscere subito l’app grazie ad una composizione chiara, pulita e senza distrazioni.
    <span class="fw-bold">Consigliata per applicativi indirizzati ad operatori o utenti particolari.</span>
    </p>
      <div class="device m-auto">
      {% include html_docs_mobile/splash-screen/splash-icon.html relative='position-relative' script=true %}
      </div>
    </div>
    <div class="col">
     <h5 class="fw-bold">Splash gradient</h5>
    <p>Questa variante presenta una composizione più ingaggiante in cui l’identità dell’app viene comunicata con l’icona in alto.
    <span class="fw-bold">Consigliata per applicativi indirizzati a cittadini.</span>
    </p>
      <div class="device m-auto">
      {% include html_docs_mobile/splash-screen/splash-gradient.html relative='position-relative' script=true %}
      </div>
    </div>
  </div>

Per il background dello **Splash gradient**, utilizzare la classe css `bg-device-radiant`.

{% highlight html %}

<h4>Splash icona sottofondo</h4>
{% include html_docs_mobile/splash-screen/splash-icon.html script=false %}
<h4>Splash gradient</h4>
 {% include html_docs_mobile/splash-screen/splash-gradient.html  script=false %}
{% endhighlight %}

### Javascript

```js
var splashScreen = document.querySelector('.splash')
splashScreen.addEventListener('click', () => {
  splashScreen.style.opacity = 0
  setTimeout(() => {
    splashScreen.classList.add('hidden')
  }, 610)
})
```
