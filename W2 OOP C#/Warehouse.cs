class Warehouse
{
    private List<Tool> tools = new List<Tool>();
    private List<User> users = new List<User>();

    public void AddTool(Tool tool) => tools.Add(tool);
    public void AddUser(User user) => users.Add(user);

    public void ShowTools()
    {
        Console.WriteLine("\nDaftar Perkakas:");
        foreach (var tool in tools)
        {
            Console.WriteLine($"- {tool.GetName()} [{tool.GetCategory()}] | Dipinjam: {tool.IsBorrowed}");
        }
    }

    public void BorrowTool(User user, Tool tool)
    {
        Console.WriteLine($"\n{user.GetName()} mencoba meminjam perkakas...");
        tool.Borrow();
    }

    public void BorrowTool(User user, string toolName)
    {
        Console.WriteLine($"\n{user.GetName()} mencari perkakas {toolName}...");
        Tool tool = tools.Find(t => t.GetName() == toolName);
        if (tool != null)
        {
            tool.Borrow();
        }
        else
        {
            Console.WriteLine($"Perkakas {toolName} tidak ditemukan.");
        }
    }
}