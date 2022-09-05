var rule = CSSRulePlugin.getRule("span:after");
                
// 6 Show Timeline
var tl = gsap.timeline({defaults:{duration: 1}});
tl.from(".content", {y:-50, stagger: .6, opacity: 0})
  .to(rule, {duration: 1.8,cssRule: {scaleY: 0}}, "-=2.2")
  .from("aside", {backgroundPosition: '200px 0px', opacity: 0}, "-=1.5")
  .from("img", {y:30, opacity: 0}, "-=.5")
  .from(".categories" , {y:-100,stagger:.6,opacity:0 })
