import axios from "axios";

const fakeServer = "https://jsonplaceholder.typicode.com";
// URI : /users

fetch(`${fakeServer}/users`)
  .then((res) => res.json()) // content-type에 따라 parser 결정
  .then((result) => {
    console.log("fetch", result);
  })
  .catch((err) => console.log(err));

axios(`${fakeServer}/users`)
  .then((result) => {
    console.log("axios", result.data);
  })
  .catch((err) => console.log(err));

fetch(`${fakeServer}/users`, {
  method: "post",
  hearders: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    name: "hong",
    email: "hong@google.com",
    phone: "010-2222-2222",
  }),
})
  .then((res) => res.json())
  .then((result) => {
    console.log("fetch", result);
  })
  .catch((err) => console.log(err));

axios(`${fakeServer}/users`, {
  method: "post",
  data: {
    name: "hong",
    email: "hong@google.com",
    phone: "010-2222-2222",
  },
});
