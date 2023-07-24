const Home = () => {
  return (
    <>
      <br></br>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://source.unsplash.com/random/1920x600/?kerala"
              height="600px"
              class="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/random/1920x600/?redfort"
              height="600px"
              class="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/random/1920x600/?goa"
              height="600px"
              class="d-block w-100"
              alt="..."
            ></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
      <div class="container">
            <div class="row">
                <div class=" col-sm-12 col-md-6 col-lg-6">
                    <div class="card">
                        <img  src="https://source.unsplash.com/random/1920x1080/?Ooty"class="card-img-top" alt="..." ></img>
                        <div class="card-body">
                            <h5 class="card-title">Vidyasiri</h5>
                            <p class="card-text">Karnataka Govt Scholarship</p>
                            <a href="#" class="btn btn-primary"> Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class=" col-sm-12 col-md-6 col-lg-6">
                    <div class="card">
                        <img  src="https://source.unsplash.com/random/1920x1080/?Kanyakumari"class="card-img-top" alt="..." ></img>
                        <div class="card-body">
                            <h5 class="card-title">Region-Specific Scholarships</h5>
                            <p class="card-text">ome scholarships are available for engineering students based on their geographic location. Local organizations or foundations may offer scholarships to support students from their community</p>
                            <a href="#" class="btn btn-primary"> Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class=" col-sm-12 col-md-6 col-lg-6">
                    <div class="card">
                        <img  src="https://source.unsplash.com/random/1920x1080/?Bali"class="card-img-top" alt="..." ></img>
                        <div class="card-body">
                            <h5 class="card-title">Explore Professional Engineering Organizations</h5>
                            <p class="card-text">Visit the websites of engineering associations and societies to discover any scholarship opportunities they may offer.</p>
                            <a href="#" class="btn btn-primary"> Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class=" col-sm-12 col-md-6 col-lg-6">
                    <div class="card">
                        <img  src="https://source.unsplash.com/random/1920x1080/?Jammu"class="card-img-top" alt="..." ></img>
                        <div class="card-body">
                            <h5 class="card-title">Corporate Scholarships</h5>
                            <p class="card-text">Some companies and engineering firms offer scholarships to students pursuing engineering degrees. These scholarships may come with the opportunity for internships or future employment with the company.</p>
                            <a href="#" class="btn btn-primary"> Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class=" col-sm-12 col-md-6 col-lg-6">
                    <div class="card">
                        <img  src="https://source.unsplash.com/random/1920x1080/?Manali"class="card-img-top" alt="..." ></img>
                        <div class="card-body">
                            <h5 class="card-title">Inspired Engineers</h5>
                            <p class="card-text">Explore national portals</p>
                            <a href="#" class="btn btn-primary"> Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class=" col-sm-12 col-md-6 col-lg-6">
                    <div class="card">
                        <img  src="https://source.unsplash.com/random/1920x1080/?Kashmir"class="card-img-top" alt="..." ></img>
                        <div class="card-body">
                            <h5 class="card-title">University Scholarships</h5>
                            <p class="card-text">With respect to different university</p>
                            <a href="#" class="btn btn-primary"> Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <footer class="bg-light pb-5">
  <div class="container text-center">
    <div>
      <div>
        Contact US
        </div>
        <div>Phone:+91 8563258966</div>
        <div>E-Mail:travel.india@gmail.com</div>
    </div>
    <p class="font-italic text-muted mb-0">&copy; Copyrights Travel_Inida.com All rights reserved.</p>
  </div>
</footer>
    </>
  );
};

export default Home;
