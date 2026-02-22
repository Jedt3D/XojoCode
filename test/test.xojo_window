#tag DesktopWindow
Begin DesktopWindow MainWindow
    Height          =   400
    Width           =   600
    Title           =   "Test Window"
    Begin DesktopButton Button1
        Caption         =   "Click Me"
        Height          =   20
        Index           =   -2147483648
        Left            =   20
        Top             =   20
        Width           =   80
    End
End
#tag EndDesktopWindow

#tag WindowCode
    #tag Event
        Sub Opening()
            Self.Title = "Opened!"
        End Sub
    #tag EndEvent
#tag EndWindowCode
