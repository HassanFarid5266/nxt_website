function card(item) {
  return `
  <div class="card card-hoverable card-job">
    <div class="card-body">
        <b class="card-badge">${item.company}</b>
        <h3 class="card-title">${item.job_title}</h3>
        <div class="card-desc">${item.job_intro}</div>
        <a href="/job/${item.name}/" class="btn-outline know-more">Apply</a>
    </div>
  </div>`;
}

function listing(page = 1, append = true) {
  let output = document.querySelector("#listing");
  let search = document.querySelector("#search");
  let sort = document.querySelector("#sort");
  let loadmore = document.querySelector("#loadmore");
  let count = document.querySelector("#count");
  let template = "";

  let query = searchParams({
    limit: 3,
    page: page,
    search: search.value,
    sort: sort.value,
  });

  fetch(ApiUrl("nextash_v2.events.jobs.listing/?" + query))
    .then((res) => res.json())
    .then((data) => {
      data = data.message;
      if (data.count == 0) {
        count.innerHTML = "(0)";
        output.innerHTML = "<p class='no-records'>No jobs exists!</p>";
      } else if (data.count != 0) {
        count.innerHTML = "(" + data.count + ")";
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

on("change", "#sort", function (e) {
  e.preventDefault();
  listing(1, false);
});

on("submit", "#searchForm", function (e) {
  e.preventDefault();
  listing(1, false);
});

on("click", "#loadmore", function (e) {
  e.preventDefault();
  listing(e.target.value, true);
});
