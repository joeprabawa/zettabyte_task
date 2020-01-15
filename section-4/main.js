const selector = document.querySelector(".deals");
const data = [
  {
    name: "Blog Title",
    img: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg",
    text:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas iuredebitis aperiam adipisci magnam consequatur quo veritatis! Nobis laborum,enim voluptas consequatur facere neque, sed culpa minus soluta iste recusandae!"
  },
  {
    name: "Blog Title",
    img: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg",
    text:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas iuredebitis aperiam adipisci magnam consequatur quo veritatis! Nobis laborum,enim voluptas consequatur facere neque, sed culpa minus soluta iste recusandae!"
  },
  {
    name: "Blog Title",
    img: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg",
    text:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas iuredebitis aperiam adipisci magnam consequatur quo veritatis! Nobis laborum,enim voluptas consequatur facere neque, sed culpa minus soluta iste recusandae!"
  },
  {
    name: "Blog Title",
    img: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg",
    text:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas iuredebitis aperiam adipisci magnam consequatur quo veritatis! Nobis laborum,enim voluptas consequatur facere neque, sed culpa minus soluta iste recusandae!"
  },
  {
    name: "Blog Title",
    img: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg",
    text:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas iuredebitis aperiam adipisci magnam consequatur quo veritatis! Nobis laborum,enim voluptas consequatur facere neque, sed culpa minus soluta iste recusandae!"
  },
  {
    name: "Blog Title",
    img: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg",
    text:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas iuredebitis aperiam adipisci magnam consequatur quo veritatis! Nobis laborum,enim voluptas consequatur facere neque, sed culpa minus soluta iste recusandae!"
  }
];

selector.innerHTML = data.reduce((acc, val, idx) => {
  acc += `<article class="sale-item">
  <div>
  <img src="https://image.flaticon.com/icons/svg/747/747376.svg" alt="You get: a white computer with matching peripherals">
  <p class="vertical_mode">2minread</p>
  <img src="https://image.flaticon.com/icons/svg/1029/1029183.svg" >
  </div>
    
    <div>
    <h1>${val.name} ${idx + 1}</h1>
        <p>
          ${val.text}.
        </p>
    </div>
     </article>`;
  return acc;
}, "");
