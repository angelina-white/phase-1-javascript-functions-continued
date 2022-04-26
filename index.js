// code your solution here
function saturdayFun(activity)
{
    switch(activity)
    {
        case "bathe my dog":
            return "This Saturday, I want to bathe my dog!";
        default:
            return "This Saturday, I want to roller-skate!";
    }
}

function mondayWork(activity)
{
    switch(activity)
    {
        case "work from home":
            return "This Monday, I will work from home.";
        default:
            return "This Monday, I will go to the office.";
    }
}

function wrapAdjective(special)
{
    let string1 = "You are ";
    return function(string2)
    {
        return string1 + special + string2 + special + "!";
    }
}
