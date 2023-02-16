    
    function myFunction()
    {
        let parent = document.getElementById('parent');
        
        let child = document.getElementById('parent').firstElementChild
        
        parent.appendChild(child.cloneNode(true));
    }

    function my()
    {
        let parent = document.getElementById('parent');
        
        let child = document.getElementById('parent').firstElementChild
        
        parent.removeChild(child);
    }
    function validateFile() {

        var returnVal = true;
        var name = document.getElementById("inputText").value;
        var inputFiles = document.getElementById("file-upload");
        var fileName = inputFiles.value;
        var sub = document.getElementById("btn");
        var sb = sub.sb;
        
        
        if (name.length < 5 )
        {
            alert( "Length of File name is too short");
            returnVal = false;
        }
        else if (!fileName)
        {
            alert("Please, upload a file.");
            returnVal = false;
        }
   
        return returnVal;

                    
        }

        let popup = document.getElementById("popup");
    
    function openPopup(){

        var name = document.getElementById("inputText").value;
        var inputFiles = document.getElementById("file-upload");
        var fileName = inputFiles.value;

        if(name==0)
        {
            alert("Enter you name.");
            returnVal = false;
        }

        else if (!fileName)
        {
            alert("Please, upload a file.");
            returnVal = false;
        }
   
        else
        {        
            window.location.replace('http://127.0.0.1:5500/popup.html');
        }
    }
            
    function closePopup()
    {
        window.location.replace('http://127.0.0.1:5500/index.html')
      
    }


    