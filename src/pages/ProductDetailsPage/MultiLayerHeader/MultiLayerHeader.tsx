import { Icon } from "@iconify/react";
import styles from "./MultiLayerHeader.module.css";

export const MultiLayerHeader = () => {
  return (
    <>
      <header style={{ background: "red" }}>
        <div className={styles.topBarContainer}>
          <div className={`products-container ${styles.topBar}`}>
            <span className={styles.topBarText}>
              Welcome to Needus & Get the best product
            </span>
            <nav className="language-currency-selector">
              <ul style={{ display: "flex" }}>
                <li>
                  <a
                    className={styles.topBarText}
                    href="#"
                    aria-label="Select English"
                  >
                    ENG
                    <Icon
                      icon="ep:arrow-down-bold"
                      style={{ color: "white" }}
                    />
                  </a>
                </li>
                <span className={styles.topBarText}>|</span>
                <li>
                  <a
                    className={styles.topBarText}
                    href="#"
                    aria-label="Select USD"
                  >
                    USD
                    <Icon
                      icon="ep:arrow-down-bold"
                      style={{ color: "white" }}
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.mainHeader}>
          <div className="products-container">
            <div className={styles.contentContainer}>
              <h1 className="logo">
                <a href="/">Needus.</a>
              </h1>
              <form className="search-form" role="search">
                <input
                  type="search"
                  placeholder="Search Products"
                  aria-label="Search Products"
                />
                <button type="submit" aria-label="Search">
                  <span className="icon-search"></span>
                </button>
                <select aria-label="Select Category">
                  <option>All Categories</option>
                  {/* <!-- Other categories --> */}
                </select>
              </form>
              <div className="user-actions">
                <a href="/login" aria-label="Login">
                  Login
                </a>
                <a href="/signup" aria-label="Sign up">
                  Signup
                </a>
                <a href="/favorites" aria-label="Favorites">
                  <span className="icon-heart"></span>
                </a>
                <a href="/cart" aria-label="Shopping Cart">
                  <span className="icon-cart"></span>
                </a>
              </div>
              <div className="contact-info">
                <a href="tel:+12012987481" aria-label="Contact us 24/7">
                  +12012987481
                </a>
              </div>
            </div>
          </div>
        </div>

        <nav className={styles.primaryNavigation}>
          <div className="products-container">
            <div style={{ display: "flex" }}>
              <button aria-controls="categories" aria-expanded="false">
                All Categories
              </button>
              <ul id="categories" className="categories" hidden>
                {/* <!-- List of categories --> */}
              </ul>
              {/* <!-- Rest of the navigation items --> */}
            </div>
          </div>
        </nav>
      </header>

      <main>
        <nav aria-label="Breadcrumb">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/product">Product</a>
            </li>
            <li>
              <a href="/tv-collection" aria-current="page">
                TV Collection
              </a>
            </li>
          </ol>
        </nav>

        {/* <!-- Section for the 'TV Collection' heading --> */}
        <section>
          <h2>TV Collection</h2>
          {/* <!-- Content for the TV Collection section --> */}
        </section>
      </main>
    </>
  );
};
