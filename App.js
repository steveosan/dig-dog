$(document).ready(function () {
    (buildLawn());
    $("span.box").on("click", dig);
    $("span.box").on("click",addRage);
    $("button#redo").on("click", redo)
});



var counter = 0;
function buildLawn()
{
    const num_Bones = 5;
    var i;
    var x;
    const COL_SIZE = num_Bones;
    const ROW_SIZE = num_Bones;
    
    for (i = 0; i < COL_SIZE; i++)
    {

        for (x = 0; x < ROW_SIZE; x++)

        {        

            let newSpan = $("<span>");
            newSpan.addClass("box")
            $("p#yard").append(newSpan) 

            if (counter < num_Bones)
             {              
                let ranNum = Math.random()
                if (ranNum < 0.30) 
                {
                newSpan.addClass("redBox")
                counter ++
                } 
 
            } 
        }
        $("p").append("<br>")
    }
    let numBones = `${counter} Bones to find!`
    $("p#counter").empty();
    $("p#counter").append(numBones)  
}

RandomRage = Math.floor((Math.random() * 100) + 1);
random_Rage = counter.toFixed(2) / Math.sqrt(2);

let ZARAGE = (random_Rage + RandomRage) / counter 


function dig()               //change the background of the locations dug to brown.
{   
    let spanClass = $(this).attr("class")
    if (spanClass === "box redBox") 
    {
        counter--
        $(this).addClass("bone")
        let numBones = `${counter} Bones to find!`  //number of bones in yard
        $("p#counter").empty();
        $("p#counter").append(numBones)

            if (counter <= 0)                          //found all bones
             {
                $("div#won").show();
                $("span.box").off("click")
             }
    }
    $(this).addClass("dugBox")
}


function addRage()          // Progress-bar AKA rage output
{

    // let spanClass = $(this).attr("class")
    // if (spanClass === "box dugBox")
    // {   
    //     alert("Try a dirrerent box. this one has been dug already!" + spanClass)
    // }
    let rage = document.getElementById("health")
    if (Math.random() <= 1)
    rage.value += RandomRage / counter; 

    $("span#rage").text(rage.value.toFixed() + "%");

    if (rage.value >= 100)
    {                             //User reached 100% rage output
        $("div#lost").show();
        $("span.box").off("click")
    }
}

function redo()     //Page reload

{
    location.reload(true);
}
