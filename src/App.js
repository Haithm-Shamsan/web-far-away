import { useState } from "react";
import "./index.css";

import Stats from "./Stats.js";
import { PackagingList } from "./PackagingList.js";
import { Form } from "./Form.js";
import { Logo } from "./Logo.js";

function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    if (item.description === "" || item.description === null) {
      return;
    }
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function Reset() {
    return window.confirm("are u sure do you want to delete the list ?") ===
      true
      ? setItems([])
      : "";
  }
  return (
    <div>
      <Logo />
      <Form onItemSubmit={handleItems} />
      <PackagingList
        items={items}
        onItemDeleted={handleDeleteItem}
        onItemChecked={handleCheckedItems}
        Reset={Reset}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

// /////////////////////////////////////////////////////////
// import "./styles.css";
// import { useState } from "react";
// const faqs = [
//   {
//     title: "Where are these chairs assembled?",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
//   },
//   {
//     title: "How long do I have to return my chair?",
//     text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
//   },
//   {
//     title: "Do you ship to countries outside the EU?",
//     text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
//   },
// ];

// export default function App() {
//   return (
//     <div>
//       <Accordion data={faqs} />
//     </div>
//   );
// }

// function Accordion({ data }) {
//   const [CurrOpen, setCurrOpen] = useState(null);

//   return (
//     <div className="accordion">
//       {data.map((ele, i) => (
//         <AccordionItems
//           id={i}
//           title={ele.title}
//           number={i + 1}
//           CurrentOpen={CurrOpen}
//           setCurrOpen={setCurrOpen}
//         >
//           {ele.text}
//         </AccordionItems>
//       ))}
//     </div>
//   );
// }
// function AccordionItems({ title, number, CurrentOpen, setCurrOpen, children }) {
//   const IsOpen = number === CurrentOpen;
//   function handleShowHideText() {
//     setCurrOpen(IsOpen ? null : number);
//   }

//   return (
//     <div id={number} className={` item ${IsOpen ? "open" : ""}`}>
//       <h2 className="number">{number > 9 ? number : `0${number}`}</h2>
//       <h2 className="title" onClick={() => handleShowHideText()}>
//         {title}
//       </h2>
//       <p className="icon">{IsOpen ? "-" : "+"}</p>
//       {IsOpen && <p className="content-box">{children}</p>}
//     </div>
//   );
// }
