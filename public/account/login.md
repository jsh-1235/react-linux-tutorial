# login

## login file

> ### /var/log/wtmp

- 시스템에 접속하는 사용자들의 로그인 정보를 ASCII 파일 형태로 저장하고 있는 로그 파일이다.
- last
  - Login 정보
  - Rebooting 정보

> ### /var/log/lastlog

- 시스템의 모든 사용자가 접속한 최근 접속 정보를 저장하고 있는 파일이다.
- lastlog
  - /etc/passwd 파일에 정의되어 있는 모든 사용자 계정의 최근의 접속 정보를 확인할 수 있다.

> ### /var/log/utmp

- 현재 시스템에 로그인한 사용자의 상태 정보를 저장한다.
- w, who, users, whoami, w am i, logname

> ### /var/log/btmp

- 실패한 로그인 정보를 기록한다.
- lastb

> ### /var/log/secure

- ssh, telnet, su 등의 로그인 인증 기록을 저정한다.

> ### /var/log/cron

- cron 데몬은 백그라운드에서 crontab 파일을 읽고 일정에 따라 작업을 수행한다.
- 작업시 기록되는 로그는 cron 작업을 디버깅하고 감사하는 데 유용하다.
- crontab -l
  - list user's crontab

## w

> Show who is logged on and what they are doing.

- w
- w -h (do not print header)
- w -f (show remote hostname field)
- w -s (short format)
- w -o (old style output)

## who

> Show who is logged on.

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
> Print the user names of users currently logged in to the current host.

- users

## id

> Print user and group information for each specified USER or (when USER omitted) for the current user.
>
> print real and effective user and group IDs.

- id
- id -u
- id -g
- id -u manager
- id -gn manager
- id -Gn

## last (show a listing of last logged in users)

> Show a listing of last logged in users.

- last
- last -n 5
- last jsh
- last -a (display hostnames in the last column)
- last -d (translate the IP number back into a hostname)
- last -R (don't display the hostname field)
- last -t 20230118000000(display the lines until the specified time)

---

- last manager | less -N
- last manager | grep pts/\* | wc -l

- sudo find /var -name wtmp
- sudo cat /var/log/wtmp
- touch /var/log/wtmp

## lastlog

> Reports the most recent login of all users or of a given user.

- lastlog
- lastlog -u jsh

## lastb

> show a listing of last logged in users

- lastb
- lastb -a (display the hostname in the last column.)
- lastb -d (translate the IP number back into a hostname)
- lastb -f /var/log/wtmp (use a specific file instead of /var/log/btmp)

## login

> begin session on the system

- login
  - su - manager
  - su --login manager
- logout
  - exit
  - logout

## su

> run a command with substitute user and group ID

- su (Switch user or substitute user)
  - 현재의 사용자 계정에서 로그아웃하지 않고 다른 사용자 계정으로 로그인하여 해당 사용자의 권한을 획득하는 명령어이다.
- su root
  - root 계정의 환경 변수를 사용하지 않고, 현재 계정의 환경 변수를 사용하여 로그인한다.
- su - root
- su - (생략)
  - root 계정의 환경 변수를 사용하여 로그인하기 때문에 root 디렉토리로 이동한다.

## sudo

> execute a command as another user

- sudo (substitute user do)
- sudo -i
  - Log in as the root user.
- sudo -l
  - list user's privileges or check a specific command
- sudo -u
  - run command (or edit file) as specified user name or ID
  - sudo -u manager touch manager-file
  - sudo -u manager rm -rf manager-file
  - sudo rm -r manager-file
  - sudo -u root rm root-file
  - sudo -u jsh rm jsh-file
