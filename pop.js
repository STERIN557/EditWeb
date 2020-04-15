

    document.getElementById("edit").addEventListener("click",()=>{
   

        function fun()
        {
            document.designMode="on";
        }
    
        chrome.tabs.executeScript({
            code: '('+ fun + ')();'
        })
    
    
    
    })
 
  
