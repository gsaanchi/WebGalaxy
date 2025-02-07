import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import { useParams } from "react-router-dom";
import "grapesjs/dist/css/grapes.min.css"; // Ensure GrapesJS styles are loaded

const PageTemplate = () => {
  const { index } = useParams(); // Access the index parameter from URL

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true,
      height: "100vh",
      width: "auto",
      storageManager: { autoload: false },
    });

    // Load the corresponding template based on the index parameter
    switch (index) {
      case "0":
        editor.setComponents(`
         <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 
    - primary meta tag
  -->
  <title>Kitter - Hight Quality Pet Food</title>
  <meta name="title" content="Kitter - Hight Quality Pet Food">
  <meta name="description" content="This is an eCommerce html template made by codewithsadee">

  <!-- 
    - favicon
  -->
  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">

  <!-- 
    - custom css link
  -->
  <link rel="stylesheet" href="./assets/css/style.css">

  <!-- 
    - google font link
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Bangers&family=Carter+One&family=Nunito+Sans:wght@400;700&display=swap"
    rel="stylesheet">

  <!-- 
    - preload images
  -->
  <link rel="preload" as="image" href="/assets/images/hero-banner.jpg">

</head>

<body id="top">

  <!-- 
    - #HEADER
  -->

  <header class="header" data-header>
    <div class="container">

      <button class="nav-toggle-btn" aria-label="toggle manu" data-nav-toggler>
        <ion-icon name="menu-outline" aria-hidden="true" class="menu-icon"></ion-icon>
        <ion-icon name="close-outline" aria-label="true" class="close-icon"></ion-icon>
      </button>

      <a href="#" class="logo">Kitter</a>

      <nav class="navbar" data-navbar>
        <ul class="navbar-list">

          <li class="navbar-item">
            <a href="#home" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li class="navbar-item">
            <a href="#shop" class="navbar-link" data-nav-link>Shop</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Collections</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Blogs</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Contact</a>
          </li>

        </ul>

        <a href="#" class="navbar-action-btn">Log In</a>
      </nav>

      <div class="header-actions">

        <button class="action-btn" aria-label="Search">
          <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
        </button>

        <button class="action-btn user" aria-label="User">
          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
        </button>

        <button class="action-btn" aria-label="cart">
          <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

          <span class="btn-badge">0</span>
        </button>

      </div>

    </div>
  </header>

  <main>
    <article>

      <!-- 
        - #HERO
      -->

      <section class="section hero has-bg-image" id="home" aria-label="home"
        style="background-image: url('/assets/images/hero-banner.jpg')">
        <div class="container">

          <h1 class="h1 hero-title">
            <span class="span">High Quality</span> Pet Food
          </h1>

          <p class="hero-text">Sale up to 40% off today</p>

          <a href="#" class="btn">Shop Now</a>

        </div>
      </section>

      <!-- 
        - #CATEGORY
      -->

      <section class="section category" aria-label="category">
        <div class="container">

          <h2 class="h2 section-title">
            <span class="span">Top</span> categories
          </h2>

          <ul class="has-scrollbar">

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="/assets/images/category-1.jpg" width="330" height="300" loading="lazy" alt="Cat Food"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Cat Food</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="/assets/images/category-2.jpg" width="330" height="300" loading="lazy" alt="Cat Toys"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Cat Toys</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="/assets/images/category-3.jpg" width="330" height="300" loading="lazy" alt="Dog Food"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Dog Food</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="/assets/images/category-4.jpg" width="330" height="300" loading="lazy" alt="Dog Toys"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Dog Toys</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="/assets/images/category-5.jpg" width="330" height="300" loading="lazy"
                    alt="Dog Sumpplements" class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Dog Sumpplements</a>
                </h3>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <!-- 
        - #OFFERS
      -->

      <section class="section offer" aria-label="offer">
        <div class="container">

          <ul class="grid-list">

            <li>
              <div class="offer-card has-bg-image img-holder"
                style="background-image: url('/assets/images/offer-banner-1.jpg'); --width: 540; --height: 374;">

                <p class="card-subtitle">Selected Items. Online Only.</p>

                <h3 class="h3 card-title">
                  Hot Summer <span class="span">Deals</span>
                </h3>

                <a href="#" class="btn">Read More</a>

              </div>
            </li>

            <li>
              <div class="offer-card has-bg-image img-holder"
                style="background-image: url('/assets/images/offer-banner-2.jpg'); --width: 540; --height: 374;">

                <p class="card-subtitle">Treats & Grooming</p>

                <h3 class="h3 card-title">
                  Spoil your true <span class="span">love</span>
                </h3>

                <a href="#" class="btn">Read More</a>

              </div>
            </li>

            <li>
              <div class="offer-card has-bg-image img-holder"
                style="background-image: url('/assets/images/offer-banner-3.jpg'); --width: 540; --height: 374;">

                <p class="card-subtitle">Our Brand You Will Love</p>

                <h3 class="h3 card-title">
                  New in this <span class="span">year</span>
                </h3>

                <a href="#" class="btn">Read More</a>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <!-- 
        - #PRODUCT
      -->

      <section class="section product" id="shop" aria-label="product">
        <div class="container">

          <h2 class="h2 section-title">
            <span class="span">Best</span> Seller
          </h2>

          <ul class="grid-list">

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-1.jpg" width="360" height="360" loading="lazy"
                    alt="Commodo leo sed porta" class="img-cover default">
                  <img src="/assets/images/product-1_0.jpg" width="360" height="360" loading="lazy"
                    alt="Commodo leo sed porta" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(1)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Commodo leo sed porta</a>
                  </h3>

                  <data class="card-price" value="15">$15.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-2.jpg" width="360" height="360" loading="lazy"
                    alt="Purus consequat congue sit" class="img-cover default">
                  <img src="/assets/images/product-2_0.jpg" width="360" height="360" loading="lazy"
                    alt="Purus consequat congue sit" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Purus consequat congue sit</a>
                  </h3>

                  <data class="card-price" value="45">$45.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-3.jpg" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover default">
                  <img src="/assets/images/product-3_0.jpg" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Morbi vel arcu scelerisque</a>
                  </h3>

                  <data class="card-price" value="45">$45.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-4.jpg" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover default">
                  <img src="/assets/images/product-4_0.jpg" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Morbi vel arcu scelerisque</a>
                  </h3>

                  <data class="card-price" value="49">$49.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-5.jpg" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover default">
                  <img src="/assets/images/product-5_0.jpg" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3"><a href="#" class="card-title">Morbi vel arcu scelerisque</a>
                  </h3>

                  <data class="card-price" value="85">$85.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-6.jpg" width="360" height="360" loading="lazy"
                    alt="Nam justo libero porta ege" class="img-cover default">
                  <img src="/assets/images/product-6_0.jpg" width="360" height="360" loading="lazy"
                    alt="Nam justo libero porta ege" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Nam justo libero porta ege</a>
                  </h3>

                  <data class="card-price" value="85">$85.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-7.jpg" width="360" height="360" loading="lazy"
                    alt="Nam justo libero porta ege" class="img-cover default">
                  <img src="/assets/images/product-7_0.jpg" width="360" height="360" loading="lazy"
                    alt="Nam justo libero porta ege" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Nam justo libero porta ege</a>
                  </h3>

                  <data class="card-price" value="85">$85.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-8.jpg" width="360" height="360" loading="lazy"
                    alt="Etiam commodo leo sed" class="img-cover default">
                  <img src="/assets/images/product-8_0.jpg" width="360" height="360" loading="lazy"
                    alt="Etiam commodo leo sed" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Etiam commodo leo sed</a>
                  </h3>

                  <data class="card-price" value="55">$55.00</data>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <!-- 
        - #SERVICE
      -->

      <section class="section service" aria-label="service">
        <div class="container">

          <img src="/assets/images/service-image.png" width="122" height="136" loading="lazy" alt="" class="img">

          <h2 class="h2 section-title">
            <span class="span">What your pet needs,</span> when they need it.
          </h2>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src="/assets/images/service-icon-1.png" width="70" height="70" loading="lazy"
                    alt="service icon">
                </figure>

                <h3 class="h3 card-title">Free Same-Day Delivery</h3>

                <p class="card-text">
                  Order by 2pm local time to get free delivery on orders $35+ today.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src="/assets/images/service-icon-2.png" width="70" height="70" loading="lazy"
                    alt="service icon">
                </figure>

                <h3 class="h3 card-title">30 Day Return</h3>

                <p class="card-text">
                  35% off your first order plus 5% off all future orders.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src="/assets/images/service-icon-3.png" width="70" height="70" loading="lazy"
                    alt="service icon">
                </figure>

                <h3 class="h3 card-title">Security payment</h3>

                <p class="card-text">
                  25% off your online order of $50+. Available at most locations.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src="/assets/images/service-icon-4.png" width="70" height="70" loading="lazy"
                    alt="service icon">
                </figure>

                <h3 class="h3 card-title">24/7 Support</h3>

                <p class="card-text">
                  Shop online to get orders over $35 shipped fast and free.
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <!-- 
        - #CTA
      -->

      <section class="cta has-bg-image" aria-label="cta" style="background-image: url('./assets/images/cta-bg.jpg')">
        <div class="container">

          <figure class="cta-banner">
            <img src="/assets/images/cta-banner.png" width="900" height="660" loading="lazy" alt="cat" class="w-100">
          </figure>

          <div class="cta-content">

            <img src="/assets/images/cta-icon.png" width="120" height="35" loading="lazy" alt="taste guarantee"
              class="img">

            <h2 class="h2 section-title">Taste it, love it or we’ll replace it… Guaranteed!</h2>

            <p class="section-text">
              At Petio, we believe your dog and cat will love their food so much that if they don’t … we’ll help you
              find a
              replacement. That’s our taste guarantee.
            </p>

            <a href="#" class="btn">Find out more</a>

          </div>

        </div>
      </section>

      <!-- 
        - #BRAND
      -->

      <section class="section brand" aria-label="brand">
        <div class="container">

          <h2 class="h2 section-title">
            <span class="span">Popular</span> Brands
          </h2>

          <ul class="has-scrollbar">

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style="--width: 150; --height: 150;">
                <img src="/assets/images/brand-1.jpg" width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover">
              </div>
            </li>

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style="--width: 150; --height: 150;">
                <img src="/assets/images/brand-2.jpg" width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover">
              </div>
            </li>

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style="--width: 150; --height: 150;">
                <img src="/assets/images/brand-3.jpg" width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover">
              </div>
            </li>

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style="--width: 150; --height: 150;">
                <img src="/assets/images/brand-4.jpg" width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover">
              </div>
            </li>

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style="--width: 150; --height: 150;">
                <img src="/assets/images/brand-5.jpg" width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover">
              </div>
            </li>

          </ul>

        </div>
      </section>

    </article>
  </main>

  <!-- 
    - #FOOTER
  -->

  <footer class="footer" style="background-image: url('/assets/images/footer-bg.jpg')">

    <div class="footer-top section">
      <div class="container">

        <div class="footer-brand">

          <a href="#" class="logo">Kitter</a>

          <p class="footer-text">
            If you have any question, please contact us at <a href="mailto:support@gmail.com"
              class="link">support@gmail.com</a>
          </p>

          <ul class="contact-list">

            <li class="contact-item">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

              <address class="address">
                30 Buttonwood St.Pataskala OH 43062
              </address>
            </li>

            <li class="contact-item">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

              <a href="tel:+16234567891011" class="contact-link">(+1)-6234-56-789-1011</a>
            </li>

          </ul>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Corporate</p>
          </li>

          <li>
            <a href="#" class="footer-link">Careers</a>
          </li>

          <li>
            <a href="#" class="footer-link">About Us</a>
          </li>

          <li>
            <a href="#" class="footer-link">Contact Us</a>
          </li>

          <li>
            <a href="#" class="footer-link">FAQs</a>
          </li>

          <li>
            <a href="#" class="footer-link">Vendors</a>
          </li>

          <li>
            <a href="#" class="footer-link">Affiliate Program</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Information</p>
          </li>

          <li>
            <a href="#" class="footer-link">Online Store</a>
          </li>

          <li>
            <a href="#" class="footer-link">Privacy Policy</a>
          </li>

          <li>
            <a href="#" class="footer-link">Refund Policy</a>
          </li>

          <li>
            <a href="#" class="footer-link">Shipping Policy</a>
          </li>

          <li>
            <a href="#" class="footer-link">Terms of Service</a>
          </li>

          <li>
            <a href="#" class="footer-link">Track Order</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Services</p>
          </li>

          <li>
            <a href="#" class="footer-link">Grooming</a>
          </li>

          <li>
            <a href="#" class="footer-link">Positive Dog Training</a>
          </li>

          <li>
            <a href="#" class="footer-link">Veterinary Services</a>
          </li>

          <li>
            <a href="#" class="footer-link">Petco Insurance</a>
          </li>

          <li>
            <a href="#" class="footer-link">Pet Adoption</a>
          </li>

          <li>
            <a href="#" class="footer-link">Resource Center</a>
          </li>

        </ul>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">

        <p class="copyright">
          &copy; 2022 Made with ♥️ by <a href="#" class="copyright-link">codewithsadee.</a>
        </p>

        <img src="/assets/images/payment.png" width="397" height="32" loading="lazy" alt="payment method" class="img">

      </div>
    </div>

  </footer>

  <!-- 
    - #BACK TO TOP
  -->

  <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
    <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
  </a>

  <!-- 
    - custom js link
  -->
  <script src="/assets/js/script.js" defer></script>

  <!-- 
    - ionicon link
  -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>

</html>`);
        editor.addStyle(`
            :root {

  /**
   * colors
   */

  --bright-yellow-crayola: hsl(36, 94%, 57%);
  --portland-orange: hsl(15, 84%, 57%);
  --battleship-gray: hsl(0, 0%, 53%);
  --silver-chalice: hsl(0, 0%, 70%);
  --spanish-gray: hsl(0, 0%, 60%);
  --sonic-silver: hsl(208, 7%, 46%);
  --raisin-black: hsl(228, 6%, 17%);
  --eerie-black: hsl(210, 3%, 13%);
  --bittersweet: hsl(9, 96%, 69%);
  --light-gray: hsl(0, 0%, 80%);
  --platinum: hsl(0, 0%, 91%);
  --amber: hsl(45, 100%, 51%);
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
  --onyx: hsl(220, 2%, 24%);

  /**
   * typography
   */

  --ff-bangers: 'Bangers', cursive;
  --ff-carter_one: 'Carter One', cursive;
  --ff-nunito_sans: 'Nunito Sans', sans-serif;

  --fs-1: 6.5rem;
  --fs-2: 3.2rem;
  --fs-3: 2.4rem;
  --fs-4: 2rem;
  --fs-5: 1.8rem;
  --fs-6: 1.5rem;
  --fs-7: 1.4rem;
  --fs-8: 1rem;

  --fw-400: 400;
  --fw-700: 700;

  /**
   * spacing
   */

  --section-padding: 40px;

  /**
   * shadow
   */

  --shadow-1: 0 8px 16px hsla(0, 0%, 0%, 0.15);
  --shadow-2: 0 8px 8px hsla(0, 0%, 0%, 0.2);

  /**
   * radius
   */

  --radius-4: 4px;
  --radius-10: 10px;

  /**
   * transition
   */

  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease;
  --cubic-in: cubic-bezier(0.51, 0.03, 0.64, 0.28);
  --cubic-out: cubic-bezier(0.33, 0.85, 0.4, 0.96);

}





/-----------------------------------\
  #RESET
\-----------------------------------/

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li { list-style: none; }

a,
img,
span,
button,
ion-icon { display: block; }

a {
  color: inherit;
  text-decoration: none;
}

img { height: auto; }

button {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
}

ion-icon { pointer-events: none; }

address { font-style: normal; }

html {
  font-family: var(--ff-nunito_sans);
  font-size: 10px;
  scroll-behavior: smooth;
}

body {
  background-color: var(--white);
  color: var(--black);
  font-size: 1.6rem;
  line-height: 1.5;
}

:focus-visible { outline-offset: 4px; }

::-webkit-scrollbar { width: 10px; }

::-webkit-scrollbar-track { background-color: hsl(0, 0%, 98%); }

::-webkit-scrollbar-thumb { background-color: hsl(0, 0%, 80%); }

::-webkit-scrollbar-thumb:hover { background-color: hsl(0, 0%, 70%); }





/-----------------------------------\
  #REUSED STYLE
\-----------------------------------/

.container { padding-inline: 15px; }

.section { padding-block: var(--section-padding); }

.has-bg-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.h1,
.h2,
.h3 { line-height: 1.1; }

.h1 {
  color: var(--white);
  font-family: var(--ff-bangers);
  font-size: var(--fs-1);
  font-weight: var(--fw-400);
  letter-spacing: 1px;
}

.h2,
.h3 { color: var(--eerie-black); }

.h2 { font-size: var(--fs-2); }

.h3 { font-size: var(--fs-3); }

.btn {
  background-color: var(--black);
  color: var(--white);
  max-width: max-content;
  padding: 8px 25px;
  font-weight: var(--fw-700);
  border-radius: 50px;
  transition: var(--transition-1);
}

.section-title {
  text-align: center;
  margin-block-end: 30px;
}

.section-title .span {
  display: inline;
  color: var(--portland-orange);
}

.img-holder {
  aspect-ratio: var(--width) / var(--height);
  background-color: var(--light-gray);
  overflow: hidden;
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.has-scrollbar {
  display: flex;
  align-items: center;
  gap: 30px;
  overflow-x: auto;
  scroll-snap-type: inline mandatory;
  padding-block-end: 20px;
  margin-block-end: -20px;
}

.scrollbar-item {
  min-width: 100%;
  scroll-snap-align: start;
}

.has-scrollbar::-webkit-scrollbar { height: 10px; }

.has-scrollbar::-webkit-scrollbar-track {
  outline: 2px solid var(--portland-orange);
  border-radius: var(--radius-10);
}

.has-scrollbar::-webkit-scrollbar-thumb {
  border-radius: var(--radius-10);
  background-color: var(--portland-orange);
  border: 2px solid var(--white);
}

.has-scrollbar::-webkit-scrollbar-button { width: calc(25% - 30px); }

.grid-list {
  display: grid;
  gap: 30px;
}

.w-100 { width: 100%; }





/-----------------------------------\
  #HEADER
\-----------------------------------/

.action-btn.user { display: none; }

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--white);
  padding-block: 20px;
  z-index: 4;
}

.header.active {
  position: fixed;
  box-shadow: var(--shadow-1);
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.nav-toggle-btn {
  font-size: 30px;
  transition: var(--transition-1);
}

.nav-toggle-btn.active .menu-icon,
.nav-toggle-btn .close-icon { display: none; }

.nav-toggle-btn .menu-icon,
.nav-toggle-btn.active .close-icon { display: block; }

.logo {
  font-family: var(--ff-carter_one);
  font-size: 3rem;
}

.header-actions {
  display: flex;
  gap: 15px;
}

.header .action-btn {
  position: relative;
  font-size: 22px;
  transition: var(--transition-1);
}

.header .btn-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: var(--portland-orange);
  color: var(--white);
  font-size: var(--fs-8);
  min-width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 50px;
}

.nav-toggle-btn:is(:hover, :focus),
.header .action-btn:is(:hover, :focus) { transform: scale(1.1); }

.navbar {
  position: fixed;
  top: 85px;
  left: -320px;
  bottom: 0;
  background-color: var(--white);
  max-width: 320px;
  width: 100%;
  padding: 20px 10px;
  box-shadow: var(--shadow-2);
  transition: 0.25s var(--cubic-out);
  overflow-x: hidden;
  overflow-y: auto;
}

.navbar.active {
  transform: translateX(320px);
  transition-timing-function: var(--cubic-in);
}

.navbar-link {
  color: var(--eerie-black);
  font-size: var(--fs-6);
  padding: 10px 15px;
}

.navbar-action-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background-color: var(--sonic-silver);
  color: var(--white);
  font-weight: var(--fw-700);
  text-transform: uppercase;
  text-align: center;
}





/-----------------------------------\
  #HERO
\-----------------------------------/

.hero {
  margin-block-start: 85px;
  min-height: 360px;
  background-position: left;
  text-align: center;
}

.hero-title .span { font-size: 0.5em; }

.hero-text {
  color: var(--white);
  margin-block: 15px 25px;
}

.hero .btn { margin-inline: auto; }

.hero .btn:is(:hover, :focus) { background-color: var(--portland-orange); }





/-----------------------------------\
  #CATEGORY
\-----------------------------------/

.category-card .card-banner { border-radius: var(--radius-10); }

.category-card .img-cover { transition: var(--transition-2); }

.category-card:is(:hover, :focus-within) .img-cover { transform: scale(1.08); }

.category-card .card-title {
  margin-block-start: 15px;
  text-align: center;
  transition: var(--transition-1);
}

.category-card .card-title:is(:hover, :focus) { color: var(--portland-orange); }





/-----------------------------------\
  #OFFERS
\-----------------------------------/

.offer-card {
  border-radius: var(--radius-10);
  padding: 20px;
  display: grid;
  align-content: center;
}

.offer-card .card-subtitle {
  font-size: var(--fs-7);
  text-transform: uppercase;
  font-weight: var(--fw-700);
}

.offer-card .card-title {
  color: var(--black);
  margin-block: 5px 24px;
}

.offer-card .btn { background-color: var(--portland-orange); }

.offer-card .btn:is(:hover, :focus) { background-color: var(--black); }





/-----------------------------------\
  #PRODUCT
\-----------------------------------/

.product .img-cover.hover,
.product-card .card-action-btn { display: none; }

.product-card { text-align: center; }

.product-card .card-banner {
  border: 1px solid var(--platinum);
  border-radius: var(--radius-10);
  margin-block-end: 20px;
}

.product-card :is(.wrapper, .rating-wrapper) { display: flex; }

.product-card .wrapper {
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: var(--silver-chalice);
  font-size: var(--fs-7);
}

.product-card .rating-wrapper {
  color: var(--amber);
  gap: 2px;
}

.product-card .rating-wrapper.gray { color: unset; }

.product-card .h3 {
  --fs-3: 1.8rem;
  margin-block: 8px 10px;
}

.product-card .card-title { transition: var(--transition-1); }

.product-card .card-title:is(:hover, :focus) { color: var(--portland-orange); }

.product-card .card-price {
  color: var(--portland-orange);
  font-size: var(--fs-4);
  font-weight: var(--fw-700);
}





/-----------------------------------\
  #SERVICE
\-----------------------------------/
.service .img {
  margin-inline: auto;
  margin-block-end: 30px;
}

.service .section-title { margin-block-end: 60px; }

.service-card { text-align: center; }

.service-card .card-icon {
  max-width: max-content;
  margin-inline: auto;
}

.service-card .card-title { margin-block: 10px; }

.service-card .card-text { color: var(--spanish-gray); }





/-----------------------------------\
  #CTA
\-----------------------------------/

.cta { background-position: 75%; }

.cta-banner { display: none; }

.cta-content { padding-block: 80px var(--section-padding); }

.cta .section-title {
  text-align: left;
  margin-block: 10px 20px;
}

.cta .section-text { margin-block-end: 30px; }

.cta .btn:is(:hover, :focus) {
  background-color: var(--white);
  color: var(--black);
}





/-----------------------------------\
  #BRAND
\-----------------------------------/

.brand { --section-padding: 100px; }

.brand .has-scrollbar { gap: 0; }

.brand .scrollbar-item { min-width: 50%; }

.brand .scrollbar-item:not(:last-child) { border-inline-end: 1px solid var(--platinum); }

.brand-card {
  max-width: max-content;
  margin-inline: auto;
}





/-----------------------------------\
  #FOOTER
\-----------------------------------/

.footer {
  background-color: var(--raisin-black);
  color: var(--battleship-gray);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
}

.footer-top {
  padding-block-start: 100px;
  border-block-end: 1px solid var(--onyx);
}

.footer-top .container {
  display: grid;
  gap: 30px;
}

.footer .logo {
  color: var(--white);
  margin-block-end: 10px;
}

.footer-text {
  font-size: var(--fs-6);
  margin-block-end: 25px;
}

.footer-text .link {
  display: inline-block;
  color: var(--portland-orange);
}

.contact-item {
  margin-block-end: 15px;
  color: var(--white);
  font-weight: var(--fw-700);
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact-item ion-icon {
  flex-shrink: 0;
  font-size: 22px;
  color: var(--portland-orange);
}

.social-list {
  display: flex;
  gap: 10px;
}

.social-link {
  background-color: var(--white);
  color: var(--black);
  padding: 12px;
  border-radius: 50%;
  transition: var(--transition-1);
}

.social-link:is(:hover, :focus) {
  background-color: var(--portland-orange);
  color: var(--white);
}

.footer-list-title {
  color: var(--white);
  font-size: var(--fs-5);
  font-weight: var(--fw-700);
  padding-block: 10px;
}

.footer-link {
  padding-block: 4px;
  transition: var(--transition-1);
}

.footer-link:is(:hover, :focus) { color: var(--portland-orange); }

.footer-bottom { padding-block: 20px; }

.copyright { margin-block-end: 10px; }

.copyright-link { display: inline-block; }

.footer-bottom .img {
  width: 100%;
  max-width: max-content;
}




/-----------------------------------\
  #BACK TO TOP
\-----------------------------------/

.back-top-btn {
  position: fixed;
  bottom: 10px;
  right: 20px;
  background-color: var(--portland-orange);
  color: var(--white);
  font-size: 25px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: var(--shadow-2);
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-1);
  z-index: 4;
}

.back-top-btn.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(-10px);
}





/-----------------------------------\
  #MEDIA QUERIES
\-----------------------------------/

/**
 * responsive for large than 575px screen
 */

@media (min-width: 575px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-2: 4rem;
    --fs-3: 2.6rem;

  }



  /**
   * REUSED STYLE
   */

  .scrollbar-item { min-width: calc(50% - 15px); }

  .grid-list { grid-template-columns: 1fr 1fr; }



  /**
   * HERO
   */

  .hero {
    display: grid;
    padding-inline-start: 20px;
    justify-content: flex-start;
    align-items: center;
  }



  /**
   * OFFER
   */

  .offer .grid-list { grid-template-columns: 1fr; }



  /**
   * PRODUCT
   */

  .product-card .card-banner { position: relative; }

  .product-card .card-action-btn,
  .product-card .card-banner .hover {
    display: block;
    position: absolute;
  }

  .product-card .card-banner .hover {
    top: 0;
    left: 0;
  }

  .product-card:is(:hover, :focus-within) .default,
  .product-card .hover { opacity: 0; }

  .product-card .default,
  .product-card:is(:hover, :focus-within) .hover { opacity: 1; }

  .product-card .card-action-btn {
    top: 15px;
    right: 15px;
    color: var(--eerie-black);
    font-size: 20px;
    background-color: var(--white);
    border: 1px solid var(--platinum);
    padding: 12px;
    border-radius: 50%;
    transition: var(--transition-1);
    opacity: 0;
  }

  .product-card .card-action-btn:is(:hover, :focus) {
    background-color: var(--portland-orange);
    border-color: var(--portland-orange);
    color: var(--white);
  }

  .product-card:is(:hover, :focus-within) .card-action-btn { opacity: 1; }



  /**
   * CTA
   */

  .cta .img { width: 250px; }

  .cta .h2 { --fs-2: 3.2rem; }



  /**
   * BRAND
   */

  .brand .scrollbar-item { min-width: 25%; }



  /**
   * FOOTER
   */

  .footer-top .container { grid-template-columns: 1fr 1fr; }

}





/**
 * responsive for large than 768px screen
 */

@media (min-width: 768px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 9rem;

  }



  /**
   * REUSED STYLE
   */

  .scrollbar-item { min-width: calc(33.33% - 20px); }

  .grid-list { grid-template-columns: repeat(3, 1fr); }



  /**
   * HERO
   */

  .hero {
    aspect-ratio: 1512 / 784;
    padding-inline-start: 10%;
  }

  .hero-text { font-size: 2.4rem; }



  /**
   * OFFER
   */

  .offer .grid-list { grid-template-columns: repeat(3, 1fr); }



  /**
   * CTA
   */

  .cta-banner { display: block; }

  .cta .container {
    display: grid;
    grid-template-columns: 1fr 0.75fr;
    align-items: flex-end;
  }



  /**
   * FOOTER
   */

  .footer-bottom .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

}





/**
 * responsive for large than 992px screen
 */

@media (min-width: 992px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 12rem;
    --fs-3: 3rem;

    /**
     * spacing
     */

    --section-padding: 50px;

  }



  /**
   * REUSED STYLE
   */

  .container { padding-inline: 30px; }

  .scrollbar-item { min-width: calc(20% - 24px); }



  /**
   * HEADER
   */

  .nav-toggle-btn,
  .navbar-action-btn { display: none; }

  .header {
    --color: var(--white);
    background: none;
  }

  .header.active {
    --color: var(--black);
    background-color: var(--white);
  }

  .header .logo,
  .header .action-btn { color: var(--color); }

  .header .action-btn.user { display: block; }

  .logo { font-size: 3.8rem; }

  .navbar,
  .navbar.active {
    all: unset;
    margin-inline-end: auto;
  }

  .navbar-list {
    display: flex;
    gap: 10px;
  }

  .navbar-link {
    color: var(--color);
    --fs-6: 1.7rem;
    font-weight: var(--fw-700);
    transition: var(--transition-1);
  }

  .header.active .navbar-link:is(:hover, :focus) { color: var(--portland-orange); }



  /**
   * HERO
   */

  .hero { margin-block-start: 0; }



  /**
   * CATEGORY
   */

  .category-card .h3 { --fs-3: 2rem; }



  /**
   * SERVICE
   */

  .service .grid-list { grid-template-columns: repeat(4, 1fr); }

  .service-card .h3 { --fs-3: 2.4rem; }



  /**
   * BRAND
   */

  .brand .scrollbar-item { min-width: 20%; }



  /**
   * FOOTER
   */

  .footer-top .container { grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr; }

}





/**
 * responsive for large than 1200px screen
 */

@media (min-width: 1200px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 15rem;
    --fs-3: 3.2rem;

  }



  /**
   * REUSED STYLE
   */

  .grid-list { grid-template-columns: repeat(4, 1fr); }



  /**
   * CTA
   */

  .cta-content { padding-block: 100px; }



  /**
   * BRAND, FOOTER
   */

  :is(.brand, .footer) .container {
    max-width: 1200px;
    width: 100%;
    margin-inline: auto;
  }

  .footer { padding-block-start: 40px; }

}
          `);
        break;
      case "1":
        editor.setComponents(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Footcap - Find your footware</title>

  <!--  - favicon -->
  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">

  <!--  - custom css link -->
  <link rel="stylesheet" href="./assets/css/style.css">

  <!-- - google font link -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
    rel="stylesheet">

  <!--  - preload banner -->
  <link rel="preload" href="./assets/images/hero-banner.png" as="image">

</head>

<body id="top">

  <!-- - #HEADER -->

  <header class="header" data-header>
    <div class="container">

      <div class="overlay" data-overlay></div>

      <a href="#" class="logo">
        <img src="https://static.vecteezy.com/system/resources/previews/011/598/889/non_2x/ecommerce-app-sign-free-vector.jpg" alt="Casmart logo" width="100" height="100" alt="Footcap logo">
      </a>

      <button class="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      <nav class="navbar" data-navbar>

        <button class="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <a href="#" class="logo">
          <img src="https://static.vecteezy.com/system/resources/previews/011/598/889/non_2x/ecommerce-app-sign-free-vector.jpg" width="190" height="50" alt="Footcap logo">
        </a>

        <ul class="navbar-list">

          <li class="navbar-item">
            <a href="#" class="navbar-link">Home</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link">About</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link">Products</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link">Shop</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link">Blog</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link">Contact</a>
          </li>

        </ul>

        <ul class="nav-action-list">

          <li>
            <button class="nav-action-btn">
              <ion-icon name="search-outline" aria-hidden="true"></ion-icon>

              <span class="nav-action-text">Search</span>
            </button>
          </li>

          <li>
            <a href="#" class="nav-action-btn">
              <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

              <span class="nav-action-text">Login / Register</span>
            </a>
          </li>

          <li>
            <button class="nav-action-btn">
              <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>

              <span class="nav-action-text">Wishlist</span>

              <data class="nav-action-badge" value="5" aria-hidden="true">5</data>
            </button>
          </li>

          <li>
            <button class="nav-action-btn">
              <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>

              <data class="nav-action-text" value="318.00">Basket: <strong>$318.00</strong></data>

              <data class="nav-action-badge" value="4" aria-hidden="true">4</data>
            </button>
          </li>

        </ul>

      </nav>

    </div>
  </header>


  <main>
    <article>
      <!--  - #HERO  -->
      <section class="section hero" style="background-image: url('./assets/images/hero-banner.png')">
        <div class="container">

          <h2 class="h1 hero-title">
            New Summer <strong>Shoes Collection</strong>
          </h2>

          <p class="hero-text">
            Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage
            existing an
            expanded array of leadership.
          </p>

          <button class="btn btn-primary">
            <span>Shop Now</span>

            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </button>

        </div>
      </section>

      <!-- - #COLLECTION -->
      <section class="section collection">
        <div class="container">

          <ul class="collection-list has-scrollbar">

            <li>
              <div class="collection-card" style="background-image: url('./assets/images/collection-1.jpg')">
                <h3 class="h4 card-title">Men Collections</h3>

                <a href="#" class="btn btn-secondary">
                  <span>Explore All</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div class="collection-card" style="background-image: url('./assets/images/collection-2.jpg')">
                <h3 class="h4 card-title">Women Collections</h3>

                <a href="#" class="btn btn-secondary">
                  <span>Explore All</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div class="collection-card" style="background-image: url('./assets/images/collection-3.jpg')">
                <h3 class="h4 card-title">Sports Collections</h3>

                <a href="#" class="btn btn-secondary">
                  <span>Explore All</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>

          </ul>

        </div>
      </section>

      <!--  - #PRODUCT  -->

      <section class="section product">
        <div class="container">

          <h2 class="h2 section-title">Bestsellers Products</h2>

          <ul class="filter-list">

            <li>
              <button class="filter-btn  active">All</button>
            </li>

            <li>
              <button class="filter-btn">Nike</button>
            </li>

            <li>
              <button class="filter-btn">Adidas</button>
            </li>

            <li>
              <button class="filter-btn">Puma</button>
            </li>

            <li>
              <button class="filter-btn">Bata</button>
            </li>

            <li>
              <button class="filter-btn">Apex</button>
            </li>

          </ul>

          <ul class="product-list">

            <li class="product-item">
              <div class="product-card" tabindex="0">

                <figure class="card-banner">
                  <img src="/assets/images/product-1.jpg" width="312" height="350" loading="lazy"
                    alt="Running Sneaker Shoes" class="image-contain">

                  <div class="card-badge">New</div>

                  <ul class="card-action-list">

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-1">Add to Cart</div>
                    </li>

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-2">Add to Whishlist</div>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <div class="card-cat">
                    <a href="#" class="card-cat-link">Men</a> /
                    <a href="#" class="card-cat-link">Women</a>
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Running Sneaker Shoes</a>
                  </h3>

                  <data class="card-price" value="180.85">$180.85</data>

                </div>

              </div>
            </li>

            <li class="product-item">
              <div class="product-card" tabindex="0">

                <figure class="card-banner">
                  <img src="/assets/images/product-2.jpg" width="312" height="350" loading="lazy"
                    alt="Leather Mens Slipper" class="image-contain">

                  <ul class="card-action-list">

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-1">Add to Cart</div>
                    </li>

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-2">Add to Whishlist</div>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <div class="card-cat">
                    <a href="#" class="card-cat-link">Men</a> /
                    <a href="#" class="card-cat-link">Sports</a>
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Leather Mens Slipper</a>
                  </h3>

                  <data class="card-price" value="190.85">$190.85</data>

                </div>

              </div>
            </li>

            <li class="product-item">
              <div class="product-card" tabindex="0">

                <figure class="card-banner">
                  <img src="/assets/images/product-3.jpg" width="312" height="350" loading="lazy"
                    alt="Simple Fabric Shoe" class="image-contain">

                  <div class="card-badge">New</div>

                  <ul class="card-action-list">

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-1">Add to Cart</div>
                    </li>

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-2">Add to Whishlist</div>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <div class="card-cat">
                    <a href="#" class="card-cat-link">Men</a> /
                    <a href="#" class="card-cat-link">Women</a>
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Simple Fabric Shoe</a>
                  </h3>

                  <data class="card-price" value="160.85">$160.85</data>

                </div>

              </div>
            </li>

            <li class="product-item">
              <div class="product-card" tabindex="0">

                <figure class="card-banner">
                  <img src="/assets/images/product-4.jpg" width="312" height="350" loading="lazy"
                    alt="Air Jordan 7 Retro " class="image-contain">

                  <div class="card-badge"> -25%</div>

                  <ul class="card-action-list">

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-1">Add to Cart</div>
                    </li>

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-2">Add to Whishlist</div>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <div class="card-cat">
                    <a href="#" class="card-cat-link">Men</a> /
                    <a href="#" class="card-cat-link">Sports</a>
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Air Jordan 7 Retro </a>
                  </h3>

                  <data class="card-price" value="170.85">$170.85 <del>$200.21</del></data>

                </div>

              </div>
            </li>

            <li class="product-item">
              <div class="product-card" tabindex="0">

                <figure class="card-banner">
                  <img src="/assets/images/product-5.jpg" width="312" height="350" loading="lazy"
                    alt="Nike Air Max 270 SE" class="image-contain">

                  <div class="card-badge">New</div>

                  <ul class="card-action-list">

                  <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-1">Add to Cart</div>
                    </li>

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-2">Add to Whishlist</div>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <div class="card-cat">
                    <a href="#" class="card-cat-link">Men</a> /
                    <a href="#" class="card-cat-link">Women</a>
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Nike Air Max 270 SE</a>
                  </h3>

                  <data class="card-price" value="120.85">$120.85</data>

                </div>

              </div>
            </li>

            <li class="product-item">
              <div class="product-card" tabindex="0">

                <figure class="card-banner">
                  <img src="/assets/images/product-6.jpg" width="312" height="350" loading="lazy"
                    alt="Adidas Sneakers Shoes" class="image-contain">

                  <ul class="card-action-list">

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-1">Add to Cart</div>
                    </li>

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-2">Add to Whishlist</div>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <div class="card-cat">
                    <a href="#" class="card-cat-link">Men</a> /
                    <a href="#" class="card-cat-link">Women</a>
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Adidas Sneakers Shoes</a>
                  </h3>

                  <data class="card-price" value="100.85">$100.85</data>

                </div>

              </div>
            </li>

            <li class="product-item">
              <div class="product-card" tabindex="0">

                <figure class="card-banner">
                  <img src="/assets/images/product-7.jpg" width="312" height="350" loading="lazy"
                    alt="Nike Basketball shoes" class="image-contain">

                  <ul class="card-action-list">

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-1">Add to Cart</div>
                    </li>

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-2">Add to Whishlist</div>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <div class="card-cat">
                    <a href="#" class="card-cat-link">Men</a> /
                    <a href="#" class="card-cat-link">Sports</a>
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Nike Basketball shoes</a>
                  </h3>

                  <data class="card-price" value="120.85">$120.85</data>

                </div>

              </div>
            </li>

            <li class="product-item">
              <div class="product-card" tabindex="0">

                <figure class="card-banner">
                  <img src="/assets/images/product-8.jpg" width="312" height="350" loading="lazy"
                    alt="Simple Fabric Shoe" class="image-contain">

                  <ul class="card-action-list">

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-1">Add to Cart</div>
                    </li>

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-2">Add to Whishlist</div>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <div class="card-cat">
                    <a href="#" class="card-cat-link">Men</a> /
                    <a href="#" class="card-cat-link">Women</a>
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Simple Fabric Shoe</a>
                  </h3>

                  <data class="card-price" value="100.85">$100.85</data>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <!--  - #CTA -->
      <section class="section cta">
        <div class="container">

          <ul class="cta-list">

            <li>
              <div class="cta-card" style="background-image: url('./assets/images/cta-1.jpg')">
                <p class="card-subtitle">Adidas Shoes</p>

                <h3 class="h2 card-title">The Summer Sale Off 50%</h3>

                <a href="#" class="btn btn-link">
                  <span>Shop Now</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div class="cta-card" style="background-image: url('./assets/images/cta-2.jpg')">
                <p class="card-subtitle">Nike Shoes</p>

                <h3 class="h2 card-title">Makes Yourself Keep Sporty</h3>

                <a href="#" class="btn btn-link">
                  <span>Shop Now</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>

          </ul>

        </div>
      </section>

      <!-- - #SERVICE -->
      <section class="section service">
        <div class="container">

          <ul class="service-list">

            <li class="service-item">
              <div class="service-card">

                <div class="card-icon">
                  <img src="/assets/images/service-1.png" width="53" height="28" loading="lazy" alt="Service icon">
                </div>

                <div>
                  <h3 class="h4 card-title">Free Shiping</h3>

                  <p class="card-text">
                    All orders over <span>$150</span>
                  </p>
                </div>

              </div>
            </li>

            <li class="service-item">
              <div class="service-card">

                <div class="card-icon">
                  <img src="/assets/images/service-2.png" width="43" height="35" loading="lazy" alt="Service icon">
                </div>

                <div>
                  <h3 class="h4 card-title">Quick Payment</h3>

                  <p class="card-text">
                    100% secure payment
                  </p>
                </div>

              </div>
            </li>

            <li class="service-item">
              <div class="service-card">

                <div class="card-icon">
                  <img src="/assets/images/service-3.png" width="40" height="40" loading="lazy" alt="Service icon">
                </div>

                <div>
                  <h3 class="h4 card-title">Free Returns</h3>

                  <p class="card-text">
                    Money back in 30 days
                  </p>
                </div>

              </div>
            </li>

            <li class="service-item">
              <div class="service-card">

                <div class="card-icon">
                  <img src="/assets/images/service-4.png" width="40" height="40" loading="lazy" alt="Service icon">
                </div>

                <div>
                  <h3 class="h4 card-title">24/7 Support</h3>

                  <p class="card-text">
                    Get Quick Support
                  </p>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <!-- - #INSTA POST -->
      <section class="section insta-post">

        <ul class="insta-post-list has-scrollbar">

          <li class="insta-post-item">
            <img src="/assets/images/insta-1.jpg" width="100" height="100" loading="lazy" alt="Instagram post"
              class="insta-post-banner image-contain">

            <a href="#" class="insta-post-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li class="insta-post-item">
            <img src="/assets/images/insta-2.jpg" width="100" height="100" loading="lazy" alt="Instagram post"
              class="insta-post-banner image-contain">

            <a href="#" class="insta-post-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li class="insta-post-item">
            <img src="/assets/images/insta-3.jpg" width="100" height="100" loading="lazy" alt="Instagram post"
              class="insta-post-banner image-contain">

            <a href="#" class="insta-post-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li class="insta-post-item">
            <img src="/assets/images/insta-4.jpg" width="100" height="100" loading="lazy" alt="Instagram post"
              class="insta-post-banner image-contain">

            <a href="#" class="insta-post-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li class="insta-post-item">
            <img src="/assets/images/insta-5.jpg" width="100" height="100" loading="lazy" alt="Instagram post"
              class="insta-post-banner image-contain">

            <a href="#" class="insta-post-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li class="insta-post-item">
            <img src="/assets/images/insta-6.jpg" width="100" height="100" loading="lazy" alt="Instagram post"
              class="insta-post-banner image-contain">

            <a href="#" class="insta-post-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li class="insta-post-item">
            <img src="/assets/images/insta-7.jpg" width="100" height="100" loading="lazy" alt="Instagram post"
              class="insta-post-banner image-contain">

            <a href="#" class="insta-post-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li class="insta-post-item">
            <img src="/assets/images/insta-8.jpg" width="100" height="100" loading="lazy" alt="Instagram post"
              class="insta-post-banner image-contain">

            <a href="#" class="insta-post-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

        </ul>

      </section>

    </article>
  </main>

  <!-- - #FOOTER -->

  <footer class="footer">

    <div class="footer-top section">
      <div class="container">

        <div class="footer-brand">

          <a href="#" class="logo">
            <img src=".https://static.vecteezy.com/system/resources/previews/011/598/889/non_2x/ecommerce-app-sign-free-vector.jpg" width="160" height="50" alt="Footcap logo">
          </a>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

        <div class="footer-link-box">

          <ul class="footer-list">

            <li>
              <p class="footer-list-title">Contact Us</p>
            </li>

            <li>
              <address class="footer-link">
                <ion-icon name="location"></ion-icon>

                <span class="footer-link-text">
                  2751 S Parker Rd, Aurora, CO 80014, United States
                </span>
              </address>
            </li>

            <li>
              <a href="tel:+557343673257" class="footer-link">
                <ion-icon name="call"></ion-icon>

                <span class="footer-link-text">+557343673257</span>
              </a>
            </li>

            <li>
              <a href="mailto:footcap@help.com" class="footer-link">
                <ion-icon name="mail"></ion-icon>

                <span class="footer-link-text">footcap@help.com</span>
              </a>
            </li>

          </ul>

          <ul class="footer-list">

            <li>
              <p class="footer-list-title">My Account</p>
            </li>

            <li>
              <a href="#" class="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>

                <span class="footer-link-text">My Account</span>
              </a>
            </li>

            <li>
              <a href="#" class="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>

                <span class="footer-link-text">View Cart</span>
              </a>
            </li>

            <li>
              <a href="#" class="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>

                <span class="footer-link-text">Wishlist</span>
              </a>
            </li>

            <li>
              <a href="#" class="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>

                <span class="footer-link-text">Compare</span>
              </a>
            </li>

            <li>
              <a href="#" class="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>

                <span class="footer-link-text">New Products</span>
              </a>
            </li>

          </ul>

          <div class="footer-list">

            <p class="footer-list-title">Opening Time</p>

            <table class="footer-table">
              <tbody>

                <tr class="table-row">
                  <th class="table-head" scope="row">Mon - Wed:</th>
                  <td class="table-data">8AM - 10PM</td>
                </tr>
                <tr class="table-row">
                  <th class="table-head" scope="row">Thu - Sat:</th>
                  <td class="table-data">7AM - 12PM</td>
                </tr>

                <tr class="table-row">
                  <th class="table-head" scope="row">Sun:</th>
                  <td class="table-data">Closed</td>
                </tr>

              </tbody>
            </table>

          </div>

          <div class="footer-list">

            <p class="footer-list-title">Newsletter</p>

            <p class="newsletter-text">
              Authoritatively morph 24/7 potentialities with error-free partnerships.
            </p>

            <form action="" class="newsletter-form">
              <input type="email" name="email" required placeholder="Email Address" class="newsletter-input">
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>

          </div>

        </div>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">

        <p class="copyright">
          &copy; 2022 <a href="#" class="copyright-link">codewithsadee</a>. All Rights Reserved
        </p>

      </div>
    </div>

  </footer>

  <!--  - #GO TO TOP -->
  <a href="#top" class="go-top-btn" data-go-top>
    <ion-icon name="arrow-up-outline"></ion-icon>
  </a>

  <!-- - custom js link -->
  <script src="./assets/js/script.js"></script>

  <!-- - ionicon link-->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>

</html>
          `);
        editor.addStyle(`
:root {

  /**
   * colors
   */

  --maximum-blue-green_10: hsla(185, 75%, 45%, 0.1);
  --rich-black-fogra-29: hsl(217, 28%, 9%);
  --gray-x-11-gray: hsl(0, 0%, 74%);
  --oxford-blue_60: hsla(230, 41%, 14%, 0.6);
  --bittersweet: hsl(5, 100%, 69%);
  --smoky-black: rgb(7, 6, 1);
  --gainsboro: hsl(0, 0%, 88%);
  --black_90: hsla(0, 0%, 0%, 0.9);
  --cultured: hsl(200, 12%, 95%);
  --salmon: hsl(5, 100%, 73%);
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
  --onyx: hsl(0, 0%, 27%);

  /**
   * typography
   */
  
  --ff-roboto: 'Roboto', sans-serif;
  --ff-josefin-sans: 'Josefin Sans', sans-serif;

  --fs-1: 3rem;
  --fs-2: 2.6rem;
  --fs-3: 2.2rem;
  --fs-4: 2rem;
  --fs-5: 1.8rem;
  --fs-6: 1.6rem;
  --fs-7: 1.4rem;
  --fs-8: 1.2rem;

  --fw-300: 300;
  --fw-500: 500;
  --fw-600: 600;
  --fw-700: 700;

  /**
   * transition
   */

  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease;
  --cubic-out: cubic-bezier(0.51, 0.03, 0.64, 0.28);
  --cubic-in: cubic-bezier(0.33, 0.85, 0.56, 1.02);

  /**
   * spacing
   */

  --section-padding: 60px;

}





/-----------------------------------\
 * #RESET
\-----------------------------------/

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li { list-style: none; }

a { text-decoration: none; }

a,
img,
span,
table,
tbody,
button,
ion-icon { display: block; }

button,
input {
  font: inherit;
  background: none;
  border: none;
}

input { width: 100%; }

button { cursor: pointer; }

address {
  font-style: normal;
  line-height: 1.8;
}

html {
  font-family: var(--ff-josefin-sans);
  font-size: 10px;
  scroll-behavior: smooth;
}

body {
  background: var(--white);
  font-size: 1.6rem;
  padding-block-start: 90px;
}

::-webkit-scrollbar { width: 10px; }

::-webkit-scrollbar-track { background: hsl(0, 0%, 95%); }

::-webkit-scrollbar-thumb { background: hsl(0, 0%, 80%); }

::-webkit-scrollbar-thumb:hover { background: hsl(0, 0%, 70%); }





/-----------------------------------\
 * #REUSED STYLE
\-----------------------------------/

.container { padding-inline: 15px; }

.section { padding-block: var(--section-padding); }

.h1,
.h2,
.h3,
.h4 { color: var(--rich-black-fogra-29); }

.h1 {
  font-size: var(--fs-1);
  font-weight: var(--fw-300);
  line-height: 1.5;
}

.h2 { font-size: var(--fs-2); }

.h3 { font-size: var(--fs-4); }

.h4 {
  font-size: var(--fs-5);
  text-transform: uppercase;
}

.btn {
  background: var(--background, var(--bittersweet));
  color: var(--color, var(--white));
  font-size: var(--fs-5);
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 14px 25px;
  border: 1px solid var(--border-color, var(--bittersweet));
}

.btn-primary:is(:hover, :focus) {
  --background: var(--salmon);
  --border-color: var(--salmon);
}

.btn-secondary {
  --background: transparent;
  --border-color: var(--black);
  --color: var(--black);
}

.btn-secondary:is(:hover, :focus) { --background: hsla(0, 0%, 0%, 0.1); }

.has-scrollbar {
  display: flex;
  gap: 25px;
  overflow-x: auto;
  padding-bottom: 20px;
  scroll-snap-type: inline mandatory;
}

.has-scrollbar > li {
  min-width: 100%;
  scroll-snap-align: start;
}

.has-scrollbar::-webkit-scrollbar { height: 10px; }

.has-scrollbar::-webkit-scrollbar-track {
  background: var(--white);
  border-radius: 20px;
  outline: 2px solid var(--bittersweet);
}

.has-scrollbar::-webkit-scrollbar-thumb {
  background: var(--bittersweet);
  border: 2px solid var(--white);
  border-radius: 20px;
}

.has-scrollbar::-webkit-scrollbar-button { width: calc(25% - 40px); }

.card-banner {
  background: var(--cultured);
  position: relative;
  height: 350px;
  overflow: hidden;
}

.image-contain {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: var(--transition-2);
}

.product-card:is(:hover, :focus) .image-contain { transform: scale(1.1); }

.card-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: var(--bittersweet);
  color: var(--white);
  padding: 5px 15px;
  font-family: var(--ff-roboto);
  font-size: var(--fs-7);
  border-radius: 25px;
}

.card-action-list {
  position: absolute;
  top: 20px;
  right: -20px;
  opacity: 0;
  transition: var(--transition-1);
}

.product-card:is(:hover, :focus) .card-action-list {
  right: 20px;
  opacity: 1;
}

.card-action-item { position: relative; }

.card-action-item:not(:last-child) { margin-bottom: 10px; }

.card-action-btn {
  background: var(--white);
  color: var(--rich-black-fogra-29);
  font-size: 18px;
  padding: 10px;
  border-radius: 50%;
  transition: var(--transition-1);
}

.card-action-btn ion-icon { --ionicon-stroke-width: 30px; }

.card-action-btn:is(:hover, :focus) {
  background: var(--bittersweet);
  color: var(--white);
}

.card-action-tooltip {
  position: absolute;
  top: 50%;
  right: calc(100% + 5px);
  transform: translateY(-50%);
  width: max-content;
  background: var(--black_90);
  color: var(--white);
  font-family: var(--ff-roboto);
  font-size: var(--fs-7);
  padding: 4px 8px;
  border-radius: 4px;
  opacity: 0;
  pointer-events: none;
  transition: var(--transition-1);
}

.card-action-btn:is(:hover, :focus) + .card-action-tooltip { opacity: 1; }

.card-content {
  padding: 24px 15px 0;
  text-align: center;
}

.card-cat {
  font-family: var(--ff-roboto);
  color: var(--onyx);
  font-size: var(--fs-7);
  margin-bottom: 12px;
}

.card-cat-link {
  display: inline-block;
  color: inherit;
  transition: var(--transition-1);
}

.card-cat-link:is(:hover, :focus) { color: var(--bittersweet); }

.product-card .card-title { margin-bottom: 12px; }

.product-card .card-title > a {
  color: inherit;
  transition: var(--transition-1);
}

.product-card .card-title > a:is(:hover, :focus) { color: var(--bittersweet); }

.card-price {
  color: var(--bittersweet);
  font-family: var(--ff-roboto);
  font-weight: var(--fw-600);
}

.card-price del {
  color: var(--gray-x-11-gray);
  margin-left: 8px;
}

.btn-link {
  --background: none;
  --border-color: none;
  padding: 0;
  margin-inline: auto;
  max-width: max-content;
  font-family: var(--ff-roboto);
  font-size: var(--fs-6);
  font-weight: var(--fw-500);
  padding-bottom: 6px;
  border-bottom: 1px solid var(--white);
}

.btn-link:is(:hover, :focus) { border-color: transparent; }





/-----------------------------------\
 * #HEADER
\-----------------------------------/

.header {
  background: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: var(--transition-1);
  z-index: 4;
}

.header.active { box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.1); }

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
}

.nav-open-btn {
  font-size: 30px;
  background: var(--bittersweet);
  color: var(--white);
  padding: 8px;
}

.nav-open-btn:is(:hover, :focus) { background: var(--salmon); }

.nav-open-btn ion-icon { --ionicon-stroke-width: 40px; }

.navbar {
  background: var(--white);
  position: fixed;
  top: 0;
  left: -280px;
  width: 100%;
  max-width: 270px;
  height: 100%;
  border-right: 3px solid var(--rich-black-fogra-29);
  font-family: var(--ff-roboto);
  overflow-y: auto;
  overscroll-behavior: contain;
  z-index: 2;
  visibility: hidden;
  transition: 0.25s var(--cubic-out);
}

.navbar.active {
  visibility: visible;
  transform: translateX(280px);
  transition: 0.5s var(--cubic-in);
}

.nav-close-btn {
  color: var(--rich-black-fogra-29);
  position: absolute;
  top: 0;
  right: 0;
  padding: 13px;
  font-size: 25px;
  transition: var(--transition-1);
}

.nav-close-btn ion-icon { --ionicon-stroke-width: 55px; }

.nav-close-btn:is(:hover, :focus) { color: var(--bittersweet); }

.navbar .logo {
  background: var(--maximum-blue-green_10);
  padding-block: 50px 40px;
}

.navbar .logo img { margin-inline: auto; }

.navbar-list,
.nav-action-list { margin: 30px; }

.navbar-list {
  padding: 20px;
  border-bottom: 1px solid var(--gainsboro);
}

.navbar-link {
  color: var(--rich-black-fogra-29);
  padding-block: 10px;
  transition: var(--transition-1);
}

.navbar-link:is(:hover, :focus) { color: var(--bittersweet); }

.navbar-item:not(:last-child) { border-bottom: 1px solid var(--gainsboro); }

.nav-action-list > li:first-child { display: none; }

.nav-action-btn {
  color: var(--rich-black-fogra-29);
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding-block: 10px;
  transition: var(--transition-1);
}

.nav-action-btn:is(:hover, :focus) { color: var(--bittersweet); }

.nav-action-btn ion-icon {
  font-size: 22px;
  --ionicon-stroke-width: 25px;
}

.nav-action-text strong {
  font-weight: initial;
  color: var(--bittersweet);
}

.nav-action-badge {
  margin-left: auto;
  font-size: var(--fs-8);
  background: var(--bittersweet);
  color: var(--white);
  width: 18px;
  height: 18px;
  display: grid;
  place-items: center;
  border-radius: 50%;
}

.overlay {
  position: fixed;
  inset: 0;
  background: hsla(0, 0%, 0%, 0.6);
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  transition: var(--transition-1);
}

.overlay.active {
  opacity: 1;
  pointer-events: all;
}

/-----------------------------------\
 * #HERO
\-----------------------------------/

.hero {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  min-height: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.hero-title { margin-bottom: 10px; }

.hero-title > strong { display: block; }

.hero-text {
  color: var(--onyx);
  font-family: var(--ff-roboto);
  font-size: var(--fs-8);
  line-height: 1.8;
  max-width: 46ch;
  margin-bottom: 25px;
}





/-----------------------------------\
 * #COLLECTION
\-----------------------------------/

.collection-card {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-block: 45px 25px;
}




/-----------------------------------\
 * #PRODUCTS
\-----------------------------------/

.product .section-title {
  text-align: center;
  margin-bottom: 25px;
}

.filter-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}

.filter-btn {
  color: var(--onyx);
  padding: 10px 16px;
  font-family: var(--ff-roboto);
  font-size: var(--fs-7);
  font-weight: var(--fw-500);
  border: 1px solid var(--gainsboro);
  border-radius: 30px;
}

.filter-btn.active {
  background: var(--bittersweet);
  color: var(--white);
  border-color: var(--bittersweet);
}

.product-list {
  display: grid;
  gap: 50px 25px;
}





/-----------------------------------\
 * #CTA
\-----------------------------------/

.cta-list {
  display: grid;
  gap: 40px;
}

.cta-card {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: var(--white);
  text-align: center;
  padding: 50px 20px;
}

.cta-card .card-subtitle {
  font-size: var(--fs-5);
  margin-bottom: 15px;
}

.cta-card .card-title {
  color: inherit;
  line-height: 1.3;
  margin-bottom: 20px;
}

/-----------------------------------\
 * #SERVICE
\-----------------------------------/

.service-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding-inline: 30px;
}

.service-item { width: 220px; }

.service-card {
  display: flex;
  align-items: center;
  gap: 15px;
}

.service-card .card-icon {
  background: var(--bittersweet);
  min-width: 55px;
  height: 55px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.service-card .card-icon img {
  filter: brightness(0) invert(1);
  width: 60%;
  height: auto;
}

.service-card .card-title {
  font-size: var(--fs-6);
  margin-bottom: 8px;
}

.service-card .card-text {
  color: var(--onyx);
  font-family: var(--ff-roboto);
  font-size: var(--fs-7);
}

.service-card .card-text span {
  display: inline-block;
  color: var(--bittersweet);
}





/-----------------------------------\
 * #INSTA POST
\-----------------------------------/

.insta-post-list { gap: 0; }

.insta-post-list .insta-post-item {
  position: relative;
  min-width: 33.33%;
  aspect-ratio: 1 / 1;
}

.insta-post-link {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: var(--oxford-blue_60);
  opacity: 0;
  transition: var(--transition-1);
}

.insta-post-link ion-icon {
  color: var(--white);
  font-size: 40px;
}

.insta-post-link:is(:hover, :focus) { opacity: 1; }





/-----------------------------------\
 * #FOOTER
\-----------------------------------/

.footer { font-family: var(--ff-roboto); }

.footer-top { background: var(--cultured); }

.footer-brand {
  padding-bottom: 50px;
  border-bottom: 1px solid var(--gainsboro);
  margin-bottom: 50px;
}

.footer-brand .logo { margin-bottom: 15px; }

.social-list {
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-link {
  background: var(--gainsboro);
  color: var(--onyx);
  font-size: 20px;
  padding: 10px;
  transition: var(--transition-1);
}

.social-link:is(:hover, :focus) {
  background: var(--bittersweet);
  color: var(--white);
}

.footer-list-title {
  position: relative;
  color: var(--rich-black-fogra-29);
  font-family: var(--ff-josefin-sans);
  font-size: var(--fs-3);
  font-weight: var(--fw-700);
  margin-bottom: 25px;
}

.footer-list-title::after {
  content: "";
  display: block;
  background: var(--bittersweet);
  width: 50px;
  height: 2px;
  margin-top: 10px;
}

.footer-link {
  color: var(--onyx);
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block: 6px;
  transition: var(--transition-1);
}

a.footer-link:is(:hover, :focus) { color: var(--bittersweet); }

.footer-link-text { flex: 1; }

.footer-list:not(:last-child) { margin-bottom: 30px; }

.footer-list:first-child ion-icon {
  color: var(--bittersweet);
  font-size: 22px;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  padding-block: 6px;
}

.table-head {
  color: var(--rich-black-fogra-29);
  font-weight: var(--fw-500);
}

.table-data { color: var(--onyx); }

.newsletter-text {
  color: var(--onyx);
  line-height: 1.7;
  margin-bottom: 20px;
}

.newsletter-form { position: relative; }

.newsletter-input {
  background: var(--white);
  color: var(--onyx);
  padding: 15px 25px;
  padding-right: 120px;
}

.newsletter-form .btn-primary {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  font-family: var(--ff-josefin-sans);
  font-size: var(--fs-6);
  font-weight: var(--fw-600);
  padding-inline: 20px;
}

.footer-bottom {
  background: var(--rich-black-fogra-29);
  padding-block: 20px;
}

.copyright {
  text-align: center;
  color: var(--white);
}

.copyright-link {
  display: inline-block;
  color: var(--bittersweet);
}





/-----------------------------------\
 * #GO TOP
\-----------------------------------/

.go-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--bittersweet);
  color: var(--white);
  font-size: 20px;
  padding: 10px;
  border: 4px solid var(--white);
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-1);
  z-index: 2;
}

.go-top-btn.active {
  opacity: 1;
  visibility: visible;
}

.go-top-btn:is(:hover, :focus) { background: var(--salmon); }





/-----------------------------------\
 * #MEDIA QUERIES
\-----------------------------------/

/**
 * responsive for larger than 575px screen
 */

@media (min-width: 575px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 4rem;

  }



  /**
   * REUSED STYLE
   */

  .container {
    max-width: 650px;
    width: 100%;
    margin-inline: auto;
  }

  .has-scrollbar > li { min-width: calc(50% - 12.5px); }



  /**
   * HERO
   */

  .hero-text { font-size: var(--fs-7); }



  /**
   * PRODUCTS
   */

  .product-list { grid-template-columns: 1fr 1fr; }



  /**
   * CTA
   */

  .cta-card { text-align: left; }

  .cta-card .card-title { max-width: 14ch; }

  .cta-card .btn-link { margin-inline: 0; }



  /**
   * INSTA POST
   */

  .insta-post-list .insta-post-item { min-width: 25%; }



  /**
   * FOOTER
   */

  .footer-brand .logo { margin-bottom: 0; }

  .footer-brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-link-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
  }

}





/**
 * responsive for larger than 768px screen
 */

@media (min-width: 768px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-2: 3rem;

  }



  /**
   * REUSED STYLE
   */

  .container { max-width: 720px; }

  .h4 { --fs-5: 2rem; }



  /**
   * SPECIAL
   */

  .special-banner .banner-title { --fs-4: 2.2rem; }

  .special-product .has-scrollbar > li { min-width: 100%; }

  .special .container {
    display: flex;
    gap: 25px;
  }

  .special .section-title { margin-block-start: 0; }

  .special-banner,
  .special-product { min-width: calc(50% - 12.5px); }

  .special-banner { height: auto; }



  /**
   * INSTA POST
   */

  .insta-post-list .insta-post-item { min-width: 20%; }



  /**
   * GO TOP
   */

  .go-top-btn {
    padding: 15px;
    border-width: 6px;
    bottom: 30px;
    right: 30px;
  }

}





/**
 * responsive for larger than 992px screen
 */

@media (min-width: 992px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-3: 2.4rem;

  }



  /**
   * REUSED STYLE
   */

  .container { max-width: 970px; }

  .has-scrollbar > li { min-width: calc(33.33% - 16.66px); }



  /**
   * HEADER
   */

  .nav-open-btn,
  .nav-close-btn,
  .navbar .logo,
  .nav-action-text,
  .overlay { display: none; }

  .navbar,
  .navbar-list,
  .nav-action-list { all: unset; }

  .navbar-item:not(:last-child) { border: none; }

  .navbar-list,
  .nav-action-list { display: flex; }

  .nav-action-list { gap: 20px; }

  .navbar {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .navbar-list {
    margin-inline: auto;
    gap: 35px;
  }

  .navbar-link {
    font-family: var(--ff-roboto);
    font-weight: var(--fw-500);
  }

  .nav-action-list > li:first-child { display: block; }

  .nav-action-btn { position: relative; }

  .nav-action-badge ion-icon { --ionicon-stroke-width: 30px; }

  .nav-action-badge {
    position: absolute;
    top: 5px;
    right: -12px;
  }



  /**
   * HERO
   */

  .hero { height: 480px; }



  /**
   * PRODUCTS
   */

  .product-list { grid-template-columns: repeat(3, 1fr); }



  /**
   * CTA
   */

  .cta-list {
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }

  .cta-card { padding-inline: 50px; }



  /**
   * SPECIAL
   */

  .special-banner { min-width: calc(33.33% - 25px); }

  .special-product { min-width: 66.66%; }

  .special-product .has-scrollbar > li { min-width: calc(50% - 12.5px); }



  /**
   * INSTA POST
   */

  .insta-post-list .insta-post-item { min-width: 16.666%; }

}





/**
 * responsive for larger than 1200px screen
 */

@media (min-width: 1200px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 5rem;
    --fs-2: 3.6rem;

  }



  /**
   * REUSED STYLE
   */

  .container { max-width: 1280px; }



  /**
   * HERO
   */

  .hero { height: 580px; }

  .hero .container { max-width: 1000px; }

  .hero-text {
    font-size: var(--fs-6);
    max-width: 50ch;
  }



  /**
   * PRODUCTS
   */

  .product-list { grid-template-columns: repeat(4, 1fr); }



  /**
   * SPECIAL
   */

  .special-banner { min-width: calc(25% - 25px); }

  .special-product .has-scrollbar > li { min-width: calc(33.33% - 16.66px); }

  .special-banner .banner-title { --fs-4: 2.4rem; }



  /**
   * SERVICE
   */

  .service-item { width: 275px; }

  .service-card .card-icon {
    min-width: 70px;
    height: 70px;
  }

  .service-card .card-title { --fs-6: 2rem; }



  /**
   * INSTA POST
   */

  .insta-post { padding-block-end: 0; }

  .insta-post-list .insta-post-item { min-width: 12.5%; }

  .insta-post-list { padding-bottom: 0; }



  /**
   * FOOTER
   */

  .footer-link-box {
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    gap: 50px;
  }

}
            `);
        break;
      case "2":
        editor.setComponents(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 
    - primary meta tag
  -->
  <title>Kitter - Hight Quality Pet Food</title>
  <meta name="title" content="Kitter - Hight Quality Pet Food">
  <meta name="description" content="This is an eCommerce html template made by codewithsadee">

  <!-- 
    - favicon
  -->
  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">

  <!-- 
    - custom css link
  -->
  <link rel="stylesheet" href="./assets/css/style.css">

  <!-- 
    - google font link
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Bangers&family=Carter+One&family=Nunito+Sans:wght@400;700&display=swap"
    rel="stylesheet">

  <!-- 
    - preload images
  -->
  <link rel="preload" as="image" href="/assets/images/hero-banner.jpg">

</head>

<body id="top">

  <!-- 
    - #HEADER
  -->

  <header class="header" data-header>
    <div class="container">

      <button class="nav-toggle-btn" aria-label="toggle manu" data-nav-toggler>
        <ion-icon name="menu-outline" aria-hidden="true" class="menu-icon"></ion-icon>
        <ion-icon name="close-outline" aria-label="true" class="close-icon"></ion-icon>
      </button>

      <a href="#" class="logo">Kitter</a>

      <nav class="navbar" data-navbar>
        <ul class="navbar-list">

          <li class="navbar-item">
            <a href="#home" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li class="navbar-item">
            <a href="#shop" class="navbar-link" data-nav-link>Shop</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Collections</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Blogs</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Contact</a>
          </li>

        </ul>

        <a href="#" class="navbar-action-btn">Log In</a>
      </nav>

      <div class="header-actions">

        <button class="action-btn" aria-label="Search">
          <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
        </button>

        <button class="action-btn user" aria-label="User">
          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
        </button>

        <button class="action-btn" aria-label="cart">
          <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

          <span class="btn-badge">0</span>
        </button>

      </div>

    </div>
  </header>

  <main>
    <article>

      <!-- 
        - #HERO
      -->

      <section class="section hero has-bg-image" id="home" aria-label="home"
        style="background-image: url('/assets/images/hero-banner.jpg')">
        <div class="container">

          <h1 class="h1 hero-title">
            <span class="span">High Quality</span> Pet Food
          </h1>

          <p class="hero-text">Sale up to 40% off today</p>

          <a href="#" class="btn">Shop Now</a>

        </div>
      </section>

      <!-- 
        - #CATEGORY
      -->

      <section class="section category" aria-label="category">
        <div class="container">

          <h2 class="h2 section-title">
            <span class="span">Top</span> categories
          </h2>

          <ul class="has-scrollbar">

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="/assets/images/category-1.jpg" width="330" height="300" loading="lazy" alt="Cat Food"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Cat Food</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="/assets/images/category-2.jpg" width="330" height="300" loading="lazy" alt="Cat Toys"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Cat Toys</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="/assets/images/category-3.jpg" width="330" height="300" loading="lazy" alt="Dog Food"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Dog Food</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="/assets/images/category-4.jpg" width="330" height="300" loading="lazy" alt="Dog Toys"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Dog Toys</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="/assets/images/category-5.jpg" width="330" height="300" loading="lazy"
                    alt="Dog Sumpplements" class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Dog Sumpplements</a>
                </h3>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <!-- 
        - #OFFERS
      -->

      <section class="section offer" aria-label="offer">
        <div class="container">

          <ul class="grid-list">

            <li>
              <div class="offer-card has-bg-image img-holder"
                style="background-image: url('/assets/images/offer-banner-1.jpg'); --width: 540; --height: 374;">

                <p class="card-subtitle">Selected Items. Online Only.</p>

                <h3 class="h3 card-title">
                  Hot Summer <span class="span">Deals</span>
                </h3>

                <a href="#" class="btn">Read More</a>

              </div>
            </li>

            <li>
              <div class="offer-card has-bg-image img-holder"
                style="background-image: url('/assets/images/offer-banner-2.jpg'); --width: 540; --height: 374;">

                <p class="card-subtitle">Treats & Grooming</p>

                <h3 class="h3 card-title">
                  Spoil your true <span class="span">love</span>
                </h3>

                <a href="#" class="btn">Read More</a>

              </div>
            </li>

            <li>
              <div class="offer-card has-bg-image img-holder"
                style="background-image: url('/assets/images/offer-banner-3.jpg'); --width: 540; --height: 374;">

                <p class="card-subtitle">Our Brand You Will Love</p>

                <h3 class="h3 card-title">
                  New in this <span class="span">year</span>
                </h3>

                <a href="#" class="btn">Read More</a>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <!-- 
        - #PRODUCT
      -->

      <section class="section product" id="shop" aria-label="product">
        <div class="container">

          <h2 class="h2 section-title">
            <span class="span">Best</span> Seller
          </h2>

          <ul class="grid-list">

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-1.jpg" width="360" height="360" loading="lazy"
                    alt="Commodo leo sed porta" class="img-cover default">
                  <img src="/assets/images/product-1_0.jpg" width="360" height="360" loading="lazy"
                    alt="Commodo leo sed porta" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(1)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Commodo leo sed porta</a>
                  </h3>

                  <data class="card-price" value="15">$15.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-2.jpg" width="360" height="360" loading="lazy"
                    alt="Purus consequat congue sit" class="img-cover default">
                  <img src="/assets/images/product-2_0.jpg" width="360" height="360" loading="lazy"
                    alt="Purus consequat congue sit" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Purus consequat congue sit</a>
                  </h3>

                  <data class="card-price" value="45">$45.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-3.jpg" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover default">
                  <img src="/assets/images/product-3_0.jpg" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Morbi vel arcu scelerisque</a>
                  </h3>

                  <data class="card-price" value="45">$45.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-4.jpg" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover default">
                  <img src="/assets/images/product-4_0.jpg" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Morbi vel arcu scelerisque</a>
                  </h3>

                  <data class="card-price" value="49">$49.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-5.jpg" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover default">
                  <img src="/assets/images/product-5_0.jpg" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3"><a href="#" class="card-title">Morbi vel arcu scelerisque</a>
                  </h3>

                  <data class="card-price" value="85">$85.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-6.jpg" width="360" height="360" loading="lazy"
                    alt="Nam justo libero porta ege" class="img-cover default">
                  <img src="/assets/images/product-6_0.jpg" width="360" height="360" loading="lazy"
                    alt="Nam justo libero porta ege" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Nam justo libero porta ege</a>
                  </h3>

                  <data class="card-price" value="85">$85.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-7.jpg" width="360" height="360" loading="lazy"
                    alt="Nam justo libero porta ege" class="img-cover default">
                  <img src="/assets/images/product-7_0.jpg" width="360" height="360" loading="lazy"
                    alt="Nam justo libero porta ege" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Nam justo libero porta ege</a>
                  </h3>

                  <data class="card-price" value="85">$85.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="/assets/images/product-8.jpg" width="360" height="360" loading="lazy"
                    alt="Etiam commodo leo sed" class="img-cover default">
                  <img src="/assets/images/product-8_0.jpg" width="360" height="360" loading="lazy"
                    alt="Etiam commodo leo sed" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">(0)</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Etiam commodo leo sed</a>
                  </h3>

                  <data class="card-price" value="55">$55.00</data>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <!-- 
        - #SERVICE
      -->

      <section class="section service" aria-label="service">
        <div class="container">

          <img src="/assets/images/service-image.png" width="122" height="136" loading="lazy" alt="" class="img">

          <h2 class="h2 section-title">
            <span class="span">What your pet needs,</span> when they need it.
          </h2>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src="/assets/images/service-icon-1.png" width="70" height="70" loading="lazy"
                    alt="service icon">
                </figure>

                <h3 class="h3 card-title">Free Same-Day Delivery</h3>

                <p class="card-text">
                  Order by 2pm local time to get free delivery on orders $35+ today.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src="/assets/images/service-icon-2.png" width="70" height="70" loading="lazy"
                    alt="service icon">
                </figure>

                <h3 class="h3 card-title">30 Day Return</h3>

                <p class="card-text">
                  35% off your first order plus 5% off all future orders.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src="/assets/images/service-icon-3.png" width="70" height="70" loading="lazy"
                    alt="service icon">
                </figure>

                <h3 class="h3 card-title">Security payment</h3>

                <p class="card-text">
                  25% off your online order of $50+. Available at most locations.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src="/assets/images/service-icon-4.png" width="70" height="70" loading="lazy"
                    alt="service icon">
                </figure>

                <h3 class="h3 card-title">24/7 Support</h3>

                <p class="card-text">
                  Shop online to get orders over $35 shipped fast and free.
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <!-- 
        - #CTA
      -->

      <section class="cta has-bg-image" aria-label="cta" style="background-image: url('./assets/images/cta-bg.jpg')">
        <div class="container">

          <figure class="cta-banner">
            <img src="/assets/images/cta-banner.png" width="900" height="660" loading="lazy" alt="cat" class="w-100">
          </figure>

          <div class="cta-content">

            <img src="/assets/images/cta-icon.png" width="120" height="35" loading="lazy" alt="taste guarantee"
              class="img">

            <h2 class="h2 section-title">Taste it, love it or we’ll replace it… Guaranteed!</h2>

            <p class="section-text">
              At Petio, we believe your dog and cat will love their food so much that if they don’t … we’ll help you
              find a
              replacement. That’s our taste guarantee.
            </p>

            <a href="#" class="btn">Find out more</a>

          </div>

        </div>
      </section>

      <!-- 
        - #BRAND
      -->

      <section class="section brand" aria-label="brand">
        <div class="container">

          <h2 class="h2 section-title">
            <span class="span">Popular</span> Brands
          </h2>

          <ul class="has-scrollbar">

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style="--width: 150; --height: 150;">
                <img src="/assets/images/brand-1.jpg" width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover">
              </div>
            </li>

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style="--width: 150; --height: 150;">
                <img src="/assets/images/brand-2.jpg" width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover">
              </div>
            </li>

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style="--width: 150; --height: 150;">
                <img src="/assets/images/brand-3.jpg" width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover">
              </div>
            </li>

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style="--width: 150; --height: 150;">
                <img src="/assets/images/brand-4.jpg" width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover">
              </div>
            </li>

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style="--width: 150; --height: 150;">
                <img src="/assets/images/brand-5.jpg" width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover">
              </div>
            </li>

          </ul>

        </div>
      </section>

    </article>
  </main>

  <!-- 
    - #FOOTER
  -->

  <footer class="footer" style="background-image: url('/assets/images/footer-bg.jpg')">

    <div class="footer-top section">
      <div class="container">

        <div class="footer-brand">

          <a href="#" class="logo">Kitter</a>

          <p class="footer-text">
            If you have any question, please contact us at <a href="mailto:support@gmail.com"
              class="link">support@gmail.com</a>
          </p>

          <ul class="contact-list">

            <li class="contact-item">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

              <address class="address">
                30 Buttonwood St.Pataskala OH 43062
              </address>
            </li>

            <li class="contact-item">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

              <a href="tel:+16234567891011" class="contact-link">(+1)-6234-56-789-1011</a>
            </li>

          </ul>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Corporate</p>
          </li>

          <li>
            <a href="#" class="footer-link">Careers</a>
          </li>

          <li>
            <a href="#" class="footer-link">About Us</a>
          </li>

          <li>
            <a href="#" class="footer-link">Contact Us</a>
          </li>

          <li>
            <a href="#" class="footer-link">FAQs</a>
          </li>

          <li>
            <a href="#" class="footer-link">Vendors</a>
          </li>

          <li>
            <a href="#" class="footer-link">Affiliate Program</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Information</p>
          </li>

          <li>
            <a href="#" class="footer-link">Online Store</a>
          </li>

          <li>
            <a href="#" class="footer-link">Privacy Policy</a>
          </li>

          <li>
            <a href="#" class="footer-link">Refund Policy</a>
          </li>

          <li>
            <a href="#" class="footer-link">Shipping Policy</a>
          </li>

          <li>
            <a href="#" class="footer-link">Terms of Service</a>
          </li>

          <li>
            <a href="#" class="footer-link">Track Order</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Services</p>
          </li>

          <li>
            <a href="#" class="footer-link">Grooming</a>
          </li>

          <li>
            <a href="#" class="footer-link">Positive Dog Training</a>
          </li>

          <li>
            <a href="#" class="footer-link">Veterinary Services</a>
          </li>

          <li>
            <a href="#" class="footer-link">Petco Insurance</a>
          </li>

          <li>
            <a href="#" class="footer-link">Pet Adoption</a>
          </li>

          <li>
            <a href="#" class="footer-link">Resource Center</a>
          </li>

        </ul>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">

        <p class="copyright">
          &copy; 2022 Made with ♥️ by <a href="#" class="copyright-link">codewithsadee.</a>
        </p>

        <img src="/assets/images/payment.png" width="397" height="32" loading="lazy" alt="payment method" class="img">

      </div>
    </div>

  </footer>

  <!-- 
    - #BACK TO TOP
  -->

  <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
    <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
  </a>

  <!-- 
    - custom js link
  -->
  <script src="/assets/js/script.js" defer></script>

  <!-- 
    - ionicon link
  -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>

</html>`);

        editor.addStyle(`  /*-----------------------------------*\
  #style.css
\*-----------------------------------*/

/**
 * copyright 2022 codewithsadee
 */





/*-----------------------------------*\
  #CUSTOM PROPERTY
\*-----------------------------------*/

:root {

  /**
   * colors
   */

  --bright-yellow-crayola: hsl(36, 94%, 57%);
  --portland-orange: hsl(15, 84%, 57%);
  --battleship-gray: hsl(0, 0%, 53%);
  --silver-chalice: hsl(0, 0%, 70%);
  --spanish-gray: hsl(0, 0%, 60%);
  --sonic-silver: hsl(208, 7%, 46%);
  --raisin-black: hsl(228, 6%, 17%);
  --eerie-black: hsl(210, 3%, 13%);
  --bittersweet: hsl(9, 96%, 69%);
  --light-gray: hsl(0, 0%, 80%);
  --platinum: hsl(0, 0%, 91%);
  --amber: hsl(45, 100%, 51%);
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
  --onyx: hsl(220, 2%, 24%);

  /**
   * typography
   */

  --ff-bangers: 'Bangers', cursive;
  --ff-carter_one: 'Carter One', cursive;
  --ff-nunito_sans: 'Nunito Sans', sans-serif;

  --fs-1: 6.5rem;
  --fs-2: 3.2rem;
  --fs-3: 2.4rem;
  --fs-4: 2rem;
  --fs-5: 1.8rem;
  --fs-6: 1.5rem;
  --fs-7: 1.4rem;
  --fs-8: 1rem;

  --fw-400: 400;
  --fw-700: 700;

  /**
   * spacing
   */

  --section-padding: 40px;

  /**
   * shadow
   */

  --shadow-1: 0 8px 16px hsla(0, 0%, 0%, 0.15);
  --shadow-2: 0 8px 8px hsla(0, 0%, 0%, 0.2);

  /**
   * radius
   */

  --radius-4: 4px;
  --radius-10: 10px;

  /**
   * transition
   */

  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease;
  --cubic-in: cubic-bezier(0.51, 0.03, 0.64, 0.28);
  --cubic-out: cubic-bezier(0.33, 0.85, 0.4, 0.96);

}





/*-----------------------------------*\
  #RESET
\*-----------------------------------*/

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li { list-style: none; }

a,
img,
span,
button,
ion-icon { display: block; }

a {
  color: inherit;
  text-decoration: none;
}

img { height: auto; }

button {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
}

ion-icon { pointer-events: none; }

address { font-style: normal; }

html {
  font-family: var(--ff-nunito_sans);
  font-size: 10px;
  scroll-behavior: smooth;
}

body {
  background-color: var(--white);
  color: var(--black);
  font-size: 1.6rem;
  line-height: 1.5;
}

:focus-visible { outline-offset: 4px; }

::-webkit-scrollbar { width: 10px; }

::-webkit-scrollbar-track { background-color: hsl(0, 0%, 98%); }

::-webkit-scrollbar-thumb { background-color: hsl(0, 0%, 80%); }

::-webkit-scrollbar-thumb:hover { background-color: hsl(0, 0%, 70%); }





/*-----------------------------------*\
  #REUSED STYLE
\*-----------------------------------*/

.container { padding-inline: 15px; }

.section { padding-block: var(--section-padding); }

.has-bg-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.h1,
.h2,
.h3 { line-height: 1.1; }

.h1 {
  color: var(--white);
  font-family: var(--ff-bangers);
  font-size: var(--fs-1);
  font-weight: var(--fw-400);
  letter-spacing: 1px;
}

.h2,
.h3 { color: var(--eerie-black); }

.h2 { font-size: var(--fs-2); }

.h3 { font-size: var(--fs-3); }

.btn {
  background-color: var(--black);
  color: var(--white);
  max-width: max-content;
  padding: 8px 25px;
  font-weight: var(--fw-700);
  border-radius: 50px;
  transition: var(--transition-1);
}

.section-title {
  text-align: center;
  margin-block-end: 30px;
}

.section-title .span {
  display: inline;
  color: var(--portland-orange);
}

.img-holder {
  aspect-ratio: var(--width) / var(--height);
  background-color: var(--light-gray);
  overflow: hidden;
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.has-scrollbar {
  display: flex;
  align-items: center;
  gap: 30px;
  overflow-x: auto;
  scroll-snap-type: inline mandatory;
  padding-block-end: 20px;
  margin-block-end: -20px;
}

.scrollbar-item {
  min-width: 100%;
  scroll-snap-align: start;
}

.has-scrollbar::-webkit-scrollbar { height: 10px; }

.has-scrollbar::-webkit-scrollbar-track {
  outline: 2px solid var(--portland-orange);
  border-radius: var(--radius-10);
}

.has-scrollbar::-webkit-scrollbar-thumb {
  border-radius: var(--radius-10);
  background-color: var(--portland-orange);
  border: 2px solid var(--white);
}

.has-scrollbar::-webkit-scrollbar-button { width: calc(25% - 30px); }

.grid-list {
  display: grid;
  gap: 30px;
}

.w-100 { width: 100%; }





/*-----------------------------------*\
  #HEADER
\*-----------------------------------*/

.action-btn.user { display: none; }

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--white);
  padding-block: 20px;
  z-index: 4;
}

.header.active {
  position: fixed;
  box-shadow: var(--shadow-1);
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.nav-toggle-btn {
  font-size: 30px;
  transition: var(--transition-1);
}

.nav-toggle-btn.active .menu-icon,
.nav-toggle-btn .close-icon { display: none; }

.nav-toggle-btn .menu-icon,
.nav-toggle-btn.active .close-icon { display: block; }

.logo {
  font-family: var(--ff-carter_one);
  font-size: 3rem;
}

.header-actions {
  display: flex;
  gap: 15px;
}

.header .action-btn {
  position: relative;
  font-size: 22px;
  transition: var(--transition-1);
}

.header .btn-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: var(--portland-orange);
  color: var(--white);
  font-size: var(--fs-8);
  min-width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 50px;
}

.nav-toggle-btn:is(:hover, :focus),
.header .action-btn:is(:hover, :focus) { transform: scale(1.1); }

.navbar {
  position: fixed;
  top: 85px;
  left: -320px;
  bottom: 0;
  background-color: var(--white);
  max-width: 320px;
  width: 100%;
  padding: 20px 10px;
  box-shadow: var(--shadow-2);
  transition: 0.25s var(--cubic-out);
  overflow-x: hidden;
  overflow-y: auto;
}

.navbar.active {
  transform: translateX(320px);
  transition-timing-function: var(--cubic-in);
}

.navbar-link {
  color: var(--eerie-black);
  font-size: var(--fs-6);
  padding: 10px 15px;
}

.navbar-action-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background-color: var(--sonic-silver);
  color: var(--white);
  font-weight: var(--fw-700);
  text-transform: uppercase;
  text-align: center;
}





/*-----------------------------------*\
  #HERO
\*-----------------------------------*/

.hero {
  margin-block-start: 85px;
  min-height: 360px;
  background-position: left;
  text-align: center;
}

.hero-title .span { font-size: 0.5em; }

.hero-text {
  color: var(--white);
  margin-block: 15px 25px;
}

.hero .btn { margin-inline: auto; }

.hero .btn:is(:hover, :focus) { background-color: var(--portland-orange); }





/*-----------------------------------*\
  #CATEGORY
\*-----------------------------------*/

.category-card .card-banner { border-radius: var(--radius-10); }

.category-card .img-cover { transition: var(--transition-2); }

.category-card:is(:hover, :focus-within) .img-cover { transform: scale(1.08); }

.category-card .card-title {
  margin-block-start: 15px;
  text-align: center;
  transition: var(--transition-1);
}

.category-card .card-title:is(:hover, :focus) { color: var(--portland-orange); }





/*-----------------------------------*\
  #OFFERS
\*-----------------------------------*/

.offer-card {
  border-radius: var(--radius-10);
  padding: 20px;
  display: grid;
  align-content: center;
}

.offer-card .card-subtitle {
  font-size: var(--fs-7);
  text-transform: uppercase;
  font-weight: var(--fw-700);
}

.offer-card .card-title {
  color: var(--black);
  margin-block: 5px 24px;
}

.offer-card .btn { background-color: var(--portland-orange); }

.offer-card .btn:is(:hover, :focus) { background-color: var(--black); }





/*-----------------------------------*\
  #PRODUCT
\*-----------------------------------*/

.product .img-cover.hover,
.product-card .card-action-btn { display: none; }

.product-card { text-align: center; }

.product-card .card-banner {
  border: 1px solid var(--platinum);
  border-radius: var(--radius-10);
  margin-block-end: 20px;
}

.product-card :is(.wrapper, .rating-wrapper) { display: flex; }

.product-card .wrapper {
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: var(--silver-chalice);
  font-size: var(--fs-7);
}

.product-card .rating-wrapper {
  color: var(--amber);
  gap: 2px;
}

.product-card .rating-wrapper.gray { color: unset; }

.product-card .h3 {
  --fs-3: 1.8rem;
  margin-block: 8px 10px;
}

.product-card .card-title { transition: var(--transition-1); }

.product-card .card-title:is(:hover, :focus) { color: var(--portland-orange); }

.product-card .card-price {
  color: var(--portland-orange);
  font-size: var(--fs-4);
  font-weight: var(--fw-700);
}





/*-----------------------------------*\
  #SERVICE
\*-----------------------------------*/

.service .img {
  margin-inline: auto;
  margin-block-end: 30px;
}

.service .section-title { margin-block-end: 60px; }

.service-card { text-align: center; }

.service-card .card-icon {
  max-width: max-content;
  margin-inline: auto;
}

.service-card .card-title { margin-block: 10px; }

.service-card .card-text { color: var(--spanish-gray); }





/*-----------------------------------*\
  #CTA
\*-----------------------------------*/

.cta { background-position: 75%; }

.cta-banner { display: none; }

.cta-content { padding-block: 80px var(--section-padding); }

.cta .section-title {
  text-align: left;
  margin-block: 10px 20px;
}

.cta .section-text { margin-block-end: 30px; }

.cta .btn:is(:hover, :focus) {
  background-color: var(--white);
  color: var(--black);
}





/*-----------------------------------*\
  #BRAND
\*-----------------------------------*/

.brand { --section-padding: 100px; }

.brand .has-scrollbar { gap: 0; }

.brand .scrollbar-item { min-width: 50%; }

.brand .scrollbar-item:not(:last-child) { border-inline-end: 1px solid var(--platinum); }

.brand-card {
  max-width: max-content;
  margin-inline: auto;
}





/*-----------------------------------*\
  #FOOTER
\*-----------------------------------*/

.footer {
  background-color: var(--raisin-black);
  color: var(--battleship-gray);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
}

.footer-top {
  padding-block-start: 100px;
  border-block-end: 1px solid var(--onyx);
}

.footer-top .container {
  display: grid;
  gap: 30px;
}

.footer .logo {
  color: var(--white);
  margin-block-end: 10px;
}

.footer-text {
  font-size: var(--fs-6);
  margin-block-end: 25px;
}

.footer-text .link {
  display: inline-block;
  color: var(--portland-orange);
}

.contact-item {
  margin-block-end: 15px;
  color: var(--white);
  font-weight: var(--fw-700);
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact-item ion-icon {
  flex-shrink: 0;
  font-size: 22px;
  color: var(--portland-orange);
}

.social-list {
  display: flex;
  gap: 10px;
}

.social-link {
  background-color: var(--white);
  color: var(--black);
  padding: 12px;
  border-radius: 50%;
  transition: var(--transition-1);
}

.social-link:is(:hover, :focus) {
  background-color: var(--portland-orange);
  color: var(--white);
}

.footer-list-title {
  color: var(--white);
  font-size: var(--fs-5);
  font-weight: var(--fw-700);
  padding-block: 10px;
}

.footer-link {
  padding-block: 4px;
  transition: var(--transition-1);
}

.footer-link:is(:hover, :focus) { color: var(--portland-orange); }

.footer-bottom { padding-block: 20px; }

.copyright { margin-block-end: 10px; }

.copyright-link { display: inline-block; }

.footer-bottom .img {
  width: 100%;
  max-width: max-content;
}




/*-----------------------------------*\
  #BACK TO TOP
\*-----------------------------------*/

.back-top-btn {
  position: fixed;
  bottom: 10px;
  right: 20px;
  background-color: var(--portland-orange);
  color: var(--white);
  font-size: 25px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: var(--shadow-2);
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-1);
  z-index: 4;
}

.back-top-btn.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(-10px);
}





/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

/**
 * responsive for large than 575px screen
 */

@media (min-width: 575px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-2: 4rem;
    --fs-3: 2.6rem;

  }



  /**
   * REUSED STYLE
   */

  .scrollbar-item { min-width: calc(50% - 15px); }

  .grid-list { grid-template-columns: 1fr 1fr; }



  /**
   * HERO
   */

  .hero {
    display: grid;
    padding-inline-start: 20px;
    justify-content: flex-start;
    align-items: center;
  }



  /**
   * OFFER
   */

  .offer .grid-list { grid-template-columns: 1fr; }



  /**
   * PRODUCT
   */

  .product-card .card-banner { position: relative; }

  .product-card .card-action-btn,
  .product-card .card-banner .hover {
    display: block;
    position: absolute;
  }

  .product-card .card-banner .hover {
    top: 0;
    left: 0;
  }

  .product-card:is(:hover, :focus-within) .default,
  .product-card .hover { opacity: 0; }

  .product-card .default,
  .product-card:is(:hover, :focus-within) .hover { opacity: 1; }

  .product-card .card-action-btn {
    top: 15px;
    right: 15px;
    color: var(--eerie-black);
    font-size: 20px;
    background-color: var(--white);
    border: 1px solid var(--platinum);
    padding: 12px;
    border-radius: 50%;
    transition: var(--transition-1);
    opacity: 0;
  }

  .product-card .card-action-btn:is(:hover, :focus) {
    background-color: var(--portland-orange);
    border-color: var(--portland-orange);
    color: var(--white);
  }

  .product-card:is(:hover, :focus-within) .card-action-btn { opacity: 1; }



  /**
   * CTA
   */

  .cta .img { width: 250px; }

  .cta .h2 { --fs-2: 3.2rem; }



  /**
   * BRAND
   */

  .brand .scrollbar-item { min-width: 25%; }



  /**
   * FOOTER
   */

  .footer-top .container { grid-template-columns: 1fr 1fr; }

}





/**
 * responsive for large than 768px screen
 */

@media (min-width: 768px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 9rem;

  }



  /**
   * REUSED STYLE
   */

  .scrollbar-item { min-width: calc(33.33% - 20px); }

  .grid-list { grid-template-columns: repeat(3, 1fr); }



  /**
   * HERO
   */

  .hero {
    aspect-ratio: 1512 / 784;
    padding-inline-start: 10%;
  }

  .hero-text { font-size: 2.4rem; }



  /**
   * OFFER
   */

  .offer .grid-list { grid-template-columns: repeat(3, 1fr); }



  /**
   * CTA
   */

  .cta-banner { display: block; }

  .cta .container {
    display: grid;
    grid-template-columns: 1fr 0.75fr;
    align-items: flex-end;
  }



  /**
   * FOOTER
   */

  .footer-bottom .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

}





/**
 * responsive for large than 992px screen
 */

@media (min-width: 992px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 12rem;
    --fs-3: 3rem;

    /**
     * spacing
     */

    --section-padding: 50px;

  }



  /**
   * REUSED STYLE
   */

  .container { padding-inline: 30px; }

  .scrollbar-item { min-width: calc(20% - 24px); }



  /**
   * HEADER
   */

  .nav-toggle-btn,
  .navbar-action-btn { display: none; }

  .header {
    --color: var(--white);
    background: none;
  }

  .header.active {
    --color: var(--black);
    background-color: var(--white);
  }

  .header .logo,
  .header .action-btn { color: var(--color); }

  .header .action-btn.user { display: block; }

  .logo { font-size: 3.8rem; }

  .navbar,
  .navbar.active {
    all: unset;
    margin-inline-end: auto;
  }

  .navbar-list {
    display: flex;
    gap: 10px;
  }

  .navbar-link {
    color: var(--color);
    --fs-6: 1.7rem;
    font-weight: var(--fw-700);
    transition: var(--transition-1);
  }

  .header.active .navbar-link:is(:hover, :focus) { color: var(--portland-orange); }



  /**
   * HERO
   */

  .hero { margin-block-start: 0; }



  /**
   * CATEGORY
   */

  .category-card .h3 { --fs-3: 2rem; }



  /**
   * SERVICE
   */

  .service .grid-list { grid-template-columns: repeat(4, 1fr); }

  .service-card .h3 { --fs-3: 2.4rem; }



  /**
   * BRAND
   */

  .brand .scrollbar-item { min-width: 20%; }



  /**
   * FOOTER
   */

  .footer-top .container { grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr; }

}





/**
 * responsive for large than 1200px screen
 */

@media (min-width: 1200px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 15rem;
    --fs-3: 3.2rem;

  }



  /**
   * REUSED STYLE
   */

  .grid-list { grid-template-columns: repeat(4, 1fr); }



  /**
   * CTA
   */

  .cta-content { padding-block: 100px; }



  /**
   * BRAND, FOOTER
   */

  :is(.brand, .footer) .container {
    max-width: 1200px;
    width: 100%;
    margin-inline: auto;
  }

  .footer { padding-block-start: 40px; }

}
          `);
        break;
      case "3":
        editor.setComponents(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <!-- Modern Icons from Remix Icons -->
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <title>Rosie | MERN Stack Developer</title>
  </head>
  <body>
    <header class="header">
      <nav class="nav">
        <h3 class="nav__logo">Rosie.dev</h3>

        <div class="nav__menu">
          <ul class="nav__list">
            <li><a href="#home" class="nav__link active-link">Home</a></li>
            <li><a href="#skills" class="nav__link">Skills</a></li>
            <li><a href="#connect" class="nav__link">Links</a></li>
            <li><a href="#contact" class="nav__button">Login</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="hero" id="home">
        <div class="hero__container">
          <div class="hero__content">
            <h1 class="hero__title">
              Hi, I'm Rosie.
              <span class="hero__title-highlight"
                >a full-stack web developer</span
              >
            </h1>
            <p class="hero__description">
              Hi, I'm Rosie — a full-stack developer specializing in creating
              robust and scalable web applications using MongoDB, Express,
              React, and Node.js.
            </p>
            <div class="hero__buttons">
              <a href="#connect" class="button">Let's Talk</a>
              <a href="#skills" class="button button--ghost">View Skills</a>
            </div>
          </div>

          <div class="hero__image">
            <img src="Girl.webp" alt="Developer illustration" />
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="skills section" id="skills">
        <div class="container">
          <h2 class="section__title">Technical Expertise</h2>

          <div class="skills__container">
            <div class="skills__content">
              <div class="skills__info">
                <h3 class="skills__subtitle">Professional Skillset</h3>
                <p class="skills__description">
                  Experienced in building scalable applications with modern web
                  technologies and best practices in software development.
                </p>
              </div>

              <div class="skills__list">
                <div class="skills__card">
                  <div class="skills__card-header">
                    <i class="ri-reactjs-line skills__icon"></i>
                    <span class="skills__percentage-text">97%</span>
                  </div>
                  <h3 class="skills__card-title">React.js</h3>
                  <p class="skills__card-description">
                    Frontend development with modern React, Redux, and Next.js
                  </p>
                  <div class="skills__bar">
                    <div class="skills__percentage" style="width: 97%">
                      <div class="skills__percentage-glow"></div>
                    </div>
                  </div>
                </div>

                <div class="skills__card">
                  <div class="skills__card-header">
                    <i class="ri-javascript-line skills__icon"></i>
                    <span class="skills__percentage-text">85%</span>
                  </div>
                  <h3 class="skills__card-title">JavaScript</h3>
                  <p class="skills__card-description">
                    Modern ES6+, TypeScript, and functional programming
                  </p>
                  <div class="skills__bar">
                    <div class="skills__percentage" style="width: 85%">
                      <div class="skills__percentage-glow"></div>
                    </div>
                  </div>
                </div>

                <div class="skills__card">
                  <div class="skills__card-header">
                    <i class="ri-database-2-line skills__icon"></i>
                    <span class="skills__percentage-text">85%</span>
                  </div>
                  <h3 class="skills__card-title">MongoDB</h3>
                  <p class="skills__card-description">
                    Database design, aggregation, and optimization
                  </p>
                  <div class="skills__bar">
                    <div class="skills__percentage" style="width: 85%">
                      <div class="skills__percentage-glow"></div>
                    </div>
                  </div>
                </div>

                <div class="skills__card">
                  <div class="skills__card-header">
                    <i class="ri-reactjs-line skills__icon"></i>
                    <span class="skills__percentage-text">89%</span>
                  </div>
                  <h3 class="skills__card-title">React Native</h3>
                  <p class="skills__card-description">
                    Mobile development with React Native and Expo
                  </p>
                  <div class="skills__bar">
                    <div class="skills__percentage" style="width: 89%">
                      <div class="skills__percentage-glow"></div>
                    </div>
                  </div>
                </div>

                <div class="skills__card">
                  <div class="skills__card-header">
                    <i class="ri-angularjs-fill skills__icon"></i>
                    <span class="skills__percentage-text">89%</span>
                  </div>
                  <h3 class="skills__card-title">Angular</h3>
                  <p class="skills__card-description">
                    Angular for building dynamic and responsive web applications
                  </p>
                  <div class="skills__bar">
                    <div class="skills__percentage" style="width: 89%">
                      <div class="skills__percentage-glow"></div>
                    </div>
                  </div>
                </div>

                <div class="skills__card">
                  <div class="skills__card-header">
                    <i class="ri-database-2-line skills__icon"></i>
                    <span class="skills__percentage-text">89%</span>
                  </div>
                  <h3 class="skills__card-title">SQL</h3>
                  <p class="skills__card-description">
                    SQL for database management and querying
                  </p>
                  <div class="skills__bar">
                    <div class="skills__percentage" style="width: 89%">
                      <div class="skills__percentage-glow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer" id="connect">
      <div class="container">
        <h2 class="footer__title">Let's Connect</h2>

        <div class="footer__social">
          <a href="#" class="footer__link">
            <i class="ri-linkedin-fill"></i>
          </a>
          <a href="#" class="footer__link">
            <i class="ri-github-fill"></i>
          </a>
          <a href="#" class="footer__link">
            <i class="ri-twitter-fill"></i>
          </a>
        </div>

        <p class="footer__copy">©️ 2024 Rosie. All rights reserved</p>
      </div>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
           `);
        editor.addStyle(`/* ===== BASE ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  background-color: #f8fafc;
  color: #0f172a;
  line-height: 1.6;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

/* ===== REUSABLE CLASSES ===== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 8rem 0;
}

.section__title {
  font-size: 2.75rem;
  color: #0f172a;
  text-align: center;
  margin-bottom: 4rem;
}

/* ===== HEADER & NAV ===== */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2563eb;
}

.nav__list {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav__link {
  font-weight: 700;
}

.nav__link:hover {
  border-bottom: 2px solid #2563eb;
  padding-bottom: 10px;
}

.nav__button {
  background-color: #2563eb;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
}

.nav__button:hover {
  background-color: #3b82f6;
}

/* ===== HERO ===== */
.hero {
  padding: 8rem 0;
}

.hero__container {
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  align-items: center;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero__title {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero__title-highlight {
  color: #2563eb;
  display: block;
  margin-top: 0.5rem;
}

.hero__description {
  color: #64748b;
  margin-bottom: 2.5rem;
}

.hero__buttons {
  display: flex;
  gap: 1rem;
}

.button {
  background-color: #2563eb;
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
}

.button--ghost {
  background-color: transparent;
  border: 2px solid #2563eb;
  color: #2563eb;
}

/* ===== SKILLS ===== */
.skills__container {
  max-width: 1000px;
  margin: 0 auto;
}

.skills__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skills__info {
  margin-bottom: 3rem;
  max-width: 500px;
}

.skills__subtitle {
  font-size: 2rem;
  color: #0f172a;
  margin-bottom: 1rem;
  font-weight: 600;
}

.skills__description {
  color: #64748b;
  line-height: 1.8;
}

.skills__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skills__card {
  background: linear-gradient(145deg, #ffffff, #e3e9ef);
  padding: 1.75rem;
  border-radius: 1.25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.skills__card-header {
  margin-bottom: 1rem;
}

.skills__card-title {
  font-size: 1.25rem;
  color: #0f172a;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.skills__card-description {
  color: #64748b;
  margin-bottom: 1.25rem;
}

.skills__icon {
  font-size: 2rem;
}

.skills__percentage-text {
  font-size: 1.5rem;
  font-weight: 600;
}

.skills__bar {
  height: 0.4rem;
  background-color: #e2e8f0;
  border-radius: 1rem;
  margin-top: auto;
}

.skills__percentage {
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  border-radius: 1rem;
}

.skills__image {
  margin-top: 150px;
}

.skills__image img {
  width: 90%;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

/* ===== FOOTER ===== */
.footer {
  background-color: #0f172a;
  color: #ffffff;
  padding: 4rem 0 2rem;
}

.footer__title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.footer__social {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer__link {
  font-size: 1.5rem;
}

.footer__copy {
  text-align: center;
  font-size: 0.875rem;
  color: #64748b;
}
              
            `);
        break;
      case "4":
        editor.setComponents(`
              `);
        editor.addStyle(`
                
              `);
        break;
      default:
        editor.setComponents(
          "<h1>Default Template</h1><p>No template found for this index.</p>"
        );
    }

    return () => {
      editor.destroy(); // Clean up GrapesJS on unmount
    };
  }, [index]);

  return (
    <>
      <div id="gjs" style={{ border: "1px solid #ccc", height: "100vh" }}>
        {/* GrapesJS editor will render here */}
      </div>
      <div
        id="blocks"
        classname="grid grid-cols-2 gap-4 p-4 bg-[#2a2a2a] border border-gray-700 rounded-lg"
      ></div>
    </>
  );
};

export default PageTemplate;
