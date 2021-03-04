using System; 

//mostrar o array de 10

class URI {

    static void Main(string[] args) { 
         
       int[] characters = new int[10];
            int entrada = 0;

            for (int i = 0; i < characters.Length; i++)
            {
                try {
                    entrada = Convert.ToInt32(Console.ReadLine());
                }catch (Exception e)
                {
                    entrada = 0;
                }

                if (entrada < 0)
                {
                    characters[i] = 1;
                }
                else
                {
                    characters[i] = entrada;
                }
            }

            for (int i = 0; i < characters.Length; i++)
            {
                Console.WriteLine("X[{0}] = {1}", i, characters[i]);
            }

        }
    }
}
