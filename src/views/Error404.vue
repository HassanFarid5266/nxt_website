<template>
  <main class="bg-three">
    <section class="boxed">
      <article class="card card-error">
        <h1 class="card-title">404</h1>
        <h2 class="card-subtitle">Page not found</h2>
        <p class="card-desc">
          Oops! It seems like you've taken a wrong turn. The page you're looking for might have been moved,
          deleted, or it never existed in the first place.
        </p>
        <button class="btn-outline" onclick="window.history.back()">
          Go back
        </button>
      </article>
    </section>
  </main>
</template>