const anime=["fade-up","zoom-in","fade-right"];function do_aos(o,t){let a;o.each(function(){let o=anime[Math.floor(3*Math.random())];$(this).attr("data-aos",o).attr("data-aos-duration","1500")}),1==t&&o.hover(function(){a=$(this).attr("data-aos"),$(this).attr("data-aos","").attr("data-aos-duration","350").removeClass("aos-init aos-animate")},function(){$(this).attr("data-aos",a).attr("data-aos-duration","1500").addClass("aos-init aos-animate")})}function trottle(o,t){let a=Date.now();return function(){a+t-Date.now()<0&&(o(),a=Date.now())}}do_aos($(".my_proj_sld > div"),!0),do_aos($(".skill_con > *"),!0),do_aos($(".ch_con > *"),!1),do_aos($(".top"),!0),do_aos($(".about_me"),!0),do_aos($(".contact_me > *"),!0);let isPs=!1,path=window.location.pathname,page=path.split("/").pop();function gotoPage(o){window.location.href=o}function copy(o){if("object"==typeof o){let t=$("<input>");$("body").append(t),$(t).val(o.text()).select(),document.execCommand("copy"),t.remove()}else{let t=$("<input>");$("body").append(t),$(t).val(o).select(),document.execCommand("copy"),t.remove()}}function gotoProj(o){"index.html"==page||""==page?$("html, body").animate({scrollTop:$(o).offset().top},200):gotoPage("index.html"+o)}console.log(page),$(".ch div div a").hover(()=>{$(".gtch").stop().animate({opacity:"100%"},300)});