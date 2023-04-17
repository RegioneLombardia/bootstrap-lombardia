---
layout: it25_docs
title: Time Picker
group: informazioni
toc: no
---

I **Time picker** aiutano gli utenti a selezionare e impostare un'ora specifica. Essi consentono agli utenti di inserire un valore di tempo e possono essere utilizzati
per un'ampia gamma di scenari, come ad esempio in ambito di prenotazioni o programmazioni di eventi.

<div class="bd-example">
{% include html_docs/timepickers/timepicker.html %}
</div>
{% highlight html %}
{% include html_docs/timepickers/timepicker.html %}
{% endhighlight %}

### Time Picker avanzato

I **Time picker** aiutano gli utenti a selezionare e impostare un'ora specifica. Essi consentono agli utenti di inserire un valore di tempo e possono essere utilizzati
per un'ampia gamma di scenari, come ad esempio in ambito di prenotazioni o programmazioni di eventi.

Il time picker di seguito è un componente implementato in javascript. E' stato utilizzata la libreria **flatpickr** a cui si rimanda per la documentazione.
Per inizializzare il componente deve essere invocata la seguente funzione:

{% highlight html %}
new bootstrap.it25().datepicker(document.querySelector('#time-picker'), {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
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
              <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-clock"></use></svg>
            </div>
          </div>
          <input type="text" class="form-control" id="time-picker" name="time-picker" placeholder="Seleziona..." />
        </div>
      </div>
    </div>
    <div class="col">
    </div>
    <div class="col">
    </div>
  </div>
</div>
{% highlight html %}
<div class="form-group">
    <div class="input-group">
        <div class="input-group-prepend">
        <div class="input-group-text">
            <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-clock"></use></svg>
        </div>
        </div>
        <input type="text" class="form-control" id="time-picker" name="time-picker" placeholder="Seleziona..." />
    </div>
</div>
{% endhighlight %}

### Time Picker con orologio

Il time picker con orologio si basa sull'implementazione di "Grudus Timepicker". Per abilitare questa funzionalità bisogna includere
tra gli scrip il seguente CDN:

{% highlight html %}
<script type="text/javascript" src="https://rawgit.com/grudus/Timepicker/master/dist/grudus-timepicker.es5.js"></script>
{% endhighlight %}

<div class="bd-example">
    <div class="row">
        <div class="col">
            {% include html_docs/timepickers/clockpicker.html %}
        </div>
        <div class="col">
        </div>
        <div class="col">
        </div>
    </div>
</div>
{% highlight html %}
{% include html_docs/timepickers/clockpicker.html %}
{% endhighlight %}
