public class Pengguna
{
    private string _nama;
    private int _idAnggota;

    public string Nama
    {
        get { return _nama; }
        set
        {
            if (!string.IsNullOrEmpty(value))
            {
                _nama = value;
            }
        }
    }
}