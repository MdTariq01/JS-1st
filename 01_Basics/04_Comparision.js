// comparison operator < , > , == , === , !=

// except for === every other comparison opearator do type conversion and check if they are equal but === do a hard check means
// no conversion just checking the value if they are equal or not

// console.log(null > 0) // false 
// console.log(null == 0) // false
// console.log(nul >= 0) //true (special case)

// as null is converted to 0 by comparison operators except for == as it's a exception

/*

JavaScript Comparison Operators Cheat Sheet

🔹Equality (==) vs Strict Equality (===)

Expression	        == Result	=== Result	         Explanation
5 == "5"	        ✅ true	   ❌ false	    == converts string "5" → number
0 == false	        ✅ true     ❌ false	       false → 0
null == undefined  	✅ true	   ❌ false	      special case in ==
[] == false	        ✅ true	   ❌ false	       [] → "" → 0
[1,2] == "1,2"	    ✅ true	   ❌ false	      array → string "1,2"


🔹 Null & Undefined Special Rules

Expression	         Result      	Why
null == undefined	✅ true	   special rule
null === undefined	❌ false	   different types
null > 0	        ❌ false	   null → 0, so 0 > 0
null >= 0	        ✅ true      	0 >= 0
null == 0       	❌ false	    special rule


🔹 Boolean Conversions

Expression	    Result 	    Why
true == 1	    ✅ true     	true → 1
false == 0	    ✅ true  	false → 0
true === 1	    ❌ false	  boolean vs number


🔹 String Comparisons (Lexicographic)

Expression	        Result	            Why
"apple" < "banana"	✅ true	       dictionary order
"2" < "12"	      ❌ false	    "2" > "1" (first character comparison)
"10" < "2"	        ✅ true         	"1" < "2"


🔹 Objects & Arrays

Expression	    Result	             Why
{} == {}	    ❌ false    	different references
[] == []	    ❌ false	      different references
obj == obj	    ✅ true	       same reference
[1,2] == "1,2"	✅ true	    array → string "1,2"


🏆 Golden Rules

Prefer === over == (avoid weird type coercions).

null and undefined → equal only to each other (null == undefined).

Objects/arrays → compared by reference, not by content.

Strings compare lexicographically, not numerically.

*/

console.log(5 == "5"); // true
