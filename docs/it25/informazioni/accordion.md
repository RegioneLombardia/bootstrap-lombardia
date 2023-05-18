---
layout: it25_docs
title: Accordion
group: informazioni
toc: yes
---

La componente **Accordion** permette di gestire dati e informazioni all’interno della stessa schermata.  
Si tratta di un serie di pannelli apribili nei quali è possibile inserire informazioni di varia natura, sia testuali che numeriche.  
Generalmente si consiglia di utilizzare un massimo **di 5/6 righe di accordion su mobile e 10/15 su desktop**.

### Versione collapse

Nella versione **collapse** dell’accordion è possibile aprire più di un pannello contemporaneamente.  
L’esempio seguente mostra l’accordion nel suo stato base, con tutti i pannelli chiusi.

<div class="bd-example">
  <div class="accordion" id="collapseExample">
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading1c">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1c" aria-expanded="false" aria-controls="collapse1c">
        Account
        </button>
      </span>
      <div id="collapse1c" class="accordion-collapse collapse" role="region" aria-labelledby="heading1c">
        <div class="accordion-body">
            {% include esempi-lombardia/account_posta.html %}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading2c">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2c" aria-expanded="false" aria-controls="collapse2c">
        Indirizzo
        </button>
      </span>
      <div id="collapse2c" class="accordion-collapse collapse" role="region" aria-labelledby="heading2c">
        <div class="accordion-body">
          {% include esempi-lombardia/indirizzo.html %}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading3c">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3c" aria-expanded="false" aria-controls="collapse3c">
        Trasporti
        </button>
      </span>
      <div id="collapse3c" class="accordion-collapse collapse" role="region" aria-labelledby="heading3c">
        <div class="accordion-body">
          {% include esempi-lombardia/toggles.html %}
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
  <div class="accordion" id="collapseExample">
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading1c">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapse1c" aria-expanded="false" aria-controls="collapse1c">
        Account
        </button>
      </span>
      <div id="collapse1c" class="accordion-collapse collapse" role="region" aria-labelledby="heading1c">
        <div class="accordion-body">
             include esempi-lombardia/account_posta.html 
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading2c">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapse2c" aria-expanded="false" aria-controls="collapse2c">
        Indirizzo
        </button>
      </span>
      <div id="collapse2c" class="accordion-collapse collapse" role="region" aria-labelledby="heading2c">
        <div class="accordion-body">
           include esempi-lombardia/indirizzo.html 
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading3c">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapse3c" aria-expanded="false" aria-controls="collapse3c">
        Trasporti
        </button>
      </span>
      <div id="collapse3c" class="accordion-collapse collapse" role="region" aria-labelledby="heading3c">
        <div class="accordion-body">
           include esempi-lombardia/toggles.html 
        </div>
      </div>
    </div>
  </div>
{% endhighlight %}

### Versione according

Con la versione **according** è possibile aprire un solo pannello di contenuti alla volta.  
Questo per rendere chiaramente circoscritto il contenuto in oggetto.

<div class="bd-example">
  <div class="accordion" id="accordionExample1">
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading1">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
          Account
        </button>
      </span>
      <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading1">
        <div class="accordion-body">
        {% include esempi-lombardia/account_posta2.html %}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading2">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
          Indirizzo
        </button>
      </span>
      <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading2">
        <div class="accordion-body">
          {% include esempi-lombardia/indirizzo2.html %}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading3">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
          Trasporti
        </button>
      </span>
      <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading3">
        <div class="accordion-body">
          {% include esempi-lombardia/toggles2.html %}
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="accordion" id="accordionExample1">
  <div class="accordion-item">
    <span class="accordion-header h2" id="heading1">
      <button class="accordion-button" type="button" data-bs-toggle="collapse"
      data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
        Account
      </button>
    </span>
    <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading1">
      <div class="accordion-body">
         include esempi-lombardia/account_posta2.html 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <span class="accordion-header h2" id="heading2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
      data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
        Indirizzo
      </button>
    </span>
    <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading2">
      <div class="accordion-body">
           include esempi-lombardia/indirizzo2.html 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <span class="accordion-header h2" id="heading3">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
        Trasporti
      </button>
    </span>
    <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading3">
      <div class="accordion-body">
           include esempi-lombardia/toggles2.html
      </div>
    </div>
  </div>
</div>
{% endhighlight %}


### Versione nested

La versione **nested** dell’accordion permette di gestire in maniera ottimale la gerarchia delle informazioni inserite all’interno della componente, nel caso in cui si debbano inserire pannelli secondari.  
In questo caso, i pannelli secondari appariranno nidificati all’interno di quelli principali.

<div class="bd-example">
  <div class="accordion" id="accordionExample2">
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading1a">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1a" aria-expanded="true" aria-controls="collapse1a">
          Elemento Accordion #1
        </button>
      </span>
      <div id="collapse1a" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2" role="region" aria-labelledby="heading1a">
        <div class="accordion-body">
          <div class="accordion" id="accordionExample2N">
            <div class="accordion-item">
              <span class="accordion-header h3" id="heading1n">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1n" aria-expanded="true" aria-controls="collapse1n">
                  Elemento Accordion annidato #1
                </button>
              </span>
              <div id="collapse1n" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2N" role="region" aria-labelledby="heading1n">
                <div class="accordion-body">
                  Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <span class="accordion-header h3" id="heading2n">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2n" aria-expanded="false" aria-controls="collapse2n">
                  Elemento Accordion annidato #2
                </button>
              </span>
              <div id="collapse2n" class="accordion-collapse collapse" data-bs-parent="#accordionExample2N" role="region" aria-labelledby="heading2n">
                <div class="accordion-body">
                  Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <span class="accordion-header h3" id="heading3n">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3n" aria-expanded="false" aria-controls="collapse3n">
                  Elemento Accordion annidato #3
                </button>
              </span>
              <div id="collapse3n" class="accordion-collapse collapse" data-bs-parent="#accordionExample2N" role="region" aria-labelledby="heading3n">
                <div class="accordion-body">
                  Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading2a">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2a" aria-expanded="false" aria-controls="collapse2a">
          Elemento Accordion #2
        </button>
      </span>
      <div id="collapse2a" class="accordion-collapse collapse" data-bs-parent="#accordionExample2" role="region" aria-labelledby="heading2a">
        <div class="accordion-body">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading3a">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3a" aria-expanded="false" aria-controls="collapse3a">
          Elemento Accordion #3
        </button>
      </span>
      <div id="collapse3a" class="accordion-collapse collapse" data-bs-parent="#accordionExample2" role="region" aria-labelledby="heading3a">
        <div class="accordion-body">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="accordion" id="accordionExample2">
  <div class="accordion-item">
    <span class="accordion-header h2" id="heading1a">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1a"
      aria-expanded="true" aria-controls="collapse1a">
        Elemento Accordion #1
      </button>
    </span>
    <div id="collapse1a" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2"
    role="region" aria-labelledby="heading1a">
      <div class="accordion-body">
        <div class="accordion" id="accordionExample2N">
          <div class="accordion-item">
            <span class="accordion-header h3" id="heading1n">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1n"
              aria-expanded="true" aria-controls="collapse1n">
                Elemento Accordion annidato #1
              </button>
            </span>
            <div id="collapse1n" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2N"
            role="region" aria-labelledby="heading1n">
              <div class="accordion-body">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget.
                . . .
{% endhighlight %}


### Accordion con icone

**Posizionamento delle icone**
Le icone per l’apertura dei pannelli possono essere delle chevron ma anche altre (si veda l’esempio di seguito con +/- come icone) e possono essere poste sia a destra (come nell’esempio sopra) che a sinistra come mostrato di seguito.

<div class="bd-example">
  <div class="accordion accordion-left-icon" id="accordionExampleLft">
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading1l">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1l" aria-expanded="true" aria-controls="collapse1l">
        Account
        </button>
      </span>
      <div id="collapse1l" class="accordion-collapse collapse show" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading1l">
        <div class="accordion-body">
          {% include esempi-lombardia/account_posta3.html %}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading2l">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2l" aria-expanded="false" aria-controls="collapse2l">
          Indirizzo
        </button>
      </span>
      <div id="collapse2l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading2l">
        <div class="accordion-body">
          {% include esempi-lombardia/indirizzo3.html %}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <span class="accordion-header h2" id="heading3l">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3l" aria-expanded="false" aria-controls="collapse3l">
          Trasporti
        </button>
      </span>
      <div id="collapse3l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading3l">
        <div class="accordion-body">
          {% include esempi-lombardia/toggles3.html %}
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="accordion accordion-left-icon" id="accordionExampleLft">
  <div class="accordion-item">
    <span class="accordion-header h2" id="heading1l">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1l" aria-expanded="true" aria-controls="collapse1l">
      Account
      </button>
    </span>
    <div id="collapse1l" class="accordion-collapse collapse show" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading1l">
      <div class="accordion-body">
         include esempi-lombardia/account_posta3.html
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <span class="accordion-header h2" id="heading2l">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2l" aria-expanded="false" aria-controls="collapse2l">
        Indirizzo
      </button>
    </span>
    <div id="collapse2l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading2l">
      <div class="accordion-body">
        include esempi-lombardia/indirizzo3.html
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <span class="accordion-header h2" id="heading3l">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3l" aria-expanded="false" aria-controls="collapse3l">
        Trasporti
      </button>
    </span>
    <div id="collapse3l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading3l">
      <div class="accordion-body">
         include esempi-lombardia/toggles3.html
      </div>
    </div>
  </div>
</div>
{% endhighlight %}
