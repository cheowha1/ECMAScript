# Base Image
FROM nginx:latest

# 이미지 매타데이터
LABEL maintainer="HMKDT7 <ehfdkdhswjatla12@gmail.com>"
LABEL description="이것은 nginx로 정적 웹 배포 연습을 위한 이미지입니다."

# 컨텐츠를 제공 가능하게 복사
COPY . /usr/share/nginx/html

# 외부로 노출할 포트
# -p 옵션
EXPOSE 80

# 컨테이너 시작시 수행할 명령어
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
# ENTRYPOING + CMD 조합

# volume 마운트

# network 연결

# 실행 스크립트

