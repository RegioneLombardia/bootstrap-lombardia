---
layout: it25_docs
title: Card
group: components
toc: yes
---

## Text only
{% comment %}Example name: Card Text Lombardia{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-lg-6">
    <article class="it-card it25-text-only mb-3">
      <span class="badge badge-outline-primary">Text</span>
      <div class="it-card-title ">Titolo</div>
      <time class="it-card-date font-monospace">22 aprile 2026</time>
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
      <div class="it-card-footer">
        <a href="#">LINK
          <svg class="icon icon-sm icon-primary ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </a>
        <hr>
      </div>
    </article>
  </div>
  <div class="col-12 col-lg-6">
    <article class="it-card it25-card-dark bg-dark it25-text-only mb-3">
      <span class="badge badge-outline-primary">Text</span>
      <div class="it-card-title ">Titolo</div>
      <time class="it-card-date font-monospace">22 aprile 2026</time>
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
      <div class="it-card-footer">
        <a class="text-white" href="#">LINK
          <svg class="icon icon-sm icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </a>
        <hr>
      </div>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


## Editorial

#### big
{% comment %}Example name: Card big Lombardia{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-lg-4">
    <article class="it-card it25-card-primary it25-card-lg mb-3">
      <span class="badge badge-outline-primary">Text</span>
      <div class="it-card-title"><span class="h3 fw-normal">Titolo</span></div>
      <time class="it-card-date font-monospace">22 aprile 2026</time>
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
      <div class="it-card-footer">
        <button class="btn btn-lg btn-outline-primary btn-icon">
          <span>BUTTON</span>
          <svg class="icon icon-primary ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </button>
      </div>
    </article>
  </div>
  <div class="col-12 col-lg-4">
    <article class="it-card it25-card-outline it25-card-lg mb-3">
      <span class="badge badge-outline-primary">Text</span>
      <div class="it-card-title "><span class="h3 fw-normal">Titolo</span></div>
      <time class="it-card-date font-monospace">22 aprile 2026</time>
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
      <div class="it-card-footer">
        <button class="btn btn-lg btn-primary btn-icon">
          <span>BUTTON</span>
          <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </button>
      </div>
    </article>
  </div>
  <div class="col-12 col-lg-4">
    <article class="it-card it25-card-dark bg-dark it25-card-lg mb-3">
      <span class="badge badge-outline-primary">Text</span>
      <div class="it-card-title "><span class="h3 fw-normal">Titolo</span></div>
      <time class="it-card-date font-monospace">22 aprile 2026</time>
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
      <div class="it-card-footer">
        <button class="btn btn-lg btn-primary btn-icon">
          <span>BUTTON</span>
          <svg class="icon icon-primary ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </button>
      </div>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


#### small
{% comment %}Example name: Card small Lombardia{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-lg-4">
    <article class="it-card it25-card-primary mb-3">
      <div class="it-card-title ">Titolo</div>
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
    </article>
  </div>
  <div class="col-12 col-lg-4">
    <article class="it-card it25-card-outline mb-3">
      <div class="it-card-title ">Titolo</div>
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
    </article>
  </div>
  <div class="col-12 col-lg-4">
    <article class="it-card it25-card-dark mb-3">
      <div class="it-card-title ">Titolo</div>
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
    </article>
  </div>
  </div>
{% endcapture %}{% include example.html content=example %}

#### background primary
{% comment %}Example name: Card big Lombardia background primary{% endcomment %}
{% capture example %}
<div class="row primary-bg pt-3">
  <div class="col-12 col-lg-4">
    <article class="it-card it25-card-primary it25-card-lg mb-3">
      <span class="badge badge-outline-primary">Text</span>
      <div class="it-card-title"><span class="h3 fw-normal">Titolo</span></div>
      <time class="it-card-date font-monospace">22 aprile 2026</time>
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
      <div class="it-card-footer">
        <button class="btn btn-lg btn-outline-primary btn-icon">
          <span>BUTTON</span>
          <svg class="icon icon-primary ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </button>
      </div>
    </article>
  </div>
  <div class="col-12 col-lg-4">
    <article class="it-card it25-card-outline it25-card-lg mb-3">
      <span class="badge badge-outline-primary">Text</span>
      <div class="it-card-title "><span class="h3 fw-normal">Titolo</span></div>
      <time class="it-card-date font-monospace">22 aprile 2026</time>
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
      <div class="it-card-footer">
        <button class="btn btn-lg btn-primary btn-icon">
          <span>BUTTON</span>
          <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </button>
      </div>
    </article>
  </div>
  <div class="col-12 col-lg-4">
    <article class="it-card it25-card-dark bg-dark it25-card-lg mb-3">
      <span class="badge badge-outline-primary">Text</span>
      <div class="it-card-title "><span class="h3 fw-normal">Titolo</span></div>
      <time class="it-card-date font-monospace">22 aprile 2026</time>
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
      <div class="it-card-footer">
        <button class="btn btn-lg btn-primary btn-icon">
          <span>BUTTON</span>
          <svg class="icon icon-primary ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </button>
      </div>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


## Card con foto

#### large
{% comment %}Example name: Card con Foto Lombardia{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image it25-card-lg">
      <!--card first child is the title (link)-->
      <div class="it-card-title "><span class="h3 fw-normal">Titolo</span></div>
      <time class="it-card-date font-monospace">22 aprile 2026</time>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="{{ site.baseurl }}/dist/assets/img/bike-sharing.jpg" class="rounded" title="bike sharing" alt="parcheggio bike sharing a Milano">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
      <div class="it-card-footer">
        <a href="#">LINK
          <svg  role="img" class="icon icon-sm icon-primary ms-2"><title>Freccia destra</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </a>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


#### small
{% comment %}Example name: Card con Foto Lombardia{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image">
      <!--card first child is the title (link)-->
      <div class="it-card-title ">Titolo</div>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="{{ site.baseurl }}/dist/assets/img/bike-sharing.jpg" class="rounded" title="bike sharing" alt="parcheggio bike sharing a Milano">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
          Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
