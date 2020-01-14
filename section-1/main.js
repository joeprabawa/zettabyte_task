// Create mock data
const list = ["Apple", "Banana", "Mango", "Kiwi"];
const tableData = [
  {
    id: "01",
    name: "John",
    age: 22
  },
  {
    id: "02",
    name: "Bush",
    age: 33
  },
  {
    id: "03",
    name: "Mike",
    age: 29
  },
  {
    id: "04",
    name: "Tony",
    age: 25
  },
  {
    id: "05",
    name: "Lupthfi",
    age: 19
  }
];

// Get DOM Selector
const ul = { selector: document.querySelector(".list"), name: "ul" };
const tbody = { selector: document.querySelector(".tbody"), name: "table" };

// Invoke
reducer(list, ul);
reducer(tableData, tbody);

// Reduce data to single string
function reducer(arr, selector) {
  const reduce = arr.reduce((acc, val, idx) => {
    selector.name == "ul"
      ? (acc += `<li>${val}</li>`)
      : (acc += `<tr>	
              <td>${idx + 1}</td>	
              <td>${val.name}</td>	
              <td>${val.age}</td>	
            </tr>`);

    return acc;
  }, "");
  return (selector.selector.innerHTML = reduce);
}
