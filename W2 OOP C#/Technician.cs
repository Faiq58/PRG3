class Technician : User
{
    public string Skill { get; private set; }

    public Technician(int id, string name, string skill) : base(id, name)
    {
        Skill = skill;
    }

    public override void DisplayInfo()
    {
        Console.WriteLine($"Technician: {GetName()} (ID: {ID}), Skill: {Skill}");
    }
}