---
layout: it25_docs
title: Calendario
group: informazioni
toc: no
---

La componente **Calendario** può assolvere diverse funzioni all’interno di un’interfaccia: nella sua forma più semplice di data picker è spesso impiegato all’interno di processi di inserimento dati, oppure all’interno di una form.  
In altre forme più complesse può assolvere una funzione comunicativa e ricoprire una posizione di maggiore visibilità.


{% capture example %}
<div class="row mt-5 mt-md-0">
  <div class="col-md-4 col-xl-3">
    <div class="form-group">
      <label class="active" for="data_nascita">Data di nascita</label>
      <input type="date" id="data_nascita"/>
    </div>
  </div>
  <div class="col-md-4 offset-xl-3 col-xl-3">
    <div class="form-group">
      <label class="active" for="data_da">Periodo da</label>
      <input type="date" id="data_da"/>
    </div>
  </div>
  <div class="col-md-4 col-xl-3">
    <div class="form-group">
      <label class="active" for="data_a">a</label>
      <input type="date" id="data_a"/>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

---

## Calendario avanzato

{% capture example %}
<div class="bd-example">
  <div class="row">
    <div class="col">
      <div class="form-group" style="margin-bottom:0px">
        <div class="input-group">
          <span class="input-group-text">
            <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
          </span>
          <label class="active" for="calendar-single">Data di nascita</label>
          <input type="text" class="form-control" id="calendar-single" name="calendar-single"
                 aria-label="scrivere data." placeholder="gg/mm/aaaa" />
        </div>
        <small id="formGroupExampleInputWithHelpDescription"
        class="form-text {{include.display_info}}">Calendario selezione singola.</small>
      </div>
    </div>
    <div class="col">
      <div class="form-group" style="margin-bottom:0px">
        <div class="input-group">
          <span class="input-group-text">
            <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
          </span>
          <label class="active" for="calendar-range">Periodo da.. a..</label>
          <input type="text" class="form-control" id="calendar-range" name="calendar-range"
                  aria-label="indicare due date separate da 'al'." placeholder="gg/mm/aaaa" />
        </div>
        <small id="formGroupExampleInputWithHelpDescription14" class="form-text">Calendario selezione periodo.</small>
      </div>
    </div>
    <div class="col">
      <div class="form-group" style="margin-bottom:0px">
        <div class="input-group">
          <span class="input-group-text">
            <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
          </span>
          <label class="active" for="calendar-multiple">Indicare giorni disponibilità</label>
          <input type="text" class="form-control" id="calendar-multiple" name="calendar-multiple"
                 aria-label="indicare più date separate da una virgola." placeholder="gg/mm/aaaa" />
        </div>
        <small id="formGroupExampleInputWithHelpDescription15" class="form-text">Calendario selezione multipla.</small>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


Questo calendario è un componente implementato in javascript ed il cui codice è importato all'interno di `bootstrap-lombardia.min.js`.  
E' stata utilizzata la libreria **flatpickr** la cui documentazione completa è reperibile a **[questo indirizzo](https://flatpickr.js.org/options/)**.

Per inizializzare il componente deve essere invocata la funzione seguente, passando come parametro l'elemento cui collegarla:  
{% highlight html %}
flatpickr(document.querySelector('#calendar-single'), {
  allowInput: true,
  dateFormat: 'd/m/Y',
  locale: "it"
})
{% endhighlight %}

Utilizzare il parametro **mode** per impostare la selezione multipla o di un range.
{% highlight html %}
flatpickr (document.querySelector('#calendar-multiple'), {
  allowInput: true,
  dateFormat: 'd/m/Y',
  locale: "it",
  mode: 'multiple'
})
flatpickr(document.querySelector('#calendar-range'), {
  allowInput: true,
  dateFormat: 'd/m/Y',
  locale: "it",
  mode: 'range'
})
{% endhighlight %}

{% capture callout %}
#### Accessibilità
<h6>Utilizzo del datepicker</h6>
Per fare in modo che un *form* sia compilabile anche da un non vedente, è necessario che le date **possano anche essere scritte direttamente via tastiera**, e non obbligatoriamente selezionate al calendario.  
Inoltre bisogna fare in modo che lo screen reader dia chiare indicazioni per la compilazione, utilizzando in modo combinato label, placehoder e aria-label.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}
