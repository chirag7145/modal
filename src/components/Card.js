import React from 'react';

const Card = () => {
  return (
    <div className='col-md-6 m-auto'>
      <div className='card card-body'>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          dolor cupiditate sed hic officiis alias, officia possimus, tempora id
          laudantium assumenda illum blanditiis labore doloribus delectus
          recusandae provident eos maxime? Perferendis veritatis nostrum sed
          deleniti omnis repudiandae sapiente doloribus beatae magni dolore
          autem architecto veniam, neque fugiat ab voluptatum doloremque modi in
          eveniet odit! Illum dolores consequatur maxime tempora nobis eaque
          molestias ipsa, rerum possimus voluptas, voluptate eius nisi ab quasi
          aperiam quas nesciunt earum cupiditate praesentium non assumenda unde.
          Quasi, officiis maiores dolor pariatur magnam enim perspiciatis,
          dolorem, necessitatibus veniam reprehenderit a totam vitae. Tempora
          corrupti harum odit eos?
        </p>
        <div>
          <span className='d-flex justify-content-around text-white'>
            <button
              type='button'
              class='btn btn-primary'
              data-toggle='modal'
              data-target='#login'
            >
              Login
            </button>
            <button
              type='button'
              class='btn btn-primary'
              data-toggle='modal'
              data-target='#register'
            >
              Register
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
