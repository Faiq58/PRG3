class Program
{
    static void Main()
    {
        Warehouse warehouse = new Warehouse();

        warehouse.AddTool(new Tool("Bor Listrik", "Elektronik"));
        warehouse.AddTool(new Tool("Obeng", "Manual"));
        warehouse.AddTool(new Tool("Gergaji", "Manual"));

        Staff s1 = new Staff(1, "Andi", "Logistik");
        Technician t1 = new Technician(2, "Budi", "Listrik");
        warehouse.AddUser(s1);
        warehouse.AddUser(t1);

        s1.DisplayInfo();
        t1.DisplayInfo();

        warehouse.BorrowTool(s1, "Bor Listrik");
        warehouse.BorrowTool(t1, new Tool("Tang", "Manual")); // tool baru, tidak ada di gudang

        warehouse.ShowTools();
    }
}