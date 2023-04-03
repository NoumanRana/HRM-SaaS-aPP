namespace WinFormsApp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            string input = textBox1.Text;
            MessageBox.Show("Hello " + input+ "  Welcome ");
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
       
        }
    }
}