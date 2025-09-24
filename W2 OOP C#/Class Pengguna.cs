class User
{
    private string name;
    public int ID { get; private set; }

    public User(int id, string name)
    {
        this.ID = id;
        this.name = name;
    }

    public virtual void DisplayInfo()
    {
        Console.WriteLine($"User: {name} (ID: {ID})");
    }

    public string GetName() => name;
}
