---
layout: it25_docs
title: Ombre e angoli
group: utilità
toc: true
---

Le **Ombre** e gli **angoli** sono elementi utili per sottolineare i contenuti e dare loro maggiore evidenza.  
Si specifica che per tutti gli elementi che presentano un raggio di curvatura, quest’ultimo deve essere di **8 pixel**.

## Angoli

I bordi arrotondati si ottengono tramite la classe `rounded-3`.

<div class="bd-example">
{% include html_docs/ombre_angoli/angoli.html %}
</div>
{% highlight html %}
<div class="border secondary-gray-border-color rounded-3 p-2">
  <span class="align-middle fw-semibold">BORDER RADIUS - 8 PX</span>
</div>
{% endhighlight %}

## Ombre

I due tipi di ombra si ottengono tramite le classi `shadow-sm` e `shadow`.

<div class="bd-example">
{% include html_docs/ombre_angoli/ombre.html %}
</div>
{% highlight html %}
<div class="rounded-3 p-2 shadow-sm">
  <span class="align-middle fw-semibold">SHADOW - SM</span>
</div>
...
<div class="rounded-3 p-2 shadow pe-5">
  <span class="align-middle fw-semibold">SHADOW</span>
</div>
{% endhighlight %}
