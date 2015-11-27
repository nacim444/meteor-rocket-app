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

Router.route("/about", {
  name: "homeAbout"
});

Router.route("/contact", {
  name: "homeContact"
});
