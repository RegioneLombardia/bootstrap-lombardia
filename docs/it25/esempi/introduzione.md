---
layout: it25_docs
title: Il Codice
description: Il codice degli "Esempi"
group: schermate-composte
toc: false
---

I lnk sottostanti consentono di visualizzare direttamente il codice che compone le pagine di esempio contenute nelle linee guida.

Il gruppo **pagine complete** permette di vedere più chiaramente la struttura generale delle pagine, che sono costruite utilizzando i **ritagli** elencati nel secondo gruppo.

{% assign mockups = site.data.esempi-lombardia[0] %}
<h3>{{ mockups.category }} </h3>
<div class="link-list-wrapper">
  <ul class="link-list">
    {% for mockup in mockups.mockups %}
      {% if mockup.status == "to do" %}
        {% continue %}
      {% endif %}
      <li class="link-list">
        <a class="list-item icon-left"
          href="https://raw.githubusercontent.com/RegioneLombardia/bootstrap-lombardia/master/docs/it25/esempi/pag_{{mockup.title | slugify: 'pretty' | replace: "-","_"}}/index.html">
          <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use></svg>
          <span>{{mockup.title}}</span>
        </a>
      </li>
    {% endfor %}
  </ul>
</div>

{% assign snippets = site.data.esempi-lombardia[1] %}
<h3>{{ snippets.category }} </h3>
<div class="link-list-wrapper">
  <ul class="link-list">
    {% for snippet in snippets.snippets %}
    <li class="link-list">
      <a class="list-item icon-left"
       href="https://raw.githubusercontent.com/RegioneLombardia/bootstrap-lombardia/master/_includes/esempi-lombardia/{{snippet.title | slugify: 'pretty' | replace: "-","_"}}.html">
       <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use></svg>
       <span>{{snippet.title}}</span>
      </a>  
    </li>
    {% endfor %}
  </ul>
</div>
