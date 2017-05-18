angular.module("reddit")
.component('posts',{
  controller: controller,
  template: `
    <div class="well row" ng-repeat="item in $ctrl.items">
      <section class="col-lg-2 col-md-2 col-sm-1 col-xs-2">
        <img class="img-fluid" ng-src="{{item.img}}" alt="Image">
      </section>
      <section class="col-lg-8 col-md-6 col-sm-4 col-xs-2 ">
        <a class="no-decorate" href={{item.url}}>
          <span class="post-title">{{item.title}}</span>
        </a>
        <span class="voter">
          <a class="no-decorate" href="#" ng-click="$ctrl.upVote($event, item)">
            <img src="http://i.imgur.com/PdJs3Zv.png" alt="">
          </a>
          <a class="no-decorate" href="#" ng-click="$ctrl.downVote($event, item)">
            <img src="http://i.imgur.com/eqLD2.png" alt="">
          </a>
          <span class="vote-count">{{item.votes}}</span>
        </span>
        <p class="post-description"> {{item.description}}</p>
        <span class="post-other-details"> {{item.time}}&nbsp;|</span>
        <img class="comments-logo"  src="http://www.iconsfind.com/wp-content/uploads/2015/11/20151111_5642dc9f7d32b.png" alt="img">
        <a ng-click="showComments = !showComments">
          <ng-pluralize count="item.comments.length" when="{'0': 'no comments', '1':'1 comment', 'other':'{} comments'}"></ng-pluralize>
        </a>
      <div>
        <div class="row"  ng-show="showComments">
          <ul ng-repeat="comment in item.comments">
            <li>{{comment.text}}</li>
          </ul>
        </div>
        <div class="row">
          <div class="col-md-offset-1">
            <hr>
            <p>
              Add Comment:
            </p>
            <form ng-submit="$ctrl.addComment(post)" class="form-inline">
              <div class="form-group">
                <input ng-model="$ctrl.newComment.text" class="form-control">
              </div>
              <div class="form-group">
                <input type="submit" class="btn btn-primary">
              </div>
            </form>
          </div>
        </div>
      </div>





      </section>

      <section class="col-lg-2 col-md-1 col-sm-1 col-xs-1">
        <p> {{item.author}}</p>
      </section>

    <div id="newPostModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">EDIT LINK</h4>
          </div>
          <div class="modal-body">
            <form name="$ctrl.addPostForm" novalidate ng-submit="$ctrl.addPost()" class="modal-form">
              <label for="title">Title</label>
              <input ng-model="$ctrl.item.title" ng-model-options="{ updateOn: 'blur' }" type="text" name="title" value=""><br><br>

              <label for="img">Image Url</label>
              <input ng-model="$ctrl.item.img" ng-model-options="{ updateOn: 'blur' }" type="text" name="img" value=""><br><br>

              <label for="url">Link URL</label>
              <input ng-model="$ctrl.item.url" ng-model-options="{ updateOn: 'blur' }" type="text" name="url" value=""><br><br>

              <label for="description">Description</label>
              <input ng-model="$ctrl.item.description" ng-model-options="{ updateOn: 'blur' }" type="text" name="description" value=""><br><br>

              <label for="author">Author</label>
              <input ng-model="$ctrl.item.author" ng-model-options="{ updateOn: 'blur' }" type="text" name="author" value=""><br><br>
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
    vm.showComments = false
    vm.items = [
      {title:"Google", author: "Justin Hart", description: "Super cool stuff for super cool folks", url: "https://www.google.com", votes: 1, img: "https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_284x96dp.png", time:"just now", comments:[{
        text: "Awesome Post"
      }]},

      {title:"Yahoo", author: "Devin Hanaway", description: "An outdatted site that recently got bought out", url: "https://www.yahoo.com", votes: 1, img: "http://www.udayavani.com/sites/default/files/images/english_articles/2016/12/15/Yahoo.jpg",  time:"yesterday", comments:[{
        text: "Awesome Post"
      }]},

      {title:"Craft Peek", author: "Julien Melises", description: "Innovative new Brewery Platform, built by Asheville Natives", url: "https://www.craftpeak.com", votes: 1, img: "https://ashevillegrown.com/wp-content/uploads/2016/11/craftpeak.jpg", time:"3 days ago", comments:[{
        text: "Awesome Post"
      }]},

      {title:"ESPN", author: "Stephen A. Smith", description: "Super cool stuff for super cool folks", url:"https://www.espn.com", votes: 1, img: "http://www.stickpng.com/assets/images/5847f1b0cef1014c0b5e485d.png", time:"1 month ago", comments:[{
        text: "Awesome Post"
      }]}
    ]
  }
  vm.addPost = function (){
    vm.item.comments = 0
    vm.item.votes = 0
    vm.item.time = Date()
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

  vm.commentsCheck = 1

  vm.commentsOn = function(on){
    return vm.commentCheck === on
  }

  vm.addComment = function (item){
    var commentSection = item.comments
    commentSection.push(vm.newComment)
    delete vm.newComment
  }

}
