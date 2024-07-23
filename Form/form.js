function validate()
{
    var up = /^[A-Za-z]+$/
    var php = /^[6-9]{1}[0-9]{9}$/
    var uv = document.getElementById("UserName").value
    var pv = document.getElementById("PhoneNumber").value
    if(uv=="")
        {
            document.getElementById("msg").innerHTML="Enter the user Name."
            return false
        }
        if(uv.match(up))
            true;
        else
        {
            document.getElementById("msg").innerHTML="User Name should contain Alphabets only"
            return false
        }
        if(uv.length<3)
        {
            document.getElementById("msg").innerHTML="User Name should contain Minimum 3 Alphabets only"
            return false
        }
        if(uv.length>8)
        {
                document.getElementById("msg").innerHTML="User Name should contain Maximun 8 Alphabets only"
                return false
            }
        if(pv=="")
                {
                    document.getElementById("msg1").innerHTML="Enter the Phone Number."
                    return false
                }
        if(pv.match(php))
        true;
        else
            {
                document.getElementById("msg1").innerHTML="Invalid phone Number"
                return false
            }   
}
     