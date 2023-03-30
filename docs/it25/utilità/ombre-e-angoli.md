---
layout: it25_docs
title: Ombre e angoli
group: utilità
toc: true
---

Le **Ombre** e gli **angoli** sono elementi utili per sottolineare i contenuti e dare loro maggiore evidenza. Si specifica che per tutti gli elementi che presentano un raggio di curvatura, quest’ultimo deve essere di **8 pixel**.

## Angoli

I bordi arrotondati si ottengono tramite la classe `rounded-3`.

{% include html_docs/ombre_angoli/angoli.html %}
{% highlight html %}

<div class="rounded-3 border-custom p-2">
<span class="align-middle fw-semibold">BORDER RADIUS - 8 PX</span>
</div>
{% endhighlight %}

## Ombre

I bordi arrotondati si ottengono tramite la classe `rounded-3`.

{% include html_docs/ombre_angoli/ombre.html %}
{% highlight html %}

<div class="d-flex align-items-start flex-column mb-3">
    <div class="p-2">
      <div class="rounded-3 border-custom p-2 shadow-sm">
        <span class="align-middle fw-semibold">DROP SHADOW - S</span>
      </div>
    </div>
    <div class="p-2">
      <div class="rounded-3 border-custom p-2 shadow">
        <span class="align-middle fw-semibold">DROP SHADOW - M</span>
      </div>
    </div>
  </div>
{% endhighlight %}
