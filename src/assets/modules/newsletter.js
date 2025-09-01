on("submit", "#newsletter_form", function (e) {
    e.preventDefault();
    const form = e.target;
  
    let email = form.querySelector("#newsletter_email");
    let feedback = document.querySelector("#newsletter_feedback");
    feedback.innerHTML = "";
    const formData = new FormData(form);
    formData.append("email", email.value);
  
    fetch(ApiUrl("nextash_v2.events.subscriber.create/"), {
      method: "POST",
      body: formData,
      headers: new Headers({ "X-Frappe-CSRF-Token": csrf_token() }),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        feedback.classList.remove("msg-danger");
        feedback.classList.add("msg-success");
        feedback.innerHTML = "Thank you for subscribing – here is who we are";
        setTimeout(() => {
          feedback.innerHTML = "";
        }, 5000);
      })
      .catch(function (res) {
        feedback.classList.add("msg-danger");
        feedback.classList.remove("msg-success");
        feedback.innerHTML = "Oh Snap! something went wrong :-(.";
      });
  });
  