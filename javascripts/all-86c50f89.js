function setActive(){for(aObj=document.getElementById("navbar,menu-footer").getElementsByTagName("a"),i=0;i<aObj.length;i++)document.location.href.indexOf(aObj[i].href)>=0&&(aObj[i].className="active")}$(function(){var s=window.location.href.substr(window.location.href.lastIndexOf("/")+1);$("#navbar ul li a,.menu-footer ul li a").each(function(){$(this).attr("href")!=s&&""!=$(this).attr("href")||$(this).addClass("active")})}),window.onload=setActive,$(function(){$(".link").click(function(){$("body").addClass("md"),$("#mask").addClass("md-show"),$(".enclosure").addClass("lg-show fadeInDown animated"),$(".slider-thumbs").addClass("show");var s=$(this).data("href");return $(".enclosure img").prop("src",s),!1}),$(".close-gl").click(function(){$("body").removeClass("md"),$("#mask").removeClass("md-show"),$(".enclosure").removeClass("lg-show fadeInDown animated")}),$(".link_modal_rt").click(function(){$("body").addClass("md"),$("#mask").addClass("md-show"),$(".window_refeicoes_transportadas").addClass("lg-show")}),$(".close-md").click(function(){$("body").removeClass("md"),$("#mask").removeClass("md-show"),$(".window_refeicoes_transportadas").removeClass("lg-show")}),$(".link_modal_rp").click(function(){$("body").addClass("md"),$("#mask").addClass("md-show"),$(".window_refeicoes_produzidas").addClass("lg-show")}),$(".close-md").click(function(){$("body").removeClass("md"),$("#mask").removeClass("md-show"),$(".window_refeicoes_produzidas").removeClass("lg-show")}),$(".link_modal_bf1").click(function(){$("body").addClass("md"),$("#mask").addClass("md-show"),$(".window_buffet1").addClass("lg-show")}),$(".close-bf1").click(function(){$("body").removeClass("md"),$("#mask").removeClass("md-show"),$(".window_buffet1").removeClass("lg-show")}),$(".link_modal_bf2").click(function(){$("body").addClass("md"),$("#mask").addClass("md-show"),$(".window_buffet2").addClass("lg-show")}),$(".close-bf2").click(function(){$("body").removeClass("md"),$("#mask").removeClass("md-show"),$(".window_buffet2").removeClass("lg-show")}),$(".link_modal_bf3").click(function(){$("body").addClass("md"),$("#mask").addClass("md-show"),$(".window_buffet3").addClass("lg-show")}),$(".close-bf3").click(function(){$("body").removeClass("md"),$("#mask").removeClass("md-show"),$(".window_buffet3").removeClass("lg-show")}),$(".link_modal_bf4").click(function(){$("body").addClass("md"),$("#mask").addClass("md-show"),$(".window_buffet4").addClass("lg-show")}),$(".close-bf4").click(function(){$("body").removeClass("md"),$("#mask").removeClass("md-show"),$(".window_buffet4").removeClass("lg-show")}),$(".link_modal_bf5").click(function(){$("body").addClass("md"),$("#mask").addClass("md-show"),$(".window_buffet5").addClass("lg-show")}),$(".close-bf5").click(function(){$("body").removeClass("md"),$("#mask").removeClass("md-show"),$(".window_buffet5").removeClass("lg-show")}),$(".link_modal_bf6").click(function(){$("body").addClass("md"),$("#mask").addClass("md-show"),$(".window_buffet6").addClass("lg-show")}),$(".close-bf6").click(function(){$("body").removeClass("md"),$("#mask").removeClass("md-show"),$(".window_buffet6").removeClass("lg-show")}),jQuery("#hora").mask("99:99")}),jQuery("#data").mask("99/99/9999"),$(".slider-thumbs").bxSlider({minSlides:2,maxSlides:3,slideWidth:316,slideMargin:11,pager:!1}),function(s){var e="undefined"!=typeof s("<input/>")[0].multiple,o=/msie/i.test(navigator.userAgent);s.fn.customFile=function(){return this.each(function(){var a=s(this).addClass("custom-file-upload-hidden"),l=s('<div class="file-upload-wrapper">'),d=s('<input type="text" class="file-upload-input" />'),i=s('<button type="button" class="file-upload-button">Select a File</button>'),n=s('<label class="file-upload-button" for="'+a[0].id+'">Select a File</label>');a.css({position:"absolute",left:"-9999px"}),l.insertAfter(a).append(a,d,o?n:i),a.attr("tabIndex",-1),i.attr("tabIndex",-1),i.click(function(){a.focus().click(),s("label.file").hide()}),a.change(function(){var s,o,l=[];if(e){s=a[0].files;for(var i=0,n=s.length;i<n;i++)l.push(s[i].name);o=l.join(", ")}else o=a.val().split("\\").pop();d.val(o).attr("title",o).focus()}),d.on({blur:function(){a.trigger("blur")},keydown:function(s){if(13===s.which)o||a.trigger("click");else{if(8!==s.which&&46!==s.which)return 9===s.which&&void 0;a.replaceWith(a=a.clone(!0)),a.trigger("change"),d.val("")}}})})},e||s(document).on("change","input.customfile",function(){var e=s(this),o="customfile_"+(new Date).getTime(),a=e.parent(),l=a.siblings().find(".file-upload-input").filter(function(){return!this.value}),d=s('<input type="file" id="'+o+'" name="'+e.attr("name")+'"/>');setTimeout(function(){e.val()?l.length||(a.after(d),d.customFile()):(l.parent().remove(),a.appendTo(a.parent()),a.find("input").focus())},1)})}(jQuery),$("input[type=file]").customFile(),$(".dropdown").hover(function(){$(".dropdown-toggle",this).trigger("click")}),$(function(){$(".dropdown").hover(function(){$(this).addClass("open")},function(){$(this).removeClass("open")})});