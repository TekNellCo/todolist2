(()=>{let e=document.querySelector(".headerappend"),t=document.querySelector(".headersubmit"),a=document.querySelector(".headerinput");t.addEventListener("click",(t=>{""!==a.value&&(t.preventDefault(),function(){let t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("p"),c=document.createElement("div"),r=document.createElement("button");t.className="headercontainer",n.className="header",c.className="addtaskcontainer",r.className="addtaskbtn",d.textContent=a.value,a.value="",r.innerText="+",e.append(t),t.append(n),n.append(d),t.append(c),c.append(r)}())}))})();