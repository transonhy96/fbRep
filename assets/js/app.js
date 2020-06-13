
var Utils = {


  readURL : function(input,target) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $(target).attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
}

jQuery(document).ready(function(){

  jQuery(document).on("change","#myRange",function(){

      var self= jQuery(this);
      var target = self.attr("data-target");
      if(!self.attr("data-w-original") &&  !self.attr("data-h-original")){
        jQuery(target).attr("data-w-original",jQuery(target).width());
        jQuery(target).attr("data-h-original",jQuery(target).height());
      }
      console.log(self.val());
      jQuery(target).width(jQuery(target).attr("data-w-original") *self.val());
      jQuery(target).height(jQuery(target).attr("data-h-original") *self.val());
  });


  jQuery(document).on("click","#uploadCenter",function(){
    var file = document.getElementById("fileSrc");
    file.click();
  });

  jQuery(document).on("change","#fileSrc",function() {
    var target = jQuery(this).attr("data-target");
    Utils.readURL(this,target);
    jQuery(document).find("#storyConfig").empty();
    console.log(jQuery("#secondAppear").html())
    jQuery(document).find("#storyConfig").html(jQuery("#secondAppear").html());
  });

    jQuery(document).find(".hide").hide();

    $(document).on("click",".dialog",function(e) {
        e.preventDefault();
        var modal = jQuery(this).attr("data-target");
        $(modal).modal({
            escapeClose: true,
            clickClose: true,
            showClose: true,
            fadeDuration: 300,
            fadeDelay: 0.5
          });
      });

      var tooltips = jQuery(document).find(".tooltip");
      tooltips.toArray().forEach(element => {
           var body = jQuery(element).attr("data-body");
           tippy(element, {
            content: body,
      });
      
      var tooltipHtmls = jQuery(document).find(".htmlTooltip");
      jQuery.each(tooltipHtmls,function(e){
        var self = jQuery(this);
        var target = jQuery(this).attr("data-tooltip");
        
        const template = document.querySelector(target);
        var onclick = self.attr("data-show-onclick");
        var pos = self.attr("data-pos") || "auto";
        var delay = self.attr("data-delay") ? parseInt(self.attr("data-delay")) : 100;
      
        
        var trigger = onclick ? "click" : "mouseenter";
        var options = {
          trigger: trigger,
          content: template.innerHTML,
          animateFill: true,
          delay: [delay,null],
          hideOnClick: true,
          placement: pos,
          arrow:false,
          allowHTML: true,
          interactive: true
        };
        tippy(this,options );
      })
      

      jQuery(document).find(".lazyload").each(function(){

        var self = jQuery(this);
        self.find("div").addClass("hidden");
        setTimeout(function(){
          self.removeClass("lazyload");
          self.find("div").removeClass("hidden");
        },2000);


      });

      jQuery(document).on("click",".shortcutMore",function(){

        var target = jQuery(this).data("target");
        $(target).slideToggle( "fast", function() {

        });

      });
      jQuery(document).on("click",".slider",function(){

        var self = jQuery(this);
        var hide = self.attr("data-hide");
        var show = self.attr("data-show");

        setTimeout(function(){
          jQuery(show).animate({left: '2px'},500);
          jQuery(hide).hide();
          jQuery(show).removeClass("hidden").show();
          
        },200);


      });
      
    });
});