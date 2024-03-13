public class ChooseBalls { 

  

    public static void main(String[] args) { 

        int n = 8; 

        int k = 3; 

        int numCombinations = factorial(n) / (factorial(k) * factorial(n - k)); 

        System.out.println("Số cách chọn 3 quả bóng từ 8 quả bóng là: " + numCombinations); 

    } 

  

    static int factorial(int n) { 

        if (n == 0) { 

            return 1; 

        } else { 

            return n * factorial(n - 1); 

        } 

    } 

} 

 