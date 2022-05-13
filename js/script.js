const openContainer = document.querySelectorAll('.playfield_overview .select-box .selected');
const tabBtn = document.querySelectorAll('.playfield_overview .btnDiv p');
const select = document.querySelectorAll('.playfield_overview .search-box input');
const optContainer = document.querySelectorAll('.playfield_overview .select-box .options-container');
const listOverlay = document.querySelector('.playfield_overview .listOverlay');
const allSelectedbox = document.querySelectorAll('.playfield_overview .select-box .selected');
const openExport = document.querySelector('.playfield_overview .right_div .export > button');
const openSearch2 = document.querySelector('.playfield_overview .right_div .search img');
const alrShowExport = document.querySelector('.playfield_overview .right_div .export .showExport');

openSearch2.addEventListener('click',(e)=>
{
  let showSearch = e.target.closest('.search').querySelector('input');
  if(!showSearch.classList.contains('active'))
  {
    showSearch.classList.add('active');
  }
  else
  {
    showSearch.classList.remove('active');
  }
})

openExport.addEventListener('click',(e)=>
{
  let showExp = e.target.closest('.export').querySelector('.showExport');
  if(!showExp.classList.contains('active'))
  {
    listOverlay.classList.add('active');
    openExport.classList.add('active');
    showExp.classList.add('active');
  }
  else
  {
    listOverlay.classList.remove('active');
    openExport.classList.remove('active');
    showExp.classList.remove('active');
  }
})

// Search Values
select.forEach((select)=>
{
  select.addEventListener('input',(e)=>
  {    
    let value = e.target.value;
    value = value.toLowerCase();
    let allopt = e.target.closest('.options-container').querySelectorAll('.option label');

    allopt.forEach((opt)=>
    {
      if(opt.innerText.toLowerCase().includes(value))
      {
        let option = opt.closest('.mainoption');
        option.style.display="block";
      }
      else
      {
        let option = opt.closest('.mainoption');
        option.style.display="none";
      }
    })
  })
})

openContainer.forEach((open)=>
{
  open.addEventListener('click',(e)=>
  {
     let optionCon = e.target.closest('.select-box').querySelector('.options-container');
     let selectBox = e.target.closest('.select-box').querySelector('.selected');
     if(!optionCon.classList.contains('active'))
     {
       listOverlay.classList.add('active');
       selectBox.classList.add('active');
       optionCon.classList.add('active');
     }
     else
     {
       listOverlay.classList.remove('active');
       selectBox.classList.remove('active');
       optionCon.classList.remove('active');
     }
  })
})

const eventList = ['keyup', 'click'];
eventList.forEach(function(e) {
  window.addEventListener(e, checkType);
});

function checkType(e)
{
  if(e.type==="keyup")
  {
    if(e.key === 'Escape')
    {
      disableAll();
    }
  }
  if(e.type==="click" && e.target===listOverlay)
  {
    if(listOverlay.classList.contains('active'))
    {
      disableAll();
    }
  }
}

function disableAll()
{
  optContainer.forEach((container)=>
  {
    if(container.classList.contains('active'))
    {
      listOverlay.classList.remove('active');
      container.classList.remove('active');
    }
  })

  allSelectedbox.forEach((allBox)=>
  {
    if(allBox.classList.contains('active'))
    {
      allBox.classList.remove('active');
    }
  })

  if(alrShowExport.classList.contains('active'))
  {
    listOverlay.classList.remove('active');
    openExport.classList.remove('active');
    alrShowExport.classList.remove('active');
  }
}

tabBtn.forEach((tab)=>
{
  tab.addEventListener('click',(e)=>
  {
    let btn = e.target;
    if(!btn.classList.contains('active'))
    {
      let activeBtn = e.target.closest('.btnDiv').querySelector('.tab-btn.active');
      activeBtn.classList.remove('active');
      btn.classList.add('active');
      let target = e.target.getAttribute('data-target');
      let activeData = e.target.closest('.row').querySelector('.tab-content .tabCon.active');
      let targetData = e.target.closest('.row').querySelector(target);
      activeData.classList.remove('active');
      targetData.classList.add('active');
    }
  })
})

function openNav() {
    var element = document.getElementById("mySidenav");
    element.classList.add("mystyle");
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("burger").style.display = "none";
    document.getElementById("burger2").style.display = "block";
  }
  
function closeNav() {
    var element = document.getElementById("mySidenav");
    element.classList.remove("mystyle");
    document.getElementById("mySidenav").style.width = "80px";
    document.getElementById("main").style.marginLeft= "80px";
    document.getElementById("burger2").style.display = "none";
    document.getElementById("burger").style.display = "block";
  }


function openSearch(){
  var element = document.getElementById("search2");
  element.classList.toggle("form-search")
  document.getElementById("search2").style.transition = "ease-in .2s";
}  