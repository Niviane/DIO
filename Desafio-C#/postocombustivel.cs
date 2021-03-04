using System; 

class URI {

    static void Main(string[] args) { 
           int tecla = 0;
            int a = 0;
            int g = 0;
            int d = 0;

            do
            {
                tecla = Convert.ToInt32(Console.ReadLine());

                switch (tecla)
                {
                    case 1:
                        a++;
                        break;
                    case 2:
                        g++;
                        break;
                    case 3:
                        d++;
                        break;
                    case 4:
                        break;
                    default:
                        continue;
                }
            }
            while (tecla !=4);
            Console.WriteLine("MUITO OBRIGADO");
            Console.WriteLine("Alcool: {0}", a);
            Console.WriteLine("Gasolina: {0}", g);
            Console.WriteLine("Diesel: {0}", d);
        }

    }
}
