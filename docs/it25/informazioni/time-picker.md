---
layout: it25_docs
title: Time Picker
group: informazioni
toc: yes
---

I **Time picker** aiutano gli utenti a selezionare e impostare un'ora specifica.  
Essi consentono agli utenti di inserire un valore di tempo e possono essere utilizzati per un'ampia gamma di scenari, come ad esempio in ambito di prenotazioni o programmazioni di eventi.

{% capture example %}
<div class="row mt-5 mt-md-0">
  <div class="col-md-4 col-xl-3">
    <div class="it-datepicker-wrapper">
      <div class="form-group">
        <div class="form-group">
          <label class="active" for="timeStandard">Timepicker</label>
          <input class="form-control" id="timeStandard" type="time" />
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4 offset-xl-3 col-xl-3">
    <div class="it-datepicker-wrapper">
      <div class="form-group">
        <label class="active" for="da">Selezione Da</label>
        <input class="form-control" id="da" type="time" />
      </div>
    </div>
  </div>
  <div class="col-md-4 col-xl-3">
    <div class="it-datepicker-wrapper">
      <div class="form-group">
        <label class="active" for="a">a</label>
        <input class="form-control" id="a" type="time" />
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

---

### Time Picker avanzato

{% capture example %}
<div class="row">
  <div class="col-12 col-lg-4">
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-clock"></use></svg>
        </span>
        <label class="active" for="time-picker">Orario</label>
        <input type="text" class="form-control" id="time-picker" name="time-picker"
              aria-label="indicare ore e minuti separate da due punti." />
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Questo time-picker è un componente implementato in javascript ed il cui codice è importato all'interno di `bootstrap-lombardia.min.js`.  
E' stata utilizzata la libreria **flatpickr** la cui documentazione completa è reperibile a **[questo indirizzo](https://flatpickr.js.org/options/)**.

Per inizializzare il componente deve essere invocata la funzione seguente, passando come parametro l'elemento cui collegarla:  
{% highlight html %}
flatpickr(document.querySelector('#time-picker'), {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true
})
{% endhighlight %}

---

### Time Picker con orologio

**Nota:** questo tipo di time picker è adatto a smartphone e tablet. Su pc, l'utilizzo con il mouse risulta poco pratico.

Il time picker con orologio è un componente implementato in javascript ed il cui codice è importato all'interno di `bootstrap-lombardia.min.js`.  
E' stata utilizzata la libreria **Grudus Timepicker** la cui documentazione completa è reperibile a **[questo indirizzo](https://grudus.github.io/Timepicker/)**.

{% capture example %}
<div class="row">
  <div class="col-12 col-lg-4">
    <div class="form-group" style="margin-bottom:0px">
      <div class="input-group">
        <span class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-clock"></use></svg>
        </span>
        <input type="text" id="clockpicker01" class="form-control clock-picker"
          placeholder="Imposta orario..." aria-label="indicare ore e minuti separate da due punti." />
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Per inizializzare il componente deve essere invocata la funzione seguente, passando come parametro l'elemento cui collegarla:  
{% highlight html %}
new bootstrap.it25().clockpicker(document.querySelector('#clockpicker01'))
{% endhighlight %}
