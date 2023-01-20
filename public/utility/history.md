# history

> GNU History Library

- type history
- help history

## view

- history
- history 5

## execution (hash/bang)

- !str (Execute the most recent command that begins with string.)
- !num (Execute command that is number num in the command history.)
- !-n (Execute the command was run num commands previous in the history.)
- !! (Execute the previous (most recently-executed) command.)
- !$ (Execute the previous (most recently-executed) command.)
- ^str01^str02 (Repeat the previous command executed, replacing string1 with string2. The previous command must contain string1.)

## append

- history -a (append history lines from this session to the history file)
- cat .bash_history

## clear

- history -c (clear the history list by deleting all of the entries)
- history -d offset (delete the history entry at position offset)

- 0>.bash_history (.bash_history 파일 삭제)
- cat .bash_history

## statistics

- history | awk '{a[$2]++}END{for(i in a){print a[i] " " i}}' | sort -rn | head -10

---

## hash

> hash database access method

- hash
- hash -r (forget all remembered locations)
- hash -t ls (print the remembered location of each NAME)
