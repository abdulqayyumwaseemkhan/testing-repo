import React from 'react'

export default function Card() {

  const dataCard = [
    {
      id: 1,
      title: "BMW",
      date: "2025 Sep, 10",
      detail: "The BMW M5 is a high-performance sports sedan known for its powerful engine, sharp handling, and luxurious interior. The latest generation (G90) features a twin-turbocharged V8 engine combined with an electric motor, delivering a system power of 727 hp. It boasts impressive acceleration, reaching 60 mph in around 3.0 seconds and a top speed of up to 190 mph with the M Driver's package. ",
      pic: "./images/bmw-m5.png"
    },
    {
      id: 2,
      title: "BMW",
      date: "2025 Sep, 10",
      detail: "The BMW M5 is a high-performance sports sedan known for its powerful engine, sharp handling, and luxurious interior. The latest generation (G90) features a twin-turbocharged V8 engine combined with an electric motor, delivering a system power of 727 hp. It boasts impressive acceleration, reaching 60 mph in around 3.0 seconds and a top speed of up to 190 mph with the M Driver's package. ",
      pic: "./images/bmw-m5.png"
    },
  ]


  return (
    <div className="ui card">
      {
        dataCard.map((card)=>{
          return(
            <>
            <div key={card.id} className="image">
    <img src={card.pic} />
  </div>
  <div className="content">
    <a className="header">
      {card.title}
    </a>
    <div className="meta">
      <span className="date">{card.date}</span>
    </div>
    <div className="description">
      {card.detail}
    </div>
  </div>
  <div className="extra content">
    <a>
      <i className="user icon"></i>
      22 Friends
    </a>
  </div>
            </>
          )
        })
      }
</div>
  )
}
