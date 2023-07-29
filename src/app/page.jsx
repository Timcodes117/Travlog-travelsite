"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faBriefcase, faCalendarAlt, faEnvelope, faMapMarker, faMapMarkerAlt, faPlayCircle, faStar, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { NextSeo } from 'next-seo'

function Page() {
  config.autoAddCss = false

  const [isElementVisible, setIsElementVisible] = useState(false);
  const [sponsorsvisible, setsponsorsvisible] = useState(false);
  const [servicevisible, setservicevisible] = useState(false);
  const [explore, setexplore] = useState(false);
  const [travpointvisible, settravpointvisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsElementVisible(true);
          console.log('vis')
        } else {
          setIsElementVisible(false);
        }
      });
    });

    const targetElement = document.getElementById('ob1');
    observer.observe(targetElement);

    // Clean up the observer when component unmounts
    return () => {
      observer.unobserve(targetElement);
    };

  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setsponsorsvisible(true);
          console.log('vis')
        } else {
          setsponsorsvisible(false);
        }
      });
    });

    const targetElement2 = document.getElementById('ob2');
    observer.observe(targetElement2);

    // Clean up the observer when component unmounts
    return () => {
      observer.unobserve(targetElement2);
    };

  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setexplore(true);
          console.log('explore')
        } else {
          setexplore(false);
        }
      });
    });

    const targetElement3 = document.getElementById('ccc');
    observer.observe(targetElement3);

    // Clean up the observer when component unmounts
    return () => {
      observer.unobserve(targetElement3);
    };

  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setservicevisible(true);
          console.log('vis')
        } else {
          setservicevisible(false);
        }
      });
    });

    const targetElement4 = document.getElementById('servis');
    observer.observe(targetElement4);

    // Clean up the observer when component unmounts
    return () => {
      observer.unobserve(targetElement4);
    };

  }, []);

  var serviceListings = [
    {id: 'absjkd', name: 'Best Tour Guide', details: 'What looked like a small patch of purple grass, above five feet'},
    {id: 'slkdlkd', name: 'Easy Booking', details: 'Square, was moving across the sand in their direction.'},
    {id: 'sfdd', name: 'Weather', details: 'What looked like a small patch of purple grass, above five feet'},
  ]

  var Destinations = [
    {id: 'n1', num: 0, name: 'Paradise Beach, Bantayan Island', location: 'Rome, Italy', price: '550.60', ratings: '0.0'},
    {id: 'n2', num: 1, name: 'Ocean with full of Colors', location: 'Maldives', price: '20.99', ratings: '0.0'},
    {id: 'n3', num: 2, name: 'Mountain View, Above the cloud', location: 'United Arab Emeries ', price: '150.00', ratings: '0.0'},
    // {id: 'n4', name: 'Paradise Beach, Bantayan Island', location: 'Rome, Italy', price: '$0', ratings: '0.0'},
    // {id: 'n5', name: 'Paradise Beach, Bantayan Island', location: 'Rome, Italy', price: '$0', ratings: '0.0'},

  ]

  // useEffect(()=>{
    function scrollto(position) {
      if(position === 'home'){
      const pos = document.getElementById('hm');
      if (pos) {
        pos.scrollIntoView({ behavior: 'smooth' });
        console.log('moved to', position);
      }
    }
    if(position === 'discover'){
      const pos = document.getElementById('abt');
      pos.scrollIntoView({behavior: 'smooth'})
      console.log('moved to ', position)
    }

    if(position === 'special'){
      const pos = document.getElementById('crs');
      pos.scrollIntoView({behavior: 'smooth'})
      console.log('moved to ', position)
    }
    
    if(position === 'contact'){
      const pos = document.getElementById('ctc');
      pos.scrollIntoView({behavior: 'smooth'})
      console.log('moved to ', position)
    }
  }
// })



  return (
    <>

<NextSeo
      openGraph={{
        images: [
          {
            url: './linkprev.png',
          },
        ],
      }}
    />
    <header id='hnm'>
      <div className="logo"></div>
      <div className="nav">
        <a style={{color: 'black'}} onClick={()=> scrollto('home')}>Home</a>
        <a onClick={()=> scrollto('discover')}>Discover</a>
        <a onClick={()=> scrollto('special')}>Special Deals</a>
        <a onClick={()=> scrollto('contact')}>Contact</a>
      </div>

      <div className="accounts">
        <button id="l">Login</button>
        <button style={{backgroundColor: '#5d50c6', color: 'white'}}>Signup</button>
      </div>
    </header>

    <div className="hero">
      <div className="hero_name">
        <button style={{width: 150, color: '#f85e9f'}}>Explore the world <FontAwesomeIcon icon={faBriefcase} color='#f85e9f' style={{color: '#f85e9f', marginLeft: 5, width: 15, height: 15 }} /></button>
        <br />
        <br />
        <br />
        <strong style={{fontSize: 55, width: '90%'}}>
          Travel <span style={{fontSize: 55, color: '#f85e9f', wordWrap: 'break-word'}}>top destination</span> of the world
        </strong>
        <br />
        <br />
        <label style={{color: 'gray'}}>we always make our customers happy by providing as many choices as possible.</label>
        <br />
        <br />
        <label style={{fontSize: 10}}>By Timothy Adebogun.</label>
        <br />
        <br />
        <div style={{width: '50%', display: 'flex', justifyContent: 'flex-start', gap: 20}}>
          <button style={{ background: '#5d50c6', color: 'white'}}>Get Started</button>
          <button id='bordered'><FontAwesomeIcon icon={faPlayCircle} style={{color: '#5d50c6', marginLeft: 5, width: 15, height: 15 }} /> Watch Demo</button>
        </div>
      </div>
      <div className="hero_image"></div>
    </div>

    <div className="sponsors" id='ob2' style={sponsorsvisible ? {animationName: 'smoothin', animationDuration: '5s'} : null}>
      <div className="img" id='img1'></div>
      <div className="img" id='img2'></div>
      <div className="img" id='img3'></div>
      <div className="img" id='img4' ></div>
      <div className="img" id='img5'></div>
    </div>

    <section className="services" >
      <div className="info" id='servis' style={servicevisible ? {animationName: 'smoothin'} : null}>
        <b style={{fontSize: 17, color: '#f85e9f'}}>SERVICES <FontAwesomeIcon icon={faArrowRight} bounce style={{color: '#f85e9f', marginLeft: 5, width: 15, height: 15 }} /></b>
        <br />
        <strong style={{fontSize: 30}} >Our top value categories for you</strong>
        <br />
        <label htmlFor="" id='abt'>swipe to left</label>
      </div>
      <div className="HorizontalListView">
{

  serviceListings.map((service)=>{
    return (
      <div className="srView" key={service.id} style={servicevisible ? {animationName: 'collapseall', animationDuration: '2s'} : null}>
        {/* boxShadow: '0px 0px 50px 10px rgba(210, 209, 209, 0.335)' */}
          <div className="icon" id={service.id}></div>
          <strong>{service.name}</strong>
          <label style={{color: 'gray', width: '85%', fontSize: 12}}>{service.details}</label>
        </div>
      )
        })
}
      </div>

    </section>

    <section className="explore" id='crs' >
      <div className="info">
        <b style={{fontSize: 17, color: '#f85e9f'}}>TOP DESTINATION <FontAwesomeIcon icon={faArrowRight}  style={{color: '#f85e9f', marginLeft: 5, width: 15, height: 15 }} /></b>
        <strong style={{fontSize: 30}}>Explore top destination</strong>
      </div>
      <br />
      <br />
      <div className="view" id='ccc'>
        {
          Destinations.map((place, index)=>{
            return(
              <div className="place" key={place.id} style={explore ? {animationName: 'smoothin', animationDuration: `${place.num + 1}s` } : null}>
        <div className="thumbnail"></div>
        <div className="details">
        <strong style={{marginLeft: 15, marginTop: 20, fontSize: 15, width: '55%', height: 15, display: 'flex', justifyContent: 'flex-start'}}>{place.name}</strong>
        <br />
        <br />
        <label style={{marginLeft: 15, fontSize: 12}}>{place.location}</label>
        <br />
        <div className="ratings" style={{marginLeft: 15, marginTop: 5, fontSize: 20, fontWeight: 'bold', color: 'orangered'}}>4.8 <FontAwesomeIcon icon={faStar} style={{color: 'orangered', marginLeft: 2.5, width: 20, height: 20 }} /></div>
        <div style={{position: 'absolute', right: 10, top: 20, fontWeight: 'bold', fontSize: 15, color: '#f85e9f'}}>${place.price}</div>
        </div>
        </div>
              )
          })
        }
      </div>
    </section>
<br />
<br />
    <section className="travelPoint" id='ob1'>
      <div className="imgsec"></div>
      <div className="details">
        <label style={{fontSize: 20, color: '#f85e9f'}}>TRAVEL POINT <FontAwesomeIcon icon={faArrowRight} style={{color: '#f85e9f', marginLeft: 5, width: 15, height: 15 }} /></label>
        <br />
        <strong style={{fontSize: 30, width: '80%'}}>We helping you find your dream location</strong>
        <br />
        <label htmlFor="">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. </label>
       <br />
        <div className="special_dets">
          
          <div className="box">
            <strong style={{fontSize: 20, color: '#ff5722'}}>500+</strong>
            <br />
            <label style={{fontSize: 12}} htmlFor="">Holiday Package</label>
          </div>
          
          <div className="box">
            <span id='fc'><FontAwesomeIcon icon={faStar} beat style={{color: 'white', marginLeft: 5, width: 25, height: 25 }} /></span>
            <strong style={{fontSize: 20, color: '#ff5722'}}>100</strong>
            <br />
            <label style={{fontSize: 12}} htmlFor="">Luxury Hotel</label>
          </div>
          
          <div className="box">
            <strong style={{fontSize: 20, color: '#ff5722'}}>7</strong>
            <br />
            <label style={{fontSize: 12}} htmlFor="">Premium Airlines</label>
          </div>
          
          <div className="box">
            <strong style={{fontSize: 20, color: '#ff5722'}}>2k+</strong>
            <br />
            <label style={{fontSize: 12}} htmlFor="">Happy Customer</label>
          </div>

        </div>
      </div>
    </section>
<br />
<br />
    <section className="features">
      <div className="details">
        <b style={{fontSize: 20, color: '#f85e9f', width: '100%'}}>KEY FEATURES <FontAwesomeIcon icon={faArrowRight} style={{color: '#f85e9f', marginLeft: 5, width: 15, height: 15 }} /></b>
        <br />
        <strong style={{fontSize: 40}}>We offer best services</strong>
        <br />
        <label style={{fontSize: 15, color: 'gray'}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</label>
        <br />
        <br />
        <br />
        <div className="recycler">
          <div className="icon" style={{background: '#ff5722'}}><FontAwesomeIcon icon={faMapMarkerAlt} bounce style={{color: 'white', marginLeft: 5, width: 35, height: 35 }} /></div>
          <div className="rc_dets">
            <strong style={{fontSize: 20}}>We offer best services</strong>
            <br />
            <label htmlFor="" style={{color: 'gray'}}>Lorem Ipsum is not simply random text</label>
          </div>
        </div>
        <br />
        <div className="recycler" style={{border: '1px solid gainsboro'}}>
          <div className="icon" style={{background: '#facd49'}}><FontAwesomeIcon icon={faCalendarAlt}  style={{color: 'white', marginLeft: 5, width: 35, height: 35 }} /></div>
          <div className="rc_dets">
            <strong style={{fontSize: 20}}>Schedule your trip</strong>
            <br />
            <label htmlFor="" style={{color: 'gray'}}>It has roots in a piece of classical</label>
          </div>
        </div>
        <br />
        <div className="recycler">
          <div className="icon" style={{background: '#f85e9f'}}><FontAwesomeIcon icon={faTicketAlt}  style={{color: 'white', marginLeft: 5, width: 35, height: 35 }} /></div>
          <div className="rc_dets">
            <strong style={{fontSize: 20}}>Get discounted coupons</strong>
            <br />
            <label htmlFor="" style={{color: 'gray'}}>Lorem Ipsum is not simply random text</label>
          </div>
        </div>
      </div>
      <div className="fimg"></div>
    </section>

    <section className="Testimonials" id='ob3'>
      <br />
      <br />
      <br />
      <label style={{color: '#f85e9f', fontSize: 30, fontWeight: '500', width: '100%', textAlign: 'center'}}>Testimonials</label>
      <strong style={{fontSize: 40,width: '100%', textAlign: 'center'}}>Trust our clients</strong>
      <br />
        <div className="profile"></div>
      <div className="tsView">
        <strong style={{fontSize: 20, width: '100%', textAlign: 'center'}}><span style={{color: '#ff5722', fontSize: 20}}>Mark Smith</span> / Travel Enthusiast</strong>
        <br />
        <strong><FontAwesomeIcon icon={faStar} style={{width: 20, height: 20, color: 'gold', marginLeft: 10, marginRight: 10}}/><FontAwesomeIcon icon={faStar} style={{width: 20, height: 20, color: 'gold', marginLeft: 10, marginRight: 10}}/><FontAwesomeIcon icon={faStar} style={{width: 20, height: 20, color: 'gold', marginLeft: 10, marginRight: 10}}/><FontAwesomeIcon icon={faStar} style={{width: 20, height: 20, color: 'gold', marginLeft: 10, marginRight: 10}}/><FontAwesomeIcon icon={faStar} style={{width: 20, height: 20, color: 'gold', marginLeft: 10, marginRight: 10}}/></strong>
        <br />
        <label style={{width: '90%', maxWidth: 400, color: 'gray', textAlign: 'center', fontSize: 17}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</label>
      </div>
<br />
      <div className="prevIndexes">
        <div className="index" style={{background: '#f65d9e'}}></div>
        <div className="index"></div>
        <div className="index"></div>
      </div>

      <div className="switch_btn" style={{left: 30, background: 'white'}}><FontAwesomeIcon icon={faArrowLeft} style={{color: '#52515b', marginLeft: 5, width: 30, height: 30 }} /></div>
      <div className="switch_btn" style={{right: 30}}><FontAwesomeIcon icon={faArrowRight} style={{color: 'white', marginLeft: 5, width: 30, height: 30 }} /></div>
    </section>

    <section className="contact" id='ctc'>
      <form action="">
        <b style={{textTransform: 'uppercase', width: '100%', textAlign: 'center', fontSize: 25, color: '#f65d9e'}}>subscribe to our news letter</b>
        <br />
        <br />
        <strong style={{fontSize: 45, width: '90%', maxWidth: 700, textAlign: 'center', color: '#191825'}}>Prepare yourself & lets explore the beauty of the world</strong>
<br />
        <div className="input_container">
          <div className="input_area">
            <FontAwesomeIcon icon={faEnvelope} style={{width: 35, height: 35, color: '#52515b', marginLeft: 10, marginRight: 10}}/>
            <input type="text"  placeholder='Your Email'/>
          </div>

          <button>Subscribe</button>
        </div>

      </form>
    </section>
{/* <hr style={{color: 'gainsboro'}} /> */}
<br />
<br />
    <footer>
      <div className="det">
        <div className="logo"></div>
        <label htmlFor="" style={{fontSize: 17, letterSpacing: 2, lineHeightStep: 2, color: 'gray',}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</label>
      </div>

      <div className="lnx">
        <strong style={{fontSize: 20}}>Company</strong>
       <a href="">About</a>
       <a href="">Career</a>
       <a href="">Mobile</a>
      
      </div>
      
      <div className="lnx">
        <strong style={{fontSize: 20}}>Contact</strong>
       <a href="">Why Travlog?</a>
       <a href="">Partner with us</a>
       <a href="">FAQ’s</a>
       <a href="">Blog</a>
      </div>

      <div className="lnx">
        <strong style={{fontSize: 20}}>Meet Us</strong>
       <a href="">+00 92 1234 56789</a>
       <a href="mailto:timcodes117@gmail.com">Mail Us</a>
       <a href="">205. R Street, New York BD23200</a>
      </div>

    </footer>
    </>
  )
}

export default Page



