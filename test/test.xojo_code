#tag Class
Protected Class MyClass
Inherits Object
    #tag Method, Flags = &h0
        Sub HelloWorld()
            // This is a test method
            Var msg As String = "Hello, World!"
            Var count As Integer = 10
            
            If count > 5 Then
                msg = msg + " - Count is " + count.ToString()
            End If
            
            Try
                Dim i As Double = 3.14
            Catch e As RuntimeException
                ' Error handling
            Finally
                ' Cleanup
            End Try
        End Sub
    #tag EndMethod
    
    #tag Property, Flags = &h1
        Protected MyProperty As String
    #tag EndProperty
End Class
#tag EndClass
