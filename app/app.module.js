angular.module("reddit", [])
.component('posts',{
  controller: controller,
  template:
  `
    <div ng-repeat="item in $ctrl.items">
      <img src="randomUrl.com" alt="Image">
      <h1> {{item.title}}<h1>
      <h1> {{item.author}}<h1>
      <h1> {{item.description}}<h1>
      <h1> {{item.url}}<h1>
      <h1>{{item.votes}}<h1>
    </div>
  `



})

function controller (){
  const vm = this

  vm.$onInit = function () {
    vm.items = [
      {title:"Google", author: "Justin", description: "Super cool stuff for super cool folks", url: "https://www.google.com", votes: 1},

      {title:"Google", author: "Justin", description: "Super cool stuff for super cool folks", url: "https://www.google.com", votes: 1},

      {title:"Google", author: "Justin", description: "Super cool stuff for super cool folks", url: "https://www.google.com", votes: 1},

      {title:"Google", author: "Justin", description: "Super cool stuff for super cool folks", url:"https://www.google.com", votes: 1}
    ]
  }

}
