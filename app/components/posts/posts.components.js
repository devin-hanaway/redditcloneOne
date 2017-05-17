angular.module("reddit")
.component('posts',{
  controller: controller,
  template:
  `
    <div class="well row" ng-repeat="item in $ctrl.items">
      <section class="col-lg-2 col-md-2 col-sm-1 col-xs-2">
        <img class="img-fluid" src="{{item.imgUrl}}" alt="Image">
      </section>
      <section class="col-lg-8 col-md-6 col-sm-4 col-xs-2 ">
        <a href={{item.url}}>
          <span>{{item.title}}</span>
        </a>
        <a href="#" ng-click="$ctrl.upVote($event, item)">
          <img src="http://i.imgur.com/PdJs3Zv.png" alt="">
        </a>
        <span>{{item.votes}}</span>
        <a href="#" ng-click="$ctrl.downVote($event, item)">
          <img src="http://i.imgur.com/eqLD2.png" alt="">
        </a>
        <h1> {{item.description}}</h1>
      </section>
      <section class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
        <h1> {{item.author}}</h1>
      </section>

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
              <label for="imgUrl">Image Url</label>
              <input ng-model="$ctrl.item.imgUrl" type="text" name="imgUrl" value=""><br><br>
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
      {title:"Google", description:"Google", author: "Justin Hart", description: "Super cool stuff for super cool folks", url: "https://www.google.com", votes: 1, imgUrl: "https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_284x96dp.png"},

      {title:"Yahoo", author: "Devin Hanaway", description: "An outdatted site that recently got bought out", url: "https://www.yahoo.com", votes: 1,imgUrl: "http://www.udayavani.com/sites/default/files/images/english_articles/2016/12/15/Yahoo.jpg"},

      {title:"Craft Peek", author: "Julien Melises", description: "Innovative new Brewery Platform, built by Asheville Natives", url: "https://www.craftpeak.com", votes: 1, imgUrl: "https://ashevillegrown.com/wp-content/uploads/2016/11/craftpeak.jpg"},

      {title:"ESPN", author: "Stephen A. Smith", description: "Super cool stuff for super cool folks", url:"https://www.espn.com", votes: 1, imgUrl: "http://www.stickpng.com/assets/images/5847f1b0cef1014c0b5e485d.png"}
    ]
  }
  vm.addPost = function (){
    vm.items.push(vm.item)
    delete vm.item
  }
  vm.upVote = function (e, item){
    e.preventDefault()
    item.votes++
  }
  vm.downVote = function (e, item){
    e.preventDefault()
    item.votes--
  }
}
