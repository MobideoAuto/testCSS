$(".side-menu").mouseover(function() {
    $(this).css("width","240px")
  });
  
  $(".side-menu").mouseover(function() {
    $(this).css("height","800px")
  });
  
  $(".side-menu").mouseout(function() {
    $(this).css("width","60px")
  });
  
  $(".side-menu").mouseout(function() {
    $(this).css("height","50px")
  });
  
  $(".spota").mouseover(function() {
    $(this).css("background","#14081d")
  });
  
  $(".spota").mouseout(function() {
    $(this).css("background","transparent")
  });
  
  $(".sel").css({
    "display": "'none",
    "background": "#14081d"
  })
  
  
  $(".side-menu").css({
    "font-family": "'Roboto', sans-serif",
    "position": "fixed",
    "top": "100px",
    "left": "20",
    "margin": "0",
    "padding": "0",
    "width": "60px",
    "list-style-type": "none",
    "background": "#003BCF",
    "overflow": "hidden",
    "transition": "width .5s",
    "border-bottom-left-radius": "10px",
    "border-bottom-right-radius": "10px",
    "z-index": "2",
    "height": "50px"
  });
  
  $(".fa").css({
    "font-size": "1rem",
    "margin": "20px 30px 0 22px"
  });
  
  $(".spota").css({
    "display": "block",
    "font-size": ".9rem",
    "text-decoration": "none",
    "color": "#FFF",
    "height": "140px"
  });
  
  $(".spotli").css({
    "width": "100px",
    "height": "140px"
  });
  
  $(".spot").css({
    "display": "block",
    "font-size": ".9rem",
    "text-decoration": "none",
    "color": "#FFFFFF",
    "height": "60px",
    "background-color": "#003BCF",
    'background':'linear-gradient(to bottom, #003BCF 5%, #003BCF 100%)',
      'background-color':'#003BCF',
      'border-radius':'3px',
      'border':'1px solid #003BCF',
  });
  // Set up buttons using their class name and build their styling.
  // I use % widths so they flex with the text area
  
  $(".buttons").button().css({   'width': '140',
                                 'padding-top': '3px',
                                 'padding-bottom': '3px',
                                 'font-size': '12px',
                                 'background':'#2F57BC',
                                 'font-family': 'Century Gothic, sans-serif',
                                 'font-weight': 'bold',
                                 'border-radius': '4px',
                                 'display': 'table',
                                 'margin': '0px',
                                 'border-radius': '5px',
                                 'border': 'none',
                                 'box-shadow':'inset 0px 1px 0px 0px #54a3f7',
      'background':'linear-gradient(to bottom, #2F57BC 5%, #2F57BC 100%)',
      'background-color':'#2F57BC',
      'border-radius':'3px',
      'border':'1px solid #124d77',
      'display':'inline-block',
      'cursor':'pointer',
      'color':'#ffffff',
      'font-family':'Arial',
      'font-size':'13px',
      'padding':'6px 24px',
      'text-decoration':'none',
      'text-shadow':'0px 1px 0px #154682',
                                 'color': 'white'});
  
  // Set their initial state where you have more than one button OR some button text
  // that toggles. I use the javascript call to get the label value as it seems more
  //  reliable than using the jQuery method of $('#xxx').text() - seems to be browser
  //  specific.
  
  //Here is our universal function that does the clicking - you can do ALOT in here 
  function setBtnBg(id, className, buttonToClick){
      //first - click your action item button
      $("#" + buttonToClick + " :first-child").click();
      
      //then reset ALL of the buttons in our button class to a default 'unclicked button style'
      $("." + className).css({'background': '#2F57BC', 'border-color':'#4f4f4f'});
      
      //then change the style of the button that was clicked to something snazzy
      $("#" + id).css({'background': '#2F57BC', 'border-color':'#4199b8'});
  };
  
  { $("#resetButton1").button().bind('click',function(){setBtnBg("resetButton1","buttons","resetButtona");})};
  { $("#homeButton1").button().bind('click',function(){setBtnBg("homeButton1","buttons","homeButtona");})};