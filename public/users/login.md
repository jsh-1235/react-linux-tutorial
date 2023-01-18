# login

## w

> ### Show who is logged on and what they are doing.

- w
- w -h (do not print header)
- w -f (show remote hostname field)
- w -s (short format)
- w -o (old style output)

## who

> ### show who is logged on

- who
- who -H (print line of column headings)
- who -m (only hostname and user associated with stdin)
- who -q (all login names and number of users logged on)

## logname

> Print the name of the current user.

- logname

## whoami

> Print the user name associated with the current effective user ID.

- whoami

## who am i

> Print information about users who are currently logged in.

- who am i
- who am i -aH

## users

> Output who is currently logged in according to FILE.
>
> print the user names of users currently logged in to the current host

- users

## id

> Print user and group information for each specified USER or (when USER omitted) for the current user
>
> print real and effective user and group IDs

- id
- id -u
- id -g
- id -u manager
- id -gn manager
- id -Gn
