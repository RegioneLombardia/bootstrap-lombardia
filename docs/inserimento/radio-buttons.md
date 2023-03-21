---
layout: docs
title: Radio buttons
group: inserimento
toc: false
---


Per fare in modo che il click su uno dei radio button provochi la **deselezione automatica degli altri**, è necessario che i radio button siano contenuti in un `div` con classe `form-group` e che l'attributo `name` di ognuno dei `tag` `input` sia lo stesso (nell'esempio riportato *"gruppo2"* ).

<div class="bd-example">
{% include esempi-lombardia/radiobuttons.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/radiobuttons.html %}
{% endhighlight %}


{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:
- **[Radio Button]({{ site.baseurl }}/docs/form/radio-button/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
