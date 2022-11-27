const inputDetails=document.querySelector(".input_detail");
const inputUrl=document.querySelector(".input_url");
const itemName=document.querySelector(".item_name");
const addButton=document.querySelector(".add_btn");
const filterButtons=document.querySelector(".filter_buttons")
const allButton=document.querySelector(".all_btn");
const headphoneButton=document.querySelector(".headphone_btn");
const laptopButton=document.querySelector(".laptop_btn");
const mobileButton=document.querySelector(".mobile_btn");
const outputList=document.querySelector(".output_list");
const error=document.querySelector(".error");

inputDetails.addEventListener("submit", (event) => {
    event.preventDefault();
})

addButton.addEventListener("click",(event)=>{
    console.log(inputUrl.value)
    
    // if(inputUrl.value!=="images\headphone2.jpg" || inputUrl.value!=="images\laptop.webp" || inputUrl.value!=="images\phone1.png")
    // {
    //     error.innerText = "This url is not present";
    //     setTimeout(() => {
    //         error.innerText = "";
    //     }, 2000);
    // }
    // else{
        
    const outputLi=document.createElement("li");
    outputList.appendChild(outputLi);
    
    const itemImg=document.createElement("img");
    itemImg.setAttribute('src', inputUrl.value);
    outputLi.appendChild(itemImg);
    
    const deleteButton=document.createElement("button");
    deleteButton.innerText="Delete";
    outputLi.appendChild(deleteButton);

   outputLi.classList.add("li_decoration");
   itemImg.classList.add("item_img");
   deleteButton.classList.add("del_btn");
  
   inputUrl.value="";
   deleteButton.addEventListener("click",()=>{
    outputLi.remove();
   })
   console.log(itemName.value)
   if(itemName.value=="headphone")
   {
    outputLi.classList.add("headphone");
   }
   if(itemName.value=="laptop")
   {
    outputLi.classList.add("laptop");
   }
   if(itemName.value=="mobile")
   {
    outputLi.classList.add("mobile");
   }

   const all=document.getElementsByClassName("li_decoration");
   const headphone= document.getElementsByClassName("headphone");
   const laptop=document.getElementsByClassName("laptop");
   const mobile=document.getElementsByClassName("mobile");


   
   filterButtons.addEventListener("submit",(event)=>{
    event.preventDefault();
})

allButton.addEventListener("click",()=>{
    for(let i=0;i<all.length;i++)
        {
            all[i].classList.remove("display_none");
        }
})

headphoneButton.addEventListener("click",()=>{
    for(let i=0;i<all.length;i++)
    {
        laptop[i].classList.add("display_none");
        mobile[i].classList.add("display_none");
        headphone[i].classList.remove("display_none");
    }
    
})

laptopButton.addEventListener("click",()=>{
    for(let i=0;i<all.length;i++)
    {
        headphone[i].classList.add("display_none");
        mobile[i].classList.add("display_none");
        laptop[i].classList.remove("display_none");
    }
})

mobileButton.addEventListener("click",()=>{
    for(let i=0;i<all.length;i++)
    {
        headphone[i].classList.add("display_none");
        laptop[i].classList.add("display_none");
        mobile[i].classList.remove("display_none");
    }
})
    // }
    
})

