.component('posts',{
  controller: controller,
  template:
  `
    <div ng-repeat="post in $ctrl.posts">
      <img src="randomUrl.com" alt="Image">
      <h1> {{post.title}}<h1>
      <h1> {{post.author}}<h1>
      <h1> {{post.description}}<h1>
      <h1> {{post.url}}<h1>
      <h1>{{post.votes}}<h1>
    </div>
  `



})

function controller (){
  const vm = this

  vm.$onInit = function () {
    vm.posts = [
      {title:"Google", author: "Justin", description: "Super cool stuff for super cool folks", url="http://www.gooog.com", votes: 1},
      {title:"Google", author: "Justin", description: "Super cool stuff for super cool folks", url="http://www.gooog.com", votes: 1},
      {title:"Google", author: "Justin", description: "Super cool stuff for super cool folks", url="http://www.gooog.com", votes: 1},
      {title:"Google", author: "Justin", description: "Super cool stuff for super cool folks", url="http://www.gooog.com", votes: 1},
    ]
  }

}
