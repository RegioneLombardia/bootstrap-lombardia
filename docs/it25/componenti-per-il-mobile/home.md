---
layout: it25_docs
title: Home
group: componenti-per-il-mobile
toc: false
---

La homepage si presenta come punto di riferimento dell’app. Nelle varianti in primo piano, la versione per utenti autenticati, mentre sul retro sono riportati esempi di call to action per l’accesso.

La navigazione di un’applicazione può avvenire attraverso due modalità principali: **il Burger menu e la bottom navigation**.

**A - Burger Menu**

**B - Bottom bar**

{% include html_docs_mobile/home/default.html %}

<div class="row my-5">
    <div class="col">
    <h5 class="fw-bold">Burger menu chiuso</h5>
      <div class="device-auto m-auto mt-5">
      {% include html_docs_mobile/general/top-iphone.html %}
      {% include html_docs_mobile/header/barra-istituzionale-mobile.html title='Home' id_suff="18" %}
      {% include html_docs_mobile/home/menu-burger-chiuso.html %}
      {% include html_docs_mobile/general/toolbar.html %}
      </div>
    </div>
    <div class="col">
     <h5 class="fw-bold">Burger menu aperto</h5>
      <div class="device m-auto mt-5">
        <div class="it25-mobile">
          <div id="it25-nav-hamburger-test" class="overlay-test">
            <button id="it25-close-hamburger" type="button" class="btn-close close-overlay" aria-label="Close"></button>
            <div class="overlay-content">
                <div class="overlay-body">
                <div class="row">
                <div class="col">{% include html_docs_mobile/profile/profile.html display='d-none' %}</div>
              </div>
              <div class="row">
                <div class="col">{% include html_docs_mobile/general/menu-mobile.html %}</div>
              </div>
                </div>
              <div class="overlay-footer">
                <a href="#">
                  <img src="{{ site.baseurl }}/dist/assets/img/logo-rl.png" alt="logo regione lombardia" width="95" />
                </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="row my-5">
    <div class="col-6">
    <h5 class="fw-bold">Header con card</h5>
      <div class="device-auto m-auto  mt-5">
      {% include html_docs_mobile/home/header-card.html %}
      {% include html_docs_mobile/general/toolbar-section.html %}
      </div>
    </div>
    <div class="col-6"></div>
  </div>

{% highlight html %}

  <h5 class="fw-bold">Burger menu chiuso</h5>
  {% include html_docs_mobile/header/barra-istituzionale-mobile.html title='Home' id_suff="19"%}
  {% include html_docs_mobile/home/menu-burger-chiuso.html %}
  {% include html_docs_mobile/general/toolbar.html %}
  <h5 class="fw-bold">Header con card</h5>
  {% include html_docs_mobile/home/header-card.html %}
  {% include html_docs_mobile/general/toolbar-section.html %}
{% endhighlight %}
