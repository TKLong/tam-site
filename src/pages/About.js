import React, { Component } from 'react';
import '../assets/styling/App.css';
import placeholder from '../assets/images/placeholder.jpeg';
import about from '../assets/images/about.jpg';

class About extends Component {
  render() {
    return (
      <div className="about-grid">
        <div className="personal-wrapper">
          <div className="self-description">
            <div className="description-content">
              <img src={about} />
              <div className="text">
                <h3 style={{textAlign: 'center'}}>Boston-based UX Designer</h3>
                <p>The principles of UX design have been a driving factor in my
                life for quite some time. I’ve always had a fascination with human
                interactions and relationships as well as a knack for visual design.
                Studying and writing poetry in college is where my love for iteration
                and revision began, and it’s where my interest in empathy blossomed.
                It was here I learned how to make my work simultaneously accessible--
                easy to understand and navigate--and compassionate. While working
                at a non-profit museum I saw and responded to the challenges website
                visitors faced that prevented them from a satisfying site experience--
                be it reading an article, making a donation, or purchasing an item
                from the e-commerce store. In this environment, I was able to help
                lead the redesign of the museums website in addition to creating
                targeted messaging for fundraising campaigns.</p>
                <p>While research, persona identification and creation, and visual
                design are some of my core strengths, I frequently find myself
                participating in variety of cross-disciplinary activities like user
                and stakeholder interviews, content strategy, digital marketing,
                and data analysis.</p>
                <p>My hope is to help drive innovation within a creative,
                communicative, and growth-driven team.</p>
                <p>When I am not working, you can find me:
                <br/>
                - Writing a mean limerick
                <br/>
                - Hunting to find the best chicken strips in Boston
                <br/>
                - Obsessing over my local library
                <br/>
                - Filling up pages of my beloved moleskine
                <br/>
                - Watching editing tutorials on youtube
                <br/>
                - Drinking too much tea
                </p>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="contact-content">
              <h3>Want to work together? Email me:</h3>
              <h1>email@gmail.com</h1>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default About;
