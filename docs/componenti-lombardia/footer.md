---
layout: docs
title: Footer
description: Footer per il fondo pagina.
group: componenti-lombardia
toc: true
---

Ne sono stati predisposti tre tipi.

## Come usarlo

Copiare il codice HTML all'interno delle proprie pagine web inserendolo in fondo al tag `body`.

Può essere personalizzato nel testo, ma è importante ... 

### Footer Applicativi Web

<div class="bd-example">
    <footer class="footer">
      <div class="container-fluid px-3">
        <div class="row">
          <div class="col-12 my-4 font-weight-bold">
            Nome dell'applicativo Web
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <nav>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="">Voce 1</a></li>
                <li class="list-inline-item"><a href="">Voce 2</a></li>
                <li class="list-inline-item"><a href="">Voce 3</a></li>
                <li class="list-inline-item"><a href="">Voce 4</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-3">
            <span class="d-inline-block">&copy; Copyright Regione Lombardia</span>
            <span class="d-inline-block"> - tutti i diritti riservati</span>
            <span class="d-inline-block"> - C.F. 80050050154</span>
            <span class="d-inline-block"> - Piazza Città di Lombardia 1</span>
            <span class="d-inline-block"> - 20124 Milano</span>
          </div>
        </div>
      </div>
    </footer> 
</div>

{% highlight html %}
    <footer class="footer">
      <div class="container-fluid px-3">
        <div class="row">
          <div class="col-12 my-4 font-weight-bold">
            Nome dell'applicativo Web
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <nav>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="">Voce 1</a></li>
                <li class="list-inline-item"><a href="">Voce 2</a></li>
                <li class="list-inline-item"><a href="">Voce 3</a></li>
                <li class="list-inline-item"><a href="">Voce 4</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-3">
            <span class="d-inline-block">&copy; Copyright Regione Lombardia</span>
            <span class="d-inline-block"> - tutti i diritti riservati</span>
            <span class="d-inline-block"> - C.F. 80050050154</span>
            <span class="d-inline-block"> - Piazza Città di Lombardia 1</span>
            <span class="d-inline-block"> - 20124 Milano</span>
          </div>
        </div>
      </div>
    </footer> 
{% endhighlight %}


#### Note
All'interno del tag footer il div con classe container-fluid e px-3 mantiene la distanza di 16 pixel dal bordo sinistro della videata.

Il div che contiene il nome dell'appliativo, ha classe my-4, che crea un margine di 24 pixel sopra e sotto il testo.

La dicitura del copyright è strutturata in modo da andare a capo a blocchi a seconda della dimensione dello schermo. 
