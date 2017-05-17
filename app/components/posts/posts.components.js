angular.module("reddit")
.component('posts',{
  controller: controller,
  template:
  `
    <div class="well" ng-repeat="item in $ctrl.items">
      <img class="img-fluid" src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_284x96dp.png" alt="Image">
      <h1> {{item.title}}<h1>
      <h1> {{item.author}}<h1>
      <h1> {{item.description}}<h1>
      <h1> {{item.url}}<h1>
      <h1>{{item.votes}}<h1>
    </div>
    <div id="newPostModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">EDIT LINK</h4>
          </div>
          <div class="modal-body">
            <form novalidate ng-submit="$ctrl.addPost()" class="modal-form">
              <label for="title">Title</label>
              <input ng-model="$ctrl.item.title" type="text" name="title" value=""><br><br>
              <label for="url">Link URL</label>
              <input ng-model="$ctrl.item.url" type="text" name="url" value=""><br><br>
              <label for="description">Description</label>
              <input ng-model="$ctrl.item.description" type="text" name="description" value=""><br><br>
              <label for="author">Author</label>
              <input ng-model="$ctrl.item.author" type="text" name="author" value=""><br><br>
              <button class"btn-success" id="submitPost"  type="submit" >Submit</button>
            </form>
          </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>


        </div>
      </div>
    </div>
  `



})

function controller (){
  const vm = this

  vm.$onInit = function () {
    vm.items = [
      {description:"Google", author: "Justin", description: "Super cool stuff for super cool folks", url: "https://www.google.com", votes: 1},

      {title:"Google", author: "Justin", description: "Super cool stuff for super cool folks", url: "https://www.google.com", votes: 1},

      {title:"Google", author: "Justin", description: "Super cool stuff for super cool folks", url: "https://www.google.com", votes: 1},

      {title:"Google", author: "Justin", description: "Super cool stuff for super cool folks", url:"https://www.google.com", votes: 1}
    ]
  }
  vm.addPost = function (){
    vm.items.push(vm.item)
    delete vm.item

  }
}
