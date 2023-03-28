---
layout: it25_docs
title: Toggle
group: inserimento
toc: false
---

Componente alternativo per la selezione di opzioni a **scelta multipla**.

Funzionalmente è del tutto simile al checkbox, ed è possibile farlo comparire preselezionato (`checked`) e/o disabilitato nello stesso modo.

<div class="bd-example">
{% include esempi-lombardia/toggles.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/toggles.html %}
{% endhighlight %}


{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:
- **[Toggles]({{ site.baseurl }}/docs/form/toggles/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
