Router.configure({
  layoutTemplate : "layout",
  loadingTemplate : "loading",
  notFoundTemplate : "notFound"

});

Router.route("/",{
  name : "homeIndex",
  data : function () {
    return {
      message : "welcome to rocket shop"
    }
  }
});
