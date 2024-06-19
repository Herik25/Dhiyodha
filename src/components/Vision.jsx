import React from "react";
import "./Vision.css";
import LogoImageAnimate from "../assets/Group.jsx";
import $ from "jquery";
import "jquery-ui-dist/package.json";
import { useEffect, useState } from "react";
import NetworkVision from "../assets/vision/netwoks.png";
import LearningVision from "../assets/vision/learning.png";
import EarningVision from "../assets/vision/earning.png";
import IdentityVision from "../assets/vision/identification.png";
import MarketingVision from "../assets/vision/marketing.png";
import SavingVision from "../assets/vision/saving.png";
import GrowthVision from "../assets/vision/growth.png";
import MentoringVision from "../assets/vision/mentoring.png";

const Vision = () => {
  const [navBlockUpdated, setNavBlockUpdated] = useState(false);
  useEffect(() => {
    const BLOG_SERVER_BASE_URL = "/blog/",
      BLOG_POSTS_URL =
        BLOG_SERVER_BASE_URL +
        "wp-content/themes/DivamiBlog/divamiserver/getPosts.php";

    var currentImage,
      imagesData = {
        imageDetails: [
          {
            linkName: "uxportfolio/transworld",
            imageName: NetworkVision,
            webp: "assets/images/home/next-gen/avana.webp",
            altName: "Logistics and Hospitality App UX UI-Avana",
            ariaLabel: "Avana Logistics app designed by Divami",
            title: "Networking",
            tagline: "“Women Building Success Together.”",
            message: `Connect with other women to share ideas, get advice, and build valuable business relationships. Join a vibrant community where collaboration and support are at the forefront, fostering connections that lead to mutual growth and success. Participate in networking events, both online and offline, to expand your professional circle. Build a supportive network that empowers you to overcome challenges and achieve your goals. Discover mentorship opportunities and forge partnerships that enhance your business journey.`,
            mobileMessage: `Connect with other women to share ideas, get advice, and build valuable business relationships. Join a vibrant community where collaboration and support are at the forefront, fostering connections that lead to mutual growth and success. Participate in networking events, both online and offline, to expand your professional circle. Build a supportive network that empowers you to overcome challenges and achieve your goals. Discover mentorship opportunities and forge partnerships that enhance your business journey.`,
          },
          {
            linkName: "uxportfolio/corpus",
            imageName: LearningVision,
            webp: "assets/images/home/next-gen/corpus.webp",
            altName: "SocialMedia and Entertainment UX UI-Corpus",
            ariaLabel: "Corpus Smart tv platform designed by Divami",
            title: "Learning",
            tagline: "“Grow Together Through Shared Experiences.”",
            message: `Learn new things from each other's experiences and grow together. Participate in workshops, webinars, and discussion groups designed to expand your knowledge and skills. Engage with industry experts and thought leaders who share their insights and expertise. Stay ahead in your professional journey with continuous learning and development opportunities. Access a wealth of resources, from e-books to online courses, tailored to your business needs and interests.`,
            mobileMessage: `Learn new things from each other's experiences and grow together. Participate in workshops, webinars, and discussion groups designed to expand your knowledge and skills. Engage with industry experts and thought leaders who share their insights and expertise. Stay ahead in your professional journey with continuous learning and development opportunities. Access a wealth of resources, from e-books to online courses, tailored to your business needs and interests.`,
          },
          {
            linkName: "uxportfolio/semantify",
            imageName: EarningVision,
            webp: "assets/images/home/next-gen/semantify.webp",
            altName: "Technology Web App UX UI-Semantify",
            ariaLabel: "Semantify analytics platform designed by Divami",
            title: "Earning",
            tagline: "“Expand Your Reach, Boost Your Income.”",
            message: `Find new clients and business opportunities to increase your income. Showcase your products and services to a wider audience through our platform. Utilize targeted marketing strategies to attract potential customers and business partners. Enhance your earning potential by leveraging our resources and connections. Benefit from tools and tips designed to maximize your sales and expand your market presence.`,
            mobileMessage: `Find new clients and business opportunities to increase your income. Showcase your products and services to a wider audience through our platform. Utilize targeted marketing strategies to attract potential customers and business partners. Enhance your earning potential by leveraging our resources and connections. Benefit from tools and tips designed to maximize your sales and expand your market presence.`,
          },
          {
            linkName: "uxportfolio/incx",
            imageName: IdentityVision,
            webp: "assets/images/home/next-gen/cryptox.webp",
            altName: "Cryptocurrency Web and Mobile App UX UI-INCX",
            ariaLabel: "Incx Cryptocurrency app designed by Divami",
            title: "Identification",
            tagline: "“Strength Unleashed, Opportunities Secured.”",
            message: `Discover your business strengths and uncover new opportunities with our insights. Access detailed analytics and reports that help you understand your market position. Identify areas for growth and improvement with our expert guidance. Make informed decisions that empower your business to thrive and succeed. Use our diagnostic tools to assess your strengths and discover untapped potential in your business model.`,
            mobileMessage: `Discover your business strengths and uncover new opportunities with our insights. Access detailed analytics and reports that help you understand your market position. Identify areas for growth and improvement with our expert guidance. Make informed decisions that empower your business to thrive and succeed. Use our diagnostic tools to assess your strengths and discover untapped potential in your business model.`,
          },
          {
            linkName: "uxportfolio/medicopia",
            imageName: MarketingVision,
            webp: "assets/images/home/next-gen/medicopia.webp",
            altName: "Healthcare Mobile App UX UI Sample-Medicopia",
            ariaLabel: "Medicopia Healthcare app designed by Divami",
            title: "Marketing",
            tagline: "“Promote, Reach, Grow: Elevate Your Brand with Us.”",
            message: `Get help promoting your business with our comprehensive marketing tools. Reach more customers through tailored marketing strategies and social media campaigns. Attend branding workshops to refine your brand identity and messaging. Grow your brand’s presence and recognition in the market, driving customer engagement and loyalty. Learn how to create compelling content and utilize digital marketing techniques to boost your visibility.`,
            mobileMessage: `Get help promoting your business with our comprehensive marketing tools. Reach more customers through tailored marketing strategies and social media campaigns. Attend branding workshops to refine your brand identity and messaging. Grow your brand’s presence and recognition in the market, driving customer engagement and loyalty. Learn how to create compelling content and utilize digital marketing techniques to boost your visibility.`,
          },
          {
            linkName: "uxportfolio/airtel",
            imageName: MentoringVision,
            webp: "assets/images/home/next-gen/airtel.webp",
            altName: "Telecom Mobile App UX UI-Airtel",
            ariaLabel: "Airtel Telecom app designed by Divami",
            title: "Mentoring",
            tagline: "“Guiding Your Success.”",
            message: `Get advice from experienced mentors through one-on-one sessions and group discussions. Our mentoring program connects you with industry experts who provide personalized guidance. Receive support tailored to your unique business challenges and goals. Benefit from the wisdom and experience of successful professionals dedicated to your growth. Engage in mentorship programs that offer practical advice, strategic insights, and motivational support.`,
            mobileMessage: `Get advice from experienced mentors through one-on-one sessions and group discussions. Our mentoring program connects you with industry experts who provide personalized guidance. Receive support tailored to your unique business challenges and goals. Benefit from the wisdom and experience of successful professionals dedicated to your growth. Engage in mentorship programs that offer practical advice, strategic insights, and motivational support.`,
          },
          {
            linkName: "uxportfolio/viola",
            imageName: SavingVision,
            webp: "assets/images/home/next-gen/viola.webp",
            altName: "Fintech Mobile App UX UI-Viola",
            ariaLabel: "Viola Fintech app designed by Divami",
            title: "Saving",
            tagline: "“Master Your Finances: Save, Optimize, Thrive.”",
            message: ` Learn how to manage your finances effectively with our expert advice. Save money by optimizing your budget and cutting unnecessary expenses. Attend financial planning workshops that teach you how to invest wisely for long-term success. Ensure your financial health and stability with our comprehensive financial management resources. Get access to financial tools and templates that help you keep track of your spending and savings.`,
            mobileMessage: ` Learn how to manage your finances effectively with our expert advice. Save money by optimizing your budget and cutting unnecessary expenses. Attend financial planning workshops that teach you how to invest wisely for long-term success. Ensure your financial health and stability with our comprehensive financial management resources. Get access to financial tools and templates that help you keep track of your spending and savings.`,
          },
          {
            linkName: "uxportfolio/shiksha",
            imageName: GrowthVision,
            webp: "assets/images/home/next-gen/shiksha.webp",
            altName: "Education Web App UX UI-Shiksha by HCL",
            ariaLabel: "Shiksha Education app designed by Divami",
            title: "GDP Growth",
            tagline: "“Empowering Women, Driving Growth.”",
            message: ` By supporting women entrepreneurs, Dhiyodha helps boost the economy. Successful women-led businesses drive innovation and create jobs, contributing to economic development. Join our initiative to promote female entrepreneurship and foster a more diverse and robust business landscape. Empower women to be key players in economic growth and societal advancement. Celebrate the success stories of women entrepreneurs who are making a significant impact on the economy.`,
            mobileMessage: ` By supporting women entrepreneurs, Dhiyodha helps boost the economy. Successful women-led businesses drive innovation and create jobs, contributing to economic development. Join our initiative to promote female entrepreneurship and foster a more diverse and robust business landscape. Empower women to be key players in economic growth and societal advancement. Celebrate the success stories of women entrepreneurs who are making a significant impact on the economy.`,
          },
        ],
      };
    let verticlePosition = 2;
    function setVerticalMessage(position) {
      const $descriptionFit = $(".tailor-fit-description");
      if ($(window).width() > 1023) {
        $descriptionFit.html(imagesData.imageDetails[position].message);
      } else {
        $descriptionFit.html(imagesData.imageDetails[position].mobileMessage);
      }
    }
    function setTailorFitSectionData(position) {
      $(".home-arrow__nav-image").attr(
        "href",
        imagesData.imageDetails[position].linkName
      );
      $(".home-arrow__nav-image").attr(
        "aria-label",
        imagesData.imageDetails[position].ariaLabel
      );
      $(".home-arrow__image").attr({
        src: imagesData.imageDetails[position].imageName + "?1564635070497",
        alt: imagesData.imageDetails[position].altName,
      });
      $(".home-arrow__next-gen-image").attr({
        srcset: imagesData.imageDetails[position].webp,
      });
      $(".tailor-fit-title").html(imagesData.imageDetails[position].title);
      setVerticalMessage(position);
      $(".tailor-fit-tagline").html(imagesData.imageDetails[position].tagline);
      setVerticalMessage(position);
    }

    $(document).ready(function () {
      $.ajax({
        type: "GET",
        url: BLOG_POSTS_URL,
        data: "",
        success: function (response) {
          $(".home-impression__content .loader").hide();
        },
      });
      setTailorFitSectionData(verticlePosition);
      $(".blue__block").addClass("femvista");

      $(".tailer-section-work-link").hover(
        function (event) {
          findImage((currentImage = $(this).attr("data-item")));
        },
        function (event) {
          currentImage = null;
        }
      );

      $(".nav__image-block").hover(
        function (event) {
          currentImage = "continue";
        },
        function (event) {
          currentImage = null;
        }
      );

      startTailorFitAnimation();

      $(window).on("resize", function (e) {
        setVerticalMessage(verticlePosition);
      });

      $(".sub-title__block").hover(
        function (event) {
          currentImage = "continue";
        },
        function (event) {
          currentImage = null;
        }
      );

      $(".home-clients__item").hover(function (event) {
        $(".home-clients__titles-block").slick("slickPause");
      });
    });
    var classItems = [
      "logistics-hospitality",
      "socialmedia-entertainment",
      "technology",
      "cryptocurrency",
      "healthcare",
      "telecom",
      "fintech",
      "education",
    ];
    let myTimer;
    let currentIndex = 2;
    let isTailorSectionIncrement = true;
    function imageMovement(index, image) {
      let flag = "false";
      $(".tailer-section-work-link")
        .parent(".home-arrow__nav-item")
        .removeClass("active");
      $(".home-arrow__nav-item:nth-child(" + (index + 1) + ")").addClass(
        "active"
      );
      var itemToHighlight = image;
      if (
        $(".nav__image-block")
          .removeClass(function (index, classes) {
            return (classes = classes.split(" "))
              .filter(function (eachClass) {
                return classItems.indexOf(eachClass) > -1;
              })
              .join(" ");
          })
          .addClass(itemToHighlight)
      )
        // if ($(window).width() < 768) {
        //     const totalWidth = $(".home-arrow__nav-block").outerWidth();
        //     $(".home-arrow__nav-list").css("width", totalWidth);
        //     const myScrollPos = $(".home-arrow__nav-block .active").offset().left + $(".home-arrow__nav-block .active").outerWidth(true) / 2 + $(".home-arrow__nav-block .home-arrow__nav-list").scrollLeft() - $(".home-arrow__nav-block .home-arrow__nav-list").width() / 2;
        //     $(".home-arrow__nav-block .home-arrow__nav-list").animate({
        //         scrollLeft: myScrollPos
        //     }, 300);
        //     flag = true;
        // }
        $(window).on("resize", function () {
          if (flag) {
            setNavBlockUpdated(!navBlockUpdated);
            flag = false;
          }
        });
    }

    function getTailorImagePosition() {
      if (isTailorSectionIncrement) {
        if (currentIndex >= 7) {
          isTailorSectionIncrement = !1;
          currentIndex--;
        } else {
          currentIndex++;
        }
      } else {
        if (currentIndex === 0) {
          isTailorSectionIncrement = !0;
          currentIndex = 1;
        } else {
          currentIndex--;
        }
      }
    }

    function findImage(imageName) {
      for (let i = 0; i < 8; i++) {
        if (imageName === classItems[i]) {
          verticlePosition = i;
          setTailorFitSectionData(i);
          imageMovement(i, classItems[i]);
          currentIndex = i;
        }
      }
    }

    function startTailorFitAnimation() {
      if (myTimer) {
        clearInterval(myTimer);
      }
      myTimer = setInterval(function () {
        if (!currentImage) {
          getTailorImagePosition();
          findImage(classItems[currentIndex]);
        }
      }, 3000);
    }
  }, []);

  return (
    <section className="diyodha-vision-area z-20">
      <div className=" mb-20">
        <img
          className=" w-full"
          src="/women_network_curve.png"
          alt="womenNetwork"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-xl sm:text2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center text-[#000]">
              Vision of Dhiyodha
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="col-span-12 md:col-span-8">
            <div className="home-tailer__block">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-8/12">
                  <div className=" flex items-start justify-center pt-8 translate-x-[-80px] sm:translate-x-0 md:translate-x-0 ">
                    <LogoImageAnimate className="logo-arrow__image " />
                  </div>
                </div>
                <div className="md:w-4/12">
                  <div
                    className="section-title__block sub-title__block d-flex flex-col items-center justify-center h-full"
                    data-aos="fade-left"
                  >
                    <h1 className="section-title__text tailor-fit-title text-2xl font-bold mb-2">
                      Networking
                    </h1>
                    <h2 className="section-tagline__text tailor-fit-tagline text-2xl font-bold mb-2">
                      This is Tagline
                    </h2>
                    <p className="section-title__descripion tailor-fit-description text-base">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Beatae enim tenetur, sequi nemo dignissimos voluptatum
                      quos, ex accusantium quod dolore optio, facilis vitae
                      voluptas saepe.Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Beatae enim tenetur, sequi nemo
                      dignissimos voluptatum quos, ex accusantium quod saepe..
                    </p>
                  </div>
                </div>
              </div>
              <nav className="home-arrow__nav-block mt-8">
                <div className="nav__image-block logistics-hospitality">
                  <a
                    href="uxportfolio/transworld"
                    target="_blank"
                    className="home-arrow__nav-image"
                    aria-label="Avana Logistics app designed by Divami"
                    rel="noreferrer"
                  >
                    <picture>
                      <img
                        src="assets/images/home/avana.jpg?1564635070497"
                        data-src="assets/images/home/semantify.jpg?1564635070497"
                        alt="Logistics and Hospitality App UX UI-Avana"
                        className="home-arrow__image lazy added"
                      />
                    </picture>
                  </a>
                  <div className="nav_image-block--border"></div>
                </div>

                <div className="home-arrow__nav-list">
                  <div className="home-arrow__nav-item active">
                    <a
                      className="tailer-section-work-link work-nav-link"
                      data-type="verticals"
                      data-item="logistics-hospitality"
                      id="logistics-hospitality"
                      aria-label="Logistics &amp; hospitality related apps designed by Divami"
                    >
                      <div className="home-arrow__nav-text">
                        <span className="nav_item_click">Networking</span>
                      </div>
                    </a>
                  </div>
                  <div className="home-arrow__nav-item">
                    <a
                      className="tailer-section-work-link work-nav-link"
                      data-type="verticals"
                      data-item="socialmedia-entertainment"
                      id="socialmedia-entertainment"
                      aria-label="Social media &amp; entertainment related apps designed by Divami"
                    >
                      <div
                        className="home-arrow__nav-text lazy added"
                        src="null"
                      >
                        <span className="nav_item_click">Learning</span>
                      </div>
                    </a>
                  </div>
                  <div className="home-arrow__nav-item">
                    <a
                      className="tailer-section-work-link work-nav-link"
                      data-type="verticals"
                      data-item="technology"
                      id="technology"
                      aria-label="Technology related apps designed by Divami"
                    >
                      <div className="home-arrow__nav-text">
                        <span className="nav_item_click">Earning</span>
                      </div>
                    </a>
                  </div>

                  <div className="home-arrow__nav-item">
                    <a
                      className="tailer-section-work-link work-nav-link"
                      data-type="verticals"
                      data-item="cryptocurrency"
                      id="cryptocurrency"
                      aria-label="Cryptocurrency related apps designed by Divami"
                    >
                      <div className="home-arrow__nav-text">
                        <span className="nav_item_click">Identification</span>
                      </div>
                    </a>
                  </div>
                  <div className="home-arrow__nav-item">
                    <a
                      className="tailer-section-work-link work-nav-link"
                      data-type="verticals"
                      data-item="healthcare"
                      id="healthcare"
                      aria-label="Health tech related apps designed by Divami"
                    >
                      <div className="home-arrow__nav-text">
                        <span className="nav_item_click">Marketing</span>
                      </div>
                    </a>
                  </div>
                  <div className="home-arrow__nav-item">
                    <a
                      className="tailer-section-work-link work-nav-link"
                      data-type="verticals"
                      data-item="telecom"
                      id="telecom"
                      aria-label="Telecom related apps designed by Divami"
                    >
                      <div className="home-arrow__nav-text">
                        <span className="nav_item_click">Mentoring</span>
                      </div>
                    </a>
                  </div>
                  <div className="home-arrow__nav-item">
                    <a
                      className="tailer-section-work-link work-nav-link"
                      data-type="verticals"
                      data-item="fintech"
                      id="fintech"
                      aria-label="Fintech related apps designed by Divami"
                    >
                      <div className="home-arrow__nav-text">
                        <span className="nav_item_click">Saving</span>
                      </div>
                    </a>
                  </div>
                  <div className="home-arrow__nav-item">
                    <a
                      className="tailer-section-work-link work-nav-link"
                      data-type="verticals"
                      data-item="education"
                      id="education"
                      aria-label="Education related apps designed by Divami"
                    >
                      <div className="home-arrow__nav-text">
                        <span className="nav_item_click">GDPGrowth</span>
                      </div>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-24">
        <img
          className=" w-full"
          src="/women_network_curve.png"
          alt="womenNetwork"
        />
      </div>
    </section>
  );
};

export default Vision;
