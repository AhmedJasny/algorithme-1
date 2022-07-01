//*First Solution*//

Run a loop for I in range 0 to n - 1
   Run a loop for j in range 0 to i
      If j == i, add A[i]
           If A[i] is equal to A[j], break out from this loop
Return

//*Second Solution*//
Declare a hash table.
 Run a loop for I in range 0 to n - 1
    If A[i] is not present in the hash table, then add it and insert it in the hash table
    If A[i] is not present in the hash table then skip it
  Return