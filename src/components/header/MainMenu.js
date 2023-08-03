import React from "react";

function MainMenu(props) {
  return (
    <div>
      <>
        <div className="mad-header-section--sticky-xl">
          <div className="container">
            {/*================ Navigation ================*/}
            <nav className="mad-navigation-container mad-header-section--sticky-xl">
              <ul className="mad-navigation mad-navigation--vertical-sm">
                <li className="menu-item menu-item-has-children">
                  <a href="#">Home</a>
                  {/*================ Sub Menu ================*/}
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="index.html">Main Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="home_2.html">Left Menu Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="home_3.html">Center Menu Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="home_4.html">Split Showcase</a>
                    </li>
                    <li className="menu-item">
                      <a href="home_5.html">Right Menu Home</a>
                    </li>
                  </ul>
                  {/*================ End of Sub Menu ================*/}
                </li>
                <li className="menu-item menu-item-has-children current-menu-item">
                  <a href="#">Pages</a>
                  {/*================ Sub Menu ================*/}
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="pages_about.html">About Us</a>
                    </li>
                    <li className="menu-item">
                      <a href="pages_team.html">Team</a>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#">Menu</a>
                      {/*================ Sub Menu ================*/}
                      <ul className="sub-menu">
                        <li>
                          <a href="menu_v1.html">Menu Variant 1</a>
                        </li>
                        <li>
                          <a href="menu_v2.html">Menu Variant 2</a>
                        </li>
                        <li>
                          <a href="menu_v3.html">Menu Variant 3</a>
                        </li>
                        <li>
                          <a href="menu_v4.html">Menu Variant 4</a>
                        </li>
                      </ul>
                      {/*================ End of Sub Menu ================*/}
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#">Portfolio</a>
                      {/*================ Sub Menu ================*/}
                      <ul className="sub-menu">
                        <li>
                          <a href="portfolio_classic_3_cols.html">
                            Classic 3 Columns
                          </a>
                        </li>
                        <li>
                          <a href="portfolio_classic_3_cols_wide.html">
                            Classic 3 Columns Wide
                          </a>
                        </li>
                        <li>
                          <a href="portfolio_modern_3_cols.html">
                            Modern 3 Columns
                          </a>
                        </li>
                        <li>
                          <a href="portfolio_modern_3_cols_wide.html">
                            Modern 3 Columns Wide
                          </a>
                        </li>
                        <li>
                          <a href="portfolio_masonry.html">Masonry</a>
                        </li>
                        <li>
                          <a href="portfolio_masonry_wide.html">Masonry Wide</a>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <a href="#">Single Portfolio Post</a>
                          {/*================ Sub Menu ================*/}
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <a href="portfolio_small_img.html">
                                Small Images
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="portfolio_big_img.html">Big Images</a>
                            </li>
                            <li className="menu-item">
                              <a href="portfolio_small_slider.html">
                                Small Slider
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="portfolio_big_slider.html">Big Slider</a>
                            </li>
                            <li className="menu-item">
                              <a href="portfolio_small_grid.html">
                                Small Grid Gallery
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="portfolio_big_grid.html">
                                Big Grid Gallery
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="portfolio_small_masonry.html">
                                Small Masonry Gallery
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="portfolio_big_masonry.html">
                                Big Masonry Gallery
                              </a>
                            </li>
                          </ul>
                          {/*================ End of Sub Menu ================*/}
                        </li>
                      </ul>
                      {/*================ End of Sub Menu ================*/}
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#">Gallery</a>
                      {/*================ Sub Menu ================*/}
                      <ul className="sub-menu">
                        <li>
                          <a href="gallery_grid.html">Grid</a>
                        </li>
                        <li>
                          <a href="gallery_grid_gap.html">Grid Minimal Gap</a>
                        </li>
                        <li>
                          <a href="gallery_grid_wide.html">Grid Wide</a>
                        </li>
                        <li>
                          <a href="gallery_grid_wide_gap.html">
                            Grid Wide Minimal Gap
                          </a>
                        </li>
                        <li>
                          <a href="gallery_masonry.html">Masonry</a>
                        </li>
                        <li>
                          <a href="gallery_masonry_gap.html">
                            Masonry Minimal Gap
                          </a>
                        </li>
                        <li>
                          <a href="gallery_masonry_wide.html">Masonry Wide</a>
                        </li>
                        <li>
                          <a href="gallery_masonry_wide_gap.html">
                            Masonry Wide Minimal Gap
                          </a>
                        </li>
                      </ul>
                      {/*================ End of Sub Menu ================*/}
                    </li>
                    <li className="menu-item current-menu-item">
                      <a href="pages_contact_v1.html">Contact v1</a>
                    </li>
                    <li className="menu-item">
                      <a href="pages_contact_v2.html">Contact v2</a>
                    </li>
                    <li className="menu-item">
                      <a href="pages_coming_soon.html">Coming Soon Page</a>
                    </li>
                    <li className="menu-item">
                      <a href="pages_404.html">404 Page</a>
                    </li>
                  </ul>
                  {/*================ End of Sub Menu ================*/}
                </li>
                <li className="menu-item menu-item-has-children mega-menu">
                  <a href="#">Elements</a>
                  {/*================ Sub Menu ================*/}
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-has-children">
                      <a href="#" className="sub-title">
                        Elements 1
                      </a>
                      {/*================ Sub Menu ================*/}
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="elements_accordions_toggles.html">
                            Accordions &amp; Toggles
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_alert_boxes_buttons.html">
                            Alert Boxes &amp; Buttons
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_call_to_actions.html">
                            Call to Actions
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_counters.html">
                            Counters &amp; Countdowns
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_icon_boxes.html">Icon With Text</a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_image_boxes.html">
                            Image With Text
                          </a>
                        </li>
                      </ul>
                      {/*================ End of Sub Menu ================*/}
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#" className="no-title">
                        Elements 2
                      </a>
                      {/*================ Sub Menu ================*/}
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="elements_forms.html">Reservation Forms</a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_pricing.html">Pricing Tables</a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_tables.html">
                            Tables &amp; Progress Bars
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_tabs.html">
                            Tabs &amp; Tour Sections
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_team.html">
                            Team Members &amp; Awards
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_testimonials.html">Testimonials</a>
                        </li>
                      </ul>
                      {/*================ End of Sub Menu ================*/}
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#" className="sub-title">
                        Typography
                      </a>
                      {/*================ Sub Menu ================*/}
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="elements_dropcaps_blockquotes.html">
                            Dropcaps &amp; Blockquotes
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_headings_and_paragraphs.html">
                            Headings &amp; Paragraphs
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_highlights_tooltips_listings.html">
                            Highlights, Tooltips and Listings
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="rtl/index.html">RTL Version</a>
                        </li>
                      </ul>
                      {/*================ End of Sub Menu ================*/}
                    </li>
                    <li className="menu-item menu-item-has-children sub-wrap">
                      <a href="#" className="sub-title">
                        Header and Footer Layouts
                      </a>
                      {/*================ Sub Menu ================*/}
                      <div className="sub-menu">
                        <ul>
                          <li className="menu-item">
                            <a href="index.html">Header v1</a>
                          </li>
                          <li className="menu-item">
                            <a href="home_2.html">Header v2</a>
                          </li>
                          <li className="menu-item">
                            <a href="home_3.html">Header v3</a>
                          </li>
                        </ul>
                        <ul>
                          <li className="menu-item">
                            <a href="index.html">Footer v1</a>
                          </li>
                          <li className="menu-item">
                            <a href="home_2.html">Footer v2</a>
                          </li>
                          <li className="menu-item">
                            <a href="home_3.html">Footer v3</a>
                          </li>
                        </ul>
                      </div>
                      {/*================ End of Sub Menu ================*/}
                    </li>
                  </ul>
                  {/*================ End of Sub Menu ================*/}
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Events</a>
                  {/*================ Sub Menu ================*/}
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="events_list.html">Events List</a>
                    </li>
                    <li className="menu-item">
                      <a href="events_month.html">Events by Month</a>
                    </li>
                    <li className="menu-item">
                      <a href="events_day.html">Events by Day</a>
                    </li>
                    <li className="menu-item">
                      <a href="events_single.html">Single Event Page</a>
                    </li>
                  </ul>
                  {/*================ End of Sub Menu ================*/}
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">News</a>
                  {/*================ Sub Menu ================*/}
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-has-children">
                      <a href="#">Classic Blog</a>
                      {/*================ Sub Menu ================*/}
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="blog_classic_sidebar.html">
                            With Right Sidebar
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="blog_classic.html">Without Sidebar</a>
                        </li>
                      </ul>
                      {/*================ End of Sub Menu ================*/}
                    </li>
                    <li className="menu-item">
                      <a href="blog_masonry.html">Masonry Blog</a>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#">Single Blog Post</a>
                      {/*================ Sub Menu ================*/}
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="blog_single_sidebar.html">
                            With Right Sidebar
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="blog_single.html">Without Sidebar</a>
                        </li>
                      </ul>
                      {/*================ End of Sub Menu ================*/}
                    </li>
                  </ul>
                  {/*================ End of Sub Menu ================*/}
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Reservation</a>
                  {/*================ Sub Menu ================*/}
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="reservation_open_table.html">Via Open Table</a>
                    </li>
                    <li className="menu-item">
                      <a href="reservation_booked.html">
                        Via Booked - Appointment Booking Plugin
                      </a>
                    </li>
                  </ul>
                  {/*================ End of Sub Menu ================*/}
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Shop</a>
                  {/*================ Sub Menu ================*/}
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="shop_front_sidebar.html">
                        Shop With Right Sidebar
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="shop_front.html">Shop Without Sidebar</a>
                    </li>
                    <li className="menu-item">
                      <a href="shop_single.html">Single Product Page</a>
                    </li>
                    <li className="menu-item">
                      <a href="shop_checkout.html">Cart/Checkout</a>
                    </li>
                    <li className="menu-item">
                      <a href="shop_account.html">My Account</a>
                    </li>
                  </ul>
                  {/*================ End of Sub Menu ================*/}
                </li>
              </ul>
            </nav>
            {/*================ End of Navigation ================*/}
          </div>
        </div>
      </>
    </div>
  );
}

export default MainMenu;
