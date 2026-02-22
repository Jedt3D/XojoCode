#tag Class
protected class MessyClass
inherits Object
#tag Method, Flags = &h0
sub   DoSomething()
var x as integer=42
var msg as string="hello"
if x>5 then
msg=msg+" world"
end if
for i as integer=0 to x
if i mod 2=0 then
msg=msg+i.ToString()
end if
next
try
var d as double=3.14
catch e as RuntimeException
' handle error
finally
' cleanup
end try
end sub
#tag EndMethod
#tag Method, Flags = &h0
function GetValue() as integer
return 42
end function
#tag EndMethod
end class
#tag EndClass
