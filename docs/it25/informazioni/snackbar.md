---
layout: it25_docs
title: Snackbar
group: informazioni
toc: no
---

Gli **Snackbar** informano gli utenti in merito ad un processo che è stato eseguito o che sta per essere attivato (spesso relativamente a processi eseguiti in background). Essi appaiono temporaneamente nella parte inferiore dello schermo e non dovrebbero interrompere l'esperienza dell'utente. Di solito **non richiedono alcun tipo di input per scomparire**. Gli snackbar possono contenere messaggi brevi ed incisivi - solitamente usati per comunicare lo stato di un’operazione - o messaggi più lunghi accompagnati da un titolo che introduce l’informazione. Di norma è possibile visualizzare **una sola snackbar alla volta**, anche in caso di notifiche multiple.

<div class="bd-example">
{% include html_docs/snackbar/snackbar.html display='d-none' %}
</div>
{% highlight html %}
{% include html_docs/snackbar/snackbar.html display='d-none' %}
{% endhighlight %}

### Snackbar con messaggio

<div class="bd-example">
{% include html_docs/snackbar/snackbar.html display='d-block' %}
</div>
{% highlight html %}
{% include html_docs/snackbar/snackbar.html display='d-block' %}
{% endhighlight %}

### Stati

<div class="bd-example">
{% include html_docs/snackbar/snackbar-stati.html  %}
</div>
{% highlight html %}
{% include html_docs/snackbar/snackbar-stati.html  %}
{% endhighlight %}

### Comportamento

<div class="bd-example">
{% include html_docs/snackbar/snackbar-comportamento.html  %}
</div>
{% highlight html %}
{% include html_docs/snackbar/snackbar-comportamento.html  %}
{% endhighlight %}

### Posizionamento

<div class="bd-example">
{% include html_docs/snackbar/snackbar-posizione.html  %}
</div>
{% highlight html %}
{% include html_docs/snackbar/snackbar-posizione.html  %}
{% endhighlight %}
