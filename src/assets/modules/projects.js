function card(item) {
  return `
  <article class="card card-case-study" data-aos-duration="1000" data-aos="fade-down"
  data-aos-once="true">
  <div class="card-head">
    <div class="product-image">
      <img src="${item.image4}" alt="${item.title}" data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" />
    </div>
    <div class="product-image">
      <img src="${item.image3}" alt="${item.title}" data-aos-duration="1000" data-aos="fade-down" data-aos-once="true" />
    </div>
    <div class="product-image">
      <img src="${item.image2}" alt="${item.title}" data-aos-duration="1000" data-aos="fade-right" data-aos-once="true" />
    </div>
    <div class="product-image">
      <img src="${item.image1}" alt="${item.title}" data-aos-duration="1000" data-aos="fade-left" data-aos-once="true" />
    </div>
  </div>
  <div class="card-body bg-three" data-aos-duration="1000" data-aos="fade-up" data-aos-once="true">
      <span class="card-badge">${item.category}</span>
      <h3 class="card-title">${item.title}</h3>
      <div>
        ${item.details}
      </div>
  </div>
      </article>`;
    }
    // <a href="/case-study/${item.name}" class="btn-outline know-more">Case study</a>
    
function listing(page = 1, append = true) {
  let output = document.querySelector("#listing");
  let loadmore = document.querySelector("#loadmore");
  let template = "";

  let query = searchParams({
    limit: 3,
    page: page,
  });

  fetch(ApiUrl("nextash_v2.events.projects.listing/?" + query))
    .then((res) => res.json())
    .then((data) => {
      data = data.message;
      if (data.count == 0) {
        output.innerHTML = "<p class='no-records'>No projects exists!</p>";
      } else if (data.count != 0) {
        data.results.forEach((item) => (template += card(item)));
        append ? (output.innerHTML += template) : (output.innerHTML = template);
      }

      if (data.next) {
        loadmore.value = data.next;
        loadmore.disabled = false;
        loadmore.style.display = "inline-block";
      } else {
        loadmore.value = 0;
        loadmore.disabled = true;
        loadmore.style.display = "none";
      }
    })
    .catch(function (res) {
      console.log(res);
    })
    .finally(() => {
      AOS.init();
    });
}

listing();

on("click", "#loadmore", function (e) {
  e.preventDefault();
  listing(e.target.value, true);
});
