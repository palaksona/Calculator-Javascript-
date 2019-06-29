function getHistory()
{
    return document.getElementById("history").innerText;
}
function printHistory(num)
{
    document.getElementById("history").innerText=num;
}
function getOutput()
{
    return document.getElementById("output").innerText;
}
function printOutput(num)
{
    if(num=="")
    {
        document.getElementById("output").innerText=num;
    }
    else
    {
        document.getElementById("output").innerText=getFormatedNumber(num);
    }
}  
function getFormatedNumber(num)
{
    if (num=='-')
    {
        return "";
    }
    var n =Number(num);
    var val= n.toLocaleString("en");
    return val; 
}
function reverseNumberFormat(num)
{
    return Number(num.replace(/,/g,''));
}
var operator=document.getElementsByClassName("operator");
for (var i=0;i<operator.length;i++)
{
    operator[i].addEventListener('click',function(){
        if(this.id=="clear")
        {
            printOutput('');
            printHistory('');
        }
        else if(this.id=="backspace")
        {
            var output=reverseNumberFormat(getOutput()).toString();
            if(output)
            {
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else
        {
            var output=getOutput();
            var history=getHistory();
            if(output==""&& history!="")
            {
                if(isNaN(history[history.length-1]))
                history=history.substr(0,history.length-1);
                history=history+this.id;
                printHistory(history);
            }
            if (output!="")
            {
                output=reverseNumberFormat(output);
                history=history+output;
                if (this.id=='=')
                {
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else
                {
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
          


        }
        });
}
var number=document.getElementsByClassName("number");
for (var i=0;i<number.length;i++)
{
    number[i].addEventListener('click',function(){
         var output=reverseNumberFormat(getOutput());
             if (output!=NaN)
            {
                output=output+this.id;
                printOutput(output);
            }
        });
}