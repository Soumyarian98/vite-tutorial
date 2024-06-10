const modules = import.meta.glob("./src/*.js");

console.log(modules);

document.addEventListener("click", () => {
  Object.values(modules).forEach(module => {
    module().then(data => {
      // "data" will be a object with the exported values from the module
      console.log(data);
    });
  });
});
