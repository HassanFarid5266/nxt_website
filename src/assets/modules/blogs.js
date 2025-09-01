function card(item) {
  return `
  <article class="card card-blog card-hoverable" data-aos-duration="1000" data-aos="zoom-in"
  data-aos-once="true" data-aos-easing="ease-in-out">
  <div class="card-head">
      <a class="card-image image-zoom" href="/blog-post/${item.name}/">
          <img src="${item.meta_image}" class="image" loading="lazy"/>
      </a>
  </div>
  <div class="card-body">
      <div class="text-ellipsis">
        <span class="">${item.blog_category}</span>
      </div>
      <br><br>
      <h3 class="card-title text-ellipsis text-ellipsis-1">
          <a href="/blog-post/${item.name}/">
              ${item.title}
          </a>
      </h3>
      <p class="card-desc text-ellipsis text-ellipsis-3">
          ${item.blog_intro}
      </p>
      <p class="card-desc">
          By
          <a href="javascript:void(0)" class="card-link">${item.blogger}</a>
          -
          <time>${item.published_on}</time>
      </p>
  </div>
</article>`;
}

function listing(page = 1, append = true) {
  let sort = document.querySelector("#sort");
  let count = document.querySelector("#count");
  let output = document.querySelector("#listing");
  let loadmore = document.querySelector("#loadmore");
  let category = document.querySelector("#category");
  let search = document.querySelector("#search");
  let template = "";

  let query = searchParams({
    limit: 6,
    page: page,
    sort: sort.value,
    category: category.value,
    search: search.value,
  });

  fetch(ApiUrl("nextash_v2.events.blogs.listing/?" + query))
    .then((res) => res.json())
    .then((data) => {
      data = data.message;
      if (data.count == 0) {
        count.innerHTML = "(0)";
        output.innerHTML = "<p class='no-records'>No blogs exists!</p>";
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

on("change", "#category", function (e) {
  e.preventDefault();
  document.querySelector("#category").value = e.target.value;
  listing(1, false);
});

on("click", "#loadmore", function (e) {
  e.preventDefault();
  listing(e.target.value, true);
});
