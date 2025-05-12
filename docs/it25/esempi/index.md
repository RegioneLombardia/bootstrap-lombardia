---
layout: it25_docs
group: esempi
title: Esempi
redirect_from: 'it25/esempi/'
toc: false
---

<div class="container my-5">
  <main class="bd-content" role="main">
    {% for entry in site.data.it25-examples %}
      <h3 class="mt-2" id="{{ entry.category | slugify }}">{{ entry.category }}</h3>
      <p>{{ entry.description }}</p>
      {% for example in entry.examples %}
        {% comment %} manipulating URLs to handle both internal and external refs {% endcomment %}
        {% assign example_url = '#' %}
        {% if example.url contains '://' %}
          {% capture example_url %}{{ example.url }}{% endcapture %}
        {% else %}
          {% capture example_url %}{{ site.baseurl }}/docs/it25/esempi/{{ example.url }}/{% endcapture %}
        {% endif %}
        {% if forloop.first %}<div class="row">{% endif %}
          <div class="col-sm-6 my-3">
            <h4>{{ example.name }}</h4>
            <p class="text-muted">{{ example.description }}</p>
            <p>
              <a href="{{ example_url }}" target="_blank">esempio funzionante</a><br/>
              {% if example.code_explain %}<a href="{{ example_url }}/codice">codice commentato</a>{% endif %}
            </p>
          </div>
        {% if forloop.last %}</div>{% endif %}
      {% endfor %}
    {% endfor %}
  </main>
</div>
