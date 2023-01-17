# User

## adduser

- adduser manager

## useradd

- useradd [-mcdefP] manager
- useradd -m manager (create home directory)
- useradd -m -s /bin/bash manager (login shell of the new account)
- useradd -m -c comment manager (create home directory)
- useradd manager -d /home/manager_dir (사용자의 홈 디렉토리 지정)
- useradd -g users username (사용자 그룹의 UID 지정)
- useradd -e 2022-12-30 -m user (사용자의 계정 만기일 지정)
