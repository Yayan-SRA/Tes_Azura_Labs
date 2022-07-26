package coba;

import java.util.Stack;

public class Coba {
    public static void main(String[] args) {

    }

    public int calculate(String s) {
        int sign = 1;
        int sum = 0;
        Stack<Integer> stack = new Stack<>();

        for (int a = 0; a < s.length(); a++) {
            if (s.charAt(a) >= '0' && s.charAt(a) <= '9') {
                int num = 0;
                while (a < s.length() && s.charAt(a) >= '0' && s.charAt(a) <= '9') {
                    num = num * 10 + s.charAt(a) - '0';
                    a++;
                }
                sum += num * sign;
                a--;
            } else if (s.charAt(a) == '+') {
                sign = 1;
            } else if (s.charAt(a) == '-') {
                sign = -1;
            } else if (s.charAt(a) == '(') {
                stack.push(sum);
                stack.push(sign);
                sum = 0;
                sign = 1;
            } else if (s.charAt(a) == ')') {
                sum = stack.pop() * sum;
                sum += stack.pop();
            }
        }
        return sum;
    }
}