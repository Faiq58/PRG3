class Tool
{
    private string name;
    private string category;
    public bool IsBorrowed { get; private set; }

    public Tool(string name, string category)
    {
        this.name = name;
        this.category = category;
        IsBorrowed = false;
    }

    public string GetName() => name;
    public string GetCategory() => category;

    public void Borrow()
    {
        if (!IsBorrowed)
        {
            IsBorrowed = true;
            Console.WriteLine($"{name} berhasil dipinjam.");
        }
        else
        {
            Console.WriteLine($"{name} sedang dipinjam orang lain.");
        }
    }

    public void ReturnTool()
    {
        IsBorrowed = false;
        Console.WriteLine($"{name} sudah dikembalikan.");
    }
}