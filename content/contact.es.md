+++
title = "Contactanos"
date = "2022-11-07"
aliases = ["contact"]
[ author ]
  name = "Hugo Authors"
+++


{{< rawhtml >}}

<style>

textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.form-personal-data {
  display: flex;
  gap: 10px;
}

.form-personal-data-vertical, input[type=text], input[type=email] {
  width: 100%;
  margin-bottom: 5px;
}

input[type=text], input[type=email] {
  padding: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}
</style>

<form action="{{< contactFormUrl >}}" method="POST">

  <div class="form-personal-data">
    <div class="form-personal-data-vertical">
      <label for="name">Nombre</label>
      <input type="text" id="name" name="name" placeholder="Ingresa tu nombre">
    </div>

    <div class="form-personal-data-vertical">
      <label for="name">Correo Electrónico</label>
      <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico">
    </div>
  </div>

  <label for="message">Mensaje</label>
  <textarea id="message" name="message" placeholder="Escribe tu mensaje..." style="height:200px"></textarea>
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_subject" value="New submission!">
  <input type="hidden" name="_next" value="{{< contactReturnUrl >}}">
  <input type="submit" value="Enviar">
</form>
{{< /rawhtml >}}
