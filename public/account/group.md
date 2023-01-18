# group

## Group list

- cat /etc/group
- cat /etc/group | grep bt
- grep bt /etc/group

## groups (print the groups a user is in)

- 현재 사용자가 속해 있는 그룹을 확인
- groups
- groups root
- groups manager
- nl /etc/group | awk -F: '{print $1}'
- nl /etc/gshadow (그룹 암호 설정 정보을 갖고 있다.)

- nl /etc/group | grep sudo
