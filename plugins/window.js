global.resizeables = [];
global.scrollables = [];

// for events
// 
// 
global.onresize = ()=>{
  resizeables.forEach((el)=>{
    el()
  })
};

global.onscroll = ()=>{
    scrollables.forEach((el)=>{
        el()
    })
};