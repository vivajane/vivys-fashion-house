import "./Review.css";
import React from "react";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Ilo Onyinyechukwu Veronica",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus omnis dignissimos, autem vero repellendus voluptatum, nam nostrum pariatur ad consectetur similique et, magni possimus repellat fugiat. Voluptas, cumque qui!",
  },
  {
    id: 2,
    name: "Obuekwe Chidimma Confidence",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus omnis dignissimos, autem vero repellendus voluptatum, nam nostrum pariatur ad consectetur similique et, magni possimus repellat fugiat. Voluptas, cumque qui!",
  },
  {
    id: 3,
    name: "Ifezuoke Mmesoma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus omnis dignissimos, autem vero repellendus voluptatum, nam nostrum pariatur ad consectetur similique et, magni possimus repellat fugiat. Voluptas, cumque qui!",
  },
  // {
  //   id: 4,
  //   name: "Obuekwe Chinecherem",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus omnis dignissimos, autem vero repellendus voluptatum, nam nostrum pariatur ad consectetur similique et, magni possimus repellat fugiat. Voluptas, cumque qui!",
  // },
  // {
  //   id: 5,
  //   name: "Ojiteli Virginia",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus omnis dignissimos, autem vero repellendus voluptatum, nam nostrum pariatur ad consectetur similique et, magni possimus repellat fugiat. Voluptas, cumque qui!",
  // },
  // {
  //   id: 6,
  //   name: "Ogbonna Favour",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus omnis dignissimos, autem vero repellendus voluptatum, nam nostrum pariatur ad consectetur similique et, magni possimus repellat fugiat. Voluptas, cumque qui!",
  // },
];

const Reviews = () => {
  const [addNewReview, setAddNewReview] = useState(reviews);
  const [showForm, setShowForm] = useState(false)

  const show = () => {
    setShowForm(true)
  }

  return (
    <div className="testimonials">
      <div className="sub">
        <h3>Reviews</h3>
        <p>What Our Customers are Saying</p>
        <button className="review-btn" onClick={show}>Drop a review</button>
      </div>

      <div>
        {showForm ? <Form setAddNewReview={setAddNewReview} addNewReview={addNewReview} setShowForm={setShowForm}/> : null}
      </div>
      <div className="hero-container">
        <div className="reviews">
          {addNewReview.map((review) => (
            <div className="review-div" key={review.id}>
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

const Form = ({setAddNewReview, addNewReview, setShowForm}) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const num = text.length;
  // const onChangeHandler = (e) => {
  //   setName()e.target.value();
  // };
  // const onChangeHandlertwo = (e) => {
  //   e.target.value();
  // };
  const onSubmitHandler = (e) => {
    e.preventDefault();
  if(name && text && num <= 20){
  const newReview = {
    id: Math.round(Math.random()*1000000),
    name,
    text,
  }
  console.log(newReview)
  window.alert("Review has been added!")

  setAddNewReview((addNewReview) => [newReview, ...addNewReview])
  setShowForm(false)

  console.log(addNewReview, "new")


  setText("");
  setName("")
  
  };
}
  return (
    <form className="review-form" onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="name">
          <input
            type="text"
            name=""
            id=""
            placeholder="Fullname is required"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
      </div>
      <div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Please add a review, not more than 100 words. Required!"
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>
      </div>

      <div>
        <button type="submit" className="review-btn" onSubmit={onSubmitHandler} >
          SUBMIT
        </button>
      </div>
    </form>
  );
};
