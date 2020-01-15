const data = [
  {
    name: "one",
    data: [
      {
        name: "Phone",
        price: 50,
        dueDate: "March 1st"
      },
      {
        name: "Car Insurance",
        price: 100,
        dueDate: "March 5th"
      },
      {
        name: "Internet",
        price: 70,
        dueDate: "March 10th"
      }
    ]
  },
  {
    name: "two",
    data: [
      {
        name: "Phone",
        price: 50,
        dueDate: "March 1st"
      },
      {
        name: "Car Insurance",
        price: 100,
        dueDate: "March 5th"
      },
      {
        name: "Internet",
        price: 70,
        dueDate: "March 10th"
      }
    ]
  }
];

// Select DOM
const row = document.querySelector(".row");

// Inject to DOM
reducer(data, row);

function reducer(arr, selector) {
  const reduce = arr.reduce((acc, val, idx) => {
    let string = "";
    val.data.forEach(el => {
      return (string += `
      <tr>
        <td>${el.name}</td>
        <td>${el.price}</td>
        <td>${el.dueDate}</td>
    </tr>`);
    });

    acc += `
     <div class="box">
     <span class="number_${idx == 0 ? "one" : "two"}">${idx + 1}</span>
          <h4 class="start">March Bills</h4>
          <table class="${val.name == "one" ? "" : "stripped"}">
            <thead>
              <tr>
                <th></th>
                <th>Price</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
             ${string}
           </tbody>
          </table>
        </div>
     `;

    return acc;
  }, "");
  return (selector.innerHTML = reduce);
}
