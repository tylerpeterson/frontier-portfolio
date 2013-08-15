module.exports = function(app) {

  /* Optionally include this to use this alternative template when wanting to create your own header and footer
  app.set("view options", {
    layout: "layout/layout-skills"
  });
  */
  app.get('/angular', function (req, res) {
    res.render('angular', {layout: 'layout/layout_angello', host: req.headers.host});
  });
  app.get('/:page', function(req, res){
    res.render(req.params.page, {});
  });
  app.get('/', function(req, res){
    res.render("index", {});
  });
}
