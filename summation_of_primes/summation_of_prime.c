#include <stdio.h>

int main()
{
 unsigned long long int sum = 5;
 int mul = 1;
 int num1, num2 = 0;

 while (num2 < 2000000)
 {
   sum = sum + num1 + num2;
   num1 = (6 * mul) - 1;
   num2 = (6 * mul) - 2;
   ++mul;
 }
 
 printf("%llu\n", sum);
}