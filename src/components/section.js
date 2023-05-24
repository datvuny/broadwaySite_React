import React from 'react';

function Section({ title, imageUrl, location, website, code }) {
    return (
      <section>
        <div className="v2_2">
          <div className="v1_3"></div>
          <div className="v4_3"></div>
          <span className="v1_9">{title}</span>
          <div className="photo">
            <img src={imageUrl} alt={title} />
          </div>
          <span className="v1_39">
            {location}
          </span>
          <a href={website} className="v1_41">
            Website
          </a>
          <span className="v1_42">
            <button id="like-btn">
              <i
                className="fa-solid fa-heart"
                style={{ color: '#fa0000' }}
              ></i>
            </button>
          </span>
          <span className="v1_43">code: {code}</span>
        </div>
        <p></p>
      </section>
    );
  }

  export default Section;