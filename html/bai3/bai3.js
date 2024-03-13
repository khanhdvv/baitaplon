public class Subsequences { 

  

    public static void main(String[] args) { 

        int[] arr = {1, 2, 3, 4, 5}; 

  

        for (int i = 0; i < arr.length; i++) { 

            System.out.println("Dãy con bắt đầu từ vị trí " + (i + 1) + ":"); 

            for (int j = i; j < arr.length; j++) { 

                if (arr[j] > arr[i]) { 

                    System.out.print(arr[j] + " "); 

                } else { 

                    break; 

                } 

            } 

            System.out.println(); 

        } 

    } 

} 

 