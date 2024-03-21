import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
    
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] input = br.readLine().split(" ");
        int height = Integer.parseInt(input[0]);
        int width = Integer.parseInt(input[1]);
        
        String wall;
        int number = 0;
        char[][] walls = new char[height][width];
        boolean[][] visited = new boolean[height][width];
        for (int i=0; i <height; i++) {
            Arrays.fill(visited[i], false);
        }
        for(int i=0; i<height; i++) {
            wall = br.readLine();
            for(int j=0; j<width; j++) {
                walls[i][j] = wall.charAt(j);
            }
        }

        char current;
        int move_index;
        for(int i=0; i<height; i++) {
            for(int j=0; j<width; j++) {
                if(visited[i][j]) continue;
                current = walls[i][j];
                if(current=='-') {
                    move_index = j+1;
                    while(true) {
                        if(move_index==width) {
                            number++;
                            break;
                        }
                        if (walls[i][move_index]=='|') {
                            number++;
                            break;
                        } else {
                            visited[i][move_index] = true;
                            move_index++;
                        }
                    }
                } else {
                    move_index = i+1;
                    while(true) {
                        if(move_index==height) {
                            number++;
                            break;
                        }
                        if (walls[move_index][j]=='-') {
                            number++;
                            break;
                        } else {
                            visited[move_index][j] = true;
                            move_index++;
                        }
                    }
                }
            }
        }
        System.out.print(number);
    }
}
