/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import Banner from "../Component/BannerComponent/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import '../Component/BlogComponent/BlogItem.scss'
import "aos/dist/aos.css";
import { useEffect } from "react";
import ItemCouser from "../Component/CourseComponent/ItemCouser";
import BlogItem from "../Component/BlogComponent/BlogItem";
import { DataBlog, DataCourse } from "../data/data";
SwiperCore.use([Autoplay, Pagination, Navigation]);
function Home() {
  // const [gotop, setGotop] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(function () {
      AOS.init({
        duration: 2000,
      });
    }, 5000);

  }, []);
  
  return (
    <>
      <Banner />
      <section className="section sec-couser">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titleBox">
                <h2 className="titleBox__title" data-aos="fade-up">
                  Featured Courses
                </h2>
                <p className="titleBox__text">
                  Discover your perfect program in our courses.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              breakpoints={{
                768: {
                  "spaceBetween": 10,
                  "slidesPerView": 2,
                },
                1200: {
                  "spaceBetween": 10,
                  "slidesPerView": 3,
                }
              }}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".pagination-custom",
                clickable: true,
              }}
              navigation={false}
              className="mySwiper"
            >
              {DataCourse.map((numb, index) => {
                if (index < 4) {
                  return (
                    <div className="col-md-4" key={numb.id}>
                      <SwiperSlide>
                        <ItemCouser title={numb} />
                      </SwiperSlide>
                    </div>
                  );
                }
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="section sec-trending">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titleBox">
                <h2 className="titleBox__title">Trending Categories</h2>
                <p className="titleBox__text">
                  Cum doctus civibus efficiantur in imperdiet deterruisset.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="Box">
                <img src="./img/Group3.png" />
                <h3 className="Box__title">Design</h3>
                <p className="Box__desp">Over 960 Courses</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="Box">
                <img src="./img/Group3.png" />
                <h3 className="Box__title">Business</h3>
                <p className="Box__desp">Over 43 Courses</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="Box">
                <img src="./img/Group3.png" />
                <h3 className="Box__title">Software Development</h3>
                <p className="Box__desp">Over 1209 Courses</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="Box">
                <img src="./img/Group3.png" />
                <h3 className="Box__title">Personal Development</h3>
                <p className="Box__desp">Over 921 Courses</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="Box">
                <img src="./img/Group3.png" />
                <h3 className="Box__title">Photography</h3>
                <p className="Box__desp">Over 693 Courses</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="Box">
                <img src="./img/Group3.png" />
                <h3 className="Box__title">Audio + Music</h3>
                <p className="Box__desp">Over 53 Courses</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="Box">
                <img src="./img/Group3.png" />
                <h3 className="Box__title">Marketing & Marketing</h3>
                <p className="Box__desp">Over 12 Courses</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="Box">
                <img src="./img/Group3.png" />
                <h3 className="Box__title">Finance & Accounting</h3>
                <p className="Box__desp">Over 322 Courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sec-What">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="titleBox text-center">
                <h2
                  className="titleBox__title"
                  data-aos="flip-up"
                  data-aos-duration="1500"
                  data-aos-duration="1500"
                >
                  What our students have to say
                </h2>
                <p className="titleBox__text">
                  Discover your perfect program in our courses.{" "}
                </p>
              </div>
            </div>
          </div>

          <Swiper
            breakpoints={{
              768: {
                "spaceBetween": 10,
                "slidesPerView": 2,
              },
              1200: {
                "spaceBetween": 10,
                "slidesPerView": 3,
              }
            }}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".pagination-custom",
              clickable: true,
            }}
            navigation={false}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card-staff">
                <div className="card-staff__inf">
                  <img src="./img/instructor_images.jpg" />
                  <div className="card-staff__group">
                    <h4 className="card-staff__name">Albert Cole</h4>
                    <p className="card-staff__job">Designer</p>
                  </div>
                </div>
                <p className="card-staff__deps">
                  “ I believe in lifelong learning and Skola is a great place to
                  learn from experts. I've learned a lot and recommend it to all
                  my friends “
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-staff">
                <div className="card-staff__inf">
                  <img src="./img/instructor_images1.jpg" />
                  <div className="card-staff__group">
                    <h4 className="card-staff__name">Alison Dawn</h4>
                    <p className="card-staff__job">WordPress Developer</p>
                  </div>
                </div>
                <p className="card-staff__deps">
                  “ I believe in lifelong learning and Skola is a great place to
                  learn from experts. I've learned a lot and recommend it to all
                  my friends “
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-staff">
                <div className="card-staff__inf">
                  <img src="./img/instructor_images2.jpg" />
                  <div className="card-staff__group">
                    <h4 className="card-staff__name">Daniel Parker</h4>
                    <p className="card-staff__job">Front-end Developer</p>
                  </div>
                </div>
                <p className="card-staff__deps">
                  “ I believe in lifelong learning and Skola is a great place to
                  learn from experts. I've learned a lot and recommend it to all
                  my friends “
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-staff">
                <div className="card-staff__inf">
                  <img src="./img/instructor_images.jpg" />
                  <div className="card-staff__group">
                    <h4 className="card-staff__name">Albert Cole</h4>
                    <p className="card-staff__job">Designer</p>
                  </div>
                </div>
                <p className="card-staff__deps">
                  “ I believe in lifelong learning and Skola is a great place to
                  learn from experts. I've learned a lot and recommend it to all
                  my friends “
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-staff">
                <div className="card-staff__inf">
                  <img src="./img/instructor_images1.jpg" />
                  <div className="card-staff__group">
                    <h4 className="card-staff__name">Alison Dawn</h4>
                    <p className="card-staff__job">WordPress Developer</p>
                  </div>
                </div>
                <p className="card-staff__deps">
                  “ I believe in lifelong learning and Skola is a great place to
                  learn from experts. I've learned a lot and recommend it to all
                  my friends “
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-staff">
                <div className="card-staff__inf">
                  <img src="./img/instructor_images2.jpg" />
                  <div className="card-staff__group">
                    <h4 className="card-staff__name">Daniel Parker</h4>
                    <p className="card-staff__job">Front-end Developer</p>
                  </div>
                </div>
                <p className="card-staff__deps">
                  “ I believe in lifelong learning and Skola is a great place to
                  learn from experts. I've learned a lot and recommend it to all
                  my friends “
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="pagination-custom"></div>
          <div className="row">
            <div className="pay">
              <div>
                <img src="./img/img1.png" />
              </div>
              <div>
                <img src="./img/img2.png" />
              </div>
              <div>
                <img src="./img/img3.png" />
              </div>
              <div>
                <img src="./img/img4.png" />
              </div>
              <div>
                <img src="./img/img5.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section sec-Up">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titleBox">
                <h2 className="titleBox__title">Upcoming Events</h2>
                <p className="titleBox__text">
                  Discover your perfect program in our courses.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="evenInfo">
                <img src="./img/anh1.jpg" />
                <div className="evenGroup">
                  <div className="timeEven">06 April</div>
                  <p className="nameEven">
                    Elegant Light Box Paper Cut Dioramas New Design Conference
                  </p>
                  <span className="hour">
                    <img src="/img/clock11.png" />
                    8:00 am - 5:00 pm
                  </span>
                  <span className="place">
                    <img src="/img/place11.png" />
                    London, UK
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="evenInfo">
                <img src="./img/anh2.jpg" />
                <div className="evenGroup">
                  <div className="timeEven">06 April</div>
                  <p className="nameEven">
                    Lambeth Safeguarding: Understanding Contextual Harm
                  </p>
                  <span className="hour">
                    <img src="/img/clock11.png" />
                    8:00 am - 5:00 pm
                  </span>
                  <span className="place">
                    <img src="/img/place11.png" />
                    London, UK
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="evenInfo">
                <img src="./img/anh3.jpg" />
                <div className="evenGroup">
                  <div className="timeEven">06 April</div>
                  <p className="nameEven">
                    Discover Law - Get into the best UK law schools
                  </p>
                  <span className="hour">
                    <img src="/img/clock11.png" />
                    8:00 am - 5:00 pm
                  </span>
                  <span className="place">
                    <img src="/img/place11.png" />
                    London, UK
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="evenInfo">
                <img src="./img/anh4.jpg" />
                <div className="evenGroup">
                  <div className="timeEven">06 April</div>
                  <p className="nameEven">
                    Undergraduate Open Day - Holloway Campus - 3 July 2020
                  </p>
                  <span className="hour">
                    <img src="/img/clock11.png" />
                    8:00 am - 5:00 pm
                  </span>
                  <span className="place">
                    <img src="/img/place11.png" />
                    London, UK
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="evenInfo">
                <img src="./img/anh5.jpg" />
                <div className="evenGroup">
                  <div className="timeEven">06 April</div>
                  <p className="nameEven">
                    "Introduction to Law" Open Day with Bristows
                  </p>
                  <span className="hour">
                    <img src="/img/clock11.png" />
                    8:00 am - 5:00 pm
                  </span>
                  <span className="place">
                    <img src="/img/place11.png" />
                    London, UK
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="evenInfo">
                <img src="./img/anh5.jpg" />
                <div className="evenGroup">
                  <div className="timeEven">06 April</div>
                  <p className="nameEven">
                    Kingston College Open Events 2019-20
                  </p>
                  <span className="hour">
                    <img src="/img/clock11.png" />
                    8:00 am - 5:00 pm
                  </span>
                  <span className="place">
                    <img src="/img/place11.png" />
                    London, UK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section sec-Top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titleBox">
                <h2 className="titleBox__title">Top Rating Instructors</h2>
                <p className="titleBox__text">
                  Discover your perfect program in our courses.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              breakpoints={{
                768: {
                  "spaceBetween": 10,
                  "slidesPerView": 2,
                },
                1200: {
                  "spaceBetween": 10,
                  "slidesPerView": 3,
                }
              }}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".pagination-custom",
                clickable: true,
              }}
              navigation={false}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="Top__group">
                  <img src="./img/Mask Group.jpg" />
                  <p className="Top__best-name">Jack Wilson</p>
                  <p className="Top__best-job">Developer</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Top__group">
                  <img src="./img/Mask Group1.jpg" />
                  <p className="Top__best-name">Jack Wilson</p>
                  <p className="Top__best-job">Developer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Top__group">
                  <img src="./img/Mask Group2.jpg" />
                  <p className="Top__best-name">Jack Wilson</p>
                  <p className="Top__best-job">Developer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Top__group">
                  <img src="./img/Mask Group.jpg" />
                  <p className="Top__best-name">Jack Wilson</p>
                  <p className="Top__best-job">Developer</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="section sec-News">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titleBox">
                <h2 className="titleBox__title">Latest News</h2>
                <p className="titleBox__text">
                  Discover your perfect program in our courses.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              breakpoints={{
                768: {
                  "spaceBetween": 10,
                  "slidesPerView": 2,
                },
                1200: {
                  "spaceBetween": 10,
                  "slidesPerView": 3,
                }
              }}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".pagination-custom",
                clickable: true,
              }}
              navigation={false}
              className="mySwiper"
            >
              {DataBlog.map((num, index) => {
                if (index < 4) {
                  return (
                    <div className="col-md-4" key={num.id}>
                      <SwiperSlide>
                        <BlogItem title={num} />
                      </SwiperSlide>
                    </div>
                  );
                }
              })}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="section sec-Learning">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <div className="titleBox">
                <h2 className="titleBox__title">
                  Get personal learning recommendations
                </h2>
                <p className="titleBox__text">
                  Enhance your skills with best Online courses
                </p>
              </div>
              <a href="#" className="btn-a btn-effect">
                <span></span>GET STARTED
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
