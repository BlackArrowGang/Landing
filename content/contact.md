+++
title = "Contact"
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

<form>

  <div class="form-personal-data">
    <div class="form-personal-data-vertical">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="your name">
    </div>

    <div class="form-personal-data-vertical">
      <label for="name">Email</label>
      <input type="email" id="email" name="email" placeholder="your email">
    </div>
  </div>

  <label for="message">Message</label>
  <textarea id="message" name="message" placeholder="Write your message or something..." style="height:200px"></textarea>

  <input type="submit" value="Send">
</form>
{{< /rawhtml >}}