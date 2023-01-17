# login

## w (Show who is logged on and what they are doing.)

- 접속한 사용자 정보 보기
- w
- w -h (do not print header)
- w -f (show remote hostname field)
- w -s (short format)
- w -o (old style output)

## who (show who is logged on)

- 현재 시스템에 로그인한 모든 사용자를 출력
- who
- who -H (헤더라인 출력)
- who -m (whoami)
- who -q (로그인명과 로그인한 횟수 출력)

## logname (print user´s login name)

- logname (시스템에 로그인한 사용자명 출력)

## whoami (print effective userid)

- 현재 시스템을 사용하고 있는 자신이 누구인지 확인
- whoami
- Print the user name associated with the current effective user ID. Same as id -un.

## who am i (show who is logged on)

- 'whoami' 명령어 보다 더 상세하게 정보를 보여준다.
- who am i
- who am i -aH

## users (print the user names of users currently logged in to the current host)

- 시스템 로그인한 사용자 정보를 출력하는 명령어이다.
- users

## id (print real and effective user and group IDs)

- id
- id -u
- id -g

- id [-Ggun] manager
- id -u manager
- id -gn manager
