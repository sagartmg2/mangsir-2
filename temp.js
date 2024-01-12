let todosApiData = {
  data: {
    todo: [
      { title: "html", status: "completed " },
      { title: "css", status: "completed " },
      { title: "js", status: "completed " },
      { title: "react", status: "pending " },
      { title: "node.js", status: "pending " },
    ],
  },
};
function info(course, status) {
  console.log(`${course} is ${status}`);
}

function data(index) {
  info(todosApiData.data.todo[index].title, todosApiData.data.todo[index].status);
}

data(0);
data(1);
data(2);
// data([1], [1]);
// data([2],[2])
// data([3],[3])
// data([4],[4])
