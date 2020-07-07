//const filterContainer=document.querySelector(".certificate-filter"),
//       filterBtns=filterContainer.children,
//       totalFilterBtn=filterBtns.length,
//       certificateItems=document.querySelectorAll(".certificate-item"),
//       totalCertificateItem=certificateItems.length;
      
//       for(let i=0; i<totalFilterBtn; i++){
//       	filterBtns[i].addEventListener("click",function(){
//       		filterContainer.querySeclector(".active").classList.remove("active");
//       		this.classList.add("active");
//       		alert(filterContainer);
//       		const filterValue=this.getAttribute("data-filter");
//       		for(let k=0; k<totalCertificateItem; k++) {
//       		if(filterValue === certificateItems[k].getAttribute("data-category")){
//       		certificateItems[k].classList.remove("hide");
//       		certificateItems[k].classList.add("show");
//       		}
//       		else{
//       		certificateItems[k].classList.remove("show");
//       		certificateItems[k].classList.add("hide");
//       		}
       		
//       	if(filterValue === "all" ) {
//       	  certificateItems[k].classList.remove("hide");
//       	  certificateItems[k].classList.add("show");
//       		}
//       		}
//       })
//  	}
  	
  	//aside Navbar
  	
  	const nav=document.querySelector(".nav"),
  	navList=nav.querySelectorAll("li"),
    totalNavList=navList.length;
    allSelection=document.querySelectorAll(".section");
    totalSection=allSelection.length;
  	
  	for(let i=0; i<totalNavList; i++){
  	const a=navList[i].querySelector("a")
  	a.addEventListener("click", function(){
  	for(let j=0; j<totalNavList; j++){
  	navList[j].querySelector("a").classList.remove("active");
  	}
  	this.classList.add("active");
  	showSection(this);
  	
  	})
  	}
  	function showSelection(element){
  	for(let i=o; i<totalSelection;i++){
  	allSelection[i].classList.remove("active");
  	}
  	
  	const target=element.getAttribute("href").split("#")[1];
  
    document.querySelector("#"+target).classList.add("active")
  	
  	}
  	
  	
  	
  	const navTogglerBtn=document.querySelector(".nav-toggler"),
  	    aside=document.querySelector(".aside");
  	
  	navTogglerBtn.addEventListener("click",()=>{
  	   asideSectionTogglerBtn();
  	
  	})
  	
  	function asideSectionTogglerBtn(){
  	aside.classList.toggle("open");
  	navTogglerBtn.classList.toggle("open");
  	}