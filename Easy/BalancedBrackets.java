import java.util.Stack;
public class BalancedBrackets{
    
    public static void main(String[] args) {
        /*
        Given an expression string exp, write a program to examine whether 
        the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
        Input: exp = “[()]{}{[()()]()}” 
        Output: Balanced

        Input: exp = “[(])” 
        Output: Not Balanced 
        */
        //More Examples
        //Test Cases
        //String input = "()";//true
        //String input = "()[]";//true
        //String input = "(]";//false
        //String input = "([)]";//false
        //String input = "{[]}";//true
        //-------------------------------
        String input = "()[]";
        System.out.println(isValid(input));
    }
    static boolean isValid(String input){
        Stack<Character> stack = new Stack<Character>();
        for (char c : input.toCharArray()) {
            if (c == '(')
                stack.push(')');
            else if (c == '{')
                stack.push('}');
            else if (c == '[')
                stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c)
                return false;
        }
        return stack.isEmpty();
    }
}