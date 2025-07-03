// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

(async () => {
  try {
    const response = await fetch("http://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.error("Fetch error:", err);
  }
})();
