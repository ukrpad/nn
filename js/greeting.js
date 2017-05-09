function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
  {
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function checkCookie()
{
var username=getCookie("username");
var d = new Date();
var time = d.getHours();


if (username!=null && username!="")
  {
  if (time < 12)
  {
     alert("Доброе утро " + username);
  }
  else if (time < 17)
  {
     alert("Добрый день " + username);
  }
  else if (time < 22)
  {
     alert("Добрый вечер " + username);
  }
  else if (time < 6)
  {
     alert("Доброй ночи  + username);
  }
  }
else 
  {
  username=prompt("Как Вас зовут?","");
  if (username!=null && username!="")
    {
    setCookie("username",username,365);
    }
  }
}
