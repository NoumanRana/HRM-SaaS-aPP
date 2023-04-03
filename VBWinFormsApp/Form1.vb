Public Class Form1
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Dim input As String = TextBox1.Text
        MessageBox.Show("Hello " & input & " Welcome")
    End Sub
End Class
