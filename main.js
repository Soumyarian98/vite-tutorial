// const modules = import.meta.glob("./src/*.js", { as: "raw", eager: true });
const modules = import.meta.glob("./src/*.js", { as: "url", eager: true });

console.log(modules);
