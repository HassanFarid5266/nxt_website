<template>
    <!-- <section class="page-head">
        <div class="boxed">
            <span class="page-badge">Our Trusted Partnerships</span>
            <h1 class="page-title">Empowering Partnerships, Elevating Possibilities.</h1>
            <p class="page-desc">
                At NexTash, we believe in the power of collaboration and synergy. Our partnerships are the cornerstone
                of our success, driving innovation and delivering exceptional results to our clients. Together, we
                leverage
                expertise, technology, and creativity to unlock new opportunities and achieve remarkable outcomes. Join
                us
                on our journey as we shape the future of IT together.
            </p>
        </div>
    </section> -->
    <main class="partner-page">
        <!-- WELCOME -->
        <section class="welcome">
            <div class="welcome-content">
                <div class="welcome-head">
                    <h2 class="heading">
                        <span>E</span>mpowering <span>G</span>rowth with Our
                        <span>T</span>rusted Partners
                    </h2>
                </div>
                <div class="welcome-body">
                    <p class="desc">
                        We collaborate with leading companies to bring you innovative
                        solutions and seamless experiences. Our partners help us deliver
                        excellence, ensuring that you stay ahead in the competitive
                        market.
                    </p>
                </div>
                <div class="welcome-foot">
                    <div class="button">
                        <a href="#" class="btn">Let's Collaborate</a>
                    </div>
                    <div class="button">
                        <a href="#" class="btn">View all partner's</a>
                    </div>
                </div>
            </div>
            <div class="weclome-right">
                <div class="welcome-image">
                    <img src="@/assets/images/partner/nxt_logo.png" alt="Nextash Logo" class="logo" />
                </div>
                <div class="welcome-slider">
                    <!-- Slider 1 -->
                    <div class="slider">
                        <Swiper :modules="[Autoplay]" :slides-per-view="5" :loop="true"
                            :autoplay="{ delay: 2000, disableOnInteraction: false }" class="partner_swiper">
                            <SwiperSlide v-for="partner in partners" :key="partner.id">
                                <div class="image">
                                    <img :src="partner.image" alt="Partner Image" class="img" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <!-- Slider 2 (RTL) -->
                    <div class="slider" dir="rtl">
                        <Swiper :modules="[Autoplay]" :slides-per-view="5" :loop="true"
                            :autoplay="{ delay: 2200, reverseDirection: true, disableOnInteraction: false }"
                            class="partner_swiper-2">
                            <SwiperSlide v-for="partner in partners" :key="'rtl-' + partner.id">
                                <div class="image">
                                    <img :src="partner.image" alt="Partner Image" class="img" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <!-- Slider 3 -->
                    <div class="slider">
                        <Swiper :modules="[Autoplay]" :slides-per-view="5" :loop="true"
                            :autoplay="{ delay: 2500, disableOnInteraction: false }" class="partner_swiper-3">
                            <SwiperSlide v-for="partner in partners" :key="'s3-' + partner.id">
                                <div class="image">
                                    <img :src="partner.image" alt="Partner Image" class="img" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        <!-- WELCOME -->
        <!-- PARTNERS -->
        <section class="partner">
            <div class="section-center">
                <p class="section-badge">Meet The EXPERTS</p>
                <h3 class="section-title"><span>O</span>ur Certified <span>P</span>artner's</h3>
            </div>
            <div class="boxed">
                <div class="partners-cards">
                    <PartnerCard v-for="partner in partnersStore.partners" :key="partner.id" :partner="partner" />
                </div>
            </div>
        </section>
        <!-- PARTNERS -->
        <!-- PARTNERSHIP -->
        <section class="partnership">
            <div class="section-center">
                <p class="section-badge">Partnership Program</p>
                <h3 class="section-title"><span>O</span>ur Partnership <span>P</span>rogram</h3>
                <p class="section-desc">
                    <strong>
                        <q>
                            <u>
                                Become a <span>N</span>extTash Partner & Grow Your
                                Business!
                            </u>
                        </q>
                    </strong>
                </p>
                <p class="section-desc">
                    Join one of our 3 exclusive partnership models to sell, refer, or
                    implement <strong><span>N</span>exTash</strong> ERP solutions and
                    unlock new earning opportunities.
                </p>
            </div>
            <div class="partnership-content">
                <div class="partnership-cards">
                    <article class="card partnership-card">
                        <div class="card-head">
                            <div class="card-image image-zoom">
                                <img src="@/assets/images/partner/investor.png" alt="Investor image" class="image" />
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="body-head">
                                <img src="@/assets/images/partner/before-right.png" class="arrow-img" />
                                <p class="card-desc">
                                    Invest in the Future of ERP & Earn Long-Term Profits
                                </p>
                                <img src="@/assets/images/partner/after-right.png" class="arrow-img" />
                            </div>
                            <div class="body-desc">
                                <div class="card-title">
                                    <u><span>W</span>hat is it ?</u>
                                </div>
                                <p class="card-desc">
                                    If you are an investor looking to be a part of a
                                    fast-growing ERP company, this plan allows you to invest in
                                    <strong><span>N</span>exTash</strong> ERP and gain
                                    equity-based or revenue-sharing returns.
                                </p>
                            </div>
                            <div class="body-points">
                                <h2 class="card-title">
                                    <u><span>K</span>ey <span>B</span>enefits:</u>
                                </h2>
                                <ul class="menu">
                                    <li class="list-item">
                                        <img src="@/assets/images/partner/dollar_icon.png" alt="Dollar Icon" />
                                        <p class="card-desc">
                                            Earn passive income through revenue sharing
                                        </p>
                                    </li>
                                    <li class="list-item">
                                        <img src="@/assets/images/partner/gala_chart.svg" alt="Chart Icon" />
                                        <p class="card-desc">
                                            Get equity in
                                            <strong><span>N</span>extash</strong> ERP's future
                                            growth
                                        </p>
                                    </li>
                                    <li class="list-item">
                                        <img src="@/assets/images/partner/building.svg" alt="Building Icon" />
                                        <p class="card-desc">
                                            Exclusive decision-making rights & insights
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-foot">
                            <p class="card-desc">
                                <u>Investment Model:</u> Equity-based
                                <strong>O<span>r</span></strong>
                                Revenue-sharing
                            </p>
                            <button class="btn btn-partner">Become an Investor</button>
                        </div>
                    </article>
                    <article class="card partnership-card">
                        <div class="card-head">
                            <div class="card-image image-zoom">
                                <img src="@/assets/images/partner/reseller.png" alt="Reseller image" class="image" />
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="body-head">
                                <img src="@/assets/images/partner/before-right.png" class="arrow-img" />
                                <p class="card-desc">
                                    Sell Nextash ERP & Grow Your Business
                                </p>
                                <img src="@/assets/images/partner/after-right.png" class="arrow-img" />
                            </div>
                            <div class="body-desc">
                                <div class="card-title">
                                    <u><span>W</span>hat is it ?</u>
                                </div>
                                <p class="card-desc">
                                    If you are a business or an individual looking to become a part of a high-growth ERP
                                    ecosystem, this plan allows you to resell
                                    <strong><span>N</span>exTash</strong>ERP and earn high commissions on every sale.
                                    Grow your revenue with a trusted ERP solution.
                                </p>
                            </div>
                            <div class="body-points">
                                <h2 class="card-title">
                                    <u><span>K</span>ey <span>B</span>enefits:</u>
                                </h2>
                                <ul class="menu">
                                    <li class="list-item">
                                        <img src="@/assets/images/partner/mdi_color.png" alt="Dollar Icon" />
                                        <p class="card-desc">
                                            White-label & branding options
                                        </p>
                                    </li>
                                    <li class="list-item">
                                        <img src="@/assets/images/partner/gala_chart.svg" alt="Chart Icon" />
                                        <p class="card-desc">
                                            Dedicated sales & marketing support
                                        </p>
                                    </li>
                                    <li class="list-item">
                                        <img src="@/assets/images/partner/dollar_icon.png" alt="Building Icon" />
                                        <p class="card-desc">
                                            Earn commissions on every sale
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-foot">
                            <p class="card-desc">
                                <u>Earnings:</u> Up to
                                <strong>30<span>%</span></strong>
                                commission per sale
                            </p>
                            <button class="btn btn-partner">Become an Reseller</button>
                        </div>
                    </article>
                    <article class="card partnership-card">
                        <div class="card-head">
                            <div class="card-image image-zoom">
                                <img src="@/assets/images/partner/initiative.png" alt="Initiative image"
                                    class="image" />
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="body-head">
                                <img src="@/assets/images/partner/before-right.png" class="arrow-img" />
                                <p class="card-desc">
                                    Refer Businesses & Earn Commission on Every Lead
                                </p>
                                <img src="@/assets/images/partner/after-right.png" class="arrow-img" />
                            </div>
                            <div class="body-desc">
                                <div class="card-title">
                                    <u><span>W</span>hat is it ?</u>
                                </div>
                                <p class="card-desc">
                                    The Affiliate Program is for individuals, influencers, or agencies who want to refer
                                    clients to
                                    <strong><span>N</span>exTash</strong>ERP and earn referral commissions. Start
                                    earning commissions with every successful signup!
                                </p>
                            </div>
                            <div class="body-points">
                                <h2 class="card-title">
                                    <u><span>K</span>ey <span>B</span>enefits:</u>
                                </h2>
                                <ul class="menu">
                                    <li class="list-item">
                                        <img src="@/assets/images/partner/dollar_icon.png" alt="Dollar Icon" />
                                        <p class="card-desc">
                                            No upfront investment required
                                        </p>
                                    </li>
                                    <li class="list-item">
                                        <img src="@/assets/images/partner/qlementine-icons_money-16.png"
                                            alt="Chart Icon" />
                                        <p class="card-desc">
                                            Earn commissions for every successful referral
                                        </p>
                                    </li>
                                    <li class="list-item">
                                        <img src="@/assets/images/partner/gala_chart.svg" alt="Building Icon" />
                                        <p class="card-desc">
                                            Get a dedicated referral tracking dashboard
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-foot">
                            <p class="card-desc">
                                <u>Investment Model:</u> Fixed Referral
                                <strong>F<span>ree</span></strong>
                                per client
                            </p>
                            <button class="btn btn-partner">Start Reffering</button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
        <!-- PARTNERSHIP -->
        <!-- CLIENTS -->
        <section class="clients">
            <div class="boxed">
                <div class="section-center">
                    <P class="section-badge"> <span>A</span>ffiliate <span>A</span>gencies </P>
                    <h3 class="section-title"><span>N</span>exTash Affiliated <span>A</span>gencies</h3>
                </div>
                <br><br>
                <article class="row-clients">
                    <div class="col" v-for="(logo, index) in clientsStore.getClients" :key="index"
                        data-aos-duration="1000" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-in-out">
                        <img :src="logo" class="image-full grayscale" alt="Client Logo" />
                    </div>
                </article>
            </div>
        </section>
        <!-- CLIENTS -->
    </main>
</template>

<script setup>
import PartnerCard from '@/components/PartnerCard.vue'
import { useClientsStore, usePartnersStore, usePartnerSwiperStore } from '@/stores';

const partnerSwiperStore = usePartnerSwiperStore();
const partners = partnerSwiperStore.partners;

const clientsStore = useClientsStore();
const partnersStore = usePartnersStore();
</script>
