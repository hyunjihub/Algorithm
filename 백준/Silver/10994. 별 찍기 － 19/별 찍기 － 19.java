import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    
    public static void main(String[] args) throws IOException {
    
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());

        int WH = 1;
        for(int i=1; i<number; i++) {
            WH += 4;
        }

        char[][] array = new char[WH+1][WH+1];
        for (int i = 0; i <=WH; i++) {
            Arrays.fill(array[i], ' ');
        }

        int Nbox = 1;
        for(int i=1; i<=number; i++) {
            for(int j=Nbox; j<=WH+1-Nbox; j++) {
                array[Nbox][j] = '*';
                array[WH+1-Nbox][j] = '*';
                array[j][Nbox] = '*';
                array[j][WH+1-Nbox] = '*';
            }
            Nbox += 2;
        }

        for(int i=1; i<=WH; i++) {
            for(int j=1; j<=WH; j++) {
                System.out.print(array[i][j]);
            }
            System.out.println();
        }
    }
}
