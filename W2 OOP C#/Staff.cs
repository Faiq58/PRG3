class Staff : User
{
    public string Department { get; private set; }

    public Staff(int id, string name, string department) : base(id, name)
    {
        Department = department;
    }

    public override void DisplayInfo()
    {
        Console.WriteLine($"Staff: {GetName()} (ID: {ID}), Department: {Department}");
    }
}