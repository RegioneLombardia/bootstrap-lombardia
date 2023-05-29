---
layout: it25_docs
title: Calendario
group: informazioni
toc: no
---

La componente **Calendario** può assolvere diverse funzioni all’interno di un’interfaccia: nella sua forma più semplice di data picker è spesso impiegato all’interno di processi di inserimento dati, oppure all’interno di una form.  
In altre forme più complesse può assolvere una funzione comunicativa e ricoprire una posizione di maggiore visibilità.

<div class="bd-example">
{% include html_docs/datepickers/datepicker.html %}
</div>
{% highlight html %}
{% include html_docs/datepickers/datepicker.html %}
{% endhighlight %}

---

## Calendario avanzato

{% capture example %}
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
          <label class="active" for="data_nascita">Data di nascita</label>
          <input type="text" class="form-control" id="calendar-single" name="calendar-single"
                 aria-label="scrivere data." placeholder="gg/mm/aa" />
        </div>
        <small id="formGroupExampleInputWithHelpDescription"
        class="form-text {{include.display_info}}">Calendario selezione singola.</small>
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
          <label class="active" for="data_nascita">Periodo da.. a..</label>
          <input type="text" class="form-control" id="calendar-range" name="calendar-range"
                  aria-label="indicare due date separate da 'al'." placeholder="gg/mm/aa" />
        </div>
        <small id="formGroupExampleInputWithHelpDescription14" class="form-text">Calendario selezione periodo.</small>
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
          <label class="active" for="data_nascita">Indicare giorni disponibilità</label>
          <input type="text" class="form-control" id="calendar-multiple" name="calendar-multiple"
                 aria-label="indicare più date separate da una virgola." placeholder="gg/mm/aa" />
        </div>
        <small id="formGroupExampleInputWithHelpDescription15" class="form-text">Calendario selezione multipla.</small>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


Questo calendario è un componente implementato in javascript.  
E' stata utilizzata la libreria **flatpickr** la cui documentazione completa è reperibile a **[questo indirizzo](https://flatpickr.js.org/options/)**.

Devono essere inclusi tra gli script della pagina i seguenti CDN:
{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="https://npmcdn.com/flatpickr/dist/l10n/it.js"></script>
{% endhighlight %}


Per inizializzare il componente deve essere invocata la seguente funzione.  
{% highlight html %}
new bootstrap.it25().datepicker(document.querySelector('#calendar-single'), {
  allowInput: true,
  dateFormat: 'd/m/Y',
  locale: "it"
})
{% endhighlight %}

Utilizzare il parametro **mode** per impostare la selezione multipla o di un range.
{% highlight html %}
new bootstrap.it25().datepicker(document.querySelector('#calendar-range'), {
  allowInput: true,
  dateFormat: 'd/m/Y',
  locale: "it",
  mode: 'range'
})
new bootstrap.it25().datepicker(document.querySelector('#calendar-multiple'), {
  allowInput: true,
  dateFormat: 'd/m/Y',
  locale: "it",
  mode: 'multiple'
})
{% endhighlight %}

{% capture callout %}
#### Accessibilità
<h6>Utilizzo del datepicker</h6>
Per fare in modo che un *form* sia compilabile anche da un non vedente, è necessario che le date **possano anche essere scritte direttamente via tastiera**, e non obbligatoriamente selezionate al calendario.  
Inoltre bisogna fare in modo che lo screen reader dia chiare indicazioni per la compilazione, utilizzando in modo combinato label, placehoder e aria-label.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}
