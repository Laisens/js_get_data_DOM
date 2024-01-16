var e=document.querySelectorAll(".population"),t=document.querySelector(".total-population"),r=document.querySelector(".average-population"),n=0,o=!0,l=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(o=(u=i.next()).done);o=!0){var c=u.value.textContent;c=+(c=c.replaceAll(",","")),n+=c}}catch(e){l=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(l)throw a}}t.innerHTML=n.toLocaleString("en-US"),r.innerHTML=(n/e.length).toLocaleString("en-US");//# sourceMappingURL=index.61c8fff8.js.map

//# sourceMappingURL=index.61c8fff8.js.map
