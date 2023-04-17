---
layout: it25_docs
title: Calendario
group: informazioni
toc: no
---

La componente **Calendario** può assolvere diverse funzioni all’interno di un’interfaccia: nella sua forma più semplice di data picker è spesso impiegato all’interno di processi
di inserimento dati, oppure all’interno di una form. In altre forme più complesse può assolvere una funzione comunicativa e ricoprire una posizione di maggiore visibilità.

<div class="bd-example">
{% include html_docs/datepickers/datepicker.html %}
</div>
{% highlight html %}
{% include html_docs/datepickers/datepicker.html %}
{% endhighlight %}

## Calendario avanzato

Il calendario di seguito è un componente implementato in javascript. E' stato utilizzata la libreria **flatpickr** a cui si rimanda per la documentazione.
Per inizializzare il componente deve essere invocata la seguente funzione (nel caso in cui non si voglia selezionare un range eliminare il parametro **mode**):

{% highlight html %}
new bootstrap.it25().datepicker(document.querySelector('#calendar-multiple'), {
      enableTime: false,
      dateFormat: "d/m/Y",
      mode: "multiple"
  });
new bootstrap.it25().datepicker(document.querySelector('#calendar-range'), {
      enableTime: false,
      dateFormat: "d/m/Y",
      mode: "range"
  });
new bootstrap.it25().datepicker(document.querySelector('#calendar-single'), {
    enableTime: false,
    dateFormat: "d/m/Y"
});
{% endhighlight %}

Inoltre deve essere incluso tra gli script della pagina il seguen CDN:

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
{% endhighlight %}

<div class="bd-example">
  <div class="row">
    <div class="col">
      <div class="form-group" style="margin-bottom:0px">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
            </div>
          </div>
          <input type="text" class="form-control" id="calendar-single" name="calendar-single" placeholder="Seleziona Data..." />
        </div>
        <small id="formGroupExampleInputWithHelpDescription" class="form-text {{include.display_info}}">Calendario selezione singola</small>
      </div>
    </div>
    <div class="col">
      <div class="form-group" style="margin-bottom:0px">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
            </div>
          </div>
          <input type="text" class="form-control" id="calendar-range" name="calendar-range" placeholder="Seleziona Periodo..." />
        </div>
        <small id="formGroupExampleInputWithHelpDescription" class="form-text">Calendario selezione range</small>
      </div>
    </div>
    <div class="col">
      <div class="form-group" style="margin-bottom:0px">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
            </div>
          </div>
          <input type="text" class="form-control" id="calendar-multiple" name="calendar-multiple" placeholder="Seleziona Date..." />
        </div>
        <small id="formGroupExampleInputWithHelpDescription" class="form-text">Calendario selezione multipla</small>
      </div>
    </div>
  </div>
</div>
{% highlight html %}
<div class="row">
    <div class="col">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
            </div>
          </div>
          <input type="text" class="form-control" id="calendar-single" name="calendar-single" placeholder="Seleziona Data..." />
        </div>
        <small id="formGroupExampleInputWithHelpDescription" class="form-text {{include.display_info}}">Calendario selezione singola</small>
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
            </div>
          </div>
          <input type="text" class="form-control" id="calendar-range" name="calendar-range" placeholder="Seleziona Periodo..." />
        </div>
        <small id="formGroupExampleInputWithHelpDescription" class="form-text">Calendario selezione range</small>
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
            </div>
          </div>
          <input type="text" class="form-control" id="calendar-multiple" name="calendar-multiple" placeholder="Seleziona Date..." />
        </div>
        <small id="formGroupExampleInputWithHelpDescription" class="form-text">Calendario selezione multipla</small>
      </div>
    </div>
  </div>
{% endhighlight %}

{% capture callout %}

#### <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti

Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:

- **[Input calendario]({{ site.baseurl }}/docs/form/input-calendario/)**

Per tutte le possibilità e la configurazione del plugin Javascript del _datepicker_ si vedano:

- **[Demo](http://eureka2.github.io/ab-datepicker/)**
- **[Readme](https://github.com/eureka2/ab-datepicker#ab-datepicker)**
  {% endcapture %}{% include callout.html content=callout type="info" %}

{% capture callout %}

#### <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg> Versione scura

Si raccomanda di **NON UTILIZZARE** la **[versione scura]({{ site.baseurl }}/docs/form/input-calendario/#versione-scura)** del datepicker.
{% endcapture %}{% include callout.html content=callout type="danger" %}
