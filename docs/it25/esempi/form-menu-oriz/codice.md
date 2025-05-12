---
layout: it25_docs
group: esempi
title: Codice Form
redirect_from: 'it25/esempi/'
toc: true
--- 

## Struttura della pagina
{% raw %}
``` 
<header>
{% include html_docs/header/topbar_dropdown.html %}
{% include html_docs/header/header_menu-oriz.html %}
{% include esempi-lombardia/menu_orizzontale.html %}
</header>

<main>
  <div class="container">
    <form class="my-5" id="justValidate" action="index.html" method="post">
      {% include esempi-lombardia/account_posta.html %}
      {% include esempi-lombardia/indirizzo.html %}
      {% include esempi-lombardia/datepickers.html %}
      {% include esempi-lombardia/radiobuttons.html %}
      {% include esempi-lombardia/checkboxes.html %}
      {% include esempi-lombardia/toggles.html %}
<!-- *****************************************************************************************************+ -->
      <div class="row">
        <div class="col-12">
          <div class="float-end">
            <button type="button" class="btn btn-outline-primary">Annulla</button>
            <button type="submit" class="btn btn-primary">Invio</button>
          </div>
        </div>
      </div>
<!-- *****************************************************************************************************+ -->
    </form>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div aria-live="polite" id="errorMsgContainer"></div>
        </div>
      </div>
    </div>
  </div> <!-- end container -->
</main>
{% include html_docs/footer/footer.html %}
```
{% endraw %}


La struttura anche in questo caso è semplice:

Il tag `<header>` contienela *barra istituzionale* composta da:
* *topbar*
* **header_menu-oriz**  
  descritta più sotto.
* il *menu_orizzontale*
  
Nel tag `<main>` il `<div class="container">` mantiene il **form** compatto al centro dello schermo, lasciando spazio in bianco ai lati sugli schermi di ampie dimensioni.

Inoltre, per staccare verticalmente i campi del form dal menù orizzontale è stata usata la classe `my-5` sul tag del *form*.

---
## La validazione

La validazione dell'input, a titolo di esempio, è stata realizzata con il seguente **script** a fondo pagina:
```javascript
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const errorMessage =
      '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Chiudi avviso"></div>'
    const errorWrapper = document.querySelector('#errorMsgContainer')
    const validate = new bootstrap.FormValidate('#justValidate', {
      errorFieldCssClass: 'is-invalid',
      errorLabelCssClass: 'form-feedback',
      errorLabelStyle: '',
      focusInvalidField: false,
    })

    validate
      .addField('#inputEmail4', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto',
        },
        {
          rule: 'email',
          errorMessage: 'Inserire email corretta',
        },
      ])
      .addField('#exampleInputPassword9', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto',
        },
      ])
      .addField('#formNome', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto',
        },
      ])
      .addField('#formCognome', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto',
          sucessMessage: 'Validato',
        },
      ])
      .addField('#inputAddress', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto',
        },
      ])
      .addField('#civico', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto',
        },
      ])
      .addField('#inputCity', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto',
        },
      ])
      .addField('#inputCAP', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto',
        },
        {
          rule: 'minNumber',
          value: 20001,
          errorMessage: 'I CAP della Lombardia sono superiori a 20000',
        },
        {
          rule: 'maxNumber',
          value: 46100,
          errorMessage: 'I CAP della Lombardia non sono superiori a 46100',
        }
      ])
      .addField('#defaultSelect', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto',
        },
      ])
      .addField('#data_nascita', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto',
        },
      ])
      .addField('#accessibleAutocomplete', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto',
        },
        {
          validator: (value) => {
            return ['Bergamo', 'Brescia', 'Como', 'Cremona', 'Lecco', 'Lodi', 'Mantova', 'Monza e della Brianza', 'Milano', 'Sondrio', 'Varese'].includes(value);
          },
          errorMessage: 'Puoi scegliere solo province lombarde',
        },
      ])
      .addRequiredGroup('#group_mezzi0', 'Scegli almeno un’opzione')
      .addRequiredGroup('#group_mezzi2', 'Scegli almeno un’opzione')
      .onSuccess((event) => {
        document.forms['justValidate'].submit()
      })
      .onFail((fields) => {
        errorWrapper.innerHTML = ''
        errorWrapper.innerHTML = errorMessage
        errorWrapper.scrollIntoView()
      })
  })
</script> 
```

