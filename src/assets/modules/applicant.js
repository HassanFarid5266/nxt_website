on("submit", "#applicant", function (e) {
  e.preventDefault();
  const form = e.target;

  let fullname = form.querySelector("#fullname").value;
  let email = form.querySelector("#email").value;
  let phone = form.querySelector("#phone").value;
  let skills = form.querySelector("#skills").value;
  let education = form.querySelector("#education").value;
  let feedback = form.querySelector("#feedback");
  feedback.innerHTML = "";

  const formData = new FormData(form);
  formData.append("fullname", fullname);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("skills", skills);
  formData.append("education", education);

  fetch(ApiUrl("nextash_v2.events.applicant.create/"), {
    method: "POST",
    body: formData,
    headers: new Headers({ "X-Frappe-CSRF-Token": csrf_token() }),
  })
    .then((res) => res.json())
    .then((data) => {
      form.reset();
      feedback.classList.remove("msg-danger");
      feedback.classList.add("msg-success");
      feedback.innerHTML =
        "Thanks for contacting us, please expect reply from us on your given email in 1 business day.";
      setTimeout(() => {
        feedback.innerHTML = "";
      }, 10000);
    })
    .catch(function (res) {
      feedback.classList.add("msg-danger");
      feedback.classList.remove("msg-success");
      feedback.innerHTML = "Oh Snap! something went wrong :-(.";
    });
});
