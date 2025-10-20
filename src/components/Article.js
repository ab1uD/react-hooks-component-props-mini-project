import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  
  let emojis = "";
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    
  } else {
    const bentos = Math.ceil(minutes / 10);
    
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} •  {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
