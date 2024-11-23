import FreeCodeCamp from '../logos/FreeCodeCamp_logo.png'
import Khan_academy from '../logos/Khan-academy-logo.png'
import mit from '../logos/MIT-Logo.png'
import simplilearn from '../logos/simplilearn-logo.png'
import ztm from '../logos/ZTM-logo.png'
import udemy from '../logos/Udemy-Logo.png'
import harvard from '../logos/HARVARD-logo.png'
import odin_project from '../logos/odin-project-logo.png'

import { useEffect, useState, useRef } from 'react'
function Testimonials(){
    const people = [
        {
            img: 'https://www.freecodecamp.org/static/Shawn-75f7dad2bfcbae1988440b303b5a465b.png',
            name: 'Shawn Wang',
            job: 'Software Engineer at Amazon',
            testi: "\"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.\""
        },
        {
            img: 'https://www.theodinproject.com/assets/success_stories/aron_fischer-a4073dd9.jpg',
            name: 'Aron Fischer',
            job: 'FrontEnd Developer',
            testi: "\"The reason why TOP was perfect for me was on the one hand because in its' well-structured paths I found answers to the most difficult of all questions: Where should I start? What should I learn first? How well do I have to know certain technologies? Besides providing answers to those questions, having a great and supportive community, another point to stress is the flexibility of the curriculum. I was able to use my creativity to design and code the projects, and often further ideas were provided to help you figure out which feature to add next. Now, I reached what I wouldn't have thought possible when I started. I landed a job :D.\""
        },
        {
            img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/66DwUMt1tQTmR4q1JaHPdV/71cbdd4415999eecfcd899283086260c/Circle_Ryan.png?auto=format%2Ccompress&dpr=2&w=202&h=202&q=40',
            name: 'Ryan Peterson',
            job: 'Full Stack Developer at Google',
            testi: "\"Coursera helped me go from knowing nothing about programming to landing a job at one of the top tech companies in the world. The flexibility and depth of the programming courses allowed me to learn at my own pace while working full-time. I owe my success to Coursera’s amazing platform.\""
        },
        {
            img: 'https://www.freecodecamp.org/static/Sarah-04dee53ff6709a3b1c0bbe0023554a46.png', 
            name: 'Sarah Chima',
            job: 'Software Engineer at ChatDesk',
            testi: "\"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.\""
        },
        {
            img: 'https://www.freecodecamp.org/static/Emma-1384890b0c332b769f67e8c14b628e13.png', 
            name: 'Emma Bostian',
            job: 'Software Engineer at Spotify',
            testi: "\"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.\""
        },
        {
            img: 'https://wallpapers.com/images/hd/blank-default-pfp-wue0zko1dfxs9z2c.jpg', 
            name: 'Jake Harris',
            job: 'Junior Developer at Shopify',
            testi: "\"I started with no coding experience, and Zero to Hero’s course laid everything out in a simple, step-by-step process. I followed the curriculum, built real-world projects, and now I’m working at Shopify! I wouldn’t have made it this far without the clear structure and practical experience the course provided.\""
        }
    ];
    // Animation section
    const [testiTitleText, setTestiTitleText] = useState('');
    const [testiContainer, setTestiContainer] = useState(false);

    const ref = useRef(null);
    const testiContainerRef = useRef(null);

    useEffect(() => {
      const observerTitle = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !testiTitleText) {
          textTypingEffect('What are you waiting for?');
          observerTitle.unobserve(ref.current);
        }
      }, {
        threshold: 0.2
      });
  
      if (ref.current) {
        observerTitle.observe(ref.current);
      }
  
      const observerTestiContainer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !testiContainer) {
          setTestiContainer(true); // set to true when testimonials-container is visible
          observerTestiContainer.unobserve(testiContainerRef.current);
        }
      }, {
        threshold: 0.2
      });
  
      if (testiContainerRef.current) {
        observerTestiContainer.observe(testiContainerRef.current);
      }
  
      return () => {
        if (ref.current) {
          observerTitle.unobserve(ref.current);
        }
        if (testiContainerRef.current) {
          observerTestiContainer.unobserve(testiContainerRef.current);
        }
      };
  
      // TYPING ANIMATION
      function textTypingEffect(text, i = 0) {
        if (i === 0) {
          setTestiTitleText('');
        }
        setTestiTitleText(text.substring(0, i + 1));
        if (i === text.length - 1) {
          return;
        }
        setTimeout(() => textTypingEffect(text, i + 1), 80);
      }
    }, [testiTitleText, testiContainer]);
    return(
        <div>
        <div className="testi-title-container">
            <div className="short-horizontal-line short-hori-line2"></div>
            <div className="line line2"></div>
            <h1 className="testi-title" ref={ref}>{testiTitleText}</h1>

            <div className='testimonials-container' ref={testiContainerRef}>
            <div className={`testimonial-container ${testiContainer? 'testi-animate testi-animate1': ''}`}>
                <div className='profile-testi-container'>
                    <img className='profile-img' src={people[0].img}/>
                    <div className='inner-profile-testi-container'>
                        <h4 className='testi-name'>{people[0].name}</h4>
                        <p className='testi-job'>{people[0].job}</p>
                    </div>
                </div>
                <p className='testi-text'>
                    {people[0].testi}
                </p>
            </div>
            <div className={`testimonial-container ${testiContainer? 'testi-animate testi-animate2': ''}`}>
                <div className='profile-testi-container'>
                    <img className='profile-img' src={people[1].img}/>
                    <div className='inner-profile-testi-container'>
                        <h4 className='testi-name'>{people[1].name}</h4>
                        <p className='testi-job testi-color1'>{people[1].job}</p>
                    </div>
                </div>
                <p className='testi-text'>
                    {people[1].testi}
                </p>
            </div>
            <div className={`testimonial-container ${testiContainer? 'testi-animate testi-animate3': ''}`}>
                <div className='profile-testi-container'>
                    <img className='profile-img' src={people[2].img}/>
                    <div className='inner-profile-testi-container'>
                        <h4 className='testi-name'>{people[2].name}</h4>
                        <p className='testi-job testi-color2'>{people[2].job}</p>
                    </div>
                </div>
                <p className='testi-text'>
                    {people[2].testi}
                </p>
            </div>
            <div className={`testimonial-container ${testiContainer? 'testi-animate testi-animate4': ''}`}>
                <div className='profile-testi-container'>
                    <img className='profile-img' src={people[3].img}/>
                    <div className='inner-profile-testi-container'>
                        <h4 className='testi-name'>{people[3].name}</h4>
                        <p className='testi-job'>{people[3].job}</p>
                    </div>
                </div>
                <p className='testi-text'>
                    {people[3].testi}
                </p>
            </div>
            <div className={`testimonial-container ${testiContainer? 'testi-animate testi-animate5': ''}`}>
                <div className='profile-testi-container'>
                    <img className='profile-img' src={people[4].img}/>
                    <div className='inner-profile-testi-container'>
                        <h4 className='testi-name'>{people[4].name}</h4>
                        <p className='testi-job testi-color1'>{people[4].job}</p>
                    </div>
                </div>
                <p className='testi-text'>
                    {people[4].testi}
                </p>
            </div>
            <div className={`testimonial-container ${testiContainer? 'testi-animate testi-animate6': ''}`}>
                <div className='profile-testi-container'>
                    <img className='profile-img' src={people[5].img}/>
                    <div className='inner-profile-testi-container'>
                        <h4 className='testi-name'>{people[5].name}</h4>
                        <p className='testi-job testi-color2'>{people[5].job}</p>
                    </div>
                </div>
                <p className='testi-text'>
                    {people[5].testi}
                </p>
            </div>
          </div>
        </div>
        <div className='slider-container'>
              <ul className='slider'>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={FreeCodeCamp} alt="FreeCodeCamp" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coursera_logo_%282020%29.svg/1280px-Coursera_logo_%282020%29.svg.png' alt="Coursera" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={harvard} alt="Harvard" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={Khan_academy} alt="Khan Academy" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={mit} alt="MIT" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={simplilearn} alt="Simplilearn" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={udemy} alt="Udemy" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={ztm} alt="ZTM" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={odin_project} alt="Odin-project" />
                </li>
              </ul>

              <ul className='slider'>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={FreeCodeCamp} alt="FreeCodeCamp" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coursera_logo_%282020%29.svg/1280px-Coursera_logo_%282020%29.svg.png' alt="Coursera" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={harvard} alt="Harvard" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={Khan_academy} alt="Khan Academy" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={mit} alt="MIT" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={simplilearn} alt="Simplilearn" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={udemy} alt="Udemy" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={ztm} alt="ZTM" />
                </li>
                <li className='slider-logo-container'>
                  <img className='slider-logo' src={odin_project} alt="Odin-project" />
                </li>
              </ul>
        </div>
        </div>
    )
}
export default Testimonials;