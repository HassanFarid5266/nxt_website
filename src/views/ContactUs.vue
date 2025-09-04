<template>
  <section class="page-head">
    <div class="boxed">
      <span class="page-badge">CONTACT US</span>
      <h1 class="page-title">We're Here to Help!</h1>
      <p class="page-desc">
        - Welcome to NexTash! We're excited to connect with you. Whether you have questions, feedback, or want to
        explore collaboration opportunities, we're here to help. Our skilled team ensures swift resolution to your
        inquiries and issues, while our experienced functional analysts offer expert guidance tailored to your
        business
        requirements. Trust us for top-notch support with unmatched expertise. Looking for a career opportunity with
        NexTash? Visit our <a href="/careers/" class="link">Careers</a> page to see our current openings and apply.
      </p>
    </div>
  </section>

  <main class="contact-layout bg-one">
    <section class="boxed">
      <div class="col-left" data-aos-duration="1000" data-aos="fade-right" data-aos-once="true"
        data-aos-easing="ease-in-out">
        <article class="media">
          <i class="bx bx-envelope icon"></i>
          <div class="media-body">
            <h4 class="media-title">Email:</h4>
            <a href="mailto:support@nextash.com" class="media-desc">support@nextash.com</a>
          </div>
        </article>
        <br>
        <article class="media">
          <i class="bx bx-phone icon"></i>
          <div class="media-body">
            <h4 class="media-title">Mobile:</h4>
            <a href="tel:+923083077165" class="media-desc" target="_blank">0092 308 3077 165</a>
          </div>
        </article>

        <br>
        <article class="media">
          <i class="bx bxl-whatsapp icon"></i>
          <div class="media-body">
            <h4 class="media-title">WhatsApp:</h4>
            <a href="https://wa.me/+9203083077165?text=Hello, i get your number from website, can we talk?"
              target="_blank" class="media-desc">0092 308 3077 165</a>
          </div>
        </article>

        <br>
        <article class="media">
          <i class="bx bx-building icon align-self-start"></i>
          <div class="media-body">
            <h4 class="media-title">Offices:</h4>
            <a class="media-desc" href="https://www.google.com/maps/search/31.568966,+74.411162?entry=tts"
              target="_blank">
              Head Office: 2nd Floor, Al-haram Plaza, Aziz Pulli, Canal Bank Road, Lahore <span
                class="bx bx-right-top-arrow-circle icon-lg"></span>
            </a>
            <hr style="border-color: var(--primary); width: 200px; margin-left: 0">
            <a class="media-desc" href="https://maps.app.goo.gl/hUSwu1vFRue6LuXX8" target="_blank">
              Branch Office: Office #D2, 1st Floor, Red Mall, Shalimar Link Road, Lahore <span
                class="bx bx-right-top-arrow-circle icon-lg"></span>
            </a>
          </div>
        </article>
      </div>
      <div class="col-right" data-aos-duration="1000" data-aos="fade-left" data-aos-once="true"
        data-aos-easing="ease-in-out">
        <form class="card card-hoverable card-form" enctype="multipart/form-data" id="contact" autocomplete="on">
          <div class="card-head">
            <h2 class="card-title">Get in touch</h2>
            <p class="card-desc">
              If you have any query please fill out the form below. We do our best to respond within 1 business day.
            </p>
          </div>
          <div class="card-body">
            <div class="input-group">
              <input type="text" required class="field" id="fullname" placeholder="Full Name*" />
            </div>
            <div class="input-group">
              <input type="email" required class="field" id="email" placeholder="Email*" />
            </div>
            <div class="input-group">
              <input type="tel" class="field" id="phone" placeholder="Phone No (optional)" />
            </div>
            <div class="input-group">
              <textarea class="field" required id="message" rows="3" placeholder="Message*"></textarea>
            </div>
          </div>
          <div class="card-foot center">
            <p id="feedback"></p>
            <button type="submit" class="btn-outline" id="btn">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>