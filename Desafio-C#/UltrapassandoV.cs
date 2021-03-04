using System;

class UltrapassandoV {
    static void Main()
    {

        int R = Convert.ToInt32(Console.ReadLine());
        int V = 0;
        int qt = 1;

        do
        {
            V = Convert.ToInt32(Console.ReadLine());
        } while (V <= R);

        int i = R;

        while (i <= V)
        {
            R++;
            qt++;
            i += R;
        }

        Console.WriteLine(qt);

    }
}